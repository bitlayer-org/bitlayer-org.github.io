---
sidebar_position: 3
slug: system-design
---

# System Design

The BitVM Bridge is a sophisticated system designed to enable seamless interoperability between Bitcoin and other blockchain ecosystems while maintaining the highest standards of security, decentralization, and user experience. This document provides an in-depth exploration of the system's architecture, components, and operational framework, focusing on how the BitVM Bridge Network (BBN), Finality Chain, and supporting infrastructure work together to facilitate trust-minimized cross-chain transactions.

## Overview

The BitVM Bridge is composed of several interconnected components that together form a robust and efficient system for managing cross-chain operations. At its core, the system relies on the **BitVM Bridge Network (BBN)** and the **BitVM Bridge Backend**.

Participants in the BitVM Bridge Network include three distinct types of nodes, each with specialized roles:

1. **Broker Nodes**: Provide liquidity and participate in operational processes such as transaction signing and dispute resolution.
2. **Watcher Nodes**: Monitor and verify operations, ensuring the integrity of the system by challenging invalid reclaims.
3. **Attester Nodes**: Validate and sign transaction graphs, ensuring that all operations adhere to the protocol's specifications.

The **Finality Chain**, a Proof-of-Stake blockchain currently under development, plays a pivotal role in managing the registration and coordination of these nodes while serving as a bridge between Bitcoin and the broader blockchain ecosystem.

## BitVM Bridge Architecture

The architecture of the BitVM Bridge is built around the **BitVM Bridge Network (BBN)**, which serves as the operational backbone of the system, and the **Bridge Backend**, which provides an interface layer for end-users and applications. Together, these components ensure that the protocol can handle complex cross-chain interactions while maintaining a user-friendly experience.

### BitVM Bridge Network (BBN)

The BitVM Bridge Network is composed of three types of nodes, each contributing to the protocol's functionality in distinct ways:

#### 1. **Broker Nodes**

Broker nodes are the liquidity providers within the BitVM Bridge Network. Their primary role is to support the front-and-reclaim process by providing short-term liquidity for peg-out requests, for which they earn fees. In addition to their liquidity function, broker nodes perform several critical tasks:

- **Attesting**: Brokers validate the transaction graph, which defines all possible state transitions for the bridge funds, and sign one or more transactions within the graph. These signatures are sent to the Coordinator module on the Finality Chain.
- **Proving**: Brokers execute the Reclaim Check process to generate Reclaim Proofs, which are zero-knowledge proofs that validate the correctness of a reclaim request.
- **Defending**: In cases where a reclaim request is challenged, brokers participate in the dispute resolution game to defend the validity of their claims.

#### 2. **Attester Nodes**

Attester nodes are responsible for validating and signing the majority of transactions within the transaction graph. Their tasks include:

