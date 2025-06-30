import eulerTokenListData from '@lib/data/vaults/1/euler-token-list.json';
import eulerVaultInfoListData from '@lib/data/vaults/1/euler-vault-info-list.json';

export type TEulerToken = {
  addressInfo: string;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  logoURI?: string;
  meta: Record<string, unknown>;
};

export type TEulerVaultInfo = {
  name: string;
  description: string;
  entity: string | string[];
};
export type TEulerVaultInfoList = Record<string, TEulerVaultInfo>;

export const eulerTokenList: Record<string, TEulerToken> =
  eulerTokenListData.reduce(
    (acc, token) => {
      acc[token.addressInfo] = token;
      return acc;
    },
    {} as Record<string, TEulerToken>
  );

export const eulerVaultInfoList: Record<string, TEulerVaultInfo> =
  eulerVaultInfoListData;
