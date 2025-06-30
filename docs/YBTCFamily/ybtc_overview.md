---
sidebar_position: 5
sidebar_label: YBTC Overview
---

# Bitlayer Native BTC Asset: Overview & Technical Characteristics

**Bitlayer Native BTC** is a natively integrated, Bitcoin-pegged asset that exists directly at the protocol level within the Bitlayer Layer 2 blockchain. Unlike traditional ERC-20-style wrapped tokens, this asset is implemented as a first-class system currency—akin to ETH on Ethereum or BTC on the Bitcoin mainnet.

It serves two primary purposes:

- **Gas Token**: Used to pay for all transaction fees on the Bitlayer network.  
- **Base Asset**: Serves as the foundational unit of account for DeFi protocols, vaults, and smart contract interactions.

---

## Key Technical Features

### Native Integration

Bitlayer Native BTC is not deployed as a smart contract token. Instead, it is managed natively by the protocol and appears directly as an account balance—similar to how Bitcoin or ETH is handled at the base layer.

### 18 Decimal Precision

To maintain full compatibility with Ethereum-based DeFi applications and smart contract logic, Bitlayer Native BTC uses **18 decimal places**, aligning with ERC-20 standards and DeFi composability expectations.

### Gas Utility

Bitlayer allows users to pay **all network gas fees directly in Native BTC**. There is no requirement to hold a separate utility token, simplifying the user experience and reducing onboarding friction.

> 🔗 **Gas Model Reference**: [Bitlayer Docs – About Gas](https://docs.bitlayer.org/docs/Learn/Bitlayer%20PoS/AboutGas/)

### 1:1 Bitcoin Reserve Backing

Each unit of Native BTC is backed by an **equivalent amount of real BTC** held in off-chain custodial vaults under a **transparent 1:1 reserve model**. This ensures price stability and trustless anchoring to the Bitcoin mainnet.

---

## Bridging Architecture & Security Model

Bitlayer’s cross-chain architecture uses a dual-bridge design to ensure secure, decentralized asset transfers.

### MPC Bridge

In the starting stage of Bitlayer, the Bitlayer team is working with multiple MPC custody platforms, including Coinbase and Sinohope (HK.1611), to secure the assets.

### BitVM Bridge

A **trust-minimized virtual machine** allowing for fraud-proof bridging. It supports **verifiable BTC peg-in/peg-out** using **Bitcoin script-level validation**, providing cryptographic guarantees.

---

By combining native protocol-level design, reserve-backed BTC anchoring, and advanced cross-chain architecture, **Bitlayer Native BTC** offers a secure, scalable, and composable foundation for BTC-based DeFi across chains.
