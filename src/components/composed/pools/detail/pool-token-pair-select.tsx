import { Label } from '@ui/label';
import { TokenSelectButton } from '@ui/token/token-select-button';

import { useVault0Store, useVault1Store } from '@composed/pools/pool.store';

export function PoolTokenPairSelect() {
  const { asset0, setVault0, setAsset0 } = useVault0Store();
  const { asset1, setVault1, setAsset1 } = useVault1Store();

  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='space-y-2'>
        <Label>Token</Label>
        <TokenSelectButton
          className='w-full'
          token={asset0 || undefined}
          onTokenSelect={(asset) => {
            if (asset.toLowerCase() === asset1?.toLowerCase()) {
              setAsset0(asset);
              setAsset1(null);
              setVault0(null);
              setVault1(null);
              return;
            }

            setVault0(null);
            setAsset0(asset);
          }}
        />
      </div>

      <div className='space-y-2'>
        <Label>Token</Label>
        <TokenSelectButton
          className='w-full'
          token={asset1 || undefined}
          onTokenSelect={(asset) => {
            if (asset === asset0) {
              setAsset0(null);
              setAsset1(asset);
              setVault0(null);
              setVault1(null);
              return;
            }

            setVault1(null);
            setAsset1(asset);
          }}
        />
      </div>
    </div>
  );
}
