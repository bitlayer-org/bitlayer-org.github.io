
# JSON-RPC API METHODS

Bitlayer provides all json-rpc api methods listed in [Ethereum](https://ethereum.org/developers/docs/apis/json-rpc#json-rpc-methods). 

Besides, it has several custom methods.

## eth_getTraceActionByTxHash
Returns logs of internal transactions by hash of a transaction.

### Parameters

1. DATA, 32 Bytes - hash of a transaction

2. Object - The filter options:
    - fromUser: DATA|Array, 20 Bytes - (optional) address of the sender.
    - toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver.
    - opCode: DATA|Array - (optional) An EVM opcode for a transaction's log.
    - minValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in BRC.


### Returns

Object - A internal transaction's log object, or null when no log was found:

- transactionHash: DATA, 32 Bytes - hash of the transaction.
- blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
- blockNumber: QUANTITY - block number where this transaction was in.
- logs: Array - Array of log objects, which this transaction generated. The log object:
    - from: DATA, 20 Bytes - address of the sender. 
    - to: DATA, 20 Bytes - address of the receiver. null when it's a contract creation transaction. 
    - value: QUANTITY - value transferred in BRC. 
    - success: QUANTITY - a boolean value indicating whether the call was successfully completed. either 1 (success) or 0 (failure)
    - opcode: DATA - the EVM opcode of the transaction's log. 
    - depth: QUANTITY - the length of callstack in EVM. 
    - gas: QUANTITY - gas provided by the sender. 
    - gas_used: QUANTITY - The amount of gas used by this specific transaction alone. 
    - input: DATA - the data send along with the transaction. 
    - trace_address: QUANTITY|Array - Array of call trace where each element signifies the depth of a call during execution.

### Example

Request:
```shell
curl -X POST --data '{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByTxHash",  "params":["0xce9a42b2d2e0c0a7984d9351793129b91dc0599b9b4401082b75afcbc6abd694"], "id":1}'
```
Response:
```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "transactionHash": "0xce9a42b2d2e0c0a7984d9351793129b91dc0599b9b4401082b75afcbc6abd694",
      "blockHash": "0x80f5779b0348102d90f5463a9a494b7454d0e1f8d8b119cf090cd90e2d6105c3",
      "blockNumber": 54,
      "logs": [
        {
          "from": "0x2e46771cff3636a42f363826ff8a94d3a738e075",
          "to": "0x000000000000000000000000000000000000f000",
          "value": 0,
          "success": true,
          "opcode": "CALL",
          "depth": 18446744073709551615,
          "gas": 165629,
          "gas_used": 162996,
          "input": "0x6374299e0000000000000000000000009f01eb5eb4dbea8b2cecc679050819990ab68a1a000000000000000000000000000000000000000000295be96e64066972000000",
          "trace_address": []
        },
        {
          "from": "0x000000000000000000000000000000000000f000",
          "to": "0x4b20bbf3652696b9afd27b8f88ff8b7c1f361336",
          "value": 0,
          "success": true,
          "opcode": "STATICCALL",
          "depth": 0,
          "gas": 157800,
          "gas_used": 2443,
          "input": "0x00000000",
          "output": "0x0000000000000000000000002e46771cff3636a42f363826ff8a94d3a738e075",
          "trace_address": [
            0
          ]
        },
        {
          "from": "0x000000000000000000000000000000000000f000",
          "to": "0xf4340cf5f3891a3827713b33f769b501a0b5b122",
          "value": 0,
          "success": true,
          "opcode": "STATICCALL",
          "depth": 0,
          "gas": 150040,
          "gas_used": 2814,
          "input": "0x0000000000000000000000000000000000000000007c13bc4b2c133c560000000000000000000000000000000000000000000000007c13bc4b2c133c5600000000000000",
          "output": "0x0000000000000000000000000000000000000000007c13bc4b2c133c56000000",
          "trace_address": [
            1
          ]
        }
      ]
    }
  ]
}
```


## eth_getTraceActionByBlockNumber
Returns logs of internal transactions by block number.

### Parameters
1. QUANTITY|TAG - integer of a block number


2. Object - The filter options:
    - fromUser: DATA|Array, 20 Bytes - (optional) address of the sender. 
    - toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver. 
    - opCode: String - (optional) An EVM opcode for a transaction's log. 
    - minValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in BRC.

### Returns
Same as [eth_getTraceActionByTxHash](#returns)

### Example
Request:
```shell
curl -X POST --data '{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByBlockNumber",  "params":["0x36"],  "id":1}'
```

Result see [eth_getTraceActionByTxHash](#example)


## eth_getTraceActionByBlockHash
Returns logs of internal transactions by block hash.

### Parameters
1. DATA, 32 Bytes - Hash of a block.

### Returns
Same as [eth_getTraceActionByTxHash](#returns)

### Example
Request:
```shell
curl -X POST --data '{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByBlockHash",  "params":["0x80f5779b0348102d90f5463a9a494b7454d0e1f8d8b119cf090cd90e2d6105c3"],  "id":1}'
```

Result see [eth_getTraceActionByTxHash](#example)
