
# JSON-RPC API METHODS

Bitlayer provides all json-rpc api methods listed in [Ethereum](https://ethereum.org/developers/docs/apis/json-rpc#json-rpc-methods). 

Besides, it has several custom methods.

## eth_getTraceActionByTxHash
Returns logs of internal transactions by hash of a transaction.

### Parameters
1. DATA, 32 Bytes - hash of a transaction

2. Object - The filter options:
* fromUser: DATA|Array, 20 Bytes - (optional) address of the sender.
* toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver.
* OpCode: String - (optional) An EVM opcode for a transaction's log.
* MinValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in Wei.

### Returns
Object - A internal transaction's log object, or null when no log was found:
* txHash: DATA, 32 Bytes - hash of the transaction.
* blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
* blockNumber: QUANTITY - block number where this transaction was in.
* Actions: Array - Array of log objects, which this transaction generated.


## eth_getTraceActionByBlockNumber
Returns logs of internal transactions by block number.

### Parameters
1. QUANTITY|TAG - integer of a block number

2. Object - The filter options:
* fromUser: DATA|Array, 20 Bytes - (optional) address of the sender.
* toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver.
* OpCode: String - (optional) An EVM opcode for a transaction's log.
* MinValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in Wei.

### Returns
Object - A internal transaction's log object, or null when no log was found:
* txHash: DATA, 32 Bytes - hash of the transaction.
* blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
* blockNumber: QUANTITY - block number where this transaction was in.
* Actions: Array - Array of log objects, which this transaction generated.


## eth_getTraceActionByBlockHash
Returns logs of internal transactions by block hash.

### Parameters
1. DATA, 32 Bytes - Hash of a block.

### Returns
Object|Array - An array of internal transaction's log object, or null when no log was found:
* txHash: DATA, 32 Bytes - hash of the transaction.
* blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
* blockNumber: QUANTITY - block number where this transaction was in.
* Actions: Array - Array of log objects, which this transaction generated.


