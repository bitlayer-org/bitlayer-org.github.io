---
sidebar_position: 20
---

# About Gas

## Important: about gas price
- Bitlayer's native gas token is BTC. However, on Bitlayer, BTC has an 18-digit precision" может быть уточнена. Лучше: "uses 18 decimal places for precision, unlike the 8 decimal places used by BTC on Bitcoin. This is done to maintain consistency with the default decimal of tokens of EVM-compatible chains.

- On the Bitlayer, there is a minimum priority fee requirement. Developers can use `eth_gasPrice` or `eth_maxPriorityFeePerGas`to estimate the minimum gas price required for a transaction in real time.

- For the Mainnet/Testnet, a minimum tip of `0.05 gwei` is required. Usually, `0.055 gwei` `gasPrice` for legacy transactions, `0.05 gwei` `maxPriorityFeePerGas` (and set enough amount to `maxFeePerGas`) for EIP1559 transactions SHOULD BE enough.

- For Dapp developers, it's recommended that setting the `maxPriorityFeePerGas` by code before calling apis to send the transaction, rather than leave it empty (filled by the default strategy of wallet (e.g. Metamask) or SDK).

## Get BTC Gas

There are multiple way to get BTC gas on Bitlayer:

1. Visit https://www.bitlayer.org/bridge

2. Visit https://www.bitlayer.org/gas-swap 
