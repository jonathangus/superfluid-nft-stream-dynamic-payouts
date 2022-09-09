/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISuperfluidGovernance,
  ISuperfluidGovernanceInterface,
} from "../ISuperfluidGovernance";

const _abi = [
  {
    inputs: [],
    name: "SF_GOV_ARRAYS_NOT_SAME_LENGTH",
    type: "error",
  },
  {
    inputs: [],
    name: "SF_GOV_INVALID_LIQUIDATION_OR_PATRICIAN_PERIOD",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperToken[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "batchUpdateSuperTokenLogic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperfluidToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "clearConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperfluidToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getConfigAsAddress",
    outputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperfluidToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getConfigAsUint256",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "address",
        name: "agreementClass",
        type: "address",
      },
    ],
    name: "registerAgreementClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "address",
        name: "newGov",
        type: "address",
      },
    ],
    name: "replaceGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperfluidToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract ISuperfluidToken",
        name: "superToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "address",
        name: "hostNewLogic",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "agreementClassNewLogics",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "superTokenFactoryNewLogic",
        type: "address",
      },
    ],
    name: "updateContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISuperfluidGovernance__factory {
  static readonly abi = _abi;
  static createInterface(): ISuperfluidGovernanceInterface {
    return new utils.Interface(_abi) as ISuperfluidGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISuperfluidGovernance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISuperfluidGovernance;
  }
}
