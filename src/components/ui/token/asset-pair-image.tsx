import { TokenImage } from '@ui/token/token-image';

import { getAssetMetadata } from '@lib/data/vaults/1/euler-vault.util';

type AssetPairImageProps = {
  asset0: `0x${string}`;
  asset1: `0x${string}`;
};
export function AssetPairImage({ asset0, asset1 }: AssetPairImageProps) {
  const asset0Metadata = getAssetMetadata(asset0);
  const asset1Metadata = getAssetMetadata(asset1);

  return (
    <div className='inline-flex'>
      <div className='z-1'>
        <TokenImage
          size='size-8'
          logoURI={asset0Metadata?.logoURI}
          symbol={asset0Metadata?.symbol || 'Unknown'}
        />
      </div>
      <div className='-ml-3'>
        <TokenImage
          size='size-8'
          logoURI={asset1Metadata?.logoURI}
          symbol={asset1Metadata?.symbol || 'Unknown'}
        />
      </div>
    </div>
  );
}
