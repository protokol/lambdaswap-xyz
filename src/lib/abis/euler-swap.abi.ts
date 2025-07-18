export const EulerSwapAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'evc_',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'poolManager_',
        type: 'address',
        internalType: 'address'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'EVC',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'activate',
    inputs: [
      {
        name: 'initialState',
        type: 'tuple',
        internalType: 'struct IEulerSwap.InitialState',
        components: [
          {
            name: 'currReserve0',
            type: 'uint112',
            internalType: 'uint112'
          },
          {
            name: 'currReserve1',
            type: 'uint112',
            internalType: 'uint112'
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'afterAddLiquidity',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IPoolManager.ModifyLiquidityParams',
        components: [
          {
            name: 'tickLower',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'tickUpper',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'liquidityDelta',
            type: 'int256',
            internalType: 'int256'
          },
          {
            name: 'salt',
            type: 'bytes32',
            internalType: 'bytes32'
          }
        ]
      },
      {
        name: 'delta',
        type: 'int256',
        internalType: 'BalanceDelta'
      },
      {
        name: 'feesAccrued',
        type: 'int256',
        internalType: 'BalanceDelta'
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      },
      {
        name: '',
        type: 'int256',
        internalType: 'BalanceDelta'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'afterDonate',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'amount0',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'amount1',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'afterInitialize',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'sqrtPriceX96',
        type: 'uint160',
        internalType: 'uint160'
      },
      {
        name: 'tick',
        type: 'int24',
        internalType: 'int24'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'afterRemoveLiquidity',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IPoolManager.ModifyLiquidityParams',
        components: [
          {
            name: 'tickLower',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'tickUpper',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'liquidityDelta',
            type: 'int256',
            internalType: 'int256'
          },
          {
            name: 'salt',
            type: 'bytes32',
            internalType: 'bytes32'
          }
        ]
      },
      {
        name: 'delta',
        type: 'int256',
        internalType: 'BalanceDelta'
      },
      {
        name: 'feesAccrued',
        type: 'int256',
        internalType: 'BalanceDelta'
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      },
      {
        name: '',
        type: 'int256',
        internalType: 'BalanceDelta'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'afterSwap',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IPoolManager.SwapParams',
        components: [
          {
            name: 'zeroForOne',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'amountSpecified',
            type: 'int256',
            internalType: 'int256'
          },
          {
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
            internalType: 'uint160'
          }
        ]
      },
      {
        name: 'delta',
        type: 'int256',
        internalType: 'BalanceDelta'
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      },
      {
        name: '',
        type: 'int128',
        internalType: 'int128'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'beforeAddLiquidity',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IPoolManager.ModifyLiquidityParams',
        components: [
          {
            name: 'tickLower',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'tickUpper',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'liquidityDelta',
            type: 'int256',
            internalType: 'int256'
          },
          {
            name: 'salt',
            type: 'bytes32',
            internalType: 'bytes32'
          }
        ]
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'beforeDonate',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'amount0',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'amount1',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'beforeInitialize',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'sqrtPriceX96',
        type: 'uint160',
        internalType: 'uint160'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'beforeRemoveLiquidity',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IPoolManager.ModifyLiquidityParams',
        components: [
          {
            name: 'tickLower',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'tickUpper',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'liquidityDelta',
            type: 'int256',
            internalType: 'int256'
          },
          {
            name: 'salt',
            type: 'bytes32',
            internalType: 'bytes32'
          }
        ]
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'beforeSwap',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      },
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IPoolManager.SwapParams',
        components: [
          {
            name: 'zeroForOne',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'amountSpecified',
            type: 'int256',
            internalType: 'int256'
          },
          {
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
            internalType: 'uint160'
          }
        ]
      },
      {
        name: 'hookData',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes4',
        internalType: 'bytes4'
      },
      {
        name: '',
        type: 'int256',
        internalType: 'BeforeSwapDelta'
      },
      {
        name: '',
        type: 'uint24',
        internalType: 'uint24'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'computeQuote',
    inputs: [
      {
        name: 'tokenIn',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'tokenOut',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'exactIn',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'curve',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getAssets',
    inputs: [],
    outputs: [
      {
        name: 'asset0',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'asset1',
        type: 'address',
        internalType: 'address'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getHookPermissions',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct Hooks.Permissions',
        components: [
          {
            name: 'beforeInitialize',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterInitialize',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'beforeAddLiquidity',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterAddLiquidity',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'beforeRemoveLiquidity',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterRemoveLiquidity',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'beforeSwap',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterSwap',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'beforeDonate',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterDonate',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'beforeSwapReturnDelta',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterSwapReturnDelta',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterAddLiquidityReturnDelta',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'afterRemoveLiquidityReturnDelta',
            type: 'bool',
            internalType: 'bool'
          }
        ]
      }
    ],
    stateMutability: 'pure'
  },
  {
    type: 'function',
    name: 'getLimits',
    inputs: [
      {
        name: 'tokenIn',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'tokenOut',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getParams',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IEulerSwap.Params',
        components: [
          {
            name: 'vault0',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'vault1',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'eulerAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'equilibriumReserve0',
            type: 'uint112',
            internalType: 'uint112'
          },
          {
            name: 'equilibriumReserve1',
            type: 'uint112',
            internalType: 'uint112'
          },
          {
            name: 'priceX',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'priceY',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'concentrationX',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'concentrationY',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'fee',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'protocolFee',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'protocolFeeRecipient',
            type: 'address',
            internalType: 'address'
          }
        ]
      }
    ],
    stateMutability: 'pure'
  },
  {
    type: 'function',
    name: 'getReserves',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint112',
        internalType: 'uint112'
      },
      {
        name: '',
        type: 'uint112',
        internalType: 'uint112'
      },
      {
        name: '',
        type: 'uint32',
        internalType: 'uint32'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'poolKey',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency'
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24'
          },
          {
            name: 'tickSpacing',
            type: 'int24',
            internalType: 'int24'
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'poolManager',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract IPoolManager'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'swap',
    inputs: [
      {
        name: 'amount0Out',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'amount1Out',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'to',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'event',
    name: 'EulerSwapActivated',
    inputs: [
      {
        name: 'asset0',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'asset1',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'Swap',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'amount0In',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'amount1In',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'amount0Out',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'amount1Out',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      },
      {
        name: 'reserve0',
        type: 'uint112',
        indexed: false,
        internalType: 'uint112'
      },
      {
        name: 'reserve1',
        type: 'uint112',
        indexed: false,
        internalType: 'uint112'
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'error',
    name: 'AlreadyActivated',
    inputs: []
  },
  {
    type: 'error',
    name: 'AmountTooBig',
    inputs: []
  },
  {
    type: 'error',
    name: 'AssetsOutOfOrderOrEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'BadParam',
    inputs: []
  },
  {
    type: 'error',
    name: 'ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'CurveViolation',
    inputs: []
  },
  {
    type: 'error',
    name: 'DepositFailure',
    inputs: [
      {
        name: 'reason',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'EVC_InvalidAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'HookNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientCalldata',
    inputs: []
  },
  {
    type: 'error',
    name: 'Locked',
    inputs: []
  },
  {
    type: 'error',
    name: 'LockedHook',
    inputs: []
  },
  {
    type: 'error',
    name: 'NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'NotPoolManager',
    inputs: []
  },
  {
    type: 'error',
    name: 'OperatorNotInstalled',
    inputs: []
  },
  {
    type: 'error',
    name: 'Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'SafeERC20FailedOperation',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'SwapLimitExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'UnsupportedPair',
    inputs: []
  }
] as const;
