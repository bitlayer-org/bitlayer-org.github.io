---
sidebar_position: 8
---

# More on Testnet

## Important: about gas price
- Bitlayer's native gas token is BTC. However, on Bitlayer, BTC has an 18-digit precision, which is different from the 8-digit precision of BTC on Bitcoin. This is done to maintain consistency with the default decimal of tokens of EVM-compatible chains.

- On the Bitlayer, there is a minimum priority fee requirement. Developers can use eth_gasPrice or eth_maxPriorityFeePerGas to estimate the gas price required for a transaction in real time.

- For the Testnet, a minimum tip of 0.1 gwei is required. Usually, 0.11 gwei gasPrice for legacy transactions, 0.1 gwei maxPriorityFeePerGas (and set enough amount to maxFeePerGas) for EIP1559 transactions SHOULD BE enough.

- For Dapp developers, it's recommended that setting the maxPriorityFeePerGas by code before calling apis to send the transaction, rather then leave it empty (filled by the default strategy of wallet (e.g. Metamask) or SDK).

### Important notice for Metamask users

MetaMask automatically recommends a minimum "Priority Fee" (maxPriorityFeePerGas) of 1 gwei, which is way more than Bitlayer's minimum requirement. This can lead to transaction fees much higher than necessary.

Here's a screenshot of how to set the Priority Fee:

![alt text](<Metamask.png>)

## Chainid

```
200810 
```

## Native Token
The native token used on the Bitlayer testnet is BTC. 

Although it is a testnet token, it functions similarly to the actual Bitcoin (BTC) cryptocurrency.

It is important to note that the native token on the testnet does not hold any real-world value.

## RPC
The Bitlayer testnet provides the following RPC (Remote Procedure Call) endpoints for interacting with the network:

 - https://testnet-rpc.bitlayer.org: This RPC endpoint allows developers to send requests and interact with the Bitlayer testnet programmatically. It is commonly used for deploying contracts, querying blockchain data, and executing transactions.
 - wss://testnet-ws.bitlayer.org: This WebSocket endpoint enables real-time communication with the Bitlayer testnet. Developers can subscribe to events and receive updates as they occur on the network.
 - https://testnet-rpc.bitlayer-rpc.com
 - wss://testnet-ws.bitlayer-rpc.com

## Explorer
To explore and inspect transactions, blocks, and addresses on the Bitlayer testnet, you can utilize the following explorer:
- https://testnet-scan.bitlayer.org

## Faucet
For testing purposes, the Bitlayer testnet offers a faucet that dispenses test BTC tokens. The faucet provides a way for developers to obtain test tokens without the need for actual value. 

You can access the Bitlayer testnet faucet at:
- https://www.bitlayer.org/faucet: By visiting this URL, developers can request a certain amount (0.05 BTC) of test BTC tokens to use in their development and testing processes.

