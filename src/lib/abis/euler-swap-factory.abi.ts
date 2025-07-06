export const EulerSwapFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'evc',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'evkFactory_',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'eulerSwapImpl_',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'feeOwner_',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'feeRecipientSetter_',
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
    name: 'MAX_PROTOCOL_FEE',
    inputs: [],
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
    name: 'MIN_PROTOCOL_FEE',
    inputs: [],
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
    name: 'computePoolAddress',
    inputs: [
      {
        name: 'poolParams',
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
      },
      {
        name: 'salt',
        type: 'bytes32',
        internalType: 'bytes32'
      }
    ],
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
    name: 'deployPool',
    inputs: [
      {
        name: 'params',
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
      },
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
      },
      {
        name: 'salt',
        type: 'bytes32',
        internalType: 'bytes32'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'deploymentTimestamp',
    inputs: [],
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
    name: 'enableProtocolFee',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'eulerSwapImpl',
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
    name: 'evkFactory',
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
    name: 'owner',
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
    name: 'poolByEulerAccount',
    inputs: [
      {
        name: 'eulerAccount',
        type: 'address',
        internalType: 'address'
      }
    ],
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
    name: 'pools',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'poolsByPair',
    inputs: [
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
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'poolsByPairLength',
    inputs: [
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
    name: 'poolsByPairSlice',
    inputs: [
      {
        name: 'asset0',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'asset1',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'start',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'end',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'poolsLength',
    inputs: [],
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
    name: 'poolsSlice',
    inputs: [
      {
        name: 'start',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'end',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'protocolFee',
    inputs: [],
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
    name: 'protocolFeeRecipient',
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
    name: 'recipientSetter',
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
    name: 'setProtocolFee',
    inputs: [
      {
        name: 'newFee',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'setProtocolFeeRecipient',
    inputs: [
      {
        name: 'newRecipient',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'transferOwnership',
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'uninstallPool',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable'
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        name: 'user',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'PoolConfig',
    inputs: [
      {
        name: 'pool',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'params',
        type: 'tuple',
        indexed: false,
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
      },
      {
        name: 'initialState',
        type: 'tuple',
        indexed: false,
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
    anonymous: false
  },
  {
    type: 'event',
    name: 'PoolDeployed',
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
      },
      {
        name: 'eulerAccount',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'pool',
        type: 'address',
        indexed: false,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'PoolUninstalled',
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
      },
      {
        name: 'eulerAccount',
        type: 'address',
        indexed: true,
        internalType: 'address'
      },
      {
        name: 'pool',
        type: 'address',
        indexed: false,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'ProtocolFeeRecipientSet',
    inputs: [
      {
        name: 'protocolFeeRecipient',
        type: 'address',
        indexed: false,
        internalType: 'address'
      }
    ],
    anonymous: false
  },
  {
    type: 'event',
    name: 'ProtocolFeeSet',
    inputs: [
      {
        name: 'protocolFee',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256'
      }
    ],
    anonymous: false
  },
  {
    type: 'error',
    name: 'ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DeploymentFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidProtocolFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidVaultImplementation',
    inputs: []
  },
  {
    type: 'error',
    name: 'NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'OldOperatorStillInstalled',
    inputs: []
  },
  {
    type: 'error',
    name: 'OperatorNotInstalled',
    inputs: []
  },
  {
    type: 'error',
    name: 'RecipientSetAlready',
    inputs: []
  },
  {
    type: 'error',
    name: 'SliceOutOfBounds',
    inputs: []
  },
  {
    type: 'error',
    name: 'Unauthorized',
    inputs: []
  }
] as const;
