export const EulerSwapPeripheryAbi = [
  {
    type: 'function',
    name: 'getLimits',
    inputs: [
      {
        name: 'eulerSwap',
        type: 'address',
        internalType: 'address'
      },
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
    name: 'quoteExactInput',
    inputs: [
      {
        name: 'eulerSwap',
        type: 'address',
        internalType: 'address'
      },
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
        name: 'amountIn',
        type: 'uint256',
        internalType: 'uint256'
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
    name: 'quoteExactOutput',
    inputs: [
      {
        name: 'eulerSwap',
        type: 'address',
        internalType: 'address'
      },
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
        name: 'amountOut',
        type: 'uint256',
        internalType: 'uint256'
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
    name: 'swapExactIn',
    inputs: [
      {
        name: 'eulerSwap',
        type: 'address',
        internalType: 'address'
      },
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
        name: 'amountIn',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'amountOutMin',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'deadline',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'swapExactOut',
    inputs: [
      {
        name: 'eulerSwap',
        type: 'address',
        internalType: 'address'
      },
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
        name: 'amountOut',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'amountInMax',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'deadline',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'error',
    name: 'AmountInMoreThanMax',
    inputs: []
  },
  {
    type: 'error',
    name: 'AmountOutLessThanMin',
    inputs: []
  },
  {
    type: 'error',
    name: 'DeadlineExpired',
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
  }
] as const;
