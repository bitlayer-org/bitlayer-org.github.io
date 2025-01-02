---
sidebar_position: 6
sidebar_label: Finality Chain
---

# Finality Chain

Finality Chain is an EVM-compatible Proof of Stake (PoS) blockchain designed to provide the fundamental capabilities for presigning and challenge mechanisms for projects based on BitVM2. Validators on this chain, in addition to being responsible for the consensus of the chain itself, play two key roles: Vigilante nodes and Contract Signer nodes. These roles work together to ensure the integrity and security of the projects. (It is important to note that Finality Chain is a work-in-progress project, and we will release more technical details in the future.)

## Main Modules
### Vigilante Nodes

- **STF Verification.** (State Transition Function Verification) Vigilante nodes validate the correctness of state transition proofs in the project. When an incorrect state transition proof is detected, the Game Play is triggered.

- **Game Play.** In BitVM2, Vigilante nodes act as challengers, participating in the challenge-response mechanism to identify and punish malicious behaviors and ensure accountability.

## Features

- **Flexible Presigning Committee.** BitVM2 demands high liveness from the Presigning Committee. While ensuring a consistent number of presigning nodes, Finality Chain enables the flexible organization of multiple committees to provide presigning services, delivering a more efficient and dynamic presigning solution.

- **Efficient Incentive Mechanism for Contract Signer Nodes.** The BitVM2 framework lacks incentives for presigning members. By leveraging PoS consensus, Finality Chain introduces a structured and efficient incentive mechanism for Contract Signer nodes. Validators acting as Contract Signer nodes are rewarded based on their contributions, ensuring active and sustained participation.

- **Modular Presigning Components.** Finality Chain operates as a public and permissionless network. Projects built on BitVM2 can integrate Finality Chain as a modular component, utilizing its presigning capabilities to establish their own BitVM systems. This allows project teams to focus more on business-level concerns.