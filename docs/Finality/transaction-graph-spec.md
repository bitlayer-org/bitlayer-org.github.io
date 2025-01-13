---
sidebar_position: 99
sidebar_label: Transaction Graph Specification
---

# Transaction Graph Specification

## transaction graph instance
![transaction graph](/img/Finality/protocol/transaction-graph-spec.png)
This is an example of a transaction graph instance, not all details are shown in this figure. It represents a combination of transactions and their connections, which will be introduced below. 
- **PegIn**: The user deposits $a$ BTC through this transaction. The single output of the transaction is secured by a MuSig2 signature from the CEC, which is required to spend the funds. It ensures that the deposited funds can only be claimed through specific transactions, such as **HappyTake** and  **UnhappyTake**.
    
    - txin count: 1
        - txin[0].outpoint: one of the user's available utxo
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness stack: it depends on the spending condition of 'txin[0].outpoint', typically it is `<signature> <pk>`. the `<signature>` hash type MUST be 0x01 (SIGHASH_ALL)
    - txout count: 1
        - txout[0].amount: $a$ BTC
        - txout[0].script: `<aggregate_pubkey> OP_CHECKSIGVERIFY OP_TRUE` `<aggregate_pubkey>` is the public key of MuSig2 signature
- **PegOut**: The user will announce a **Pegout**, which at this stage consists of only one input and one output. The broker will know how much fee the user intends to pay(e.g. $f_{b}$ in this figure). Then the broker provides a utxo that can satisfies the requirement of **PegOut** and sent it 
    - txin count: 2
        - txin[0].outpoint: one of the user's available 'dust' utxo
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness stack: it depends on the spending condition of 'txin[0].outpoint'. Typically it is `<signature> <pk>`.Besides, the `<signature>` hash type MUST be 0x83 (SIGHASH_ANYONECANPAY | SIGHASH_SINGLE)
        - txin[1].outpoint: one of the broker's available 'dust' utxo
        - txin[1].sequence: 0xFFFFFFFF(final)
        - txin[1].script: empty
        - txin[1].witness stack: it depends on the spending condition of 'txin[1].outpoint'. the signature hash type MUST be 0x01 (SIGHASH_ALL)
    - txout count: 1
        - txout[0].amount: $a-f_{b}$ BTC, $f_{b}$ is fee
        - txout[0].script: it is set by the user and is typically a p2wpkh script
- **Stake**: The broker stake $b$ BTC through this transaction. the first output is used to begin the reimbursement or just skip this round. the second output is used to slash the broker. such as **RevealTimeout** and **Disprove**. The purpose of this transaction is to enable the broker reuse the collateral for the next round of reimbursement, as the output of this transaction is predictable
    - txin count: 1
        - txin[0].outpoint: one of the broker's available utxo(at least $b$ BTC) or utxo from last stake transaction's second output
        - txin[0].sequence: 1) broker's available utxo: 0xFFFFFFFF(final) 2) from last stake transaction: $\Delta_{d}$
        - txin[0].script: empty
        - txin[0].witness stack: it depends on the spending condition of 'txin[0].outpoint'. Typically it is `<broker_signature> <pk>`, the `<signature>` hash type MUST be 0x01 (SIGHASH_ALL)
    - txout count: 2
        - txout[0].amount: 'dust' BTC
        - txout[0].script: it is a taptree with 2 branches. 1) `<aggregate_pubkey> OP_CHECKSIGVERIFY OP_TRUE`, 2) `OP_IF <block_count> OP_CSV OP_ELSE <broker_pk> OP_CHECKSIG OP_ENDIF`
        - txout[1].amount: $b$ BTC
        - txout[1].script: `<aggregate_pubkey> OP_CHECKSIGVERIFY OP_TRUE` 
- **KickOffTimeout**: If the broker fails to send the pegout transaction in this round, or it is not successfully included for other reasons, such as another user's pegout transaction being prioritized, then the broker will send a **KickOffTimeout** transaction after $\Delta_{d}$ has passed since the **Stake** to skip this round.
    - txin count: 1
        - txin[0].outpoint: the stake transaction's first output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness stack: it uses the second branch, `OP_1 <signature>`, the `<signature>` hash type MUST be 0x01 (SIGHASH_ALL) 
    - txout count: 2
        - txout[0].amount: 'dust' BTC
        - txout[0].script: It's a taptree wtich 2 branches. 1): `<aggregate_pubkey> OP_CHECKSIGVERIFY OP_TRUE`. 2): `<block_count> OP_CSV OP_DROP <aggregate_pubkey> OP_CHECKSIG`

