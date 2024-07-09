export const abi = [
        {
            "type": "receive",
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "addGovernor",
            "inputs": [
                {
                    "name": "_account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addNativeLiquidity",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "addPauser",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addseq",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint64",
                    "internalType": "uint64"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "delayPeriod",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "delayThresholds",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "delayedTransfers",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "epochLength",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "epochVolumeCaps",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "epochVolumes",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "executeDelayedTransfer",
            "inputs": [
                {
                    "name": "id",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "governors",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "increaseNoticePeriod",
            "inputs": [
                {
                    "name": "period",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isGovernor",
            "inputs": [
                {
                    "name": "_account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isPauser",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "lastOpTimestamps",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "maxSend",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minAdd",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minSend",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "minimalMaxSlippage",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "nativeWrap",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "noticePeriod",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "notifyResetSigners",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "pause",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "paused",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "pausers",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "relay",
            "inputs": [
                {
                    "name": "_relayRequest",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_sigs",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "_signers",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_powers",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeGovernor",
            "inputs": [
                {
                    "name": "_account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removePauser",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "renounceGovernor",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "renouncePauser",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "resetSigners",
            "inputs": [
                {
                    "name": "_signers",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_powers",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "resetTime",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "send",
            "inputs": [
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_dstChainId",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "_nonce",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "_maxSlippage",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "sendNative",
            "inputs": [
                {
                    "name": "_receiver",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_dstChainId",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "_nonce",
                    "type": "uint64",
                    "internalType": "uint64"
                },
                {
                    "name": "_maxSlippage",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "setDelayPeriod",
            "inputs": [
                {
                    "name": "_period",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setDelayThresholds",
            "inputs": [
                {
                    "name": "_tokens",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_thresholds",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setEpochLength",
            "inputs": [
                {
                    "name": "_length",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setEpochVolumeCaps",
            "inputs": [
                {
                    "name": "_tokens",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_caps",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMaxSend",
            "inputs": [
                {
                    "name": "_tokens",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_amounts",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMinAdd",
            "inputs": [
                {
                    "name": "_tokens",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_amounts",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMinSend",
            "inputs": [
                {
                    "name": "_tokens",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_amounts",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMinimalMaxSlippage",
            "inputs": [
                {
                    "name": "_minimalMaxSlippage",
                    "type": "uint32",
                    "internalType": "uint32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setWrap",
            "inputs": [
                {
                    "name": "_weth",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "ssHash",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transfers",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "triggerTime",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "unpause",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateSigners",
            "inputs": [
                {
                    "name": "_triggerTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_newSigners",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_newPowers",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "_sigs",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "_curSigners",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_curPowers",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "verifySigs",
            "inputs": [
                {
                    "name": "_msg",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_sigs",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "_signers",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_powers",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [
                {
                    "name": "_wdmsg",
                    "type": "bytes",
                    "internalType": "bytes"
                },
                {
                    "name": "_sigs",
                    "type": "bytes[]",
                    "internalType": "bytes[]"
                },
                {
                    "name": "_signers",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_powers",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdraws",
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "event",
            "name": "DelayPeriodUpdated",
            "inputs": [
                {
                    "name": "period",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "DelayThresholdUpdated",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "threshold",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "DelayedTransferAdded",
            "inputs": [
                {
                    "name": "id",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "DelayedTransferExecuted",
            "inputs": [
                {
                    "name": "id",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                },
                {
                    "name": "receiver",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "EpochLengthUpdated",
            "inputs": [
                {
                    "name": "length",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "EpochVolumeUpdated",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "cap",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernorAdded",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernorRemoved",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "LiquidityAdded",
            "inputs": [
                {
                    "name": "seqnum",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                },
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MaxSendUpdated",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinAddUpdated",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "MinSendUpdated",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Paused",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauserAdded",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauserRemoved",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Relay",
            "inputs": [
                {
                    "name": "transferId",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                },
                {
                    "name": "sender",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "receiver",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "srcChainId",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                },
                {
                    "name": "srcTransferId",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ResetNotification",
            "inputs": [
                {
                    "name": "resetTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Send",
            "inputs": [
                {
                    "name": "transferId",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                },
                {
                    "name": "sender",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "receiver",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "dstChainId",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                },
                {
                    "name": "nonce",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                },
                {
                    "name": "maxSlippage",
                    "type": "uint32",
                    "indexed": false,
                    "internalType": "uint32"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SignersUpdated",
            "inputs": [
                {
                    "name": "_signers",
                    "type": "address[]",
                    "indexed": false,
                    "internalType": "address[]"
                },
                {
                    "name": "_powers",
                    "type": "uint256[]",
                    "indexed": false,
                    "internalType": "uint256[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Unpaused",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "WithdrawDone",
            "inputs": [
                {
                    "name": "withdrawId",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                },
                {
                    "name": "seqnum",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                },
                {
                    "name": "receiver",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "refid",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                }
            ],
            "anonymous": false
        }
    ]