import type {
  EulerAccountVaultsWithPositions,
  EulerVaultsByAsset
} from '@lib/api/euler.gql';

export type EulerVaultsWithBalance = EulerVaultsByAsset[number] & {
  balance?: string;
};
export const sortVaultsByBalance = (
  trackingBalances?: EulerAccountVaultsWithPositions,
  assetVaults?: EulerVaultsByAsset
): EulerVaultsWithBalance[] => {
  if (!assetVaults?.length) {
    return [];
  }

  const assetVaultsWithBalance = assetVaults
    .map((av) => {
      const balanceStr = trackingBalances?.find(
        (tb) => tb.vault === av.id
      )?.balance;
      return {
        ...av,
        balance: balanceStr || '0'
      };
    })
    .sort((a, b) => {
      const balA = a.balance ? BigInt(a.balance) : 0n;
      const balB = b.balance ? BigInt(b.balance) : 0n;

      if (balA < balB) return 1;
      if (balA > balB) return -1;
      return 0;
    });

  return assetVaultsWithBalance;
};
