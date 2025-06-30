import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';

export type SwapState = {
  tokenFrom: `0x${string}` | null;
  tokenTo: `0x${string}` | null;
  fromAmount: string;
  toAmount: string;
  slippage: number;
  quoteError: string | null;
  isCalculating: boolean;
  poolAddress: `0x${string}` | null;

  setTokenFrom: (token: `0x${string}` | null) => void;
  setTokenTo: (token: `0x${string}` | null) => void;
  setFromAmount: (amount: string) => void;
  setToAmount: (amount: string) => void;
  setSlippage: (slippage: number) => void;
  setQuoteError: (error: string) => void;
  setIsCalculating: (isCalculating: boolean) => void;
  setPoolAddress: (poolAddress: `0x${string}` | null) => void;
  setNewSwap: (
    poolAddress: `0x${string}`,
    tokenFrom: `0x${string}`,
    tokenTo: `0x${string}`
  ) => void;
  resetSwapState: () => void;
  swapTokens: () => void;
};

const initialState = {
  tokenFrom: null,
  tokenTo: null,
  fromAmount: '',
  toAmount: '',
  slippage: 0.05,
  quoteError: null,
  isCalculating: false,
  poolAddress: null
};

export const useSwapStore = create<SwapState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setTokenFrom: (tokenFrom) => set({ tokenFrom }),
      setTokenTo: (tokenTo) => set({ tokenTo }),
      setFromAmount: (fromAmount) => set({ fromAmount }),
      setToAmount: (toAmount) => set({ toAmount }),
      setSlippage: (slippage) => set({ slippage }),
      setQuoteError: (error: string) => set({ quoteError: error }),
      setIsCalculating: (isCalculating: boolean) => set({ isCalculating }),
      setPoolAddress: (poolAddress: `0x${string}` | null) =>
        set({ poolAddress }),
      setNewSwap: (
        poolAddress: `0x${string}`,
        tokenFrom: `0x${string}`,
        tokenTo: `0x${string}`
      ) => {
        set({
          poolAddress,
          tokenFrom,
          tokenTo,
          fromAmount: '',
          toAmount: '',
          quoteError: null,
          isCalculating: false
        });
      },
      resetSwapState: () => {
        set(initialState);
      },
      swapTokens: () => {
        const { tokenFrom, tokenTo, fromAmount, toAmount } = get();
        set({
          tokenFrom: tokenTo,
          tokenTo: tokenFrom,
          fromAmount: toAmount,
          toAmount: fromAmount
        });
      }
    }),
    {
      name: 'euler-swap-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        slippage: state.slippage
      })
    }
  )
);

// Hooks for accessing state values using useShallow
export const useSwapSlippage = () =>
  useSwapStore(useShallow((state) => state.slippage));

export const useSwapTokenToData = () =>
  useSwapStore(
    useShallow(({ toAmount, tokenTo, setTokenTo, setToAmount }) => ({
      toAmount,
      tokenTo,
      setTokenTo,
      setToAmount
    }))
  );

export const useSwapTokenFromData = () =>
  useSwapStore(
    useShallow(({ fromAmount, tokenFrom, setTokenFrom, setFromAmount }) => ({
      fromAmount,
      tokenFrom,
      setTokenFrom,
      setFromAmount
    }))
  );

// Hooks for accessing setter functions
export const useResetSwapState = () =>
  useSwapStore((state) => state.resetSwapState);
export const useSwapTokens = () => useSwapStore((state) => state.swapTokens);

// Hook to get all actions using useShallow
export const useSwapActions = () =>
  useSwapStore(
    useShallow((state) => ({
      setTokenFrom: state.setTokenFrom,
      setTokenTo: state.setTokenTo,
      setFromAmount: state.setFromAmount,
      setToAmount: state.setToAmount,
      setSlippage: state.setSlippage,
      setQuoteError: state.setQuoteError,
      setIsCalculating: state.setIsCalculating,
      resetSwapState: state.resetSwapState,
      swapTokens: state.swapTokens,
      setPoolAddress: state.setPoolAddress,
      setNewSwap: state.setNewSwap
    }))
  );

// Hook to get all data using useShallow
export const useSwapData = () =>
  useSwapStore(
    useShallow((state) => ({
      tokenFrom: state.tokenFrom,
      tokenTo: state.tokenTo,
      fromAmount: state.fromAmount,
      toAmount: state.toAmount,
      slippage: state.slippage,
      quoteError: state.quoteError,
      isCalculating: state.isCalculating,
      poolAddress: state.poolAddress
    }))
  );

export const useSwapPoolAddress = () =>
  useSwapStore(useShallow((state) => state.poolAddress));
