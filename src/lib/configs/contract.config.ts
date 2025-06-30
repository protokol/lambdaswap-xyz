import { mainnet, unichain } from 'viem/chains';

import type { SupportedNetworks } from '@lib/crypto.utils';

export interface ContractsConfigEntry {
  VaultLens: `0x${string}`;
  AccountLens: `0x${string}`;
  EVC: `0x${string}`;
  SwapV1Factory: `0x${string}`;
  SwapV1Periphery: `0x${string}`;
}

type ContractsConfig = Record<SupportedNetworks, ContractsConfigEntry>;

export const contracts: ContractsConfig = {
  [mainnet.id]: {
    VaultLens: '0xE240C5c1D76794556b3cFD3Feb005048db55B539',
    AccountLens: '0x94B9D29721f0477402162C93d95B3b4e52425844',
    EVC: '0x0C9a3dd6b8F28529d72d7f9cE918D493519EE383',
    SwapV1Factory: '0xb013be1D0D380C13B58e889f412895970A2Cf228',
    SwapV1Periphery: '0xb013be1D0D380C13B58e889f412895970A2Cf228'
  },
  [unichain.id]: {
    VaultLens: '0xe4AF668dbf63ce31A645Df56982FE73Ab81deD98',
    AccountLens: '0xFD45d1256F01aE273D32Aa227b36fc25CC358785',
    EVC: '0x2A1176964F5D7caE5406B627Bf6166664FE83c60',
    SwapV1Factory: '0x45b146BC07c9985589B52df651310e75C6BE066A',
    SwapV1Periphery: '0xdAAF468d84DD8945521Ea40297ce6c5EEfc7003a'
  }
};
