---
sidebar_position: 2
sidebar_label: BitVM Bridge Protocol
---

# BitVM Bridge Protocol

The **BitVM Bridge Protocol** establishes the foundational framework for interactions between users and two distinct smart contracts—one deployed on Bitcoin and the other on a target chain. This protocol is designed to facilitate a trust-minimized bridging mechanism, enabling secure and efficient movement of Bitcoin (BTC) across blockchain ecosystems while maintaining the integrity of the underlying assets.

## Defining Protocol Participants

The protocol involves several key participants, each playing a specific role in ensuring the secure and seamless operation of the bridge:

1. **Bridge Contract A:**  
   Deployed on Bitcoin, this contract acts as the **trust-minimized custodian** of the bridge funds. It is responsible for securing the BTC locked by users and managing the exit paths for the funds.
2. **Bridge Contract B:**  
   Deployed on the target chain (e.g., Bitlayer rollup), this contract functions as the **management console** for the minted BitVM BTC tokens, which represent the pegged BTC on the target chain.
3. **Peg-in User:**  
   A BTC holder who initiates the bridging process by locking BTC in Bridge Contract A. In return, the peg-in user mints an equivalent amount of BitVM BTC on Bridge Contract B. Each bridge instance involves a single peg-in user.
4. **Peg-out User:**  
   A BitVM BTC holder who burns their tokens on Bridge Contract B to withdraw BTC from Bridge Contract A. The number of peg-out users corresponds to the number of fund exits defined in Bridge Contract A.
5. **Broker:**  
   Serving as a **middleman**, brokers provide short-term liquidity to peg-out users by fulfilling their withdrawal requests. Brokers later reclaim the BTC from Bridge Contract A using a **front-and-reclaim** mechanism, which ensures the smooth operation of the bridge while addressing the unpredictability of peg-out requests.

## Bridge Contract A on Bitcoin

### Overview

Bridge Contract A, deployed on Bitcoin, is constructed using the **BitVM smart contract** framework. Rather than a single, monolithic contract, it consists of multiple contract instances, with each instance corresponding to a unique bridge instance. This decentralized construction ensures that funds are securely managed without reliance on a centralized custodian.

The **BitVM smart contract** is particularly well-suited for building bridge protocols due to its robust trust-minimized design:

- **Verification Before Deposit:** Peg-in users can verify the correctness of the smart contract before depositing funds, ensuring that no funds are at risk unless the contract is valid and publicly available.
- **1-of-N Security:** The trust model assumes that as long as one participant deletes their private key, the contract remains secure. This ensures that no malicious actor can manipulate the contract to steal funds.
- **Immutable Exit Paths:** The transaction graph defines all possible exits for the bridge funds, preventing unauthorized access or tampering.

For more details, refer to [BitVM Smart Contract](Learn/Technologies/bitvm-smart-contract.md).

### Bridge Instances and Contract Instances

Each peg-in request triggers the creation of a new **bridge instance**, which manages the entire lifecycle of the pegged funds. The following steps outline the process:

1. **Creation of Bridge Contract A:**
   For each bridge instance, a unique BitVM smart contract (Bridge Contract A) is generated collaboratively by the participants. This involves jointly proposing and cosigning the transaction graph that defines the contract's behavior.
2. **Deployment of the Transaction Graph:**
   Once the pre-signed transaction graph is published, the smart contract is considered "deployed." Although this deployment mimics Ethereum-style on-chain smart contract deployment, all operations occur off-chain.
3. **Lifecycle Management:**

   - When the peg-in fund is locked in Bridge Contract A, the bridge instance transitions from an **inactive** to an **active** state.
   - Once all pegged funds are withdrawn and returned to Bitcoin, the bridge instance transitions to a **finished** state.

This design ensures that all exits of the pegged funds are predefined and immutable, guaranteeing that no external actor can bypass the contract to access the funds.

### Handling Dynamic Participants

One of the key challenges in constructing Bridge Contract A is managing the unpredictability of peg-out users. Since the transaction graph must be presigned by all participants, the beneficiaries and amounts for each fund exit must be determined in advance. This limitation introduces significant inconvenience, as it restricts the eligibility of users to withdraw funds.

To address this issue, the protocol introduces the role of **brokers**, who act as intermediaries. Brokers provide liquidity to peg-out users by fulfilling their withdrawal requests and reclaiming the funds from Bridge Contract A later. This **front-and-reclaim scheme** ensures that the bridge can operate efficiently despite the dynamic nature of peg-out requests.

### Presigning Committee

The security of Bridge Contract A relies on a **presigning committee**, which is responsible for jointly signing the transaction graph. However, the composition of this committee introduces potential vulnerabilities:

- Peg-out users cannot participate in the presigning process because their identities are unknown at the time.
- The committee, comprising the peg-in user and brokers, creates an imbalance of power, as brokers may collude to steal the pegged funds.

To mitigate this risk, the protocol incorporates **neutral members** into the presigning committee. These members, who have no direct stake in the funds, act as impartial participants to enhance security.

