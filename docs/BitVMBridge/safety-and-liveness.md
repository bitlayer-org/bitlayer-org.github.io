---
sidebar_position: 4
sidebar_label: Safety and Liveness
---

# Safety and Liveness

The concepts of safety and liveness are fundamental to the design and operation of decentralized systems, particularly in the context of smart contracts and bridging mechanisms like those employed by BitVM. This article delves into the nuances of these properties as they pertain to BitVM's smart contract architecture and its derivative, the BitVM Bridge. By exploring both the deployment and operational stages of BitVM smart contracts, we aim to provide a comprehensive understanding of how these systems ensure security and reliability while maintaining operational continuity.
## Safety and Liveness in BitVM Smart Contracts

BitVM smart contracts operate through two distinct stages: the **deployment stage** and the **running stage**. At the deployment stage, a transaction graph is created and presigned by a committee of participants, while the running stage involves participants executing actions in accordance with the predefined transaction graph. These stages form the foundation for evaluating both safety and liveness in the system.
### Safety

#### Safety Assumptions

The safety of BitVM smart contracts hinges on specific assumptions tied to each stage of the contract lifecycle. During the deployment stage, all operations occur off-chain, making safety considerations largely irrelevant at this point. However, at the running stage, safety is critically dependent on the behavior of the signers. Specifically, if at least one signer deletes their signing key after the deployment stage, the contract remains secure and resistant to manipulation. This key deletion ensures that no unauthorized modifications can occur, preserving the integrity of the transaction graph.

#### Safety of the Presigning Procedure

The presigning procedure, a cornerstone of the deployment stage, leverages the **MuSig2 algorithm** to ensure cryptographic integrity. The MuSig2 algorithm guarantees that all honest signers produce the same signature, denoted as $\sigma$, for a given message. This uniformity arises from the synchronous network assumption, which ensures that all signers receive the same set of partial signatures, $\gamma_k$, within a bounded time $\Delta$. Consequently, if an honest signer outputs a valid signature $\sigma$, it is inevitable that all other honest signers will do the same.

Moreover, the protocol ensures that malicious signers cannot generate a valid signature $\sigma'$ for an invalid message $m'$. For a valid signature $\sigma'$ to exist, all signers would need to contribute partial signatures $\gamma_k'$, including at least one from an honest participant. However, an honest node will categorically refuse to generate a partial signature for an invalid message, thereby preventing the creation of $\sigma'$. This property is crucial in maintaining the integrity of the presigning procedure and ensuring the system's overall safety.
### Liveness

#### Liveness at the Deployment Stage

The deployment stage of a BitVM smart contract is inherently fragile in terms of liveness. If even a single signer refuses to cooperate, the entire contract deployment will fail. This characteristic underscores the importance of coordination and trust among participants during the initial setup phase.

#### Liveness at the Running Stage 

Once the contract is deployed, the liveness of the system depends heavily on the application-layer design. For example, in the context of a bridge contract, liveness is preserved as long as at least one broker remains honest and actively participates in the protocol. This ensures that the system can continue to process transactions and fulfill its intended purpose, even in the presence of some malicious or uncooperative participants.

## Safety and Liveness in the BitVM Bridge

The BitVM Bridge, built atop the BitVM smart contract framework, inherits many of its safety and liveness properties. This bridge serves as a trust-minimized mechanism for transferring assets across chains, leveraging the same cryptographic guarantees provided by the underlying BitVM architecture.
### Safety

The safety of the BitVM Bridge is rooted in the behavior of its honest participants. Once the presigned transaction is constructed and the corresponding keys are discarded by honest nodes, the UTXO associated with the bridge becomes immutable. This means that no transaction other than the presigned one can spend the UTXO, and the UTXO cannot be privately appropriated by colluding committee members. This property ensures that the assets locked in the bridge remain secure and tamper-proof, even in the presence of malicious actors.
### Liveness

The liveness of the BitVM Bridge, however, is more constrained. If even a single signer refuses to cooperate, the bridge cannot process a peg-in transaction. This limitation highlights the critical role of participant cooperation in maintaining the bridge's functionality. While this dependence on cooperation may seem like a drawback, it is a necessary trade-off to achieve the high level of safety and trust minimization that the BitVM Bridge offers.
