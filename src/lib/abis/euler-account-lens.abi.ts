export const EulerAccountLensAbi = [
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
    name: 'getAccountEnabledVaultsInfo',
    inputs: [
      {
        name: 'evc',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct AccountMultipleVaultsInfo',
        components: [
          {
            name: 'evcAccountInfo',
            type: 'tuple',
            internalType: 'struct EVCAccountInfo',
            components: [
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'evc',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'account',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'addressPrefix',
                type: 'bytes19',
                internalType: 'bytes19'
              },
              {
                name: 'owner',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'isLockdownMode',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'isPermitDisabledMode',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'lastAccountStatusCheckTimestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'enabledControllers',
                type: 'address[]',
                internalType: 'address[]'
              },
              {
                name: 'enabledCollaterals',
                type: 'address[]',
                internalType: 'address[]'
              }
            ]
          },
          {
            name: 'vaultAccountInfo',
            type: 'tuple[]',
            internalType: 'struct VaultAccountInfo[]',
            components: [
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'account',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'vault',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'assetsAccount',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'shares',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assets',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrowed',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowanceVault',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowanceVaultPermit2',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowanceExpirationVaultPermit2',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowancePermit2',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'balanceForwarderEnabled',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'isController',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'isCollateral',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'liquidityInfo',
                type: 'tuple',
                internalType: 'struct AccountLiquidityInfo',
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
                    name: 'timeToLiquidation',
                    type: 'int256',
                    internalType: 'int256'
                  },
                  {
                    name: 'liabilityValue',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralValueBorrowing',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralValueLiquidation',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralValueRaw',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralLiquidityBorrowingInfo',
                    type: 'tuple[]',
                    internalType: 'struct CollateralLiquidityInfo[]',
                    components: [
                      {
                        name: 'collateral',
                        type: 'address',
                        internalType: 'address'
                      },
                      {
                        name: 'collateralValue',
                        type: 'uint256',
                        internalType: 'uint256'
                      }
                    ]
                  },
                  {
                    name: 'collateralLiquidityLiquidationInfo',
                    type: 'tuple[]',
                    internalType: 'struct CollateralLiquidityInfo[]',
                    components: [
                      {
                        name: 'collateral',
                        type: 'address',
                        internalType: 'address'
                      },
                      {
                        name: 'collateralValue',
                        type: 'uint256',
                        internalType: 'uint256'
                      }
                    ]
                  },
                  {
                    name: 'collateralLiquidityRawInfo',
                    type: 'tuple[]',
                    internalType: 'struct CollateralLiquidityInfo[]',
                    components: [
                      {
                        name: 'collateral',
                        type: 'address',
                        internalType: 'address'
                      },
                      {
                        name: 'collateralValue',
                        type: 'uint256',
                        internalType: 'uint256'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'accountRewardInfo',
            type: 'tuple[]',
            internalType: 'struct AccountRewardInfo[]',
            components: [
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'account',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'vault',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'balanceTracker',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'balanceForwarderEnabled',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'balance',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'enabledRewardsInfo',
                type: 'tuple[]',
                internalType: 'struct EnabledRewardInfo[]',
                components: [
                  {
                    name: 'reward',
                    type: 'address',
                    internalType: 'address'
                  },
                  {
                    name: 'earnedReward',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'earnedRewardRecentIgnored',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
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
    name: 'getAccountInfo',
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
        type: 'tuple',
        internalType: 'struct AccountInfo',
        components: [
          {
            name: 'evcAccountInfo',
            type: 'tuple',
            internalType: 'struct EVCAccountInfo',
            components: [
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'evc',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'account',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'addressPrefix',
                type: 'bytes19',
                internalType: 'bytes19'
              },
              {
                name: 'owner',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'isLockdownMode',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'isPermitDisabledMode',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'lastAccountStatusCheckTimestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'enabledControllers',
                type: 'address[]',
                internalType: 'address[]'
              },
              {
                name: 'enabledCollaterals',
                type: 'address[]',
                internalType: 'address[]'
              }
            ]
          },
          {
            name: 'vaultAccountInfo',
            type: 'tuple',
            internalType: 'struct VaultAccountInfo',
            components: [
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'account',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'vault',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'asset',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'assetsAccount',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'shares',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assets',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'borrowed',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowanceVault',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowanceVaultPermit2',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowanceExpirationVaultPermit2',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'assetAllowancePermit2',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'balanceForwarderEnabled',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'isController',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'isCollateral',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'liquidityInfo',
                type: 'tuple',
                internalType: 'struct AccountLiquidityInfo',
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
                    name: 'timeToLiquidation',
                    type: 'int256',
                    internalType: 'int256'
                  },
                  {
                    name: 'liabilityValue',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralValueBorrowing',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralValueLiquidation',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralValueRaw',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'collateralLiquidityBorrowingInfo',
                    type: 'tuple[]',
                    internalType: 'struct CollateralLiquidityInfo[]',
                    components: [
                      {
                        name: 'collateral',
                        type: 'address',
                        internalType: 'address'
                      },
                      {
                        name: 'collateralValue',
                        type: 'uint256',
                        internalType: 'uint256'
                      }
                    ]
                  },
                  {
                    name: 'collateralLiquidityLiquidationInfo',
                    type: 'tuple[]',
                    internalType: 'struct CollateralLiquidityInfo[]',
                    components: [
                      {
                        name: 'collateral',
                        type: 'address',
                        internalType: 'address'
                      },
                      {
                        name: 'collateralValue',
                        type: 'uint256',
                        internalType: 'uint256'
                      }
                    ]
                  },
                  {
                    name: 'collateralLiquidityRawInfo',
                    type: 'tuple[]',
                    internalType: 'struct CollateralLiquidityInfo[]',
                    components: [
                      {
                        name: 'collateral',
                        type: 'address',
                        internalType: 'address'
                      },
                      {
                        name: 'collateralValue',
                        type: 'uint256',
                        internalType: 'uint256'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'accountRewardInfo',
            type: 'tuple',
            internalType: 'struct AccountRewardInfo',
            components: [
              {
                name: 'timestamp',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'account',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'vault',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'balanceTracker',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'balanceForwarderEnabled',
                type: 'bool',
                internalType: 'bool'
              },
              {
                name: 'balance',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'enabledRewardsInfo',
                type: 'tuple[]',
                internalType: 'struct EnabledRewardInfo[]',
                components: [
                  {
                    name: 'reward',
                    type: 'address',
                    internalType: 'address'
                  },
                  {
                    name: 'earnedReward',
                    type: 'uint256',
                    internalType: 'uint256'
                  },
                  {
                    name: 'earnedRewardRecentIgnored',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
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
    name: 'getEVCAccountInfo',
    inputs: [
      {
        name: 'evc',
        type: 'address',
        internalType: 'address'
      },
      {
        name: 'account',
        type: 'address',
        internalType: 'address'
      }
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct EVCAccountInfo',
        components: [
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'evc',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'account',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'addressPrefix',
            type: 'bytes19',
            internalType: 'bytes19'
          },
          {
            name: 'owner',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'isLockdownMode',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'isPermitDisabledMode',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'lastAccountStatusCheckTimestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'enabledControllers',
            type: 'address[]',
            internalType: 'address[]'
          },
          {
            name: 'enabledCollaterals',
            type: 'address[]',
            internalType: 'address[]'
          }
        ]
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getRewardAccountInfo',
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
        type: 'tuple',
        internalType: 'struct AccountRewardInfo',
        components: [
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'account',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'balanceTracker',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'balanceForwarderEnabled',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'balance',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'enabledRewardsInfo',
            type: 'tuple[]',
            internalType: 'struct EnabledRewardInfo[]',
            components: [
              {
                name: 'reward',
                type: 'address',
                internalType: 'address'
              },
              {
                name: 'earnedReward',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'earnedRewardRecentIgnored',
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
    name: 'getTimeToLiquidation',
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
        type: 'int256',
        internalType: 'int256'
      }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getVaultAccountInfo',
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
        type: 'tuple',
        internalType: 'struct VaultAccountInfo',
        components: [
          {
            name: 'timestamp',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'account',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'vault',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'asset',
            type: 'address',
            internalType: 'address'
          },
          {
            name: 'assetsAccount',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'shares',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'assets',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'borrowed',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'assetAllowanceVault',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'assetAllowanceVaultPermit2',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'assetAllowanceExpirationVaultPermit2',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'assetAllowancePermit2',
            type: 'uint256',
            internalType: 'uint256'
          },
          {
            name: 'balanceForwarderEnabled',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'isController',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'isCollateral',
            type: 'bool',
            internalType: 'bool'
          },
          {
            name: 'liquidityInfo',
            type: 'tuple',
            internalType: 'struct AccountLiquidityInfo',
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
                name: 'timeToLiquidation',
                type: 'int256',
                internalType: 'int256'
              },
              {
                name: 'liabilityValue',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'collateralValueBorrowing',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'collateralValueLiquidation',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'collateralValueRaw',
                type: 'uint256',
                internalType: 'uint256'
              },
              {
                name: 'collateralLiquidityBorrowingInfo',
                type: 'tuple[]',
                internalType: 'struct CollateralLiquidityInfo[]',
                components: [
                  {
                    name: 'collateral',
                    type: 'address',
                    internalType: 'address'
                  },
                  {
                    name: 'collateralValue',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
              },
              {
                name: 'collateralLiquidityLiquidationInfo',
                type: 'tuple[]',
                internalType: 'struct CollateralLiquidityInfo[]',
                components: [
                  {
                    name: 'collateral',
                    type: 'address',
                    internalType: 'address'
                  },
                  {
                    name: 'collateralValue',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
              },
              {
                name: 'collateralLiquidityRawInfo',
                type: 'tuple[]',
                internalType: 'struct CollateralLiquidityInfo[]',
                components: [
                  {
                    name: 'collateral',
                    type: 'address',
                    internalType: 'address'
                  },
                  {
                    name: 'collateralValue',
                    type: 'uint256',
                    internalType: 'uint256'
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    stateMutability: 'view'
  }
] as const;
