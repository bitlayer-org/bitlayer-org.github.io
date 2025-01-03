---
sidebar_position: 2
sidebar_label: Finality Bridge Protocol
---

# Finality Bridge Protocol

## Bridge Instance and User Operations

The operational framework of Finality Bridge revolves around the concept of bridge instances, which provide a structured approach to managing cross-chain transfers while maintaining security guarantees. Each peg-in request triggers the creation of a new bridge instance, accompanied by a corresponding BitVM2 smart contract that governs the entire lifecycle of the transferred funds.

These bridge instances follow a well-defined state machine. Initially created in an 'inactive' state, an instance transitions to 'active' once the peg-in funds are successfully locked in the BitVM2 smart contract. The final transition to a 'finished' state occurs when all peg-in funds have been successfully returned to Bitcoin through legitimate withdrawal processes.

The BitVM2 smart contract associated with each bridge instance serves as an immutable guardian of the locked funds. It meticulously defines all possible exit paths for the peg-in funds, ensuring that once funds enter the target chain, they can only be withdrawn back to Bitcoin through the predetermined pathways established in the smart contract. This rigid structure eliminates any possibility of unauthorized access or manipulation of the locked funds.

User interactions with Finality Bridge primarily occur through two fundamental operations:

1. Peg-in Operations: This process involves locking Bitcoin in a BitVM2 smart contract, which triggers the minting of equivalent fiBTC tokens on the target chain. The one-to-one relationship between locked Bitcoin and minted fiBTC ensures perfect value preservation across chains. The process is carefully orchestrated to maintain security and transparency throughout the transfer.
2. Peg-out Operations: While conceptually straightforward - involving the burning of fiBTC on the target chain to withdraw the corresponding Bitcoin - the actual implementation involves sophisticated mechanisms to ensure security and reliability. The complexity of this operation is largely abstracted away from end users through the front-and-reclaim procedure, which we'll explore in detail in subsequent sections.

The bridge instance model, combined with these core operations, creates a robust framework for managing cross-chain transfers while maintaining the trust-minimized nature of the system. Each instance operates as an independent entity with its own state and smart contract, ensuring that security guarantees remain compartmentalized and robust throughout the bridge's operation.
