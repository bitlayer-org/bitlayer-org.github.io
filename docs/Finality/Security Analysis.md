---
sidebar_position: 7
---

# Security Analysis
Bridges play a crucial role in blockchain ecosystems by enabling asset transfer across networks. Therefore, they must be secure. Any vulnerabilities in a bridge can compromise the assets being transferred. In the context of Bitcoin, bridging is especially important because it is the most secure and decentralized blockchain. However, existing Bitcoin bridges have several limitations, as mentioned in the Introduction, which created systemic vulnerabilities that could potentially compromise the entire system.

BitVM2 represents a significant advancement in addressing these limitations. By integrating ZK techniques and implementing smart contracts on Bitcoin, BitVM2 enables trust minimization in cross-chain operations. With BitVM2, users can benefit from a secure bridge that maintains the integrity and security standards of Bitcoin.

## Security Goal

> **Balance security:** Any user holding $v$ coins in the side system, can burn them and then, and only then,
eventually claim $v-f_O$ coins on the main blockchain, where $f_O \geq 0$ is a fee charged to cover the bridge's
operating costs.

As described in the [BitVM2 paper](https://bitvm.org/bitvm_bridge.pdf). The most important goal of a Bitcoin bridge is to ensure balance security. In other words, the BTC locked on the Bitcoin mainnet must not be transferred in a way that violates the protocol's rules, and ultimately, it can flow back to users.

## Security Properties

### State Validity

Finality Bridge is a Bitcoin bridge solution based on BitVM2. It employs ZK-SNARK to prove the bridge's status within Bitcoin scripts, guaranteeing that asset transfers are conducted according to the protocol. In the context of optimistic verification, anyone may challenge the proof's validity within a specified time, and the malicious broker's staked Bitcoin is slashed.

### Trust-minimized Covenant Emulation Committee

#### Quick Recap of How CEC Works

Covenant Emulation Committee (CEC for short) is composed of $n$ Signers. If the covenant needs to restrict the spending of a UTXO $utxo_A$, the scriptPubKey corresponding to $utxo_A$ must include the signature check of the $n$ Signers. Besides, as long as CEC only presigns $tx_A$, no other transaction can spend $utxo_A$ except $tx_A$.


#### Security Assumptions

- In a CEC, at least one member is honest, which is known as trust minimization.

- We assume a synchronous network, meaning every message is guaranteed to be delivered to the recipient within a known time bound $\Delta$.

#### Security & Liveness Analysis

##### Security

- If an honest Signer outputs a signature $\sigma$, all other Signers will output the same signature $\sigma$.  
  If an honest node outputs the signature $\sigma$, it must have received $n$ partial signatures $\gamma_k$ (including its own). Based on the assumption of a synchronous network, all other Signers will also receive the same $\gamma_k$ within time $\Delta$, and thus, they will all output the signature $\sigma$.
- If at least one Signer is honest, malicious Signers cannot output a valid signature $\sigma'$ for an invalid message $m'$.  
  If malicious Signers output a valid signature $\sigma'$ for the message $m'$, they must have received $n$ partial signatures $\gamma_k'$ (including their own), where $\gamma_i'$ comes from an honest node $i$. However, the honest node will not generate a partial signature for the invalid message $m'$, so the assumption does not hold.
- If at least one Signer is honest, the funds will not be misappropriated.
  Since the honest nodes will discard their key pairs after constructing the signature, no transaction other than the presigned one can spend the UTXO, and the UTXO cannot be privately appropriated by the Committee.
In conclusion, the Committee's security threshold is 1-of-n, which means that as long as there is an honest node in the committee, the security of the system can be guaranteed.

##### Liveness

To ensure the liveness, all Signers must be online; otherwise, presigning cannot be completed. Therefore, the Committee's liveness threshold is n-of-n.

## Future Directions

### Liveness Augment

To augment liveness, we can increase the number of backup Signers while maintaining the same CEC size. In other words, each time a presign is required, a fixed number of Signers can be selected to form the CEC. In the event of a failure, the construction can be rebuilt.

### CEC within PoS Chain

Actually, we can implement CEC on a PoS chain. This approach would not only ensure the security and liveness of CEC but also provide additional functionalities for rotating Signers as well as incentives and penalties.

### Covenant
At the time of writing, covenants have not been added to Bitcoin. However, once implemented, covenants could enable introspection of Bitcoin transactions without relying on CEC's presign to restrict the spending of UTXOs. This could pave the way for a real trustless model.