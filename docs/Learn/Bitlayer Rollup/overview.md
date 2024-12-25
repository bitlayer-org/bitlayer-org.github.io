---
sidebar_position: 1
sidebar_label: Overview
---

## Introduction

Bitlayer V2, an upcoming upgrade to Bitlayer's layer 2 infrastructure, represents a pivotal evolution in the Bitcoin ecosystem. Designed to supersede the existing sidechain architecture, Bitlayer V2 is poised to become the first Bitcoin-native rollup, adopting rollup technology widely regarded as the most promising solution for scaling layer 2 systems. By leveraging Bitcoin's unparalleled security, Bitlayer V2 not only achieves significantly higher throughput and reduced transaction costs but also introduces Turing-complete programmability, thereby unlocking vast new possibilities for the Bitcoin ecosystem that extend far beyond the constraints of Bitcoin's limited scripting language.

As with rollups in the Ethereum ecosystem, Bitlayer rollup aggregates layer 2 transactions, processes state transitions, and submits updated state roots along with cryptographic proofs to Bitcoin's layer 1 for verification. Transactions on layer 2 are finalized once Bitcoin layer 1 confirms the corresponding state transition. However, the fundamental distinction between Ethereum rollups and Bitcoin rollups lies in the proving mechanism. While Ethereum benefits from its Turing-complete virtual machine, Bitcoin's scripting language is inherently limited in expressiveness. To implement complex programs, such as zero-knowledge verifiers, developers must emulate arithmetic operations using Bitcoin's existing opcodes, which can result in significant program bloat. Although it is technically possible to write a zero-knowledge verifier in Bitcoin's script language, the limited block space renders direct execution of such verifiers infeasible within Bitcoin transactions.

To overcome these challenges, Bitlayer rollup adopts the BitVM paradigm (specifically, BitVM2), which blends zero-knowledge validity proofs with optimistic fraud proofs into a hybrid proving system. In this model, the prover generates zero-knowledge proofs for layer 2 state transitions, but these proofs are not directly verified on-chain. Instead, they are presumed valid unless challenged through a dispute process. This presumption of validity eliminates the need for costly on-chain verification in the typical "happy path," thereby drastically reducing settlement costs and making Bitcoin rollups a practical solution for scaling.

Once the rollup operator publishes a new state root, a seven-day challenge window opens, during which any participant can dispute the validity of the published state root and its associated proof. If fraud is detected—such as an invalid state root or an incorrect zero-knowledge proof—a challenger can initiate a dispute by posting a deposit. This triggers a challenge game in which the challenger must prove the fraud, while the rollup operator must defend the correctness of the proof verification process (not the state transition itself). The protocol incentivizes honesty by awarding the loser's deposit to the winner, effectively making the rollup slashable if the operator is at fault. For this hybrid system to function effectively, however, it relies on the presence of at least one honest and active node to monitor and challenge fraudulent activity.

## Core Features

Bitlayer V2 introduces a range of innovative features that position it as a transformative solution for Bitcoin's layer 2 ecosystem:

- **EVM Compatibility**: Applications built for the Ethereum Virtual Machine (EVM) will seamlessly continue to operate on Bitlayer V2, ensuring backward compatibility with Bitlayer V1.
- **Trust-Minimized BTC Bridge**: The integration of Finality Bridge—a trust-minimized BTC bridge also developed by Bitlayer—enables secure and efficient cross-chain Bitcoin transfers.
- **Bitcoin-Equivalent Security**: EVM state transitions are verified on Bitcoin's layer 1 using a cutting-edge fraud-proof mechanism, ensuring that the rollup inherits Bitcoin's unmatched security properties.
- **Flexible Data Availability Options**: Users can choose between Bitcoin-native data availability or third-party solutions, allowing for customization based on individual needs and preferences.

By combining these features with its innovative proving mechanism, Bitlayer V2 establishes itself as a groundbreaking advancement in the development of Bitcoin-native layer 2 technologies.
