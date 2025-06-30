export const EvcAbi = [
  {
    type: 'function',
    name: 'areChecksDeferred',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'areChecksInProgress',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'batch',
    inputs: [
      {
        name: 'items',
        type: 'tuple[]',
        internalType: 'struct IEVC.BatchItem[]',
        components: [
          {
            name: 'targetContract',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'onBehalfOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'batchRevert',
    inputs: [
      {
        name: 'items',
        type: 'tuple[]',
        internalType: 'struct IEVC.BatchItem[]',
        components: [
          {
            name: 'targetContract',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'onBehalfOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'batchSimulation',
    inputs: [
      {
        name: 'items',
        type: 'tuple[]',
        internalType: 'struct IEVC.BatchItem[]',
        components: [
          {
            name: 'targetContract',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'onBehalfOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'data',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      }
    ],
    outputs: [
      {
        name: 'batchItemsResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.BatchItemResult[]',
        components: [
          {
            name: 'success',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      },
      {
        name: 'accountsStatusCheckResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.StatusCheckResult[]',
        components: [
          {
            name: 'checkedAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isValid',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      },
      {
        name: 'vaultsStatusCheckResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.StatusCheckResult[]',
        components: [
          {
            name: 'checkedAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isValid',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      }
    ],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'call',
    inputs: [
      {
        name: 'targetContract',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'onBehalfOfAccount',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'value',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: 'result',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'controlCollateral',
    inputs: [
      {
        name: 'targetCollateral',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'onBehalfOfAccount',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'value',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [
      {
        name: 'result',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'disableCollateral',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'disableController',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'enableCollateral',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'enableController',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'forgiveAccountStatusCheck',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'forgiveVaultStatusCheck',
    inputs: [],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'getAccountOwner',
    inputs: [
      {
        name: 'account',
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
    name: 'getAddressPrefix',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bytes19',
        internalType: 'bytes19'
      }
    ],
    stateMutability: 'pure'
  },
  {
    type: 'function',
    name: 'getCollaterals',
    inputs: [
      {
        name: 'account',
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
    name: 'getControllers',
    inputs: [
      {
        name: 'account',
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
    name: 'getCurrentOnBehalfOfAccount',
    inputs: [
      {
        name: 'controllerToCheck',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: 'onBehalfOfAccount',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'controllerEnabled',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getLastAccountStatusCheckTimestamp',
    inputs: [
      {
        name: 'account',
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
    name: 'getNonce',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      },
      {
        name: 'nonceNamespace',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [
      {
        name: 'nonce',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getOperator',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      },
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: 'operatorBitField',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getRawExecutionContext',
    inputs: [],
    outputs: [
      {
        name: 'context',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'haveCommonOwner',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'otherAccount',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'pure'
  },
  {
    type: 'function',
    name: 'isAccountOperatorAuthorized',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: 'authorized',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isAccountStatusCheckDeferred',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isCollateralEnabled',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isControlCollateralInProgress',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isControllerEnabled',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isLockdownMode',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isOperatorAuthenticated',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isPermitDisabledMode',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isSimulationInProgress',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'isVaultStatusCheckDeferred',
    inputs: [
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'permit',
    inputs: [
      {
        name: 'signer',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'nonceNamespace',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'nonce',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'deadline',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'value',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'signature',
        type: 'bytes',
        internalType: 'bytes'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'reorderCollaterals',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'index1',
        type: 'uint8',
        internalType: 'uint8'
      },
      {
        name: 'index2',
        type: 'uint8',
        internalType: 'uint8'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'requireAccountAndVaultStatusCheck',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'requireAccountStatusCheck',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'requireVaultStatusCheck',
    inputs: [],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'setAccountOperator',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'authorized',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'setLockdownMode',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      },
      {
        name: 'enabled',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'setNonce',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      },
      {
        name: 'nonceNamespace',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'nonce',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'setOperator',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      },
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'operatorBitField',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'function',
    name: 'setPermitDisabledMode',
    inputs: [
      {
        name: 'addressPrefix',
        type: 'bytes19',
        internalType: 'bytes19'
      },
      {
        name: 'enabled',
        type: 'bool',
        internalType: 'bool'
      }
    ],
    outputs: [],
    stateMutability: 'payable'
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'Registry_AlreadyAdded',
    inputs: []
  },
  {
    type: 'error',
    name: 'Registry_AlreadyRevoked',
    inputs: []
  },
  {
    type: 'error',
    name: 'Registry_NotAdded',
    inputs: []
  },
  {
    type: 'error',
    name: 'AddressEmptyCode',
    inputs: [
      {
        name: 'target',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebtBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnsupportedMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'AccumulatorOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'AddressEmptyCode',
    inputs: [
      {
        name: 'target',
        type: 'address',
        internalType: 'address'
      }
    ]
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
    name: 'FailedCall',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientBalance',
    inputs: [
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidDistribution',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidEpoch',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidRecipient',
    inputs: []
  },
  {
    type: 'error',
    name: 'NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
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
    name: 'TooManyElements',
    inputs: []
  },
  {
    type: 'error',
    name: 'TooManyRewardsEnabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'ERC20InsufficientAllowance',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'allowance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InsufficientBalance',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidApprover',
    inputs: [
      {
        name: 'approver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidReceiver',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidSender',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidSpender',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
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
    name: 'NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OnlyAssetCanDeposit',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'Governance_CallerNotGovernor',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_BatchPanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_ChecksReentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_ControlCollateralReentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_ControllerViolation',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidData',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidNonce',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidOperatorStatus',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidTimestamp',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_LockdownMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_OnBehalfOfAccountNotAuthenticated',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_PermitDisabledMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_RevertedBatchResult',
    inputs: [
      {
        name: 'batchItemsResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.BatchItemResult[]',
        components: [
          {
            name: 'success',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      },
      {
        name: 'accountsStatusResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.StatusCheckResult[]',
        components: [
          {
            name: 'checkedAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isValid',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      },
      {
        name: 'vaultsStatusResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.StatusCheckResult[]',
        components: [
          {
            name: 'checkedAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isValid',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      }
    ]
  },
  {
    type: 'error',
    name: 'EVC_SimulationBatchNested',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidIndex',
    inputs: []
  },
  {
    type: 'error',
    name: 'TooManyElements',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'IRMFactory_ExcessiveInterestRate',
    inputs: []
  },
  {
    type: 'error',
    name: 'IRMFactory_IncorrectKinkValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'Governance_CallerNotGovernor',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'DivFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'DivWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'ExpOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'FactorialOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'FullMulDivFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'LnWadUndefined',
    inputs: []
  },
  {
    type: 'error',
    name: 'MantissaOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'MulDivFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'MulWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'OutOfDomain',
    inputs: []
  },
  {
    type: 'error',
    name: 'RPowOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'SDivWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'SMulWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DeploymentFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Implementation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'Governance_CallerNotGovernor',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'AllowanceExpired',
    inputs: [
      {
        name: 'deadline',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ExcessiveInvalidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientAllowance',
    inputs: [
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'Factory_BadQuery',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_IRMUpdateUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_IRMUpdateUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_IRMUpdateUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'AI',
    inputs: []
  },
  {
    type: 'error',
    name: 'AS',
    inputs: []
  },
  {
    type: 'error',
    name: 'F0',
    inputs: []
  },
  {
    type: 'error',
    name: 'F1',
    inputs: []
  },
  {
    type: 'error',
    name: 'IIA',
    inputs: []
  },
  {
    type: 'error',
    name: 'L',
    inputs: []
  },
  {
    type: 'error',
    name: 'LOK',
    inputs: []
  },
  {
    type: 'error',
    name: 'M0',
    inputs: []
  },
  {
    type: 'error',
    name: 'M1',
    inputs: []
  },
  {
    type: 'error',
    name: 'TLM',
    inputs: []
  },
  {
    type: 'error',
    name: 'TLU',
    inputs: []
  },
  {
    type: 'error',
    name: 'TUM',
    inputs: []
  },
  {
    type: 'error',
    name: 'AI',
    inputs: []
  },
  {
    type: 'error',
    name: 'AS',
    inputs: []
  },
  {
    type: 'error',
    name: 'F0',
    inputs: []
  },
  {
    type: 'error',
    name: 'F1',
    inputs: []
  },
  {
    type: 'error',
    name: 'IIA',
    inputs: []
  },
  {
    type: 'error',
    name: 'L',
    inputs: []
  },
  {
    type: 'error',
    name: 'LOK',
    inputs: []
  },
  {
    type: 'error',
    name: 'M0',
    inputs: []
  },
  {
    type: 'error',
    name: 'M1',
    inputs: []
  },
  {
    type: 'error',
    name: 'TLM',
    inputs: []
  },
  {
    type: 'error',
    name: 'TLU',
    inputs: []
  },
  {
    type: 'error',
    name: 'TUM',
    inputs: []
  },
  {
    type: 'error',
    name: 'PerspectiveError',
    inputs: [
      {
        name: 'perspective',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'codes',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PerspectivePanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVault_Panic',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DeploymentFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'PO_BaseUnsupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'PO_NoPath',
    inputs: []
  },
  {
    type: 'error',
    name: 'PO_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PO_QuoteUnsupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebtBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnsupportedMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_InvalidAdmin',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidConfigValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidVault',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OnlyAdmin',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'SafeERC20FailedDecreaseAllowance',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'currentAllowance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requestedDecrease',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
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
    name: 'E_Permit2AmountOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InsufficientAllowance',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'allowance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InsufficientBalance',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidApprover',
    inputs: [
      {
        name: 'approver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidReceiver',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidSender',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidSpender',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidIndex',
    inputs: []
  },
  {
    type: 'error',
    name: 'TooManyElements',
    inputs: []
  },
  {
    type: 'error',
    name: 'OwnableInvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'OwnableUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'Registry_AlreadyAdded',
    inputs: []
  },
  {
    type: 'error',
    name: 'Registry_AlreadyRevoked',
    inputs: []
  },
  {
    type: 'error',
    name: 'Registry_NotAdded',
    inputs: []
  },
  {
    type: 'error',
    name: 'SwapVerifier_debtMax',
    inputs: []
  },
  {
    type: 'error',
    name: 'SwapVerifier_pastDeadline',
    inputs: []
  },
  {
    type: 'error',
    name: 'SwapVerifier_skimMin',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebtBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnknownHandler',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnknownMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnsupportedMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'UniswapV2Handler_InvalidPath',
    inputs: []
  },
  {
    type: 'error',
    name: 'UniswapV3Handler_InvalidPath',
    inputs: []
  },
  {
    type: 'error',
    name: 'R',
    inputs: []
  },
  {
    type: 'error',
    name: 'T',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'AccumulatorOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'AddressEmptyCode',
    inputs: [
      {
        name: 'target',
        type: 'address',
        internalType: 'address'
      }
    ]
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
    name: 'FailedCall',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientBalance',
    inputs: [
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidDistribution',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidEpoch',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidRecipient',
    inputs: []
  },
  {
    type: 'error',
    name: 'NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
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
    name: 'TooManyElements',
    inputs: []
  },
  {
    type: 'error',
    name: 'TooManyRewardsEnabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebtBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnsupportedMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebtBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnsupportedMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'UniswapV2Handler_InvalidPath',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_TargetDebtBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'Swapper_UnsupportedMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'UniswapV3Handler_InvalidPath',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'T',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransferFromFailed',
    inputs: [
      {
        name: 'errorTransferFrom',
        type: 'bytes',
        internalType: 'bytes'
      },
      {
        name: 'errorPermit2',
        type: 'bytes',
        internalType: 'bytes'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampFromTooLongFuture',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'TimestampIsTooOld',
    inputs: [
      {
        name: 'receivedTimestampSeconds',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'blockTimestamp',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155InsufficientBalance',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155InvalidApprover',
    inputs: [
      {
        name: 'approver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155InvalidArrayLength',
    inputs: [
      {
        name: 'idsLength',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'valuesLength',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155InvalidOperator',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155InvalidReceiver',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155InvalidSender',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC1155MissingApprovalForAll',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InsufficientAllowance',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'allowance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InsufficientBalance',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidApprover',
    inputs: [
      {
        name: 'approver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidReceiver',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidSender',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC20InvalidSpender',
    inputs: [
      {
        name: 'spender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721IncorrectOwner',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InsufficientApproval',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InvalidApprover',
    inputs: [
      {
        name: 'approver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InvalidOperator',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InvalidOwner',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InvalidReceiver',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721InvalidSender',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'ERC721NonexistentToken',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'Governance_CallerNotGovernor',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'Governance_CallerNotGovernor',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'CalldataMustHaveValidPayload',
    inputs: []
  },
  {
    type: 'error',
    name: 'CalldataOverOrUnderFlow',
    inputs: []
  },
  {
    type: 'error',
    name: 'CanNotPickMedianOfEmptyArray',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampMustNotBeZero',
    inputs: []
  },
  {
    type: 'error',
    name: 'DataPackageTimestampsMustBeEqual',
    inputs: []
  },
  {
    type: 'error',
    name: 'EachSignerMustProvideTheSameValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EmptyCalldataPointersArr',
    inputs: []
  },
  {
    type: 'error',
    name: 'GetDataServiceIdNotImplemented',
    inputs: []
  },
  {
    type: 'error',
    name: 'IncorrectUnsignedMetadataSize',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientNumberOfUniqueSigners',
    inputs: [
      {
        name: 'receivedSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'requiredSignersCount',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'InvalidCalldataPointer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidAnswer',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_InvalidConfiguration',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_NotSupported',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'PriceOracle_Overflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'PriceOracle_TooStale',
    inputs: [
      {
        name: 'staleness',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'maxStaleness',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'RedstonePayloadMustHaveAtLeastOneDataPackage',
    inputs: []
  },
  {
    type: 'error',
    name: 'SignerNotAuthorised',
    inputs: [
      {
        name: 'receivedSigner',
        type: 'address',
        internalType: 'address'
      }
    ]
  },
  {
    type: 'error',
    name: 'E_AccountLiquidity',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_AmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadAssetReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadBorrowCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadCollateral',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadFee',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesOwner',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSharesReceiver',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BadSupplyCap',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_BorrowCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CheckUnauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_CollateralDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ConfigAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ControllerDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_DebtAmountTooLargeToEncode',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ExcessiveRepayAmount',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_FlashLoanNotRepaid',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Initialized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAllowance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientBalance',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientCash',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InsufficientDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_InvalidLTVAsset',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVBorrow',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LTVLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_LiquidationCoolOff',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_MinYield',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoLiability',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NoPriceOracle',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotController',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotHookTarget',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_NotSupported',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OperationDisabled',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_OutstandingDebt',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ProxyMetadata',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Reentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_RepayTooMuch',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfApproval',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfLiquidation',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SelfTransfer',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_SupplyCapExceeded',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_TransientState',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_Unauthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ViolatorLiquidityDeferred',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroAssets',
    inputs: []
  },
  {
    type: 'error',
    name: 'E_ZeroShares',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_BatchPanic',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_ChecksReentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_ControlCollateralReentrancy',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_ControllerViolation',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_EmptyError',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidAddress',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidData',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidNonce',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidOperatorStatus',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidTimestamp',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_InvalidValue',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_LockdownMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_NotAuthorized',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_OnBehalfOfAccountNotAuthenticated',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_PermitDisabledMode',
    inputs: []
  },
  {
    type: 'error',
    name: 'EVC_RevertedBatchResult',
    inputs: [
      {
        name: 'batchItemsResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.BatchItemResult[]',
        components: [
          {
            name: 'success',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      },
      {
        name: 'accountsStatusResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.StatusCheckResult[]',
        components: [
          {
            name: 'checkedAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isValid',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      },
      {
        name: 'vaultsStatusResult',
        type: 'tuple[]',
        internalType: 'struct IEVC.StatusCheckResult[]',
        components: [
          {
            name: 'checkedAddress',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isValid',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'result',
            type: 'bytes',
            internalType: 'bytes'
          }
        ]
      }
    ]
  },
  {
    type: 'error',
    name: 'EVC_SimulationBatchNested',
    inputs: []
  },
  {
    type: 'error',
    name: 'InvalidIndex',
    inputs: []
  },
  {
    type: 'error',
    name: 'TooManyElements',
    inputs: []
  },
  {
    type: 'error',
    name: 'FailedCall',
    inputs: []
  },
  {
    type: 'error',
    name: 'FailedDeployment',
    inputs: []
  },
  {
    type: 'error',
    name: 'InsufficientBalance',
    inputs: [
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256'
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256'
      }
    ]
  },
  {
    type: 'error',
    name: 'DivFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'DivWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'ExpOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'FactorialOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'FullMulDivFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'LnWadUndefined',
    inputs: []
  },
  {
    type: 'error',
    name: 'MantissaOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'MulDivFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'MulWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'OutOfDomain',
    inputs: []
  },
  {
    type: 'error',
    name: 'RPowOverflow',
    inputs: []
  },
  {
    type: 'error',
    name: 'SDivWadFailed',
    inputs: []
  },
  {
    type: 'error',
    name: 'SMulWadFailed',
    inputs: []
  }
] as const;
