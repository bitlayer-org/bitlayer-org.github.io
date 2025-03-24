---
sidebar_position: 6
sidebar_label: Finality Chain
---

# Finality Chain

## Understanding the Finality Chain

The **Finality Chain** is a Proof-of-Stake (PoS) blockchain designed to enhance the functionality of decentralized applications (dApps) within the Bitcoin ecosystem by enabling seamless interaction with Bitcoin Layer 1 (L1). Acting as a modular and complementary layer, the Finality Chain provides essential infrastructure to support advanced features like smart contracts and coordination mechanisms, all while ensuring that applications remain secure and autonomous. Importantly, the **non-intrusive architecture** of the Finality Chain ensures that applications can continue to function safely and independently on Bitcoin L1, even if the Finality Chain is removed or becomes unavailable.

One of the most powerful aspects of the Finality Chain is its **modular design**, which allows it to process new types of tasks by plugging in additional **modules**. These modules are categorized into **application modules** and **native modules**, each serving distinct purposes. Application modules are implemented as smart contracts, offering developers a flexible way to build and deploy custom functionalities tailored to their specific use cases. On the other hand, native modules use native code and are designed to handle foundational tasks that require deeper integration with the chain. Most native modules are implemented as system contracts, ensuring efficiency and reliability for common task types.

Through this modular architecture, the Finality Chain empowers applications to perform a wide range of decentralized tasks, from coordinating complex operations to building autonomous networks. By deploying smart contracts or leveraging native modules, developers can extend the capabilities of their applications without compromising decentralization or security.

Currently, the Finality Chain supports common task types through its **native modules**. The first and only native module available at this stage is the **BitVM Smart Contract Coordinator**, which plays a crucial role in managing BitVM-style smart contracts. These contracts emulate smart contract functionality on Bitcoin by leveraging pre-signed transaction graphs. As the Finality Chain continues to evolve, additional modules and technical details will be introduced, further enriching its ecosystem and unlocking new possibilities for innovation.

## Native Modules

The modular design of the Finality Chain enables it to cater to diverse application needs by introducing specialized native modules. These modules act as pre-built components that address specific challenges, offering developers a reliable and efficient foundation for their decentralized systems. 

### BitVM Smart Contract Coordinator

The **BitVM Smart Contract Coordinator** is the first native module implemented on the Finality Chain. It is specifically designed to facilitate the operation of BitVM-style smart contracts, which emulate smart contract functionality on Bitcoin by leveraging pre-signed transaction graphs. This module plays a pivotal role in coordinating the actions of participants involved in such contracts, ensuring seamless execution and robust security.

#### Attester Coordination

One of the primary responsibilities of the BitVM Smart Contract Coordinator is to manage the **attesting committee** for each new BitVM smart contract. In the context of BitVM, the attesting committee is a group of participants who review and pre-sign the transaction graph, effectively transforming it into an immutable contract. The Coordinator module streamlines this process by:

1. **Electing the Pre-Signing Committee**: For every new BitVM smart contract, the module facilitates the selection of committee members from a pool of candidates. This ensures that the committee is composed of trusted participants who can uphold the integrity of the contract.
2. **Incentive Mechanisms**: To address challenges such as liveness and malicious behavior, the module implements an incentive structure. Honest committee members are rewarded for their participation, while those found engaging in malicious activities are penalized through slashing mechanisms. This ensures that the committee remains active and trustworthy.
3. **Coordinating Signatures**: Once the committee is formed, the module orchestrates the signing process, ensuring that all members contribute their signatures in a timely and coordinated manner.

For applications to leverage this functionality, they must implement a **attester node**. For instance, a BTC bridge application may require its attester node to verify the format of each transaction in the graph, sign the graph, and then send the signature to the Coordinator module. This integration ensures that the application can seamlessly interact with the BitVM ecosystem.

#### Watcher Coordination

Another critical role of the BitVM Smart Contract Coordinator is to support **watchers**, participants who monitor and verify the correctness of assertions submitted to the Bitcoin blockchain. Many applications built on fraud-proof systems and BitVM smart contracts rely on watchers to maintain their integrity. These participants play a crucial role in ensuring that malicious or erroneous assertions are promptly challenged.

The Coordinator module assists watchers in several ways:

1. **Data Availability**: It acts as a data availability layer, providing watchers with access to the necessary application data for verification. This ensures that watchers can efficiently perform their duties without encountering bottlenecks or delays.
2. **Incentive Mechanisms**: To encourage vigilant monitoring, the module rewards honest watchers who successfully identify and challenge fraudulent assertions. This additional layer of incentives fosters an active and reliable network of participants dedicated to maintaining the system's security.

By addressing these challenges, the BitVM Smart Contract Coordinator module ensures that both attesters and watchers can operate effectively, creating a robust framework for decentralized applications.
