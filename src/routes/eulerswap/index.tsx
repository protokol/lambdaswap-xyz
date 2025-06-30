import { useMutation } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';
import { zeroAddress } from 'viem';

import { Button } from '@ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { PageContainer } from '@ui/layout/page-container';

import { PoolAdvancedSettings } from '@composed/pools/detail/pool-advanced-settings';
import { PoolFeeList } from '@composed/pools/detail/pool-fee-list';
import { PoolLiquidityPair } from '@composed/pools/detail/pool-liquidity-pair';
import { PoolSummaryCard } from '@composed/pools/detail/pool-summary-card';
import { PoolTokenPairSelect } from '@composed/pools/detail/pool-token-pair-select';
import {
  useEulerSwapInit,
  usePoolDeployment
} from '@composed/pools/pool.hooks';

export const Route = createFileRoute('/eulerswap/')({
  component: RouteComponent
});

function RouteComponent() {
  const { isLoading, data } = useEulerSwapInit();
  const { getDeployPoolBatchItems, getEditPoolBatchItems, writePoolBatchTx } =
    usePoolDeployment();
  const isEdit = Boolean(data.poolAddress !== zeroAddress);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const batchItems = isEdit
        ? await getEditPoolBatchItems()
        : await getDeployPoolBatchItems();
      if (!batchItems) {
        throw new Error('Batch items not found');
      }
      return await writePoolBatchTx(batchItems);
    }
  });

  const buttonText = useMemo(() => {
    if (isPending) return 'Deploying...';
    if (isEdit) return 'Rebalance pool';
    return 'Deploy pool';
  }, [isPending, isEdit]);

  if (isLoading)
    return (
      <PageContainer
        breadcrumbs={[
          {
            name: 'Pools',
            href: '/pools'
          },
          {
            name: 'EulerSwap'
          }
        ]}
      >
        <div className='grid gap-4 lg:grid-cols-3'>
          <div className='bg-card min-h-56 animate-pulse rounded-2xl lg:col-span-2' />
          <div className='bg-card col-span-1 min-h-56 animate-pulse rounded-2xl' />
        </div>
      </PageContainer>
    );

  return (
    <PageContainer
      breadcrumbs={[
        {
          name: 'Pools',
          href: '/pools'
        },
        {
          name: 'EulerSwap'
        }
      ]}
    >
      <div className='grid gap-4 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <Card className='gap-6'>
            <div className='space-y-2'>
              <CardHeader>
                <CardTitle>Tokens</CardTitle>
                <CardDescription>
                  Choose the token pair for your liquidity.
                </CardDescription>
              </CardHeader>
              <PoolTokenPairSelect />
            </div>

            <div className='space-y-2'>
              <CardHeader>
                <CardTitle>Fee tier</CardTitle>
                <CardDescription>
                  Select the fee tier for the pool.
                </CardDescription>
              </CardHeader>
              <PoolFeeList />
            </div>

            <div className='space-y-2'>
              <CardHeader>
                <CardTitle>Liquidity</CardTitle>
                <CardDescription>
                  Enter the amount of each token you want to deposit.
                </CardDescription>
              </CardHeader>
              <PoolLiquidityPair />
            </div>

            <PoolAdvancedSettings />

            <Button onClick={() => mutateAsync()} disabled={isPending}>
              {buttonText}
            </Button>
          </Card>
        </div>
        <div className='col-span-1'>
          <div className='sticky top-16'>
            <PoolSummaryCard />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
