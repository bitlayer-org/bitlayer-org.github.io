---
sidebar_position: 90
---

# About finality

## About finality at stage Bitlayer PoS (Bitlayer Mainnet-V1)

In this initial phase, Bitlayer adopts the best security model: PoS + Multisig, working with multiple MPC custody platforms, ultilizing 100% EVM-Compatible environment to onboard users and developers.

At this stage, there're up to 21 canonical validators are responsible for proposing blocks and maintaining the blockchain, the consensus is like `clique` in go-ethereum, but with **System contracts** to deal with staking and validator managements. 

At this stage, Bitlayer adopts the longest chain strategy (AKA the largest total difficulty strategy) to select the canonical chain if there are multi-branch at a height. **So, the latest few blocks may be reorg**.

For finality at Bitlayer PoS stage:

- In theory, It's **absolutely safe** with `21 blocks confirmations`; 
- In practice, It's safe for most cases with `5 blocks confirmations`, and very high probability safe with `15 blocks confirmations`.
