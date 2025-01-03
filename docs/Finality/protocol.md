---
sidebar_position: 2
sidebar_label: Finality Bridge Protocol
---

# Finality Bridge Protocol

The Finality Bridge Protocol represents a sophisticated mechanism for enabling secure and decentralized interoperability between Bitcoin and other blockchain ecosystems. By leveraging innovative technologies such as BitVM smart contracts and fraud-proof mechanisms, it establishes a trust-minimized environment where funds can be transferred across chains while preserving the integrity of Bitcoin's foundational principles. This article delves into the architecture and operations of the protocol, with a particular focus on its components on Bitcoin, its interaction with target chains, and the intricate processes that govern its functionality.

## Bridge Contract on Bitcoin

At the heart of the Finality Bridge Protocol lies the bridge contract on Bitcoin, which is constructed using BitVM smart contract technology. This approach is particularly well-suited for building bridge protocols due to its ability to emulate smart contract functionality on Bitcoin, a platform traditionally limited in this regard. BitVM achieves this by utilizing pre-signed transaction graphs that define all possible execution paths, ensuring that funds remain secure and accessible only through predefined conditions.

One of the key advantages of BitVM smart contracts is their inherent trust-minimization. A peg-in user, for instance, will only deposit funds after verifying that the correct smart contract has been generated and published. This ensures that no party is harmed if the user chooses not to proceed. Furthermore, the security model operates under a "1-of-N" assumption, meaning that as long as one committee member deletes their private key after signing, it becomes impossible to introduce unauthorized exits for the bridge funds. This design ensures that the bridge contract secures the funds without relying on custodianship, aligning with Bitcoin's decentralized ethos.

