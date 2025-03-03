---
sidebar_position: 1
sidebar_label: Overview
---

# Overview

## What is BitVM Bridge?

The [BitVM Bridge](https:/bitvmbridge.bitlayer.org/) represents a groundbreaking advancement in Bitcoin bridging technology, developed by **Bitlayer** and powered by the innovative **BitVM smart contract**. As the first step toward the realization of the Bitlayer rollup, BitVM Bridge offers a secure and efficient mechanism for transferring Bitcoin (BTC) into the Bitlayer ecosystem. This integration allows Bitcoin to be actively utilized within the **BTCFi ecosystem**, enabling seamless trading and interaction with decentralized finance (DeFi) applications.

Unlike traditional BTC bridges, which often rely on centralized or semi-centralized custodians, BitVM Bridge is **trust-minimized**, meaning it significantly reduces the level of trust required in third-party actors. This trust minimization is achieved through a protocol that combines the robustness of BitVM smart contracts with **fraud proofs**, ensuring that all transactions and operations are verifiable and secure.

The architecture of BitVM Bridge is designed to be highly extensible, making it adaptable to a range of blockchain environments. Initially, it supports the **Bitlayer rollup** and **Ethereum**, with plans to expand compatibility to other **EVM-compatible chains** such as Avalanche and Polygon, as well as non-EVM chains like **Solana**. This flexibility underscores its potential to become a universal solution for bridging Bitcoin across diverse blockchain ecosystems. The token minted through the BitVM Bridge, known as **Peg-BTC**, plays a central role in this process, serving as the representation of Bitcoin within these environments.

## BitVM Bridge: A 3rd Generation BTC Bridge

### The Evolution of BTC Bridges

To fully appreciate the significance of BitVM Bridge, it is essential to understand its place within the broader evolution of Bitcoin bridging technologies. BTC bridges can be categorized into four distinct generations, each defined by the type of custodian managing the locked Bitcoin funds:

1. **First Generation: Centralized Custodian**  
   The earliest BTC bridges relied on centralized custodians, where Bitcoin funds were locked in addresses controlled by a single entity or a fixed group. This model, while simple, introduced significant trust requirements and risks. For example, **wBTC** relies on centralized control, while **MPC-based BTC bridges** distribute control among a predefined group. However, both models are vulnerable to single points of failure or collusion within the custodian group.
   ![1st BTC bridge generation](/img/BitvmBridge/introduction/001.png)
2. **Second Generation: Distributed Custodian**  
   The next evolution introduced distributed custodianship, where Bitcoin funds were locked in addresses controlled by groups of randomly selected entities. These groups were randomly chosen from a larger set to reduce the risk of collusion. To incentivize honest behavior, participants were required to stake assets on a middleware blockchain, with penalties (such as forfeiting their stake) for any detected misconduct. A notable example of this approach is the **tBTC bridge**, supported by the Keep Network. While an improvement over centralized custodianship, this model still assumes an **honest majority** within the group, which can be a critical vulnerability.
   ![2nd BTC bridge generation](/img/BitvmBridge/introduction/002.png)

3. **Third Generation: Trust-Minimized Smart Contract Custodian**  
   The BitVM Bridge belongs to this generation, which represents a paradigm shift in BTC bridging. Here, Bitcoin funds are locked in addresses controlled by a **BitVM smart contract**, a system that requires only one honest participant to ensure security. This approach eliminates the need for centralized or distributed custodians, relying instead on the inherent transparency and verifiability of the smart contract. This makes the custodian **trust-minimized**, reducing the reliance on external actors and enhancing the overall security of the bridge.
   ![3rd and 4th BTC bridge generation](/img/BitvmBridge/introduction/003.png)
4. **Fourth Generation: Trustless Smart Contract Custodian** _(Future)_  
   The theoretical fourth generation envisions a fully trustless model, where Bitcoin funds are locked in **covenant-style smart contracts** that inherit Bitcoin’s native security without any external assumptions. However, this model depends on the introduction of **covenant opcodes** in a future Bitcoin upgrade, which is not yet available.

### Addressing the Limitations of Earlier Generations

As a **3rd generation BTC bridge**, BitVM Bridge resolves key issues that plagued earlier models. First, it removes the reliance on an **honest majority**, a critical vulnerability in distributed custodian systems. Second, it ensures that the security level of the wrapped Bitcoin (Peg-BTC) matches that of other DeFi assets, addressing a long-standing concern about the robustness and reliability of BTC-backed assets in decentralized ecosystems.

## Peg-BTC: The Yielding BTC Token

At the heart of the BitVM Bridge lies **Peg-BTC**, the token minted on the Bitlayer rollup and other supported environments when users lock their Bitcoin into the BitVM smart contract. Peg-BTC is designed to be a secure and reliable representation of Bitcoin within decentralized ecosystems, and its design reflects the principles of trust minimization and security that underpin the BitVM Bridge.

Peg-BTC maintains a **strict 1:1 peg with BTC**, ensuring that every Peg-BTC token in circulation is backed by an equivalent amount of Bitcoin locked in the BitVM smart contract. Unlike tokens issued by centralized custodians, Peg-BTC is not dependent on any single entity for its security. Instead, it derives its integrity from the transparency and verifiability of the BitVM smart contract, which eliminates the need for trust in third-party actors.

It is important to note that Peg-BTC is not a **liquid staked token (LST)**. This means that the Bitcoin locked in the smart contract cannot be accessed or utilized by anyone, ensuring the absolute security of the underlying funds. This design choice further distinguishes Peg-BTC from other BTC-backed tokens, making it a robust and trustworthy asset for use in DeFi applications.
