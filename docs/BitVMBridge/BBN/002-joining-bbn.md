---
sidebar_position: 2
sidebar_label: Joining BBN
slug: joining-bbn
---

# Joining the BitVM Bridge Network (BBN)

This document outlines how interested parties can participate in the BitVM Bridge Network (BBN) as Brokers, Attesters, or Watchers.

If you’re interested in getting involved, feel free to contact us via email at [build@bitlayer.org](mailto:build@bitlayer.org).

## Brokers

**Please Note:** Currently, prospective broker candidates need to contact the Bitlayer team to initiate the joining process.

The BitVM Bridge Broker role can appeal to various entities for different purposes. Below are some examples of how participants might engage as Brokers:

- Type 1: Providing Liquidity Services to End Users
    You might operate as a Broker to generate revenue by servicing the peg-out requests of end-users and charging transaction fees.
- Type 2: Supporting Your Business Operations
    You might operate as a Broker if you run a business (such as DeFi protocols or other services) that integrates YBTC and you require the BitVM Bridge to balance your BTC/YBTC positions. The flexible peg-out feature of the Bitlayer BitVM Bridge allows participants with such needs to achieve this cost-effectively.

Regardless of the specific motivation, all prospective Brokers must meet the following requirements:

### Requirements for Brokers

1. Node Operation and Registration:

     All brokers must run the specified BitVM Bridge node software (denoted as `bitvmbridged`) and register their public key with the BitVM Bridge coordinator.

2. Long-Term Collateral:

     All brokers are required to provide long-term liquidity as collateral. A certain amount (denoted as `minimum_collateral_per_reclaim`) of BTC is necessary to participate in a single bridge instance.

     Note: This collateral will be refunded once the corresponding bridge funds are reclaimed. The duration for this refund depends on the timing of user requests and the reclaim process.

3. Short-Term Liquidity (Especially for User-Facing Services):

     Brokers, particularly those aiming to provide liquidity services to end-users (as in Type 1), will need readily available short-term liquidity to front peg-out requests. A minimum of 2 BTC is recommended for this purpose.

     Note: This liquidity will be reclaimed from the BitVM smart contract after the broker has fronted the peg-out request. The typical duration for this reclaim is the challenge window, which is generally one week.

## Attesters

Currently, before the staking and incentive mechanisms are fully implemented, Attesters can only participate in the BitVM Bridge Network **through invitation** by the Bitlayer team. Further details on open participation will be provided once the mechanisms are ready.

## Watchers

By default, all registered Brokers and Attesters also function as Watchers within the network.

Additionally, as an extra security enhancement, **anyone can become a Watcher** by running the specified BitVM Bridge node software (`bitvmbridged`). The node software will download data from the BitVM Bridge coordinator and other peers, allowing the Watcher to independently verify protocol activities and contribute to the network's integrity.
