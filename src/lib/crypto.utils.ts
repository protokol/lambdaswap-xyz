import { mainnet, unichain } from 'viem/chains';

export const truncateAddress = (address?: string) => {
  if (!address) return '';

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const getExplorerLink = (
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block',
  chainId?: SupportedNetworks
): string => {
  const prefix = chainId
    ? getNetworkInfo(chainId).blockExplorers.default.url
    : 'https://etherscan.io';

  switch (type) {
    case 'transaction':
      return `${prefix}/tx/${data}`;
    case 'token':
      return `${prefix}/token/${data}`;
    case 'block':
      return `${prefix}/block/${data}`;
    case 'address':
      return `${prefix}/address/${data}`;
    default:
      return `${prefix}`;
  }
};

export type SupportedNetworks = (typeof supportedNetworks)[number]['id'];

export const supportedNetworks = [mainnet, unichain];

export const getNetworkInfo = (
  networkId: SupportedNetworks
): (typeof supportedNetworks)[number] => {
  const network = supportedNetworks.find((network) => network.id === networkId);
  if (!network) {
    throw new Error(`Network ${networkId} not supported`);
  }
  return network;
};

export const sortTokenAddresses = (
  address0?: `0x${string}`,
  address1?: `0x${string}`
): [`0x${string}` | undefined, `0x${string}` | undefined] => {
  if (!address0 || !address1) {
    return [address0, address1];
  }
  const addr0BigInt = BigInt(address0);
  const addr1BigInt = BigInt(address1);

  if (addr0BigInt < addr1BigInt) {
    return [address0, address1];
  }
  return [address1, address0];
};
