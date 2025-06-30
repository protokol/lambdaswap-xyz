import { RotateCcwIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useAccount } from 'wagmi';

import { Button } from '@ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { TokenSelectButton } from '@ui/token/token-select-button';
import { Tooltip } from '@ui/tooltip/tooltip';

import { PoolCard } from '@composed/pools/pool-card';
import { usePoolList } from '@composed/pools/pool.hooks';
import { useSwapPoolAddress } from '@composed/swap/swap.store';

import { useEulerPools } from '@lib/api/pools/euler-pools.hook';
import { sortTokenAddresses } from '@lib/crypto.utils';

export function PoolList() {
  const [token0, setToken0] = useState<`0x${string}` | undefined>();
  const [token1, setToken1] = useState<`0x${string}` | undefined>();
  const { address: connectedAddress } = useAccount();

  const [sortedToken0, sortedToken1] = sortTokenAddresses(token0, token1);

  const { data: pools, isLoading: isLoadingPools } = useEulerPools(
    sortedToken0,
    sortedToken1
  );

  const swapPoolAddress = useSwapPoolAddress();
  const { data: poolListInfo } = usePoolList();

  const sortedPools = useMemo(() => {
    const poolExtendedInfo = pools?.map((pool) => {
      const matchedPool = poolListInfo?.find(
        (item) => item.pool === pool.address
      );

      return {
        ...pool,
        account: matchedPool?.account,
        owner: matchedPool?.owner,
        volume7d: matchedPool?.volume7d
      };
    });

    return poolExtendedInfo?.sort((a, b) => {
      const score = (pool: typeof a) =>
        (pool.eulerAccount === connectedAddress ? 1 : 0) +
        (pool.address === swapPoolAddress ? 2 : 0);

      const scoreDiff = score(b) - score(a);
      if (scoreDiff !== 0) return scoreDiff;

      return Number(b.volume7d || 0) - Number(a.volume7d || 0);
    });
  }, [pools, poolListInfo, connectedAddress, swapPoolAddress]);

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            <div>Find Liquidity Pools</div>
            <Tooltip asChild content='Reset token pair'>
              <Button
                variant='ghost'
                size='sm-icon'
                disabled={!token0 || !token1}
                onClick={() => {
                  setToken0(undefined);
                  setToken1(undefined);
                }}
              >
                <RotateCcwIcon className='size-4' />
              </Button>
            </Tooltip>
          </CardTitle>
          <CardDescription>
            Select a token pair to find pools. EulerSwap pools don't hold
            reserves, but use just-in-time liquidity from Euler vaults for
            deeper markets.
          </CardDescription>
        </CardHeader>

        <div className='grid gap-4 lg:grid-cols-2'>
          <TokenSelectButton
            token={token0}
            onTokenSelect={(token) => setToken0(token)}
          />
          <TokenSelectButton
            token={token1}
            onTokenSelect={(token) => setToken1(token)}
          />
        </div>
      </Card>
      <div className='flex flex-col gap-4'>
        {isLoadingPools &&
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className='bg-accent h-16 w-full animate-pulse rounded'
            />
          ))}

        {Boolean(!isLoadingPools && sortedPools?.length) && (
          <div className='space-y-4'>
            {sortedPools?.map((pool) => (
              <PoolCard key={pool.address} pool={pool} />
            ))}
          </div>
        )}

        {Boolean(!isLoadingPools && !sortedPools?.length) && (
          <div className='flex flex-col items-center gap-2'>
            <span className='text-muted-foreground text-sm'>
              No pools found
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
