import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber, Contract } from 'ethers';
import { ethers, web3 } from 'hardhat';
import { Cashflow } from 'web3-config';
import {
  Framework,
  SuperToken,
  WrapperSuperToken,
} from '@superfluid-finance/sdk-core';
import _ethers from 'ethers';
// @ts-ignore
import deployFramework from '@superfluid-finance/ethereum-contracts/scripts/deploy-framework';
// @ts-ignore
import deployTestToken from '@superfluid-finance/ethereum-contracts/scripts/deploy-test-token';
// @ts-ignore
import deploySuperToken from '@superfluid-finance/ethereum-contracts/scripts/deploy-super-token';
import traveler from 'ganache-time-traveler';

const daiABI = [
  'function mint(address to,uint256 amount) returns (bool)',
  'function approve(address,uint256) returns (bool)',
];
const TEST_TRAVEL_TIME = 3600 * 2; // 1 hours
const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
const errorHandler = (err: Error) => {
  if (err) {
    throw err;
  }
};

const flow = '100000000';
describe.skip('Cashflow Test', function () {
  let cashflow: Cashflow;

  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];
  let sf: Framework;
  let daix: WrapperSuperToken;
  let dai: Contract;

  async function netFlowRate(user: any) {
    const flow = await sf.cfaV1.getNetFlow({
      superToken: daix.address,
      account: user.address,
      providerOrSigner: owner,
    });
    return flow;
  }

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    if (!owner.provider) {
      return;
    }

    await deployFramework(errorHandler, {
      web3,
      from: owner.address,
    });

    //deploy a fake erc20 token
    await deployTestToken(errorHandler, [':', 'fDAI'], {
      web3,
      from: owner.address,
    });

    //deploy a fake erc20 wrapper super token around the fDAI token
    await deploySuperToken(errorHandler, [':', 'fDAI'], {
      web3,
      from: owner.address,
    });

    sf = await Framework.create({
      provider: owner.provider,
      chainId: 31337,
      resolverAddress: process.env.RESOLVER_ADDRESS, //this is how you get the resolver address
      protocolReleaseVersion: 'test',
    });

    daix = (await sf.loadSuperToken('fDAIx')) as WrapperSuperToken;

    const CashflowContract = await ethers.getContractFactory('Cashflow');
    cashflow = (await CashflowContract.deploy(
      sf.settings.config.hostAddress,
      daix.address
      //   ethers.utils.parseEther('0.0001')
    )) as Cashflow;
    await cashflow.deployed();

    //get the contract object for the erc20 token
    let daiAddress = daix.underlyingToken?.address || '';
    dai = new ethers.Contract(daiAddress, daiABI, owner);
    await dai
      .connect(owner)
      .mint(owner.address, ethers.utils.parseEther('1000'));

    await dai
      .connect(owner)
      .approve(daix.address, ethers.utils.parseEther('1000'));

    const daixUpgradeOperation = daix.upgrade({
      amount: ethers.utils.parseEther('1000').toString(),
    });

    await daixUpgradeOperation.exec(owner);
  });

  describe('deployment', async () => {
    it('create flow', async () => {
      console.log('create flow...', flow);
      const createFlowOperation = sf.cfaV1.createFlow({
        receiver: cashflow.address,
        superToken: daix.address,
        flowRate: '100000000',
      });
      const txn = await createFlowOperation.exec(owner);
      await txn.wait();

      console.log('go forward in time');
      await traveler.advanceTimeAndBlock(TEST_TRAVEL_TIME);
      const balance = await daix.balanceOf({
        account: cashflow.address,
        providerOrSigner: owner,
      });
      console.log('daix bal after flow: ', balance);

      // key action - NFT is issued to alice w flowrate
      await cashflow.issueNFT(
        addr1.address,
        // ethers.utils.parseEther('0.00000001'),
        '1000000',
        [0]
      );

      await cashflow.updateHolder(NULL_ADDRESS, addr1.address, 0);

      await cashflow.issueNFT(
        addr1.address,
        // ethers.utils.parseEther('0.00000001'),
        '1000000',
        [1]
      );

      await cashflow.updateHolder(NULL_ADDRESS, addr1.address, 1);

      let addr1Flow = await netFlowRate(addr1);
      const adminFlowRate = await netFlowRate(owner);
      await traveler.advanceTimeAndBlock(TEST_TRAVEL_TIME);
      console.log('addr1Flowflow: ', addr1Flow);

      await cashflow.updateHolder(addr1.address, addr2.address, 1);
      await cashflow.updateHolder(addr1.address, addr2.address, 0);

      await traveler.advanceTimeAndBlock(TEST_TRAVEL_TIME);
      addr1Flow = await netFlowRate(addr1);
      const addr2Flow = await netFlowRate(addr2);
      console.log('addr1Flowflow: ', addr1Flow);
      console.log('addr2Flow: ', addr2Flow);

      //   console.log('change 1');

      //   await cashflow._changeReceiver(addr1.address, 1);
    });
  });
});
