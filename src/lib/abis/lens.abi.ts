export const ElensAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_oracleLens',
        type: 'address',
        internalType: 'address'
      }
    ],
    stateMutability: 'nonpayable'
  },
  {
    type: 'function',
    name: 'TTL_ERROR',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'int256',
        internalType: 'int256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'TTL_INFINITY',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'int256',
        internalType: 'int256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'TTL_LIQUIDATION',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'int256',
        internalType: 'int256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'TTL_MORE_THAN_ONE_YEAR',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'int256',
        internalType: 'int256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getAssetPriceInfo',
    inputs: [
      {
        name: 'asset',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'unitOfAccount',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct AssetPriceInfo',
        components: [
          {
            name: 'queryFailure',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'queryFailureReason',
            type: 'bytes',
            internalType: 'bytes'
          },
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'oracle',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'asset',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'unitOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'amountIn',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'amountOutMid',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'amountOutBid',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'amountOutAsk',
            type: 'uint256',
            internalType: 'uint256'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getControllerAssetPriceInfo',
    inputs: [
      {
        name: 'controller',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'asset',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct AssetPriceInfo',
        components: [
          {
            name: 'queryFailure',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'queryFailureReason',
            type: 'bytes',
            internalType: 'bytes'
          },
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'oracle',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'asset',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'unitOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'amountIn',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'amountOutMid',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'amountOutBid',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'amountOutAsk',
            type: 'uint256',
            internalType: 'uint256'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getRecognizedCollateralsLTVInfo',
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
        type: 'tuple[]',
        internalType: 'struct LTVInfo[]',
        components: [
          {
            name: 'collateral',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'borrowLTV',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'liquidationLTV',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'initialLiquidationLTV',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'targetTimestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'rampDuration',
            type: 'uint256',
            internalType: 'uint256'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getRewardVaultInfo',
    inputs: [
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'reward',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'numberOfEpochs',
        type: 'uint256',
        internalType: 'uint256'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct VaultRewardInfo',
        components: [
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'reward',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'rewardName',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'rewardSymbol',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'rewardDecimals',
            type: 'uint8',
            internalType: 'uint8'
          },
          {
            name: 'balanceTracker',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'epochDuration',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'currentEpoch',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalRewardedEligible',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalRewardRegistered',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalRewardClaimed',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'epochInfoPrevious',
            type: 'tuple[]',
            internalType: 'struct RewardAmountInfo[]',
            components: [
              {
                name: 'epoch',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'epochStart',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'epochEnd',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'rewardAmount',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'epochInfoUpcoming',
            type: 'tuple[]',
            internalType: 'struct RewardAmountInfo[]',
            components: [
              {
                name: 'epoch',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'epochStart',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'epochEnd',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'rewardAmount',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getVaultInfoFull',
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
        type: 'tuple',
        internalType: 'struct VaultInfoFull',
        components: [
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'vaultName',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'vaultSymbol',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'vaultDecimals',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'asset',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'assetName',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'assetSymbol',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'assetDecimals',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'unitOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'unitOfAccountName',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'unitOfAccountSymbol',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'unitOfAccountDecimals',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalShares',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalCash',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalBorrowed',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalAssets',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'accumulatedFeesShares',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'accumulatedFeesAssets',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'governorFeeReceiver',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'protocolFeeReceiver',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'protocolFeeShare',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'interestFee',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'hookedOperations',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'configFlags',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'supplyCap',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'borrowCap',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'maxLiquidationDiscount',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'liquidationCoolOffTime',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'dToken',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'oracle',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'interestRateModel',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'hookTarget',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'evc',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'protocolConfig',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'balanceTracker',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'permit2',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'creator',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'governorAdmin',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'irmInfo',
            type: 'tuple',
            internalType: 'struct VaultInterestRateModelInfo',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'vault',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'interestRateModel',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'interestRateInfo',
                type: 'tuple[]',
                internalType: 'struct InterestRateInfo[]',
                components: [
                  {
                    name: 'cash',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'borrows',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'borrowSPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'supplySPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'borrowAPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'supplyAPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
              }
            ]
          },
          {
            name: 'collateralLTVInfo',
            type: 'tuple[]',
            internalType: 'struct LTVInfo[]',
            components: [
              {
                name: 'collateral',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'borrowLTV',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'liquidationLTV',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'initialLiquidationLTV',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'targetTimestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'rampDuration',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'liabilityPriceInfo',
            type: 'tuple',
            internalType: 'struct AssetPriceInfo',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'unitOfAccount',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutMid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutBid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutAsk',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'collateralPriceInfo',
            type: 'tuple[]',
            internalType: 'struct AssetPriceInfo[]',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'unitOfAccount',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutMid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutBid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutAsk',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'oracleInfo',
            type: 'tuple',
            internalType: 'struct OracleDetailedInfo',
            components: [
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'name',
                type: 'string',
                internalType: 'string'
              },
              {
                name: 'oracleInfo',
                type: 'bytes',
                internalType: 'bytes'
              }
            ]
          },
          {
            name: 'backupAssetPriceInfo',
            type: 'tuple',
            internalType: 'struct AssetPriceInfo',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'unitOfAccount',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutMid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutBid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutAsk',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'backupAssetOracleInfo',
            type: 'tuple',
            internalType: 'struct OracleDetailedInfo',
            components: [
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'name',
                type: 'string',
                internalType: 'string'
              },
              {
                name: 'oracleInfo',
                type: 'bytes',
                internalType: 'bytes'
              }
            ]
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getVaultInfoSimple',
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
        type: 'tuple',
        internalType: 'struct VaultInfoSimple',
        components: [
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'vaultName',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'vaultSymbol',
            type: 'string',
            internalType: 'string'
          },
          {
            name: 'vaultDecimals',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'asset',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'assetDecimals',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'unitOfAccount',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'unitOfAccountDecimals',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalShares',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalCash',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalBorrowed',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'totalAssets',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'oracle',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'governorAdmin',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'irmInfo',
            type: 'tuple',
            internalType: 'struct VaultInterestRateModelInfo',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'vault',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'interestRateModel',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'interestRateInfo',
                type: 'tuple[]',
                internalType: 'struct InterestRateInfo[]',
                components: [
                  {
                    name: 'cash',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'borrows',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'borrowSPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'supplySPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'borrowAPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'supplyAPY',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
              }
            ]
          },
          {
            name: 'collateralLTVInfo',
            type: 'tuple[]',
            internalType: 'struct LTVInfo[]',
            components: [
              {
                name: 'collateral',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'borrowLTV',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'liquidationLTV',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'initialLiquidationLTV',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'targetTimestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'rampDuration',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'liabilityPriceInfo',
            type: 'tuple',
            internalType: 'struct AssetPriceInfo',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'unitOfAccount',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutMid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutBid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutAsk',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'collateralPriceInfo',
            type: 'tuple[]',
            internalType: 'struct AssetPriceInfo[]',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'unitOfAccount',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutMid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutBid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutAsk',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'oracleInfo',
            type: 'tuple',
            internalType: 'struct OracleDetailedInfo',
            components: [
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'name',
                type: 'string',
                internalType: 'string'
              },
              {
                name: 'oracleInfo',
                type: 'bytes',
                internalType: 'bytes'
              }
            ]
          },
          {
            name: 'backupAssetPriceInfo',
            type: 'tuple',
            internalType: 'struct AssetPriceInfo',
            components: [
              {
                name: 'queryFailure',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'queryFailureReason',
                type: 'bytes',
                internalType: 'bytes'
              },
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'unitOfAccount',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutMid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutBid',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'amountOutAsk',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          },
          {
            name: 'backupAssetOracleInfo',
            type: 'tuple',
            internalType: 'struct OracleDetailedInfo',
            components: [
              {
                name: 'oracle',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'name',
                type: 'string',
                internalType: 'string'
              },
              {
                name: 'oracleInfo',
                type: 'bytes',
                internalType: 'bytes'
              }
            ]
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getVaultInterestRateModelInfo',
    inputs: [
      {
        name: 'vault',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'cash',
        type: 'uint256[]',
        internalType: 'uint256[]'
      },
      {
        name: 'borrows',
        type: 'uint256[]',
        internalType: 'uint256[]'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct VaultInterestRateModelInfo',
        components: [
          {
            name: 'queryFailure',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'queryFailureReason',
            type: 'bytes',
            internalType: 'bytes'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'interestRateModel',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'interestRateInfo',
            type: 'tuple[]',
            internalType: 'struct InterestRateInfo[]',
            components: [
              {
                name: 'cash',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrows',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrowSPY',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'supplySPY',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrowAPY',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'supplyAPY',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getVaultKinkInterestRateModelInfo',
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
        type: 'tuple',
        internalType: 'struct VaultInterestRateModelInfo',
        components: [
          {
            name: 'queryFailure',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'queryFailureReason',
            type: 'bytes',
            internalType: 'bytes'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'interestRateModel',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'interestRateInfo',
            type: 'tuple[]',
            internalType: 'struct InterestRateInfo[]',
            components: [
              {
                name: 'cash',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrows',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrowSPY',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'supplySPY',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrowAPY',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'supplyAPY',
                type: 'uint256',
                internalType: 'uint256'
              }
            ]
          }
        ]
      },
      {
        name: '',
        type: 'tuple',
        internalType: 'struct KinkInterestRateModelInfo',
        components: [
          {
            name: 'interestRateModel',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'baseRate',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'slope1',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'slope2',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'kink',
            type: 'uint256',
            internalType: 'uint256'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'oracleLens',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract OracleLens'
      }
    ],
    stateMutability: 'view'
  }
] as const;
