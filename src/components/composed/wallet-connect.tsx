import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NetworkIcon, NetworkUnichain } from '@web3icons/react';
import {
  ChevronDownIcon,
  CopyIcon,
  ExternalLinkIcon,
  Loader2Icon,
  LogOutIcon,
  WalletIcon
} from 'lucide-react';
import { useDisconnect, useSwitchChain } from 'wagmi';

import { Button } from '@ui/button';
import { DropdownMenu } from '@ui/dropdown-menu/dropdown-menu';

import { truncateAddress } from '@lib/crypto.utils';

export function WalletConnect() {
  const { disconnect } = useDisconnect();
  const { chains, switchChain, isPending } = useSwitchChain();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} variant='outline'>
                    <WalletIcon /> Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} variant='outline'>
                    Wrong network
                  </Button>
                );
              }
              return (
                <div className='flex gap-2'>
                  <DropdownMenu
                    onSelect={(value) => {
                      if (value !== undefined) {
                        switchChain({ chainId: value });
                      }
                    }}
                    options={chains?.map((chainItem) => ({
                      type: 'action',
                      label: (
                        <div className='flex items-center gap-2'>
                          {chainItem.id === 130 ? (
                            <NetworkUnichain variant='branded' size={36} />
                          ) : (
                            <NetworkIcon
                              chainId={chainItem.id}
                              variant='branded'
                              className='text-inherit'
                            />
                          )}
                          <span>{chainItem.name}</span>
                        </div>
                      ),
                      value: chainItem.id
                    }))}
                  >
                    <Button variant='outline' className='has-[>svg]:px-2'>
                      {isPending ? (
                        <Loader2Icon className='size-4 animate-spin' />
                      ) : (
                        <>
                          {chain.id === 130 ? (
                            <NetworkUnichain variant='branded' size={36} />
                          ) : (
                            <NetworkIcon
                              chainId={chain.id}
                              variant='branded'
                              className='text-inherit'
                            />
                          )}
                          <ChevronDownIcon className='size-4' />
                        </>
                      )}
                    </Button>
                  </DropdownMenu>

                  <DropdownMenu
                    options={[
                      {
                        type: 'label',
                        label: (
                          <b className='flex justify-center'>
                            {truncateAddress(account.address)}
                          </b>
                        )
                      },
                      {
                        type: 'divider'
                      },
                      {
                        type: 'action',
                        label: (
                          <div className='flex items-center gap-2'>
                            <CopyIcon className='size-3 text-inherit' />
                            Copy address
                          </div>
                        ),
                        value: 'copy'
                      },
                      {
                        type: 'action',
                        label: (
                          <div className='flex items-center gap-2'>
                            <ExternalLinkIcon className='size-3 text-inherit' />
                            View in explorer
                          </div>
                        ),
                        value: 'view'
                      },
                      {
                        type: 'action',
                        label: (
                          <div className='flex items-center gap-2'>
                            <LogOutIcon className='size-3 text-inherit' />
                            Disconnect
                          </div>
                        ),
                        value: 'disconnect'
                      }
                    ]}
                    onSelect={(value) => {
                      switch (value) {
                        case 'disconnect':
                          disconnect();
                          break;
                        case 'copy':
                          navigator.clipboard.writeText(account.address);
                          break;
                        case 'view':
                          window.open(
                            `https://etherscan.io/address/${account.address}`
                          );
                          break;
                        default:
                      }
                    }}
                  >
                    <Button onClick={openAccountModal} variant='outline'>
                      {account.displayName}
                    </Button>
                  </DropdownMenu>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
