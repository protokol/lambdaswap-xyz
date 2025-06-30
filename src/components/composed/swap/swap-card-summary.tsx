import { InfoIcon } from 'lucide-react';
import { useMemo } from 'react';

import { Tooltip } from '@ui/tooltip/tooltip';

import { useSwapData } from '@composed/swap/swap.store';

import { getAssetMetadata } from '@lib/data/vaults/1/euler-vault.util';
import { useAssetPrice } from '@lib/hooks/token.hook';
import { formatNumber, formatPercentage } from '@lib/number-formatter.utils';
import { cn } from '@lib/utils';

export function SwapCardSummary() {
  const { tokenFrom, tokenTo, toAmount, fromAmount, slippage } = useSwapData();

  const { data: tokenFromPrice } = useAssetPrice(tokenFrom || undefined);
  const { data: tokenToPrice } = useAssetPrice(tokenTo || undefined);

  const priceImpactPercentage = useMemo(() => {
    if (
      !tokenFromPrice ||
      !tokenToPrice ||
      !Number(fromAmount) ||
      !Number(toAmount)
    )
      return 0;
    const fromAmountInUSD = Number(fromAmount) * tokenFromPrice;
    const toAmountInUSD = Number(toAmount) * tokenToPrice;
    const difference = (fromAmountInUSD - toAmountInUSD) / fromAmountInUSD;
    return Number(difference.toFixed(4));
  }, [tokenFromPrice, tokenToPrice, fromAmount, toAmount]);

  const summaryList = useMemo(() => {
    if (!tokenFrom || !tokenTo || !fromAmount) return [];

    const exchangeRate = Number(toAmount) / Number(fromAmount);
    const tokenFromMetadata = tokenFrom ? getAssetMetadata(tokenFrom) : null;
    const tokenToMetadata = tokenTo ? getAssetMetadata(tokenTo) : null;
    const formattedExchangeRate = formatNumber(exchangeRate, {
      maximumFractionDigits: exchangeRate > 0 && exchangeRate < 0.01 ? 6 : 2,
      notation:
        exchangeRate > 0 && exchangeRate < 0.0001 ? 'scientific' : 'standard'
    });

    return [
      {
        label: 'Exchange Rate',
        value: `1 ${tokenFromMetadata?.symbol} = ${formattedExchangeRate} ${tokenToMetadata?.symbol}`
      },
      {
        label: (
          <div className='inline-flex gap-1'>
            <div>Price Impact</div>

            <div className='flex'>
              <Tooltip
                content={
                  <div className='max-w-60 text-center'>
                    The difference between market price and estimated price due
                    to trade size
                  </div>
                }
              >
                <InfoIcon className='size-2.5' />
              </Tooltip>
            </div>
          </div>
        ),
        value: (
          <span
            className={cn({
              'text-destructive': priceImpactPercentage > 0.01,
              'text-success': priceImpactPercentage < -0.01
            })}
          >
            {formatPercentage(priceImpactPercentage)}
          </span>
        )
      },
      {
        label: 'Slippage Tolerance',
        value: formatPercentage(slippage)
      }
    ];
  }, [
    tokenFrom,
    tokenTo,
    fromAmount,
    toAmount,
    priceImpactPercentage,
    slippage
  ]);

  return (
    <div
      className={cn('max-h-0 overflow-hidden opacity-0 transition-all', {
        'max-h-20 overflow-y-auto opacity-100': summaryList?.length
      })}
    >
      {summaryList.map((item) => (
        <div className='flex items-center justify-between'>
          <div className='text-muted-foreground text-xs font-medium'>
            {item.label}
          </div>
          <div className='text-accent-foreground font-mono text-xs break-all'>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
