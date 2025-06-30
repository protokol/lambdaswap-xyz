import { type UseReadContractReturnType, useReadContract } from 'wagmi';

import { ElensAbi } from '@lib/abis/lens.abi';
import { useVaultLensAddress } from '@lib/hooks/contracts.hook';

export type TUseVaultInfo = UseReadContractReturnType<
  typeof ElensAbi,
  'getVaultInfoFull'
>;
export const useVaultInfo = (address: `0x${string}`) => {
  const lensAddress = useVaultLensAddress();

  return useReadContract({
    abi: ElensAbi,
    address: lensAddress,
    functionName: 'getVaultInfoFull',
    args: [address]
  });
};
