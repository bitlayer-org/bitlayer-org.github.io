---
sidebar_position: 1
sidebar_label: Understanding BBN
slug: understanding-bbn
---

# Understanding the BitVM Bridge Network (BBN)

## What is the BitVM Bridge Network?

The BitVM Bridge Network (BBN) is the decentralized backbone of the BitVM Bridge, designed to facilitate secure and trust-minimized cross-chain asset transfers. The network consists of three key types of nodes:

- **Attesters:** Responsible for reviewing and pre-signing the transaction graph that defines a bridge instance, effectively transforming it into an immutable contract.
- **Brokers:** Use their own liquidity to pre-fund peg-out requests, reclaiming their funds from the smart contract later.
- **Watchers:** Monitor the network for malicious activity, such as invalid reclaim requests, and initiate challenges. They play a crucial role in maintaining the security and integrity of the bridge.

Nodes within the BBN run the `bitvmbridged` software and communicate through a dedicated peer-to-peer (P2P) protocol.

### Current Status and Evolution

The BBN is designed as a permissionless network where any entity can join by meeting predefined operational and, eventually, staking requirements. Initially, the Bitlayer team will oversee the network's operational management and the onboarding of new nodes.

A comprehensive governance framework for the BBN is currently under active development. Once fully implemented, management responsibilities will transition from the Bitlayer team to a community-driven governance model. The BBN governance, empowered by BTR token holders, will then oversee network participation, protocol upgrades, and other critical decisions.

## How BBN Nodes Coordinate

While BBN nodes can interact directly using the P2P protocol, a coordinator can be used to accelerate distributed operations. Crucially, if the coordinator fails, the BBN is designed to fall back seamlessly to the P2P protocol, ensuring continuous operation.

This coordination is managed by a suite of smart contracts on the Bitlayer Network.

### The Bitlayer Network and Protocol Contracts

The Bitlayer Network is a Proof-of-Stake (PoS) blockchain with smart contract capabilities. Through smart contracts, the Bitlayer Network empowers applications like the BitVM Bridge to perform a wide range of decentralized tasks, from orchestrating complex operations to building autonomous networks.

The Bitlayer Network supports common tasks for BitVM applications through its **protocol contracts**, several of which have been deployed since its genesis. As the ecosystem evolves, additional protocol contracts will be introduced to unlock new functionalities.

A key example is the **BitVM Coordinator**, a protocol contract that plays a crucial role in helping BitVM applications manage and deploy their smart contracts using pre-signed transaction graphs.

### Attester Coordination

A primary function of the BitVM Coordinator is to manage the **attesting committee** for each new BitVM smart contract. This committee is a group of nodes that pre-signs the transaction graph. The Coordinator streamlines this process by:

1. **Electing the Pre-Signing Committee:** For each new contract, the Coordinator selects committee members from a pool of trusted and eligible candidates.
2. **Implementing Incentives:** To ensure liveness and discourage malicious behavior, the Coordinator manages an incentive structure. Honest committee members are rewarded for their participation, while malicious actors are penalized through slashing.
3. **Coordinating Signatures:** Once the committee is formed, the Coordinator orchestrates the signing process to ensure all members contribute their signatures in a timely and coordinated manner.

To leverage this functionality, applications must run an **attester node**. For example, a BitVM bridge requires its attester node to verify the format of each transaction in the graph, sign it, and submit the signature to the Coordinator.

### Watcher Coordination

The BitVM Coordinator also plays a critical role in supporting **watchers**—nodes that monitor and verify the correctness of assertions submitted to the Bitcoin blockchain. Watchers are essential for the integrity of systems built on fraud proofs and BitVM smart contracts, as they ensure that malicious or erroneous assertions are promptly challenged.

The Coordinator assists watchers in several key ways:

1. **Ensuring Data Availability:** It functions as a data availability layer, giving watchers reliable access to the application data needed for verification.
2. **Providing Incentives:** To encourage active monitoring, the Coordinator rewards watchers who successfully identify and challenge fraudulent assertions, fostering a robust and reliable security network.

By managing these crucial functions, the BitVM Coordinator provides a robust framework for attesters and watchers to operate effectively, enhancing the security and reliability of all BitVM applications.
