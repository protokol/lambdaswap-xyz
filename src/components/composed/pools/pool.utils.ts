import {
  type DecodeEventLogReturnType,
  type PublicClient,
  encodeAbiParameters,
  encodePacked,
  fromHex,
  getAddress,
  keccak256,
  toHex
} from 'viem';
import { generatePrivateKey } from 'viem/accounts';

import type { PoolParams } from '@composed/pools/pool.store';

import { EulerSwapFactoryAbi } from '@lib/abis/euler-swap-factory.abi';
import { EulerSwapAbi } from '@lib/abis/euler-swap.abi';
import type { EulerPoolSwapEvent } from '@lib/api/pools/euler-pools.type';

export async function predictPoolAddress(
  client: PublicClient,
  factoryAddress: `0x${string}`,
  params: PoolParams
) {
  let mask = BigInt(2 ** 14 - 1);
  let requiredHooks = 10408n;

  let salt = fromHex(generatePrivateKey(), 'bigint');
  let creationCodeHash = keccak256(
    await creationCode(client, factoryAddress, params)
  );

  while (true) {
    salt++;
    let saltHex = toHex(salt, { size: 32 });

    let a = encodePacked(
      ['bytes1', 'address', 'bytes32', 'bytes32'],
      ['0xFF', factoryAddress, saltHex, creationCodeHash]
    );
    a = keccak256(a);

    if ((fromHex(a, 'bigint') & mask) === requiredHooks) {
      return [getAddress('0x' + a.slice(26)), saltHex];
    }
  }
}

export async function creationCode(
  client: PublicClient,
  factoryAddress: `0x${string}`,
  params: PoolParams
): Promise<`0x${string}`> {
  const getParamsAbi = EulerSwapAbi.find(
    (item) => item.type === 'function' && item.name === 'getParams'
  );

  if (!getParamsAbi) {
    throw new Error('getParams function not found in ABI');
  }

  const encoded = encodeAbiParameters(getParamsAbi.outputs, [params]);

  let BYTECODE_HEAD =
    '600b380380600b3d393df3363d3d373d3d3d3d60368038038091363936013d73';
  let BYTECODE_TAIL = '5af43d3d93803e603457fd5bf3';

  let eulerSwapImpl = await client.readContract({
    address: factoryAddress,
    abi: EulerSwapFactoryAbi,
    functionName: 'eulerSwapImpl',
    args: []
  });

  return `0x${BYTECODE_HEAD}${eulerSwapImpl.slice(
    2
  )}${BYTECODE_TAIL}${encoded.slice(2)}`;
}

export const isSwapEvent = (
  log: DecodeEventLogReturnType<typeof EulerSwapAbi>
): log is EulerPoolSwapEvent => log.eventName === 'Swap';

const PRECISION = 10n ** 18n;

/**
 * @param amount Amount to be swapped (in or out). Uint256
 * @param exactIn True if amount represents amount swapped in, false if it's amount to be swapped out
 * @param asset0IsInput True if amount represents asset0, false if asset1
 * @param currentReserve0 Pool reserves of asset0. If pool does not exist yet, amount of asset0 which user will be supplying to pool as liquidity. Uint112.
 * @param currentReserve1 Pool reserves of asset1. If pool does not exist yet, amount of asset1 which user will be supplying to pool as liquidity. Uint112.
 * @param price0 Price of asset0. Uint256. Corresponds with priceX in smart contract
 * @param price1 Price of asset1. Uint256. Corresponds with priceY in smart contract
 * @param concentration0 Concentration of asset0. Uint256. Corresponds with concentrationX in smart contract
 * @param concentration1 Concentration of asset1. Uint256. Corresponds with concentrationY in smart contract
 */
