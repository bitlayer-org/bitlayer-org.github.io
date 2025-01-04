---
sidebar_position: 99
sidebar_label: Transaction Graph Specification
---

# Transaction Graph Specification

## Peg-in

1. The User provides sufficient UTXOs and it's sidechain address to the FBC
2. The FBC responds with a valid peg-in transaction, accompanied by an endorsement consisting of signatures from the CEC on the transaction's TXID.
3. The user submits a peg-in transaction and waits for further processing by the FBC.
4. The FBC monitors the peg-in transaction, and once it is confirmed, the FBC generates the corresponding [Bitcoin light client proof](https://docs.gobob.xyz/learn/builder-guides/relay).
5. The FBC interacts with the bridge contract on sidechain, providing the proof and endorsement, and mints an equivalent amount of YBTC on sidechain for the user.

The Bitcoin light client proof ensures that the peg-in transaction has been confirmed on the Bitcoin network, while the endorsement guarantees that the bitvm smart contract (transaction graph) has been successfully constructed. These two elements are critical for maintaining the security of the bridge.

## Peg-out

1. The user interacts with the FBC, specifying the amount it wishes to burn.
2. The FBC responds with the most suitable burn transaction. As explained in the 'front-and-reclaim', the amount of peg-in funds is predetermined, so it may not exactly match the amount the user initially requested.
3. The user reviews the details of the burn transaction, including the fee to be paid to the broker and the exact amount of BTC they will receive after a certain period. If the details are acceptable, the user submits the burn transaction to the sidechain network.
4. The broker monitors burn transactions on the sidechain and competes to execute the pre-payment transaction, only one broker can succeed in paying the user in advance.

For the user, the workflow is complete once the expected BTC is received. They do not need to worry about the reclaim process, which is the most complex aspect of the operation.

## Reclaim

1. The winner then submits a kickoff transaction to reclaim the peg-in funds following the challenge game. 
2. An honest broker will receive the peg-in funds, while a malicious broker will be penalized through slashing, and the challenger will be rewarded.

The safety of peg-out is almost ensured by the Bitcoin consensus itself. Since anyone can act as a challenger and is incentivized to punish malicious brokers, if a challenge occurs, the broker must reveal all intermediate states. Subsequently, a Bitcoin zk-verifier can be executed to disprove any malicious actions identified in the verifier script.

Although the FBC appears to play a crucial role in many scenarios, it does not compromise the security of the bridge. Its primary function is to assist users in completing the entire process, allowing them to focus less on the intricate workings of the bridge, which can be quite complex for the average user. However, experienced users will have the option to bypass the FBC and manage the process independently in the future.
