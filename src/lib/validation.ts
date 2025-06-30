import { isAddress } from 'viem';
import { z } from 'zod';

export const validationErrors = {
  required: 'Field is required',
  invalidAddress: 'Please enter a valid address.'
};

export const isValidAddress = (address: string) => Boolean(isAddress(address));

// Used when dealing with bigint inputs
export const numberString = (
  min?: number,
  max?: number,
  customMessage?: string
) =>
  z.string().refine(
    (val) => {
      const num = Number(val);
      if (val === '' || isNaN(num)) return false;

      let isValid = true;
      if (min !== undefined) {
        isValid = isValid && num >= min;
      }
      if (max !== undefined) {
        isValid = isValid && num <= max;
      }
      return isValid;
    },
    {
      message: (() => {
        if (customMessage) return customMessage;
        if (min !== undefined && max !== undefined) {
          return `Must be between ${min} and ${max}`;
        }
        if (min !== undefined) {
          return `Must be greater than or equal to ${min}`;
        }
        if (max !== undefined) {
          return `Must be less than or equal to ${max}`;
        }
        return 'Must be a valid number';
      })()
    }
  );

const positiveNumberString = (customMessage?: string) =>
  z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: customMessage ?? 'Must be a positive number'
  });

export const zodCustom = {
  ethAddress: z.string().refine(isValidAddress, {
    message: validationErrors.invalidAddress
  }),
  numberString,
  positiveNumberString
};
