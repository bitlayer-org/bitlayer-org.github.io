---
sidebar_position: 3
sidebar_label: System Design
---

# System Design

The Finality Bridge is a sophisticated system designed to enable seamless interoperability between Bitcoin and other blockchain ecosystems while maintaining the highest standards of security, decentralization, and user experience. This document provides an in-depth exploration of the system's architecture, components, and operational framework, focusing on how the Finality Bridge Network (FBN), Finality Chain, and supporting infrastructure work together to facilitate trust-minimized cross-chain transactions.

## Overview

The Finality Bridge is composed of several interconnected components that together form a robust and efficient system for managing cross-chain operations. At its core, the system relies on the **Finality Bridge Network (FBN)** and the **Finality Bridge Backend**, both of which are supported by the **Finality Chain**, a dedicated Proof-of-Stake blockchain designed to enhance Bitcoin's interoperability with external systems.

Participants in the Finality Bridge Network include three distinct types of nodes, each with specialized roles:
1. **Broker Nodes**: Provide liquidity and participate in operational processes such as transaction signing and dispute resolution.
2. **Vigilante Nodes**: Monitor and verify operations, ensuring the integrity of the system by challenging invalid reclaims.
3. **Contract Signer Nodes**: Validate and sign transaction graphs, ensuring that all operations adhere to the protocol's specifications.

The **Finality Chain**, a Proof-of-Stake blockchain currently under development, plays a pivotal role in managing the registration and coordination of these nodes while serving as a bridge between Bitcoin and the broader blockchain ecosystem.

## Finality Chain

The Finality Chain is a specialized Proof-of-Stake blockchain designed to support smart contracts and facilitate the smooth interaction of applications within the Bitcoin ecosystem, such as the Finality Bridge. While still under development, the Finality Chain will serve as the foundation for registering and managing the nodes that participate in the Finality Bridge Network. It also acts as a coordinator for critical operations, such as transaction graph validation and dispute resolution, ensuring that the protocol operates efficiently and securely.

By integrating smart contract functionality with Bitcoin's ecosystem, the Finality Chain enables decentralized and trust-minimized interactions that would otherwise be difficult to achieve on Bitcoin's base layer. More details about the Finality Chain's architecture and implementation will be provided as its development progresses.

## Finality Bridge Architecture

The architecture of the Finality Bridge is built around the **Finality Bridge Network (FBN)**, which serves as the operational backbone of the system, and the **Bridge Backend**, which provides an interface layer for end-users and applications. Together, these components ensure that the protocol can handle complex cross-chain interactions while maintaining a user-friendly experience.

### Finality Bridge Network (FBN)

The Finality Bridge Network is composed of three types of nodes, each contributing to the protocol's functionality in distinct ways:

#### 1. **Broker Nodes**
Broker nodes are the liquidity providers within the Finality Bridge Network. Their primary role is to support the front-and-reclaim process by providing short-term liquidity for peg-out requests, for which they earn fees. In addition to their liquidity function, broker nodes perform several critical tasks:
- **Presigning**: Brokers validate the transaction graph, which defines all possible state transitions for the bridge funds, and sign one or more transactions within the graph. These signatures are sent to the Coordinator module on the Finality Chain.
- **Proving**: Brokers execute the Reclaim Check process to generate Reclaim Proofs, which are zero-knowledge proofs that validate the correctness of a reclaim request.
- **Defending**: In cases where a reclaim request is challenged, brokers participate in the dispute resolution game to defend the validity of their claims.

#### 2. **Contract Signer Nodes**
Contract signer nodes are responsible for validating and signing the majority of transactions within the transaction graph. Their tasks include:
- **Presigning**: Similar to broker nodes, signer nodes validate the transaction graph and provide signatures for most transactions. These signatures are also sent to the Coordinator module on the Finality Chain.
- **Transaction Validation**: Signer nodes ensure that all transactions adhere to the [Transaction Graph Specification](#), which defines the structure and rules for transaction execution within the protocol.

#### 3. **Vigilante Nodes**
Vigilante nodes act as the watchdogs of the Finality Bridge Network, ensuring that all operations are carried out correctly and challenging any invalid claims. Their responsibilities include:
- **Monitoring**: Vigilantes monitor peg-out events and pending reclaim requests on Bitcoin, ensuring that all actions are consistent with the protocol's rules.
- **Verification**: Vigilantes run the Reclaim Checker to independently verify the validity of reclaim requests.
- **Challenging**: If a reclaim request is found to be invalid, vigilantes initiate a challenge and participate in the dispute resolution game to prevent unauthorized fund withdrawals.

#### Node Registration and Management
All nodes participating in the Finality Bridge Network must register themselves with a smart contract on the Finality Chain before performing any actions. This registration process ensures that only authorized and verified nodes can participate in the protocol, enhancing its security and reliability.

### Bridge Backend

The Bridge Backend serves as an interface layer between end-users and the underlying infrastructure of the Finality Bridge. While it is a centralized service operated by Bitlayer, the backend has no control over the bridge funds, ensuring that the protocol remains trust-minimized. The backend provides the following functionalities:
- **User APIs**: These APIs enable users to interact with the protocol, facilitating operations such as peg-in, peg-out, and reclaim requests.
- **Data APIs**: These APIs provide data for dashboards and explorers, allowing users to trace transactions, view statistics, and monitor the status of the bridge.

### Bridge Frontend

The frontend layer provides user-facing applications that make the Finality Bridge accessible and transparent:
1. **Bridge Application**: This is the primary interface through which users interact with the protocol, performing operations such as peg-in and peg-out.
2. **Bridge Explorer**: The explorer allows users to check the status of their transactions and monitor the overall activity of the bridge.
3. **Bridge Dashboard**: The dashboard provides an overview of the bridge's operational status, including metrics and statistics related to its performance.

