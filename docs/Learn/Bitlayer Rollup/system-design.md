---
sidebar_position: 3
sidebar_label: System Design
---

# System Design

## Bitlayer Rollup Architecture

![Bitlayer Rollup Architecture](/img/BitlayerRollup/rollup-arch.jpg)

The Bitlayer rollup consists of four main components:

1. **Rollup Operator**:  
   The operator is responsible for processing Layer 2 (L2) transactions, proposing L2 blocks and batches, and proving the validity of these batches before submitting them, along with their proofs, to Bitcoin for verification. Currently, only a single operator is supported.

2. **Data Availability (DA) Layer**:  
   The operator submits L2 batches to the DA layer, ensuring the availability of transaction data. In cases of censorship, users can bypass the operator by sending forced transactions directly to the DA layer.

3. **Bitcoin Contract**:  
   The rollup contract is deployed on Bitcoin as a recursive BitVM-style smart contract. This contract verifies the validity of L2 state transitions via submitted proofs.

4. **Rollup Network**:  
   The rollup network consists of several key nodes:
   - **Operator Node**: Includes one active operator and any number of backup operators.  
   - **Contract Signer Nodes**: Responsible for deploying and interacting with the rollup contract.  
   - **Vigilante Nodes**: Monitor the network to detect and challenge invalid state transitions submitted by a malicious operator.

### The Rollup Operator

The rollup operator is divided into three primary roles:

1. **Rollup Sequencer**:  
   - Receives L2 transactions, proposes and executes L2 blocks.  
   - Proves the validity of L2 blocks.  
   - Aggregates L2 blocks and their proofs into L2 batches and batch-proofs.

2. **Rollup Prover**:  
   - Proves the validity of individual blocks.  
   - Aggregates block proofs and DA proofs into a single batch proof.  
   - Further compresses batch proofs into smaller Groth16 proofs for efficient verification.

3. **Rollup Controller**:  
   - Manages the rollup pipeline.  
   - Interacts with the Layer 1 (L1) contract to verify L2 state transitions and achieve finality.