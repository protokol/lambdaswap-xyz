import { parseUnits } from 'viem';

export const numberFormatter = {
  number: (options?: Intl.NumberFormatOptions) =>
    Intl.NumberFormat('en-US', { ...options }),
  compactNumber: (options?: Intl.NumberFormatOptions) =>
    Intl.NumberFormat('en-US', { notation: 'compact', ...options }),
  currency: (options?: Intl.NumberFormatOptions) =>
    Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      ...options
    }),
  percentage: (options?: Intl.NumberFormatOptions) =>
    Intl.NumberFormat('en-US', {
      style: 'percent',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
      ...options
    }),
  compactCurrency: (options?: Intl.NumberFormatOptions) =>
    Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
      ...options
    })
};

export const formatNumber = (
  value: number,
  options?: Intl.NumberFormatOptions
) => numberFormatter.number(options).format(value);

export const formatCompactNumber = (
  value: number,
  options?: Intl.NumberFormatOptions
) => numberFormatter.compactNumber(options).format(value);

export const formatCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions
) => numberFormatter.currency(options).format(value);

export const formatCompactCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions
) => numberFormatter.compactCurrency(options).format(value);

export const formatPercentage = (
  value: number,
  options?: Intl.NumberFormatOptions
) => numberFormatter.percentage(options).format(value);

export const formatNumberToRawAmount = (
  value: string | number,
  decimals: number
): bigint => {
  const strValue = String(value);

  return parseUnits(strValue, decimals);
};

export const formatRawAmountToNumber = (
  value: number | null | undefined,
  decimals: number = 6
): number => {
  if (!value) return 0;
  return value / 10 ** decimals;
};