For more details on the principles and mechanics of BitVM smart contracts, refer to the [BitVM documentation](https://github.com/bitlayer-org/bitlayer-org.github.io/blob/feature/v2-doc/docs/Learn/Technologies/bitvm-smart-contract.md).

### Bridge Instance Lifecycle

Each peg-in request initiates the creation of a new bridge instance, which is governed by its own BitVM smart contract. This contract meticulously defines all potential exits for the peg-in funds, ensuring that once the funds enter the target chain, they can only be withdrawn back to Bitcoin through the smart contract. This guarantees that no external entity can bypass the contract and access the locked funds.

The lifecycle of a bridge instance is characterized by three distinct states:
1. **Inactive**: The initial state before the peg-in funds are locked in the BitVM smart contract.
2. **Active**: Once the peg-in funds are secured within the contract, the instance transitions to an active state, enabling operations such as peg-out.
3. **Finished**: When all peg-in funds are returned to Bitcoin, the instance concludes its lifecycle by transitioning to the finished state.

### User Operations: Peg-in and Peg-out

The protocol supports two primary user operations: peg-in and peg-out. During a peg-in, users lock their BTC in a BitVM smart contract, which results in the minting of YBTC—a token representation of BTC—on the target chain. Each YBTC token is pegged 1:1 to BTC, ensuring value parity. Conversely, a peg-out involves burning YBTC on the target chain to withdraw an equivalent amount of BTC from the BitVM smart contract. While the peg-in process is relatively straightforward, the peg-out operation introduces additional complexities, which are addressed through innovative mechanisms discussed later in this article.

### The Role of the Presigning Committee

To facilitate the secure operation of each bridge instance, a presigning committee is elected. This committee is responsible for reviewing and pre-signing the transaction graph that governs the BitVM smart contract. To ensure fungibility of funds across different bridge instances, the size of the presigning committee is standardized. Notably, the protocol allows peg-in users to join the presigning committee, further enhancing security by incentivizing honest behavior. Peg-in users have a vested interest in protecting their funds, motivating them to act in accordance with the protocol's rules, such as deleting their private keys after signing.

### Handling Dynamic Elements and Unpredictable Inputs

A significant challenge in BitVM smart contracts is managing dynamic elements, particularly the unpredictability of peg-out users. Since the beneficiary and amount of peg-in funds must be predetermined during the contract's construction, only a limited set of users can initially receive the funds. This rigidity introduces operational inefficiencies.

To address this, the protocol employs a "front-and-reclaim" scheme. Brokers act as intermediaries, fronting the peg-out requests with their own liquidity and subsequently reclaiming the funds from the BitVM smart contract. This approach not only resolves the predictability issue but also ensures that users experience seamless operations without being constrained by the contract's static nature.

## Bridge Contract on Target Chain

The Finality Bridge Protocol is designed to support multiple target chains, including Ethereum and Bitcoin rollups like Bitlayer. The architecture of the bridge contract on the target chain varies depending on the chain's specific design, particularly its light client implementation. This adaptability ensures that the protocol can operate efficiently across diverse blockchain ecosystems.

### Example: Ethereum Mainnet and Bitlayer Rollup

On Ethereum, the bridge contract integrates with Ethereum's light client to verify transactions and manage the minting and burning of YBTC tokens. Similarly, on Bitcoin rollups like Bitlayer, the bridge contract is tailored to interact with the rollup's unique consensus and state verification mechanisms. These variations highlight the protocol's flexibility and its ability to accommodate the nuances of different blockchain platforms.

## End-to-End Operations

### Peg-in: Locking BTC in the Smart Contract

The peg-in process begins with the generation of an N-of-N multisig by the presigning committee. This multisig acts as the custodian of the smart contract, ensuring that no single entity can unilaterally access the funds. Once the peg-in user verifies the correctness of the contract, they transfer their BTC to the multisig, effectively locking the funds in the smart contract. The deletion of private keys by committee members further ensures the trust-minimized nature of the protocol.

### Peg-out: Front-and-Reclaim Procedure

The peg-out process is facilitated by brokers, who play a crucial role in bridging the gap between the static nature of the smart contract and the dynamic requirements of users. When a peg-out user burns YBTC on the target chain, they initiate a peg-out request by partially signing a Bitcoin transaction. The broker validates the request, transfers the requested BTC to the user, and subsequently reclaims the funds from the smart contract.

The reclaim process is inherently optimistic. The broker submits a reclaim request on-chain, which is finalized if no challenges are raised within a predefined window. However, if a challenge arises, a dispute resolution game is triggered. This game, based on fraud proofs, determines the validity of the reclaim request. If the challenge succeeds, the broker's request is rejected, and their deposit is forfeited. This mechanism ensures that the complexity of the process is offloaded to the broker, who charges a fee for their service.

## Fraud Proofs for Reclaim Procedure

Fraud proofs are an integral part of the reclaim process, ensuring that invalid requests are identified and rejected. The procedure relies on the **Reclaim Checker**, a program that verifies the validity of reclaim requests. The actual verification is performed using a Groth16 zero-knowledge proof (ZKP), which provides computational efficiency and scalability.

### Proving and Verifying State Transitions

The broker must generate a ZKP to prove that the reclaim request satisfies the conditions defined by the Reclaim Checker. This includes verifying that the burn occurred on the target chain and that the fronting transaction took place on Bitcoin's canonical chain. The proof is processed off-chain using a chunked Groth16 verifier, which generates shared values for on-chain verification.

On Bitcoin, the verification process involves the following steps:
1. The broker commits to the ZK verifier result.
2. A vigilante verifies the ZK proof off-chain and raises a challenge if inconsistencies are found.
3. The broker reveals all shared values on-chain.
4. The vigilante executes each chunk sequentially to identify discrepancies.
5. If the replayed chunk's result differs from the broker's commitment, the reclaim request is rejected, and the broker's deposit is forfeited.

This layered approach ensures that the protocol remains secure, scalable, and aligned with Bitcoin's decentralized principles.

---

By combining the robustness of BitVM smart contracts with the efficiency of zero-knowledge proofs and fraud-proof mechanisms, the Finality Bridge Protocol establishes a reliable framework for cross-chain interoperability. Its design not only addresses the limitations of Bitcoin's scripting capabilities but also sets a new standard for trust-minimized bridging solutions in the blockchain ecosystem.
