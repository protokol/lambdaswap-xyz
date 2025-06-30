import { useMemo } from 'react';
import { useChainId } from 'wagmi';

import type { TEulerToken } from '@lib/data/vaults/1';
import eulerTokenListMainnetData from '@lib/data/vaults/1/euler-token-list.json';
import eulerTokenListUnichainData from '@lib/data/vaults/130/euler-token-list.json';

const tokenList: Record<number, TEulerToken[]> = {
  1: eulerTokenListMainnetData,
  130: eulerTokenListUnichainData
};

export const useEulerTokenList = () => {
  const chainId = useChainId();

  return useMemo(() => {
    const tokenListData = tokenList[chainId] || {};

    return tokenListData.reduce(
      (acc, token) => {
        acc[token.addressInfo] = token;
        return acc;
      },
      {} as Record<string, TEulerToken>
    );
  }, [chainId]);
};
