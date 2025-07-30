---
sidebar_position: 10
---

# Overview

| Item | Value | Note |
| :--- | --- | --- |
| Gas token(Native token) | BTC (decimals: 18) | Come from Bitcoin chain through official bridge, but with 18 decimals on Bitlayer |
| Project token | [BTR](https://www.btrscan.com/address/0x0e4cf4affdb72b39ea91fa726d291781cbd020bf?tab=Transactions) | Not yet TGE |
| Networks info | refer to [Networks](./Networks.md) |  |
| Block interval | 3 seconds |  |
| Block gasLimit | 40,000,000 | Can support more than `100 million` gas, and will increase capacity in time according to network congestion |
| Will block reorg? | Yes |  |
| Finality | very high probability safe with `15 blocks confirmations`; <br/>**absolutely safe** with `21 blocks confirmations` | refer to [About Finality](./AboutFinality.md) |
| EIP-1559 supported | Yes | But the base fee will not be burned |
| Priority fee per gas required | 0.025 gwei |  |
| Minimum gasPrice for legacy transaction | 0.025000007 gwei |  |
| EVM compatibility | Supported up to `Cancun` | But without opcode `PREVRANDAO`, `BLOBHASH`, and `BLOBBASEFEE`, <br/>do NOT support `Blob transaction` |
| Solidity version supported | ≤ 0.8.28 |  |
| Geth json-rpc compatibility | Fully support but with `eth_feeHistory` disabled | Can use `eth_feeHistory2` instead, <br/>because there's some issue for Metamask users when priority fee per gas is less than `1 gwei`, and we want to avoid our users spending unnecessary high fee. |
| Extra json-rpc | refer to [Json-RPC](./Json-RPC.md) |  |
| Some basic or important contracts | refer to [Contracts](./Contracts.md) |  |
