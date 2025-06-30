import { type ReactNode, useCallback } from 'react';
import { formatUnits } from 'viem';

import { Button } from '@ui/button';
import { Card } from '@ui/card';

import { SwapTokenButton } from '@composed/swap/swap-token-button';
import {
  useSwapActions,
  useSwapTokenFromData
} from '@composed/swap/swap.store';

import {
  useTokenBalance,
  useTokenDecimals,
  useTokenSymbol
} from '@lib/hooks/token.hook';

export function SwapCardTokenFrom() {
  const { tokenFrom, fromAmount, setFromAmount, setTokenFrom } =
    useSwapTokenFromData();
  const { setPoolAddress } = useSwapActions();

  const tokenDecimals = useTokenDecimals(tokenFrom || undefined);
  const symbol = useTokenSymbol(tokenFrom || undefined);
  const { data: rawTokenBalance } = useTokenBalance(tokenFrom || undefined);

  const tokenBalance = rawTokenBalance
    ? formatUnits(rawTokenBalance, tokenDecimals || 18)
    : 0;

  const fromPercentageButtonDisabled =
    !tokenBalance || Number(tokenBalance) <= 0;

  const onFromPercentageButtonClick = useCallback(
    async (percentage: number) => {
      if (!tokenBalance) return;

      const maxAmount = (percentage / 100) * Number(tokenBalance);

      setFromAmount(maxAmount.toString());
    },
    [tokenBalance, setFromAmount]
  );

  return (
    <Card className='px-6'>
      <div className='mb-3 flex justify-between'>
        <input
          type='number'
          placeholder='0'
          value={fromAmount}
          onChange={(e) => setFromAmount(e.target.value)}
          className='h-auto w-full [appearance:textfield] bg-transparent p-0 text-4xl font-bold focus-visible:ring-0 focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        />
        <SwapTokenButton
          token={tokenFrom}
          onTokenSelect={(token) => {
            setTokenFrom(token);
            setPoolAddress(null);
          }}
        />
      </div>
      <div className='flex items-center justify-between opacity-80'>
        <div className='text-xs'>
          {Boolean(
            typeof rawTokenBalance === 'bigint' && rawTokenBalance >= 0n
          ) && `Balance: ${tokenBalance} ${symbol}`}
        </div>
        <div className='flex'>
          <SetAmountButton
            disabled={fromPercentageButtonDisabled}
            onClick={() => onFromPercentageButtonClick(25)}
          >
            25%
          </SetAmountButton>
          <SetAmountButton
            disabled={fromPercentageButtonDisabled}
            onClick={() => onFromPercentageButtonClick(50)}
          >
            50%
          </SetAmountButton>
          <SetAmountButton
            disabled={fromPercentageButtonDisabled}
            onClick={() => onFromPercentageButtonClick(75)}
          >
            75%
          </SetAmountButton>
          <SetAmountButton
            disabled={fromPercentageButtonDisabled}
            onClick={() => onFromPercentageButtonClick(100)}
          >
            MAX
          </SetAmountButton>
        </div>
      </div>
    </Card>
  );
}

const SetAmountButton = ({
  disabled,
  onClick,
  children
}: {
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) => (
  <Button
    size='xs'
    variant='ghost'
    className='text-xs'
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);
