import { Link, createFileRoute } from '@tanstack/react-router';

import { Button } from '@ui/button';
import { PageContainer } from '@ui/layout/page-container';

import { PoolList } from '@composed/pools/list/pool-list';
import { SwapCard } from '@composed/swap/swap-card';

export const Route = createFileRoute('/pools/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <PageContainer
      breadcrumbs={[
        {
          name: 'Pools'
        }
      ]}
      actions={
        <Button variant='outline'>
          <Link
            to='/eulerswap'
            search={{
              asset0: undefined,
              asset1: undefined,
              feeTier: undefined
            }}
          >
            My EulerSwap
          </Link>
        </Button>
      }
    >
      <div className='flex flex-col gap-6 md:flex-row'>
        <div className='order-2 flex-grow space-y-6 md:order-1'>
          <PoolList />
        </div>

        <div className='order-1 mx-auto md:order-2'>
          <SwapCard />
        </div>
      </div>
    </PageContainer>
  );
}
