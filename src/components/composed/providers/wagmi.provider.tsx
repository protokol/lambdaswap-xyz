import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  binanceWallet,
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  walletConnectWallet,
  zerionWallet
} from '@rainbow-me/rainbowkit/wallets';
import type { PropsWithChildren } from 'react';
import { mainnet, unichain } from 'viem/chains';
import {
  WagmiProvider as WagmiProviderComponent,
  createConfig,
  fallback,
  http
} from 'wagmi';

import { env } from '@lib/configs/env.config';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        coinbaseWallet,
        rabbyWallet,
        trustWallet,
        rainbowWallet
      ]
    },
    {
      groupName: 'More',
      wallets: [
        ledgerWallet,
        phantomWallet,
        walletConnectWallet,
        okxWallet,
        braveWallet,
        zerionWallet,
        binanceWallet,
        imTokenWallet,
        injectedWallet,
        safeWallet
      ]
    }
  ],
  {
    appName: 'LambdaSwap',
    projectId: 'LambdaSwap'
  }
);
const config = createConfig({
  connectors,
  chains: [mainnet, unichain],
  transports: {
    [mainnet.id]: fallback([
      http('https://ethereum-rpc.publicnode.com'),
      http(`https://eth-mainnet.g.alchemy.com/v2/${env.alchemyKey}`)
    ]),
    [unichain.id]: fallback([
      http('https://unichain-rpc.publicnode.com'),
      http(`https://unichain-mainnet.g.alchemy.com/v2/${env.alchemyKey}`)
    ])
  }
});

export function WagmiProvider({ children }: PropsWithChildren) {
  return (
    <WagmiProviderComponent config={config}>{children}</WagmiProviderComponent>
  );
}