Key considerations for the presigning committee include:

- The size of the committee must be significantly larger than the number of brokers to prevent collusion.
- The peg-in user also joins the committee, adding an additional layer of security by acting in their own interest to protect the funds.
- To ensure fungibility of funds across bridge instances, the size of the presigning committee must remain consistent across all instances.

### Transaction Graph Design

The transaction graph in Bridge Contract A consists of multiple subgraphs that define the flow of funds:

1. **Peg-in Subgraph:**  
   Contains a single transaction in which the pegged funds are distributed among multiple exit UTXOs.
2. **Peg-out Subgraphs:**  
   Each peg-out subgraph corresponds to a single peg-out transaction, where brokers use their reserved UTXOs to fulfill withdrawal requests.
3. **Reclaim Subgraphs:**  
   For each broker, multiple reclaim subgraphs are prepared, corresponding to potential fund exit paths. While not all reclaim subgraphs will be executed on-chain, they ensure that brokers can reclaim their liquidity in a trust-minimized manner.

### Addressing Invalid Reclaim Requests

To prevent brokers from submitting invalid reclaim requests, the protocol employs an **optimistic fraud-proof mechanism**:

- When a broker submits a reclaim request, they must commit to the result of a **Reclaim Checker**, which verifies the validity of the request.
- If no challenge is raised within a specified period (e.g., one week), the broker is allowed to reclaim the funds.
- In the event of a dispute, a **vigilante** can challenge the reclaim request and submit a fraud proof to Bridge Contract A.

The fraud-proof mechanism assumes the presence of at least one honest vigilante who actively monitors the system and ensures that invalid reclaim requests are rejected.

## Bridge Contract B on the Target Chain

Bridge Contract B, deployed on the target chain, manages the lifecycle of BitVM BTC tokens. Unlike Bridge Contract A, its implementation varies depending on the target chain's architecture. For example, Turing-complete chains like Ethereum and Bitlayer rollup allow for more straightforward implementations, while other chains may require custom designs.

Further details on Bridge Contract B will be provided in future updates.

## End-to-End Operations

### Peg-in Process

1. The presigning committee generates a multisig address to act as the custodian of the pegged funds.
2. The peg-in user locks their BTC in the multisig after verifying the correctness of the smart contract.

### Peg-out Process

1. The peg-out user burns BitVM BTC on Bridge Contract B and initiates a withdrawal request.
2. A broker fulfills the request by transferring BTC to the peg-out user.
3. The broker reclaims the funds from Bridge Contract A through the fraud-proof mechanism.

## Fraud Proofs for Reclaim Procedure

The fraud-proof mechanism for reclaim requests is modeled on the principles outlined in [Fraud Proofs on Bitcoin](https://github.com/bitlayer-org/bitlayer-org.github.io/blob/main/docs/Learn/Technologies/fraud-proofs-on-bitcoin.md). The configuration of this mechanism is as follows:

- The **Reclaim Checker** serves as the original program, responsible for verifying the validity of a reclaim request.
- The **Groth16 verifier** of the Reclaim Checker acts as the actual program being executed.
- Dispute resolution operates at the **segment level**: the Groth16 verifier is divided into segments, and a single segment—the disputed segment—is replayed on-chain for verification.
- The assertion being challenged is that the **Reclaim Proof** passes verification by the Groth16 verifier. This proof is generated based on the execution of the Reclaim Checker.

### Proving the State Transition

To initiate a reclaim request, the broker must provide a **Groth16 proof** that validates the state transition. The Reclaim Checker ensures that:

1. The burn event occurred in Bridge Contract B on the target chain.
2. The fronting event occurred on Bitcoin.
3. Both events were executed on their respective canonical chains, avoiding forks.

While detecting private forks on Bitcoin remains an open research problem, this is beyond the scope of the current implementation.

The Groth16 proof is processed off-chain by a **chunked Groth16 verifier**, which divides the verification process into discrete segments and generates the shared values required for all verifier chunks.

### Verifying the State Transition on Bitcoin

The verification process unfolds as follows:

1. **Commitment:**  
   The broker commits to the result of the ZK verifier by submitting $r = \text{Groth16.Verify}(p)$, where $p$ represents the Reclaim Proof.
2. **Off-Chain Verification:**  
   A vigilante verifies the Groth16 verifier off-chain. If the verifier returns a negative result, the vigilante initiates a challenge.
3. **Revealing Shared Values:**  
   The broker reveals all shared values for the verifier chunks on-chain.
4. **Chunk Search:**  
   The vigilante retrieves the shared values from Bitcoin and sequentially executes each verifier chunk off-chain to locate the disputed segment.
5. **On-Chain Replay:**  
   The vigilante replays the disputed chunk on-chain, using the shared values to verify its correctness.
6. **Outcome:**  
   If the replayed result does not match the broker’s initial commitment, the reclaim request is rejected, and the broker’s stake is forfeited.
