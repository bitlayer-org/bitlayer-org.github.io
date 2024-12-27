---
sidebar_position: 2
---

## Bridge Instance and User Operations

The operational framework of Finality Bridge revolves around the concept of bridge instances, which provide a structured approach to managing cross-chain transfers while maintaining security guarantees. Each peg-in request triggers the creation of a new bridge instance, accompanied by a corresponding BitVM2 smart contract that governs the entire lifecycle of the transferred funds.

These bridge instances follow a well-defined state machine. Initially created in an 'inactive' state, an instance transitions to 'active' once the peg-in funds are successfully locked in the BitVM2 smart contract. The final transition to a 'finished' state occurs when all peg-in funds have been successfully returned to Bitcoin through legitimate withdrawal processes.

The BitVM2 smart contract associated with each bridge instance serves as an immutable guardian of the locked funds. It meticulously defines all possible exit paths for the peg-in funds, ensuring that once funds enter the target chain, they can only be withdrawn back to Bitcoin through the predetermined pathways established in the smart contract. This rigid structure eliminates any possibility of unauthorized access or manipulation of the locked funds.

User interactions with Finality Bridge primarily occur through two fundamental operations:

1. Peg-in Operations: This process involves locking Bitcoin in a BitVM2 smart contract, which triggers the minting of equivalent fiBTC tokens on the target chain. The one-to-one relationship between locked Bitcoin and minted fiBTC ensures perfect value preservation across chains. The process is carefully orchestrated to maintain security and transparency throughout the transfer.
2. Peg-out Operations: While conceptually straightforward - involving the burning of fiBTC on the target chain to withdraw the corresponding Bitcoin - the actual implementation involves sophisticated mechanisms to ensure security and reliability. The complexity of this operation is largely abstracted away from end users through the front-and-reclaim procedure, which we'll explore in detail in subsequent sections.

The bridge instance model, combined with these core operations, creates a robust framework for managing cross-chain transfers while maintaining the trust-minimized nature of the system. Each instance operates as an independent entity with its own state and smart contract, ensuring that security guarantees remain compartmentalized and robust throughout the bridge's operation.


### Peg-in
1. The User provides sufficient UTXOs and it's sidechain address to the FBC
2. The FBC responds with a valid peg-in transaction, accompanied by an endorsement consisting of signatures from the CEC on the transaction's TXID.
3. The user submits a peg-in transaction and waits for further processing by the FBC.
4. The FBC monitors the peg-in transaction, and once it is confirmed, the FBC generates the corresponding [Bitcoin light client proof](https://docs.gobob.xyz/learn/builder-guides/relay).
5. The FBC interacts with the bridge contract on sidechain, providing the proof and endorsement, and mints an equivalent amount of fiBTC on sidechain for the user.

The Bitcoin light client proof ensures that the peg-in transaction has been confirmed on the Bitcoin network, while the endorsement guarantees that the bitvm smart contract (transaction graph) has been successfully construced. These two elements are critical for maintaining the security of the bridge.


### front-and-reclaim 
Due to the inherent nature of BitVM smart contracts, the beneficiary and amount of the peg-in funds MUST be determined prior to the construction of the BitVM smart contract. As a result, only a limited set of users are eligible to receive the peg-in funds, which introduces a significant inconvenience.

To address this issue, we designate this limited set of users as "brokers". These brokers are intended to assist other users in facilitating the transfer from fiBTC to BTC. Brokers should pay other users in advance. Brokers are required to pay other users in advance and can subsequently claim reimbursement for themselves.

### Peg-out [work in progress]
1. The user interacts with the FBC, specifying the amount it wishes to burn.
2. The FBC responds with the most suitable burn transaction. As explained in the 'front-and-reclaim', the amount of peg-in funds is predetermined, so it may not exactly match the amount the user initially requested.
3. The user reviews the details of the burn transaction, including the fee to be paid to the broker and the exact amount of BTC they will receive after a certain period. If the details are acceptable, the user submits the burn transaction to the sidechain network.
4. The broker monitors burn transactions on the sidechain and competes to execute the pre-payment transaction, only one broker can succeed in paying the user in advance.

For the user, the workflow is complete once the expected BTC is received. They do not need to worry about the reclaim process, which is the most complex aspect of the operation.

### reclaim [work in progress]
1. The winner then submits a kickoff transaction to reclaim the peg-in funds following the challenge game. 
2. An honest broker will receive the peg-in funds, while a malicious broker will be penalized through slashing, and the challenger will be rewarded.

The safety of peg-out is almost ensured by the Bitcoin consensus itself. Since anyone can act as a challenger and is incentivized to punish malicious brokers, if a challenge occurs, the broker must reveal all intermediate states. Subsequently, a Bitcoin zk-verifier can be executed to disprove any malicious actions identified in the verifier script.

Although the FBC appears to play a crucial role in many scenarios, it does not compromise the security of the bridge. Its primary function is to assist users in completing the entire process, allowing them to focus less on the intricate workings of the bridge, which can be quite complex for the average user. However, experienced users will have the option to bypass the FBC and manage the process independently in the future.