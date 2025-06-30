import { formatUnits } from 'viem';

import {
  CustomPoolFeeCard,
  PoolFeeCard
} from '@composed/pools/detail/pool-fee-card';
import { usePoolActions, usePoolParams } from '@composed/pools/pool.store';

type FeeTierOption = {
  percentage: number;
  description: string;
};

const FEE_TIER_OPTIONS: FeeTierOption[] = [
  {
    percentage: 0.001, // 0.1%
    description: 'Best for stablecoins with low volatility.'
  },
  {
    percentage: 0.005, // 0.5%
    description: 'Use for closely correlated assets.'
  },
  {
    percentage: 0.01, // 1%
    description: 'Ideal for high-risk or low-liquidity tokens.'
  }
];

export function PoolFeeList() {
  const { fee } = usePoolParams();
  const { setPoolParam } = usePoolActions();

  const feeTier = fee !== null ? Number(formatUnits(fee, 18)) : null;

  const customTierSelected =
    feeTier !== null &&
    !FEE_TIER_OPTIONS.some((tierOption) => tierOption.percentage === feeTier);

  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
      {FEE_TIER_OPTIONS.map((tierOption) => (
        <PoolFeeCard
          key={tierOption.percentage}
          tier={tierOption}
          isSelected={feeTier === tierOption.percentage}
          onSelect={() => {
            setPoolParam(
              'fee',
              BigInt(Math.round(tierOption.percentage * 1e18))
            );
          }}
        />
      ))}
      <CustomPoolFeeCard
        feeTier={customTierSelected ? feeTier : null}
        isSelected={customTierSelected}
        onSelect={(feeTier: number) => {
          setPoolParam('fee', BigInt(Math.round(feeTier * 1e18)));
        }}
      />
    </div>
  );
}
