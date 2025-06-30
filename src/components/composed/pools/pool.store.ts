import { parseUnits } from 'viem';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export type PoolParams = {
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
};

export type StorePoolParams = {
  vault0: `0x${string}` | null;
  vault1: `0x${string}` | null;
  eulerAccount: `0x${string}` | null;

  equilibriumReserve0: bigint | null;
  equilibriumReserve1: bigint | null;
  priceX: bigint | null;
  priceY: bigint | null;

  concentrationX: bigint | null;
  concentrationY: bigint | null;

  fee: bigint | null;
  protocolFee: bigint | null;
  protocolFeeRecipient: `0x${string}` | null;
};

export type PoolState = {
  poolAddress: `0x${string}` | null;
  asset0: `0x${string}` | null;
  asset1: `0x${string}` | null;
  amount0: string;
  amount1: string;
  params: StorePoolParams;
  currentReserve0: bigint | null;
  currentReserve1: bigint | null;
  lastChangedAmount: 'amount0' | 'amount1' | null;

  setPoolAddress: (poolAddress: `0x${string}` | null) => void;
  setPoolParams: (params: StorePoolParams) => void;
  setVault0: (vault0: `0x${string}` | null) => void;
  setVault1: (vault1: `0x${string}` | null) => void;
  setAsset0: (asset0: `0x${string}` | null) => void;
  setAsset1: (asset1: `0x${string}` | null) => void;
  setAmount0: (amount0: string) => void;
  setAmount1: (amount1: string) => void;
  setPoolParam: <K extends keyof StorePoolParams>(
    param: K,
    value: StorePoolParams[K]
  ) => void;
  setCurrentReserve0: (currentReserve0: bigint | null) => void;
  setCurrentReserve1: (currentReserve1: bigint | null) => void;
  setLastChangedAmount: (
    lastChangedAmount: 'amount0' | 'amount1' | null
  ) => void;
};

export const usePoolStore = create<PoolState>()((set, get) => ({
  poolAddress: null,
  asset0: null,
  asset1: null,
  amount0: '',
  amount1: '',
  currentReserve0: null,
  currentReserve1: null,
  lastChangedAmount: null,
  params: {
    vault0: null,
    vault1: null,
    eulerAccount: null,

    equilibriumReserve0: null,
    equilibriumReserve1: null,
    priceX: null,
    priceY: null,

    concentrationX: parseUnits('0.9', 18),
    concentrationY: parseUnits('0.9', 18),

    fee: null,
    protocolFee: null,
    protocolFeeRecipient: null
  },

  setPoolAddress: (poolAddress: `0x${string}` | null) => set({ poolAddress }),
  setPoolParams: (params: StorePoolParams) => set({ params }),
  setAsset0: (asset0: `0x${string}` | null) => set({ asset0 }),
  setAsset1: (asset1: `0x${string}` | null) => set({ asset1 }),
  setAmount0: (amount0: string) => set({ amount0 }),
  setAmount1: (amount1: string) => set({ amount1 }),
  setVault0: (vault0: `0x${string}` | null) => {
    const { params } = get();
    set({
      params: {
        ...params,
        vault0: vault0
      }
    });
  },
  setVault1: (vault1: `0x${string}` | null) => {
    const { params } = get();
    set({
      params: {
        ...params,
        vault1: vault1
      }
    });
  },
  setPoolParam: <K extends keyof StorePoolParams>(
    param: K,
    value: StorePoolParams[K]
  ) => {
    set((state) => ({
      params: {
        ...state.params,
        [param]: value
      }
    }));
  },
  setCurrentReserve0: (currentReserve0: bigint | null) =>
    set({ currentReserve0: currentReserve0 }),
  setCurrentReserve1: (currentReserve1: bigint | null) =>
    set({ currentReserve1: currentReserve1 }),
  setLastChangedAmount: (lastChangedAmount: 'amount0' | 'amount1' | null) =>
    set({ lastChangedAmount: lastChangedAmount })
}));

export const usePoolParams = () =>
  usePoolStore(useShallow((state) => state.params));
export const usePoolAssets = () =>
  usePoolStore(
    useShallow((state) => ({
      asset0: state.asset0,
      asset1: state.asset1
    }))
  );
export const usePoolAddress = () =>
  usePoolStore(useShallow((state) => state.poolAddress));

export const usePoolActions = () =>
  usePoolStore(
    useShallow((state) => ({
      setPoolParams: state.setPoolParams,
      setPoolParam: state.setPoolParam,
      setPoolAddress: state.setPoolAddress,
      setVault0: state.setVault0,
      setVault1: state.setVault1,
      setAsset0: state.setAsset0,
      setAsset1: state.setAsset1,
      setAmount0: state.setAmount0,
      setAmount1: state.setAmount1,
      setCurrentReserve0: state.setCurrentReserve0,
      setCurrentReserve1: state.setCurrentReserve1,
      setLastChangedAmount: state.setLastChangedAmount
    }))
  );

export const useVault0Store = () =>
  usePoolStore(
    useShallow((state) => ({
      amount0: state.amount0,
      vault0: state.params.vault0,
      asset0: state.asset0,
      setVault0: state.setVault0,
      setAsset0: state.setAsset0,
      setAmount0: state.setAmount0
    }))
  );

export const useVault1Store = () =>
  usePoolStore(
    useShallow((state) => ({
      amount1: state.amount1,
      vault1: state.params.vault1,
      asset1: state.asset1,
      setVault1: state.setVault1,
      setAsset1: state.setAsset1,
      setAmount1: state.setAmount1
    }))
  );

export const usePoolParamActions = () =>
  usePoolStore(
    useShallow((state) => ({
      setPoolParam: state.setPoolParam
    }))
  );

export const usePoolCurrentReserve = () =>
  usePoolStore(
    useShallow((state) => ({
      currentReserve0: state.currentReserve0,
      currentReserve1: state.currentReserve1,
      setCurrentReserve0: state.setCurrentReserve0,
      setCurrentReserve1: state.setCurrentReserve1
    }))
  );
