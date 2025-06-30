import type { DecodeEventLogReturnType } from 'viem';

import type { EulerSwapAbi } from '@lib/abis/euler-swap.abi';

export type EulerPoolParams = {
  vault0: `0x${string}`;
  vault1: `0x${string}`;
  eulerAccount: `0x${string}`;
  equilibriumReserve0: bigint;
  equilibriumReserve1: bigint;
  priceX: bigint;
  priceY: bigint;
  concentrationX: bigint;
  concentrationY: bigint;
  fee: bigint;
  protocolFee: bigint;
  protocolFeeRecipient: `0x${string}`;
  asset0: `0x${string}`;
  asset1: `0x${string}`;

  currentReserve0: bigint; // uint112
  currentReserve1: bigint; // uint112
  lastUpdateTimestamp: number; // uint32
};

export type EulerPoolDetail = EulerPoolParams & {
  address: `0x${string}`;
};

export type EulerPoolSwapEvent = DecodeEventLogReturnType<
  typeof EulerSwapAbi,
  'Swap'
>;

export type EulerPoolSwapInfo = EulerPoolSwapEvent['args'] & {
  blockNumber: bigint;
  transactionHash: `0x${string}`;
  timestamp?: number;
};
