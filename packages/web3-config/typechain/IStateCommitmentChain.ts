/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace LibOVMCodec {
  export type ChainBatchHeaderStruct = {
    batchIndex: BigNumberish;
    batchRoot: BytesLike;
    batchSize: BigNumberish;
    prevTotalElements: BigNumberish;
    extraData: BytesLike;
  };

  export type ChainBatchHeaderStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    batchIndex: BigNumber;
    batchRoot: string;
    batchSize: BigNumber;
    prevTotalElements: BigNumber;
    extraData: string;
  };

  export type ChainInclusionProofStruct = {
    index: BigNumberish;
    siblings: BytesLike[];
  };

  export type ChainInclusionProofStructOutput = [BigNumber, string[]] & {
    index: BigNumber;
    siblings: string[];
  };
}

export interface IStateCommitmentChainInterface extends utils.Interface {
  contractName: "IStateCommitmentChain";
  functions: {
    "appendStateBatch(bytes32[],uint256)": FunctionFragment;
    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))": FunctionFragment;
    "getLastSequencerTimestamp()": FunctionFragment;
    "getTotalBatches()": FunctionFragment;
    "getTotalElements()": FunctionFragment;
    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))": FunctionFragment;
    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "appendStateBatch",
    values: [BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteStateBatch",
    values: [LibOVMCodec.ChainBatchHeaderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastSequencerTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalElements",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insideFraudProofWindow",
    values: [LibOVMCodec.ChainBatchHeaderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyStateCommitment",
    values: [
      BytesLike,
      LibOVMCodec.ChainBatchHeaderStruct,
      LibOVMCodec.ChainInclusionProofStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "appendStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastSequencerTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalElements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insideFraudProofWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyStateCommitment",
    data: BytesLike
  ): Result;

  events: {
    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes)": EventFragment;
    "StateBatchDeleted(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StateBatchAppended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateBatchDeleted"): EventFragment;
}

export type StateBatchAppendedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string],
  {
    _batchIndex: BigNumber;
    _batchRoot: string;
    _batchSize: BigNumber;
    _prevTotalElements: BigNumber;
    _extraData: string;
  }
>;

export type StateBatchAppendedEventFilter =
  TypedEventFilter<StateBatchAppendedEvent>;

export type StateBatchDeletedEvent = TypedEvent<
  [BigNumber, string],
  { _batchIndex: BigNumber; _batchRoot: string }
>;

export type StateBatchDeletedEventFilter =
  TypedEventFilter<StateBatchDeletedEvent>;

export interface IStateCommitmentChain extends BaseContract {
  contractName: "IStateCommitmentChain";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStateCommitmentChainInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteStateBatch(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSequencerTimestamp: BigNumber }>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSequencerTimestamp: BigNumber }>;

    getTotalBatches(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalBatches: BigNumber }>;

    "getTotalBatches()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalBatches: BigNumber }>;

    getTotalElements(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalElements: BigNumber }>;

    "getTotalElements()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalElements: BigNumber }>;

    insideFraudProofWindow(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _inside: boolean }>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _inside: boolean }>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _verified: boolean }>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _verified: boolean }>;
  };

  appendStateBatch(
    _batch: BytesLike[],
    _shouldStartAtElement: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "appendStateBatch(bytes32[],uint256)"(
    _batch: BytesLike[],
    _shouldStartAtElement: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteStateBatch(
    _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
    _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "getLastSequencerTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalBatches()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalElements()"(overrides?: CallOverrides): Promise<BigNumber>;

  insideFraudProofWindow(
    _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
    _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyStateCommitment(
    _element: BytesLike,
    _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
    _proof: LibOVMCodec.ChainInclusionProofStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
    _element: BytesLike,
    _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
    _proof: LibOVMCodec.ChainInclusionProofStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteStateBatch(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatches()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalElements()"(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes)"(
      _batchIndex?: BigNumberish | null,
      _batchRoot?: null,
      _batchSize?: null,
      _prevTotalElements?: null,
      _extraData?: null
    ): StateBatchAppendedEventFilter;
    StateBatchAppended(
      _batchIndex?: BigNumberish | null,
      _batchRoot?: null,
      _batchSize?: null,
      _prevTotalElements?: null,
      _extraData?: null
    ): StateBatchAppendedEventFilter;

    "StateBatchDeleted(uint256,bytes32)"(
      _batchIndex?: BigNumberish | null,
      _batchRoot?: null
    ): StateBatchDeletedEventFilter;
    StateBatchDeleted(
      _batchIndex?: BigNumberish | null,
      _batchRoot?: null
    ): StateBatchDeletedEventFilter;
  };

  estimateGas: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteStateBatch(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatches()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalElements()"(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appendStateBatch(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "appendStateBatch(bytes32[],uint256)"(
      _batch: BytesLike[],
      _shouldStartAtElement: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteStateBatch(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLastSequencerTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalBatches()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalElements(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalElements()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insideFraudProofWindow(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes))"(
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyStateCommitment(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes),(uint256,bytes32[]))"(
      _element: BytesLike,
      _batchHeader: LibOVMCodec.ChainBatchHeaderStruct,
      _proof: LibOVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
