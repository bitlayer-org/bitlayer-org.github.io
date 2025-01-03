---
sidebar_position: 4
sidebar_label: Trust-minimized BTC Bridge
---

# Trust-minimized BTC Bridge

In a significant advancement for cross-chain interoperability, Bitlayer rollup has integrated the Finality Bridge to achieve trust-minimized Bitcoin bridging capabilities. Operating as a BitVM-style bridge alongside Bitlayer rollup, this innovative solution implements a front-and-reclaim workflow that leverages pre-signing based smart contracts while utilizing fraud proofs on Bitcoin's Layer 1 for optimistic verification of bridge state transitions.

The Finality Bridge serves as the exclusive minting mechanism for YBTC tokens within Bitlayer V2, ensuring that all minted tokens maintain verifiable backing by Layer 1 Bitcoin. This architectural decision provides DeFi applications on Bitlayer with robust security guarantees regarding asset validity. When combined with complementary bridging solutions such as atomic swaps, users gain the ability to transfer Bitcoin between the base layer and Bitlayer while maintaining minimal trust assumptions.

The peg-in process follows a carefully orchestrated sequence where users initiate by broadcasting their request to the network, prompting the committee to respond with pre-signed transactions for the entire transaction graph. Users then verify these pre-signed transactions to ensure the expected flow of Bitcoin before transferring their BTC to a committee-controlled multisig address, which triggers the minting of an equivalent amount of YBTC within the Bitlayer rollup ecosystem.

For peg-out operations, users broadcast their request to the network, where liquidity providers acting as brokers facilitate the process by delivering the requested Bitcoin on Layer 1 after users burn their corresponding YBTC on the Bitlayer rollup. The broker then initiates a reclaim process through a Kickoff transaction, which must include both the bridge state transition and its associated zero-knowledge proof, cryptographically verifying the legitimate execution of both the burning event and state advancement across both systems.

For comprehensive technical specifications and implementation details, please refer to the Finality Bridge documentation.
