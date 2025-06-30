export type BatchItem = {
  targetContract: `0x${string}`;
  onBehalfOfAccount: `0x${string}`;
  value: bigint;
  data: `0x${string}`;
  description?: string;
};
