import { formatUnits } from 'viem';

import { Card } from '@ui/card';

import { SwapTokenButton } from '@composed/swap/swap-token-button';
import { useSwapActions, useSwapTokenToData } from '@composed/swap/swap.store';

import {
  useTokenBalance,
  useTokenDecimals,
  useTokenSymbol
} from '@lib/hooks/token.hook';

export function SwapCardTokenTo() {
  const { toAmount, tokenTo, setToAmount, setTokenTo } = useSwapTokenToData();
  const { setPoolAddress } = useSwapActions();

  const tokenDecimals = useTokenDecimals(tokenTo || undefined);
  const symbol = useTokenSymbol(tokenTo || undefined);
  const { data: rawTokenBalance } = useTokenBalance(tokenTo || undefined);

  const tokenBalance = rawTokenBalance
    ? formatUnits(rawTokenBalance, tokenDecimals || 18)
    : null;

  return (
    <Card className='px-6'>
      <div className='mb-3 flex justify-between'>
        <input
          readOnly
          type='number'
          placeholder='0'
          value={toAmount}
          onChange={(e) => setToAmount(e.target.value)}
          className='h-auto w-full [appearance:textfield] bg-transparent p-0 text-4xl font-bold focus-visible:ring-0 focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        />
        <SwapTokenButton
          token={tokenTo}
          onTokenSelect={(token) => {
            setTokenTo(token);
            setPoolAddress(null);
          }}
        />
      </div>
      <div className='flex items-center justify-between opacity-80'>
        <div className='text-xs'>
          {Boolean(tokenBalance) && `Balance: ${tokenBalance} ${symbol}`}
        </div>
      </div>
    </Card>
  );
}
