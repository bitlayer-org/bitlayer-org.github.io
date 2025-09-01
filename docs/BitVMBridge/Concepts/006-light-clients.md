---
sidebar_position: 6
sidebar_label: Light Clients
slug: light-clients
---

# Light Clients for the BitVM Bridge

In this document, we discuss the challenges associated with designing light clients for Bitlayer's BitVM Bridge and outline our interim solution and long-term upgrade path.

## The Role of Light Clients in Trustless Bridges

To bridge an asset from a source chain to a target chain trustlessly, two smart contracts are required: **Contract A** on the source chain and **Contract B** on the target chain. In a typical lock-and-mint bridge, the process works as follows:

1. **Peg-In**: A user locks the original asset in Contract A. Contract B on the target chain must independently verify this lock transaction to securely mint a representative (wrapped) asset for the user.
2. **Peg-Out**: A user burns the representative asset in Contract B. Contract A on the source chain must independently verify this burn transaction to unlock the original asset for the user.

For this process to be **trustless**, neither contract can rely on a centralized relayer. Instead, each contract must be able to verify the state of the other chain. This verification is the primary function of a **light client**.

### Ideal Verification Flow

#### Lock Transaction (Peg-In)

When bridging from the source chain to the target chain, verification in Contract B should follow these steps:

1. **Block Header Verification**: A relayer submits a source chain block header to the source chain light client running on the target chain. The light client verifies the header's validity and confirms it belongs to the canonical chain, eliminating trust in the relayer.
2. **Transaction Inclusion Verification**: An SPV (Simple Payment Verification) proof is used to confirm that the lock transaction is included in the verified block.
3. **Transaction Format Verification**: The lock transaction's data (e.g., amount locked, recipient address on the target chain) is parsed and checked to ensure it is correctly formatted.

Once these verifications pass, Contract B can safely mint the representative asset.

#### Burn Transaction (Peg-Out)

The reverse process for unlocking assets on the source chain is symmetric:

1. **Block Header Verification**: A relayer submits a target chain block header to the target chain light client running on the source chain.
2. **Transaction Inclusion Verification**: An SPV proof verifies the inclusion of the burn transaction.
3. **Transaction Format Verification**: The burn transaction's data is checked for correctness.

After verification, Contract A can safely unlock the original asset. As is clear, robust and trustless light clients are the cornerstone of a secure cross-chain bridge. However, designing them, especially for a Bitcoin bridge, presents significant challenges.

## Light Client Design for the BitVM Bridge

For a Bitcoin bridge, the source chain is Bitcoin, and the target chain is a Turing-complete blockchain like Ethereum. This requires running a Bitcoin light client on Ethereum and an Ethereum light client on Bitcoin. While a Bitcoin light client in Solidity on Ethereum is complex but feasible, the reverse is not possible due to Bitcoin's limited programmability.

This is where the **BitVM paradigm** provides a solution. It is based on a powerful principle:

> Verifying a succinct Zero-Knowledge (ZK) proof on-chain is functionally equivalent to confirming the correctness of a complex computation performed off-chain.

Using this, we can execute an Ethereum light client within an off-chain zkVM program. A succinct ZK proof of this execution is then generated and submitted to **Contract A** (a BitVM-style contract) on Bitcoin. If the proof is valid, it guarantees that the off-chain light client execution was correct.

### The Three Light Clients

In total, a complete BitVM Bridge between Bitcoin and Ethereum requires three distinct light clients:

1. **An Ethereum Light Client in a zkVM Program**: This off-chain component, likely written in Rust, verifies Ethereum state transitions for peg-out transactions.
2. **A Bitcoin Light Client in Contract A**: Written in Bitcoin Script, this on-chain light client verifies certain Bitcoin transactions related to the bridge's operational security.
3. **A Bitcoin Light Client in Contract B**: Written in Solidity, this on-chain light client on Ethereum verifies Bitcoin state for peg-in transactions.

While the third light client is well-understood, the first two introduce novel and significant challenges.

### Core Challenges

- **Ethereum Light Client in a zkVM Program**: A full Ethereum light client is resource-intensive. For instance, verifying signatures from the entire validator set is infeasible within a zkVM. Existing solutions approximate this by verifying signatures only from a smaller sync committee (512 validators), which is a security trade-off. Furthermore, Ethereum light clients are not purely objective; they rely on "subjectivity" assumptions (e.g., Weak Subjectivity) to mitigate long-range attacks, introducing a layer of external trust.
- **Bitcoin Light Client in Contract A**: The primary challenge here is determining the canonical Bitcoin chain. Unlike accounts-based chains, Bitcoin's finality is probabilistic and based on accumulated Proof-of-Work. An isolated zkVM program cannot interactively determine the heaviest chain. The solution, inspired by projects like Summa, is to use a **fraud-proof-based challenge game** where participants can contest submitted block headers. However, this dramatically increases protocol complexity. The transaction graph for such a game can become enormous, and it often requires introducing permissioned watchers, which compromises the permissionless ethos of BitVM.

## The Interim Solution

The Bitlayer team has designed novel solutions for these light client challenges. However, the development, testing, and auditing effort required is substantial. To launch a secure and functional bridge sooner, we have opted for a pragmatic interim solution that reflects a best practice in the industry.

In the current BitVM Bridge implementation, we use a **decentralized oracle** to submit both Bitcoin and Ethereum block headers. The bridge's attesting committee currently serves as this oracle, providing a secure and reliable data feed for cross-chain state verification.

## Future Upgrades: The Path to Fully Trustless Light Clients

Our interim solution is a temporary measure. A future major upgrade will replace the oracle system with our fully designed, trust-minimized light clients.

- **For the Ethereum Light Client**: We plan to recursively verify **Signal proofs** (a ZK-based Ethereum light client) within our zkVM program. This will be complemented by novel mechanisms designed to mitigate the long-range attack vector without relying on external subjectivity.
- **For the Bitcoin Light Client on Bitcoin**: We will implement a streamlined, fraud-proof-based light client protocol. This design is engineered to be efficient while retaining as many permissionless properties as possible, minimizing reliance on a fixed set of watchers.