- **KickOff**: After the broker successfully sends the pegout transaction in this round, then a  **KickOff** transaction should be sent to start a reimbursement. Otherwise a **KickoffTimeout** will be sent by vigilante after $\Delta_{d}$ has passed since the **Stake**. as this indicates a malicious broker 
    - txin count: 1
        - txin[0].outpoint: the stake transaction's first output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness stack: it uses the second branch. `<signature> 0`. The `<signature>` hash type MUST be 0x01 (SIGHASH_ALL)
    - txout count: 2
        - txout[0].amount: 'dust' BTC
        - txout[0].script: It's a taptree wtich 2 branches. 1): `<aggregate_pubkey> OP_CHECKSIGVERIFY OP_TRUE` and the 'zk verifier script'. 2): `<block_count> OP_CSV OP_DROP <aggregate_pubkey> OP_CHECKSIG`
        - txout[1].amount: 'dust' BTC
        - txout[1].script:  it's a p2wpkh, can only be spent by broker's signature.
- **HappyTake**: If no one disputes this reimbursement after a period of $\Delta_{a}$ following the **KickOff**, the broker can claim the funds deposited by the user via this transaction
    - txin count: 3
        - txin[0].outpoint: the **Pegin** transaction's first output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness `<aggregate_signature>`. the `<signature>` hash type MUST be 0x01 (SIGHASH_ALL)
        - txin[1].outpoint: the **KickOff** transaction's first output 
        - txin[1].sequence: $\Delta_{a}$
        - txin[1].script: empty
        - txin[1].witness use the second branch, `<aggregate_signature>`. The `<signature>` hash type MUST be 0x01 (SIGHASH_ALL)
        - txin[2].outpoint: the **KickOff** transaction's second output 
        - txin[2].sequence:0xFFFFFFFF(final)
        - txin[2].script: empty
        - txin[2].witness use the second branch, `<broker_signature>`, The `<broker_signature>` hash type MUST be 0x01 (SIGHASH_ALL)
    - txout count: 1
        - txout[0].amount: $a$ BTC
        - txout[0].script: it's a p2wpkh, can only be spent by broker's signature.
- **Challenge**: If any vigilante suspects that the reimbursement is malicious. a **Challenge** transaction should be sent to prevent the broker from sending **HappyTake**. Since the **Reveal** transaction could be very costly due to its large size, the vigilante should provide appropriate compensation(e.g. $c$ BTC in this figure).
     - txin count: 2
        - txin[0].outpoint: the **Kickoff** transaction's second output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness `<broker_signature>`, the `<broker_signature>` hash type MUST be 0x83 (SIGHASH_ANYONECANPAY | SIGHASH_SINGLE)
        - txin[1].outpoint: one of the available utxo
        - txin[1].sequence: 0xFFFFFFFF(final)
        - txin[1].script: empty
        - txin[1].witness: it depends on the spending condition of 'txin[1].outpoint'. the signature hash type MUST be 0x01 (SIGHASH_ALL) 
    - txout count: 1
        - txout[0].amount: $c$ BTC
        - txout[0].script: it's a p2wpkh, can only be spent by broker's signature.
- **Reveal**: After the **challenge** is sent. the broker should reveal all intermediate states to the vigilante in the first input. Besides, the output of this transaction is a TapTree, which consists of multiple Tapleaves.
    - txin count: 1
        - txin[0].outpoint: the **Kickoff** transaction's first output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness: use the first branch, `<aggregate_signature>` and the intermediate value of zk proof. The `<aggregate_signature>` hash type MUST be 0x01 (SIGHASH_ALL) 
    - txout count: 1
        - txout[0].amount: 'dust' BTC
        - txout[0].script: It's a taptree, which consists of several branches that can check every chunk of intermidate state and a special branch `<block_count> OP_CSV OP_DROP <aggregate_pubkey> OP_CHECKSIG`
- **RevealTimeout**: If the broker doesn't send **Reveal** within $\Delta_{b}$, which means the broker refuses to respond to the challenge.  In such a case, a transaction will be initiated to penalize the broker for its malicious behavior. To prevent the scenario where the vigilante is the broker itself, a specific amount of $b$ BTC should be burned(e.g. $d-b$ BTC in this figure)
     - txin count: 2
        - txin[0].outpoint: the **Kickoff** transaction's first output 
        - txin[0].sequence: $\delta_{b}$
        - txin[0].script: empty
        - txin[0].witness: use the second branch, `<aggregate_signature>`, the `<aggregate_signature>` hash type MUST be 0x03 (SIGHASH_SINGLE)
        - txin[1].outpoint: the **Stake** transaction's second output 
        - txin[1].sequence: 0xFFFFFFFF(final)
        - txin[1].script: empty
        - txin[1].witness: using the second branch, `<aggregate_signature>`, the `<aggregate_signature>` hash type MUST be 0x82(SIGHASH_NONE|SIGHASH_ANYONECANPAY)
    - txout count: 2
        - txout[0].amount: $b-d$ BTC
        - txout[0].script: `OP_RETURN`
        - txout[1].amount: $d$ BTC
        - txout[1].script: It is set by the vigilante. Typically it is the p2wpkh of vigilante
