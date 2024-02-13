# Basic Concepts

For users and developers alike, the fundamental concept of Bitlayer is outlined below:

![analog](images/analog-btc-eth.png)

Bitlayer acts as a Layer 2 solution for Bitcoin, boasting **100% EVM and Ethereum toolchain compatibility**, with BTC as native token(gas token).

Users can engage with it using wallets such as **Metamask, imToken, or other Ethereum-compatible wallets**.

Developers are afforded the ease of migrating smart contracts written in **Solidity, Vyper, or any other language that compiles to EVM bytecode** directly to Bitlayer, using the toolchain you are familiar with: Ethereum JSON-RPC, Hardhat, etc.

# Architecture

![arch](images/architecture.png)

Bitlayer subscribes to the typical model of an Optimistic Rollup equivalent.

# Benefits

![benefits](images/benefits.png)

# Bridges

Bitlayer will be connected by numerous bridges.

![bridges](images/bitlayer-bridges.png)


## Bitlayer <--> Blockchains
If the **source chain** is Bitcoin, it is recommended to use UniSats, Xverse, or another Bitcoin wallet as the source wallet.

## Bitlayer <--> CEXs(centralized exchanges)

You can withdraw from CEXs to the bitlayer's ETH-Compatible wallet address.