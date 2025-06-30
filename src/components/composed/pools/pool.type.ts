export type PoolData = {
  pool: `0x${string}`;
  factory: `0x${string}`;
  limit01In: string;
  limit01Out: string;
  limit10In: string;
  limit10Out: string;
  reserves0: string;
  reserves1: string;
  equilibriumReserves0: string;
  equilibriumReserves1: string;
  totalReserves: string;
  price: string;
  apy: string;
  fee: string;
  active: boolean;
  volume: string;
  volume1d: string;
  volume7d: string;
  conc0: string;
  conc1: string;
  account: string;
  owner: `0x${string}`;
  blockNumber: string;
  blockTimestamp: string;
  createdAt: string;
  vault0: {
    asset: `0x${string}`;
    address: `0x${string}`;
    decimals: number;
    availableLiquidity: string;
    cash: string;
    totalFees: string;
    accountNav: {
      shares: string;
      assets: string;
      borrowed: string;
      interestAccrued: string;
    };
  };
  vault1: {
    asset: `0x${string}`;
    address: `0x${string}`;
    decimals: number;
    availableLiquidity: string;
    cash: string;
    totalFees: string;
    accountNav: {
      shares: string;
      assets: string;
      borrowed: string;
      interestAccrued: string;
    };
  };
};