export function findEquilibriumPoint(
  amount: bigint,
  exactIn: boolean,
  asset0IsInput: boolean,
  currentReserve0: bigint,
  currentReserve1: bigint,
  price0: bigint,
  price1: bigint,
  concentration0: bigint,
  concentration1: bigint
): bigint {
  // Validate inputs
  checkValidUint(amount);
  checkValidUint(price0);
  checkValidUint(price1);
  checkValidUint(concentration0);
  checkValidUint(concentration1);
  checkValidUint(currentReserve0, 112n);
  checkValidUint(currentReserve1, 112n);

  // Assume that current reserves are equilibrium reserves
  const equilibriumReserve0 = currentReserve0;
  const equilibriumReserve1 = currentReserve1;

  let xNew: bigint;
  let yNew: bigint;
  let output: bigint;

  if (exactIn) {
    if (asset0IsInput) {
      xNew = currentReserve0 + amount;
      if (xNew <= equilibriumReserve0) {
        yNew = f(
          xNew,
          price0,
          price1,
          equilibriumReserve0,
          equilibriumReserve1,
          concentration0
        );
      } else {
        yNew = fInverse(
          xNew,
          price1,
          price0,
          equilibriumReserve1,
          equilibriumReserve0,
          concentration1
        );
      }
      output = currentReserve1 > yNew ? currentReserve1 - yNew : 0n;
    } else {
      yNew = currentReserve1 + amount;
      if (yNew <= equilibriumReserve1) {
        xNew = f(
          yNew,
          price1,
          price0,
          equilibriumReserve1,
          equilibriumReserve0,
          concentration1
        );
      } else {
        xNew = fInverse(
          yNew,
          price0,
          price1,
          equilibriumReserve0,
          equilibriumReserve1,
          concentration0
        );
      }
      output = currentReserve0 > xNew ? currentReserve0 - xNew : 0n;
    }
  } else {
    if (asset0IsInput) {
      if (currentReserve1 <= amount) {
        throw new Error(
          'Insufficient reserve of asset1 for the swap out operation'
        );
      }
      yNew = currentReserve1 - amount;
      if (yNew <= equilibriumReserve1) {
        xNew = f(
          yNew,
          price1,
          price0,
          equilibriumReserve1,
          equilibriumReserve0,
          concentration1
        );
      } else {
        xNew = fInverse(
          yNew,
          price0,
          price1,
          equilibriumReserve0,
          equilibriumReserve1,
          concentration0
        );
      }
      output = xNew > currentReserve0 ? xNew - currentReserve0 : 0n;
    } else {
      if (currentReserve0 <= amount) {
        throw new Error(
          'Insufficient reserve of asset0 for the swap out operation'
        );
      }
      xNew = currentReserve0 - amount;
      if (xNew <= equilibriumReserve0) {
        yNew = f(
          xNew,
          price0,
          price1,
          equilibriumReserve0,
          equilibriumReserve1,
          concentration0
        );
      } else {
        yNew = fInverse(
          xNew,
          price1,
          price0,
          equilibriumReserve1,
          equilibriumReserve0,
          concentration1
        );
      }
      output = yNew > currentReserve1 ? yNew - currentReserve1 : 0n;
    }
  }

  checkValidUint(output);
  return output;
}

function checkValidUint(
  value: bigint,
  uintType: bigint = 256n // Default to Uint256
) {
  if (value < 0n) {
    throw new Error(`Value cannot be negative: ${value}`);
  }
  if (value > 2n ** uintType - 1n) {
    throw new Error(`Value exceeds maximum for Uint${uintType}: ${value}`);
  }
}

function ceilSqrt(n: bigint): bigint {
  const root = bigintSqrt(n);
  return root * root < n ? root + 1n : root;
}

function ceilDiv(numerator: bigint, denominator: bigint): bigint {
  return (numerator + denominator - 1n) / denominator;
}

function f(
  x: bigint,
  px: bigint,
  py: bigint,
  x0: bigint,
  y0: bigint,
  c: bigint
): bigint {
  const v = ceilDiv(
    px * (x0 - x) * (c * x + (PRECISION - c) * x0),
    x * PRECISION
  );
  checkValidUint(v, 248n);
  return y0 + ceilDiv(v, py);
}

function fInverse(
  y: bigint,
  px: bigint,
  py: bigint,
  x0: bigint,
  y0: bigint,
  c: bigint
): bigint {
  let B;
  let C;
  let fourAC;

  let term1 = ceilDiv(py * PRECISION * (y - y0), px);
  let term2 = (2n * c - PRECISION) * x0;
  B = (term1 - term2) / PRECISION;
  C = ceilDiv((PRECISION - c) * x0 ** 2n, PRECISION);
  fourAC = ceilDiv(4n * c * C, PRECISION);

  const absB = B < 0n ? -B : B;
  let squaredB = B ** 2n;
  let discriminant = squaredB + fourAC;
  let sqrt = ceilSqrt(discriminant);

  let x;
  if (B <= 0n) {
    x = ceilDiv((absB + sqrt) * PRECISION, 2n * c + 1n);
  } else {
    x = ceilDiv(2n * C, absB + sqrt) + 1n;
  }

  if (x >= x0) {
    return x0;
  } else {
    return x;
  }
}

const bigintSqrt = function (value: bigint): bigint {
  if (value < 2n) {
    return value;
  }

  if (value < 16n) {
    return BigInt(Math.sqrt(Number(value)) | 0);
  }

  let x0, x1;
  if (value < 4503599627370496n) {
    //1n<<52n
    x1 = BigInt(Math.sqrt(Number(value)) | 0) - 3n;
  } else {
    let vlen = value.toString().length;
    if (!(vlen & 1)) {
      x1 = 10n ** BigInt(vlen / 2);
    } else {
      x1 = 4n * 10n ** BigInt((vlen / 2) | 0);
    }
  }

  do {
    x0 = x1;
    x1 = (value / x0 + x0) >> 1n;
  } while (x0 !== x1 && x0 !== x1 - 1n);
  return x0;
};
