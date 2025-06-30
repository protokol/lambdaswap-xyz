import { graphql } from '@gql/index';
import type { ResultOf } from '@graphql-typed-document-node/core';

export type EulerVaultsByAsset = ResultOf<
  typeof eulerVaultsByAssetQuery
>['eulerVaults'];
export const eulerVaultsByAssetQuery = graphql(`
  query GetVaultByAsset($asset: Bytes!) {
    eulerVaults(where: { asset: $asset }) {
      id
      name
      symbol
      asset
      decimals
      evault
      dToken
      oracle
      supplyCap
      borrowCap
      permit2Address
    }
  }
`);

export type EulerAccountVaultsWithPositions = ResultOf<
  typeof eulerAccountVaultPositionsQuery
>['trackingVaultBalances'];
export const eulerAccountVaultPositionsQuery = graphql(`
  query GetAccountVaultPositions($account: Bytes!) {
    trackingVaultBalances(where: { account: $account }) {
      id
      balance
      account
      vault
    }
  }
`);