- **UnhappyTake**: If the vigilante doesn't send **Disprove**, which means it can't find any incorrect intermediate state. The broker will be allowed to claim the funds after $\Delta_{c}$ has passed since the **Reveal**
    - txin count: 2
        - txin[0].outpoint: the **Pegin** transaction's first output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness `<aggregate_signature>`  
        - txin[1].outpoint: the **Reveal** transaction's first output 
        - txin[1].sequence: $\Delta_{c}$
        - txin[1].script: empty
        - txin[1].witness: using the special branch, `<aggregate_signature>`
    - txout count: 2
        - txout[0].amount: $b-d$ BTC
        - txout[0].script: `OP_RETURN`
        - txout[1].amount: $d$ BTC
        - txout[1].script: It is set by the vigilante. Typically it is the p2wpkh of vigilante
- **Disprove**: If the vigilante identifies an incorrect intermediate value. It can penalize the broker through this transaction. the first input is actually one of the Tapleaves that can be used to verify the intermediate state. Similar to the **RevealTimeout**, a specific amount of $b$ BTC should be burned
    - txin count: 2
        - txin[0].outpoint: the **Stake** transaction's second output 
        - txin[0].sequence: 0xFFFFFFFF(final)
        - txin[0].script: empty
        - txin[0].witness: use the second branch
        - txin[1].outpoint: the **Reveal** transaction's first output 
        - txin[1].sequence: 0xFFFFFFFF(final) 
        - txin[1].script: empty
        - txin[1].witness: use the the incorrect intermediate state
    - txout count: 2
        - txout[0].amount: $b-d$ BTC
        - txout[0].script: `OP_RETURN`
        - txout[1].amount: $d$ BTC
        - txout[1].script: It is set by the vigilante. Typically it is the p2wpkh of vigilante

## WorkFlow
### Peg-in

1. The User provides sufficient UTXOs and it's sidechain address to the FBC
2. The FBC responds with a valid peg-in transaction, accompanied by an endorsement consisting of signatures from the CEC on the transaction's TXID.
3. The user submits a peg-in transaction and waits for further processing by the FBC.
4. The FBC monitors the peg-in transaction, and once it is confirmed, the FBC generates the corresponding Bitcoin light client proof.
5. The FBC interacts with the bridge contract on sidechain, providing the proof and endorsement, and mints an equivalent amount of YBTC on sidechain for the user.

The Bitcoin light client proof ensures that the peg-in transaction has been confirmed on the Bitcoin network, while the endorsement guarantees that the bitvm smart contract (transaction graph) has been successfully constructed. These two elements are critical for maintaining the security of the bridge.

### Peg-out

1. The user interacts with the FBC, specifying the amount it wishes to burn.
2. The FBC responds with the most suitable burn transaction. As explained in the 'front-and-reclaim', the amount of peg-in funds is predetermined, so it may not exactly match the amount the user initially requested.
3. The user reviews the details of the burn transaction, including the fee to be paid to the broker and the exact amount of BTC they will receive after a certain period. If the details are acceptable, the user submits the burn transaction to the sidechain network.
4. The broker monitors burn transactions on the sidechain and competes to execute the pre-payment transaction, only one broker can succeed in paying the user in advance.

For the user, the workflow is complete once the expected BTC is received. They do not need to worry about the reclaim process, which is the most complex aspect of the operation.

### Reclaim

1. The winner then submits a kickoff transaction to reclaim the peg-in funds following the challenge game. 
2. An honest broker will receive the peg-in funds, while a malicious broker will be penalized through slashing, and the challenger will be rewarded.

The safety of peg-out is almost ensured by the Bitcoin consensus itself. Since anyone can act as a challenger and is incentivized to punish malicious brokers, if a challenge occurs, the broker must reveal all intermediate states. Subsequently, a Bitcoin zk-verifier can be executed to disprove any malicious actions identified in the verifier script.

Although the FBC appears to play a crucial role in many scenarios, it does not compromise the security of the bridge. Its primary function is to assist users in completing the entire process, allowing them to focus less on the intricate workings of the bridge, which can be quite complex for the average user. However, experienced users will have the option to bypass the FBC and manage the process independently in the future.
