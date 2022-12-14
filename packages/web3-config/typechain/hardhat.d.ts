/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IL1CrossDomainMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL1CrossDomainMessenger__factory>;
    getContractFactory(
      name: "L1CrossDomainMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1CrossDomainMessenger__factory>;
    getContractFactory(
      name: "ICanonicalTransactionChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICanonicalTransactionChain__factory>;
    getContractFactory(
      name: "IChainStorageContainer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChainStorageContainer__factory>;
    getContractFactory(
      name: "IStateCommitmentChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStateCommitmentChain__factory>;
    getContractFactory(
      name: "ICrossDomainMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossDomainMessenger__factory>;
    getContractFactory(
      name: "LibAddressManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibAddressManager__factory>;
    getContractFactory(
      name: "LibAddressResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibAddressResolver__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "SuperAppBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SuperAppBase__factory>;
    getContractFactory(
      name: "IConstantFlowAgreementV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConstantFlowAgreementV1__factory>;
    getContractFactory(
      name: "SuperfluidErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SuperfluidErrors__factory>;
    getContractFactory(
      name: "ISuperAgreement",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperAgreement__factory>;
    getContractFactory(
      name: "ISuperApp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperApp__factory>;
    getContractFactory(
      name: "ISuperfluid",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperfluid__factory>;
    getContractFactory(
      name: "ISuperfluidGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperfluidGovernance__factory>;
    getContractFactory(
      name: "ISuperfluidToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperfluidToken__factory>;
    getContractFactory(
      name: "ISuperToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperToken__factory>;
    getContractFactory(
      name: "ISuperTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperTokenFactory__factory>;
    getContractFactory(
      name: "ERC20WithTokenInfo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WithTokenInfo__factory>;
    getContractFactory(
      name: "TokenInfo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenInfo__factory>;
    getContractFactory(
      name: "Cashflow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Cashflow__factory>;
    getContractFactory(
      name: "MyNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyNFT__factory>;

    getContractAt(
      name: "IL1CrossDomainMessenger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL1CrossDomainMessenger>;
    getContractAt(
      name: "L1CrossDomainMessenger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1CrossDomainMessenger>;
    getContractAt(
      name: "ICanonicalTransactionChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICanonicalTransactionChain>;
    getContractAt(
      name: "IChainStorageContainer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IChainStorageContainer>;
    getContractAt(
      name: "IStateCommitmentChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStateCommitmentChain>;
    getContractAt(
      name: "ICrossDomainMessenger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossDomainMessenger>;
    getContractAt(
      name: "LibAddressManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibAddressManager>;
    getContractAt(
      name: "LibAddressResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibAddressResolver>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC777",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "SuperAppBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SuperAppBase>;
    getContractAt(
      name: "IConstantFlowAgreementV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConstantFlowAgreementV1>;
    getContractAt(
      name: "SuperfluidErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SuperfluidErrors>;
    getContractAt(
      name: "ISuperAgreement",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperAgreement>;
    getContractAt(
      name: "ISuperApp",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperApp>;
    getContractAt(
      name: "ISuperfluid",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperfluid>;
    getContractAt(
      name: "ISuperfluidGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperfluidGovernance>;
    getContractAt(
      name: "ISuperfluidToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperfluidToken>;
    getContractAt(
      name: "ISuperToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperToken>;
    getContractAt(
      name: "ISuperTokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperTokenFactory>;
    getContractAt(
      name: "ERC20WithTokenInfo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20WithTokenInfo>;
    getContractAt(
      name: "TokenInfo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenInfo>;
    getContractAt(
      name: "Cashflow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Cashflow>;
    getContractAt(
      name: "MyNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyNFT>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
