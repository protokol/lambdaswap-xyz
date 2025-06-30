import { ArrowUpDownIcon } from 'lucide-react';

import { Button } from '@ui/button';

import { PoolLiquidityInput } from '@composed/pools/detail/pool-liquidity-input';
import {
  usePoolActions,
  useVault0Store,
  useVault1Store
} from '@composed/pools/pool.store';

export function PoolLiquidityPair() {
  const { asset0, vault0, setVault0, amount0, setAmount0, setAsset0 } =
    useVault0Store();
  const { asset1, vault1, setVault1, amount1, setAmount1, setAsset1 } =
    useVault1Store();
  const { setLastChangedAmount } = usePoolActions();

  return (
    <div className='flex flex-col gap-2'>
      <PoolLiquidityInput
        asset={asset0}
        vaultAddress={vault0}
        value={amount0}
        onChange={(value) => {
          setAmount0(value);
          setLastChangedAmount('amount0');
        }}
      />
      <div className='flex items-center justify-center gap-2'>
        <Button
          variant='outline'
          size='sm-icon'
          onClick={() => {
            setVault0(vault1);
            setAsset0(asset1);
            setVault1(vault0);
            setAsset1(asset0);
            setLastChangedAmount(null);
          }}
        >
          <ArrowUpDownIcon />
        </Button>
      </div>

      <PoolLiquidityInput
        asset={asset1}
        vaultAddress={vault1}
        value={amount1}
        onChange={(value) => {
          setAmount1(value);
          setLastChangedAmount('amount1');
        }}
      />
    </div>
  );
}
