import { getAddress } from 'viem';

import { eulerVaultInfoList } from '@lib/data/vaults/1';
import eulerTokenList from '@lib/data/vaults/1/euler-token-list.json';
import eulerTokenListUnichain from '@lib/data/vaults/130/euler-token-list.json';

export type TEulerAssetMetadata = {
  address: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
  logoURI?: string;
};

export const getAssetMetadata = (
  asset?: `0x${string}`
): TEulerAssetMetadata | null => {
  if (!asset) return null;
  const token = [...eulerTokenList, ...eulerTokenListUnichain].find(
    (token) => token.addressInfo.toLowerCase() === asset.toLowerCase()
  );
  if (!token) {
    return null;
  }
  return {
    address: token.addressInfo as `0x${string}`,
    name: token.name,
    symbol: token.symbol,
    decimals: token.decimals,
    logoURI: token.logoURI
  };
};

export const getEulerVaultInfo = (address: string) =>
  Object.entries(eulerVaultInfoList || {}).find(
    ([id]) => getAddress(id) === getAddress(address)
  )?.[1];