- **Attesting**: Similar to broker nodes, attester nodes validate the transaction graph and provide signatures for most transactions. These signatures are also sent to the Coordinator module on the Finality Chain.
- **Transaction Validation**: Attester nodes ensure that all transactions adhere to the [Transaction Graph Specification](https://docs.bitlayer.org/docs/BitVMBridge/transaction-graph-spec), which defines the structure and rules for transaction execution within the protocol.

#### 3. **Watcher Nodes**

Watcher nodes act as the watchdogs of the BitVM Bridge Network, ensuring that all operations are carried out correctly and challenging any invalid claims. Their responsibilities include:

- **Monitoring**: Watchers monitor peg-out events and pending reclaim requests on Bitcoin, ensuring that all actions are consistent with the protocol's rules.
- **Verification**: Watchers run the Reclaim Checker to independently verify the validity of reclaim requests.
- **Challenging**: If a reclaim request is found to be invalid, watchers initiate a challenge and participate in the dispute resolution game to prevent unauthorized fund withdrawals.


#### 4. **Node Architecture**
The `bitvm-bridged` is the core software daemon that node operators in the BitVM Bridge Network run. It is designed with a modular, layered architecture to clearly separate concerns, from low-level infrastructure dependencies to high-level application logic. This architecture ensures robustness, scalability, and maintainability.

![bitvm-bridged architecture](/img/BitvmBridge/system/architecture.png)

The system is organized into four distinct layers:

##### 1. Application Layer

This is the outermost layer, providing interfaces for node operators and external systems to interact with the daemon.

* **CLI (Command-Line Interface)**: Allows operators to configure and run the node. Crucially, the CLI accepts different parameters at startup to activate specific services in the layer below, which determines whether the node operates as a **Broker**, **Attester**, **Watcher**, or **Coordinator**.
* **RPC (Remote Procedure Call)**: Exposes an API for programmatic interaction and serves a dual purpose. It not only exposes public-facing endpoints for services (e.g., handling requests processed by the Coordinator) and node management, but also facilitates the necessary peer-to-peer communication between nodes within the network.
* **ACL (Access Control List)**: Manages permissions, controlling which external components can access the Coordinator's services and what actions they are allowed to perform.
* **OpenTelemetry**: Provides standardized observability, emitting logs, metrics, and traces to help operators monitor the health and performance of the node in real-time.

##### 2. Service Layer

This layer contains the core business logic and orchestrates the primary functions of the different node roles.

* **Coordinator**: Acts as the central orchestration hub for the entire network. Typically, there is only one Coordinator node. It provides a unified service endpoint for external users, scheduling and coordinating the protocol activities of all Broker and Attester nodes. To ensure protocol integrity, the Coordinator also internally runs a **Watcher** service to monitor network operations.
    * **Request Processor**: The entry point for incoming requests from external users via the Application Layer. It is responsible for managing the entire lifecycle of a request, including scheduling Broker and Attester nodes to complete the required protocol stages.
    * **Broker/Attesting Instance Manager**: Manages the lifecycle, state, and task allocation for all Broker and Attester nodes participating in the protocol.
* **Attester**: Responsible for cryptographic attestation.
    * **Musig2 Aggregator & Signer**: Implements the MuSig2 multi-signature scheme, aggregating partial signatures from peers and producing the final collective signature.
    * **Context Validator**: Verifies the contextual data related to a transaction before signing, ensuring protocol rules are met.
* **Broker**: Manages the entire peg-in/peg-out lifecycle and liquidity provision.
    * **PegIn/PegOut/Reimbursement Processor**: Handles the specific workflows for depositing, withdrawing, and processing reimbursements.
    * **UTXO Manager**: Tracks and manages the Bitcoin UTXOs used by the broker during protocol execution.
    * **Defender & Prover Agent**: These components are active during the reclaim process. The `Prover Agent` interfaces with the Proving System in the Protocol Layer to generate proofs, while the `Defender` implements the logic to defend a reclaim during a challenge.
* **Watcher**: This service is the core of a Watcher node. It actively monitors the network for invalid reclaim attempts and initiates the challenge game when necessary.

##### 3. Protocol Layer

This layer defines the fundamental rules, data structures, and cryptographic processes that govern the bridge's operation, ensuring all participants adhere to the same consensus rules.

* **Transaction Graph & Spec**: Defines the programmatic logic of the bridge on Bitcoin. The `Transaction Graph` can be understood as a smart contract on Bitcoin, composed of a pre-signed set of transactions. The `Transaction Spec` provides the formal specifications that govern the generation and validation of this graph.
* **Contexts**: These are specialized data structures that contain the necessary information for different protocol operations.
    * **BurnContext**: A data structure of the context for a peg-out (reclaim) operation on a target chain (e.g., Ethereum, SUI).
    * **EndorseContext**: An abstraction for the endorsement signature context, responsible for validating the context's data and providing an endorsement signature upon successful verification.
    * **DataContext**: An abstraction for the signature verification context used inside the ZKVM. Corresponding to `EndorseContext`, it is responsible for verifying the validity of an endorsement signature based on the provided data.
* **Proving System**: The core of the trust-minimized reclaim process, which operates through three interconnected components:
    * **ZK Guest Program**: The circuit or program that the zero-knowledge proof is generated for. It contains the logic to validate a reclaim request.
    * **Prover**: The ZKVM (Zero-Knowledge Virtual Machine) engine that executes the ZK Guest Program to generate a cryptographic proof.
    * **OnChain Verifier**: The Bitcoin Script used to verify the correctness of the Groth16 proof submitted by the Broker during the challenge game.
* **SignKit**: A module that provides core cryptographic primitives required by the protocol, such as Secp256k1. It serves as the foundation for services like `Attester` and contexts like `EndorseContext`.

##### 4. Infrastructure Layer

This foundational layer abstracts away interactions with external systems (like blockchains and key managers) and provides essential utilities for the upper layers.

* **Secret Manager**: An abstraction layer that provides key cryptographic primitives such as symmetric key encryption/decryption and transaction signing, simplifying key management tasks. It abstracts away the underlying key management solution, which could be a Hardware Security Module (HSM) or a Key Management Service (KMS).
* **System Configurator**: Manages and provides access to the system's runtime configuration, ensuring all components operate with consistent and correct settings.
* **Database**: Responsible for persisting the node's state. This includes schema and migration management, and provides essential functionalities for the Service Layer.
* **Bitcoin Provider**: An abstraction layer that handles all communication with the Bitcoin network. It provides a simplified interface for the Service Layer to query UTXOs and broadcast transactions, which is particularly helpful when submitting Non-Standard Transactions (NST).
* **ChainSuite**: An abstraction layer for interacting with various finality chains (e.g., Ethereum, SUI). It consists of:
    * **ChainClient**: A generic client for reading from and writing to a blockchain.
    * **Repo**: A runtime collection of ChainClients for managing interactions with different chains.
    * **ProverTypes & Utils**: Provides data types and helper functions specific to the proving systems and chains being used.


### Bridge Backend

The Bridge Backend serves as an interface layer between end-users and the underlying infrastructure of the BitVM Bridge. While it is a centralized service operated by Bitlayer, the backend has no control over the bridge funds, ensuring that the protocol remains trust-minimized. The backend provides the following functionalities:

- **User APIs**: These APIs enable users to interact with the protocol, facilitating operations such as peg-in, peg-out, and reclaim requests.
- **Data APIs**: These APIs provide data for dashboards and explorers, allowing users to trace transactions, view statistics, and monitor the status of the bridge.

### Bridge Frontend

The frontend layer provides user-facing applications that make the BitVM Bridge accessible and transparent:

1. **Bridge Application**: This is the primary interface through which users interact with the protocol, performing operations such as peg-in and peg-out.
2. **Bridge Explorer**: The explorer allows users to check the status of their transactions and monitor the overall activity of the bridge.
3. **Bridge Dashboard**: The dashboard provides an overview of the bridge's operational status, including metrics and statistics related to its performance.

