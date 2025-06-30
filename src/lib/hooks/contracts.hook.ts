import { useChainId } from 'wagmi';

import {
  type ContractsConfigEntry,
  contracts
} from '@lib/configs/contract.config';
import { type SupportedNetworks, supportedNetworks } from '@lib/crypto.utils';

const createContractHook =
  <K extends keyof ContractsConfigEntry>(key: K) =>
  () => {
    const chainId = useChainId();
    if (
      !chainId ||
      !supportedNetworks.find((network) => network.id === chainId)
    )
      return undefined;

    return contracts[chainId as SupportedNetworks]?.[key];
  };

export const useVaultLensAddress = createContractHook('VaultLens');
export const useAccountLensAddress = createContractHook('AccountLens');
export const useEVCAddress = createContractHook('EVC');
export const useSwapV1FactoryAddress = createContractHook('SwapV1Factory');
export const useSwapV1PeripheryAddress = createContractHook('SwapV1Periphery');
