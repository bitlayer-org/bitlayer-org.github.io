---
sidebar_position: 4
---

![](/img/FinalityBridgeArchitecture/arch.png)

<!-- - **1. Finality Chain:** The core functional component that consists of multiple roles (Broker Nodes, Contract Signer Nodes, and Vigilante Nodes) working together to generate, validate, and execute bridge protocols.
- **2. Bridge Backend:** Acts as the interaction hub, managing component communications and data storage. It provides APIs for user interactions and handles protocol operations between Bitcoin and Target Chain.
- **3. BitVM-Style Smart Contract on BTC:** A smart contract deployed on Bitcoin that is collectively maintained by various Finality Chain roles to ensure execution correctness and protocol security.
- **4. fiBTC Contract on Target Chain:** A smart contract deployed on the Target Chain that implements the ERC20 standard interface and provides additional cross-chain operation interfaces for managing minting and burning of bridged assets.

These components work in harmony to ensure secure and efficient cross-chain asset transfers while maintaining the integrity of the bridge protocol. -->

## Core Components

The Finality Bridge represents an innovative advancement in cross-chain infrastructure, meticulously designed to enable secure and efficient bridging of BTC assets to target chains. This sophisticated system achieves its objectives through the harmonious integration of four essential components, each playing a vital role in maintaining the bridge's security and operational efficiency.

At the heart of this architectural marvel lies the ***Finality Chain***, a distributed network that serves as the primary operational backbone. This robust system orchestrates multiple specialized roles that work in concert to generate, validate, and execute bridge protocols with unwavering precision. Complementing this core functionality is the ***Bridge Backend***, an elegantly designed interaction hub that not only manages component communications and data storage but also provides a comprehensive suite of standardized APIs, facilitating seamless user interactions and protocol operations across both Bitcoin and target chains.

The architecture's robustness is further enhanced by two meticulously crafted smart contract implementations. The ***BitVM-Style Smart Contract***, deployed on Bitcoin, represents a technological breakthrough in cross-chain security. This contract, maintained through the collaborative efforts of various Finality Chain roles, ensures impeccable execution correctness and protocol security. Equally crucial is the ***fiBTC Contract*** on the target chain, which extends beyond basic ERC20 standards to incorporate sophisticated cross-chain operation interfaces, establishing a secure foundation for asset management.

### Finality Chain

The Finality Chain's architecture exemplifies elegant system design through its incorporation of three distinct, yet complementary node types:

1. Broker Nodes function as the bridge's economic backbone, serving as sophisticated liquidity providers and transaction facilitators. These nodes maintain cross-chain asset liquidity through an innovative advance/reimbursement model, while simultaneously managing transaction commitments and processing user pegout requests with remarkable efficiency.
2. Contract Signer Nodes establish the security foundation of the entire system. Through their participation in multi-signature protocols and meticulous validation of cross-chain transactions, these nodes ensure the integrity of pegin presignature processes. Their distributed organization implements a robust security model where even a single honest node can effectively prevent malicious operations.
3. Vigilante Nodes serve as the system's guardians, implementing a sophisticated fraud-proof-based verification mechanism. These nodes continuously monitor Broker node behavior and possess the authority to initiate challenges when necessary, thereby maintaining unwavering protocol integrity.

### Bridge Backend

The Bridge Backend represents a masterpiece of software architecture, serving as an sophisticated interface layer between end-users and the underlying infrastructure. This component encompasses a comprehensive suite of features, including meticulously designed API service interfaces, robust data management systems, and real-time blockchain network interactions. The backend provides standardized APIs for user interactions, the backend achieves the delicate balance of simplifying user interactions while maintaining the flexibility to accommodate diverse requirements. Furthermore, the system implements sophisticated data tracking and monitoring capabilities, ensuring unprecedented transparency and control in cross-chain operations.

### BitVM-Style Smart Contract

The BitVM-Style Smart Contract deployed on Bitcoin stands as a testament to innovative blockchain engineering, implementing critical functions through the synchronized efforts of various Finality Chain roles. This sophisticated contract serves multiple essential purposes:

- **Asset Locking:** The contract implements a secure mechanism for locking BTC assets during pegin operations, with Contract Signer Nodes providing meticulous validation of lock parameters while Broker Nodes manage transaction commitments with precision.
- **Reclaim Verification:** Through an advanced verification system, the contract processes and validates reclaim proofs submitted by Broker Nodes during pegout operations, while Vigilante Nodes maintain constant vigilance over these submissions to prevent any possibility of fraudulent claims.

This sophisticated smart contract achieves its full potential through the orchestrated efforts of multiple node types:

- **Broker Nodes:** These specialized nodes generate precise transaction commitments while managing the intricate proof of reclaim execution process.
- **Contract Signer Nodes:** Operating as security pillars, these nodes provide distributed security through sophisticated multi-signature validation and transaction verification protocols.
- **Vigilante Nodes:** Acting as the system's watchdogs, these nodes maintain constant surveillance over contract operations, ready to challenge any suspicious activities through comprehensive fraud proofs.

Through this intricate collaborative approach, the BitVM-Style Smart Contract ensures unparalleled security and verifiability in cross-chain operations.

### fiBTC Contract

The fiBTC Contract represents the pinnacle of cross-chain infrastructure development, deployed on the target chain with extraordinary attention to security and functionality. Building upon the solid foundation of the ERC20 standard interface, this contract introduces sophisticated cross-chain operations that enable seamless asset movement while maintaining an immutable 1:1 ratio between locked BTC assets and minted fiBTC tokens.

The minting process exemplifies the contract's unwavering commitment to security through its comprehensive verification framework. Upon receiving a mint request, the contract initiates an exhaustive validation sequence, meticulously scrutinizing Bitcoin block headers through multiple critical validations: confirming target Bitcoin block finality through consensus, verifying pegin transaction validity within confirmed blocks, and precisely validating locked amounts within the bridge contract. Only after successfully navigating this rigorous verification cascade does the contract proceed with token minting, establishing an impenetrable defense against unauthorized creation.

The burn process showcases the contract's sophisticated security measures through its comprehensive event system. When users initiate withdrawals, the contract performs thorough validation before burning fiBTC tokens and emitting events containing essential withdrawal parameters. Broker Nodes within the Finality Chain maintain constant vigilance over these events to execute pegout operations, ensuring unwavering security and operational integrity throughout the withdrawal lifecycle.

## Operational Workflow

The PegIn process follows a carefully orchestrated sequence:

1. User initiates a deposit request through Bridge Backend API
2. Bridge Backend forwards the request to appropriate Broker Nodes
3. The selected Broker Nodes construct a contract locally and submits it to a committee of Contract Signer Nodes for validation
4. Contract Signer Nodes sign and endorse the contract using the MuSig2 protocol
5. Service Backend records the information and returns the contract to the user
6. User verifies, signs, and sends the transaction to the BTC network to perform a pegin operation
7. Upon completion, Service Backend will submit the mint proof to the fiBTC contract that verifies BTC status and mints equivalent assets for the user

The PegOut process demonstrates equal sophistication:

1. Broker Node monitors Target Chain for withdrawal requests and executes advance payments
2. Broker Node generates Reclaim Proof for the advance payment and submits it to the smart contract built during the pegin process
3. Vigilante Node continuously monitors the contract and verifies submitted proofs, initiating challenges if errors are found to ensure system security. Otherwise, Broker Node will take the reclaim assets, completing the reimbursement process for their advance payment. This completes the secure and efficient pegout cycle while maintaining the integrity of the bridge protocol.