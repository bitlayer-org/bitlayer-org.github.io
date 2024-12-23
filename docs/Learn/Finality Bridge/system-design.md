---
sidebar_position: 3
---

## Network Architecture

The architectural design of Finality Bridge represents a careful balance between decentralization, security, and operational efficiency. While the system continues to evolve rapidly, its core structure is built around two primary components: the Finality Bridge Network (FBN) and the Finality Bridge Coordinator (FBC).

The Finality Bridge Network operates as a sophisticated Proof-of-Stake system that forms the backbone of the bridge's operations. This network implements a role-based architecture where participants can serve in multiple capacities:

1. Smart Contract Emulation Committee (CEC) Members: These participants are responsible for the crucial task of presigning transaction graphs that form the foundation of the bridge's smart contracts. Their role is fundamental to the security and functionality of the entire system.
2. Brokers: Acting as liquidity providers, brokers facilitate the smooth operation of the front-and-reclaim process. They earn fees for their service while ensuring efficient peg-out operations for users.
3. Vigilantes: These network participants monitor pending reclaim requests and initiate challenges when necessary, maintaining the system's integrity through active oversight.

Complementing the decentralized network, the Finality Bridge Coordinator serves as a carefully designed centralized component that optimizes operational efficiency without compromising security. Operated by Bitlayer, the FBC's primary function is to accelerate the presigning process by coordinating the collection and assembly of signatures from CEC members. Crucially, while the FBC enhances operational efficiency, it maintains zero control over bridge funds and cannot impact the security or liveness of the underlying BitVM2 protocol.

This architectural approach demonstrates how centralized and decentralized components can be thoughtfully combined to create a system that maximizes efficiency while maintaining robust security guarantees. The clear separation of concerns and careful limitation of centralized components' powers ensures that the trust-minimized nature of the bridge remains intact.
