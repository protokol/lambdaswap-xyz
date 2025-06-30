import { ExternalLinkIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { BaseError } from 'viem';
import {
  usePublicClient,
  useWriteContract as useWriteWagmiContract
} from 'wagmi';

import { CopyButton } from '@ui/copy-button';
import { toastError, toastInfo } from '@ui/toaster/toaster';

import {
  type SupportedNetworks,
  getExplorerLink,
  truncateAddress
} from '@lib/crypto.utils';

export function useWriteContract() {
  const [isPending, setIsPending] = useState(false);
  const publicClient = usePublicClient();
  const { writeContractAsync: mutateAsync, ...rest } = useWriteWagmiContract();

  const writeContractAsync = useCallback(
    async (params: Parameters<typeof mutateAsync>[0]) => {
      if (!publicClient) return;
      setIsPending(true);

      toastInfo({
        title: 'Confirm transaction in your wallet',
        description: 'Please approve the transaction in your wallet.'
      });

      let hash: `0x${string}` | undefined = undefined;

      try {
        hash = await mutateAsync(params);
        toastInfo({
          title: 'Transaction pending',
          description:
            'Your transaction has been submitted and is awaiting confirmation on the network.'
        });
      } catch (e) {
        if (e instanceof BaseError) {
          toastError({
            title: 'Transaction Failed',
            description: e.shortMessage
          });
        } else if (e instanceof Error) {
          toastError({
            title: 'Transaction Failed',
            description: e.message
          });
        } else {
          toastError({
            title: 'An Unknown Error Occurred',
            description: String(e)
          });
        }
        setIsPending(false);
      }
      if (!hash) return;

      await publicClient
        .waitForTransactionReceipt({
          hash: hash as `0x${string}`,
          timeout: 15_000
        })
        .then((receipt) => {
          const txSuccess = receipt.status === 'success';
          const toastTitle = txSuccess
            ? 'Transaction confirmed'
            : 'Transaction reverted';
          const toastDescription = (
            <div className='flex flex-col'>
              <span className='inline-flex items-center gap-0.5'>
                {`Transaction hash: ${truncateAddress(receipt.transactionHash)}`}
                <CopyButton size='sm' value={receipt.transactionHash} />
              </span>
              <div>
                <a
                  target='_blank'
                  className='inline-flex items-center gap-0.5 underline-offset-4 hover:underline'
                  rel='noopener noreferrer'
                  href={getExplorerLink(
                    receipt.transactionHash,
                    'transaction',
                    publicClient.chain.id as SupportedNetworks
                  )}
                >
                  View in Explorer <ExternalLinkIcon className='size-3' />
                </a>
              </div>
            </div>
          );

          const toast = txSuccess ? toastInfo : toastError;

          toast({
            title: toastTitle,
            description: toastDescription,
            duration: 15_000
          });
        });
      setIsPending(false);
      return hash;
    },
    [publicClient, mutateAsync]
  );

  return {
    ...rest,
    writeContractAsync,
    isPending
  };
}
