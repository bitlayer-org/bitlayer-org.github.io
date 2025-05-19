---
sidebar_position: 94
---

# FAQ

## Q: What are the differences between BitVM Bridge and other bridges?

A: The most important difference between the BitVM Bridge and many other bridges lies in its **security level**. In the BitVM Bridge, **bridge funds** are locked within a **BitVM smart contract**, rather than in an address controlled by centralized entities or a multisignature (multisig) arrangement managed by a small group of people. This security model is reinforced by the principle of **1-of-N security** (also known as **existential honesty**): as long as at least one participant acts honestly, it is not possible for others to collude and steal the bridge funds from the BitVM smart contract.

## Q: Why are there two bridges, Bridge and Bridge Pro?

A: Bitlayer provides two distinct bridge options within its BitVM Bridge product suite – **Bridge Pro** and **Bridge** – to cater to different user needs, primarily concerning transaction amounts and operational flexibility.

The **Bridge Pro** operates using the core BitVM protocol. While this protocol offers a very high level of security, it currently involves specific, pre-set amount constraints for peg-in and peg-out operations. These constraints, inherent to the current implementation of the BitVM protocol, might not be suitable or convenient for all users or every transaction size.

To address this and provide greater flexibility, we introduced an additional **Bridge** (which can be thought of as the standard or non-Pro version). This **Bridge** operates on a "swap style" mechanism. Instead of users directly minting or burning YBTC through the full BitVM protocol for each cross-chain transfer, this bridge facilitates direct swaps between BTC and YBTC.

The **Bridge** (swap-style) is designed to support two types of swap mechanisms:

- **Atomic Swaps:** These are trustless, meaning they don't require you to trust an intermediary, offering a very high degree of security. However, they can sometimes be more expensive or complex.
- **MPC (Multi-Party Computation) Swaps:** These swaps involve a group of participants collaboratively managing the process, which introduces a certain level of trust in the MPC setup but can offer advantages in terms of speed or cost.

Current Status (as of May 2025):

Currently, the Bridge primarily supports MPC swaps. Atomic swap functionality is under active development and is planned for future release.

**In summary:**

Bitlayer's BitVM Bridge product suite offers two options:

- **Bridge Pro:** Utilizes the native BitVM protocol, ideal for users whose transaction needs align with its specific amount constraints and who prioritize its particular security model.
- **Bridge (Swap-style):** Offers flexibility for users needing to transact with varying amounts, using a direct BTC/YBTC swap mechanism.

Users can choose the bridge that best suits their specific requirements, preferences for security models, and transaction characteristics.

## Q: Why do we have amount constraints for peg-in and peg-out in Bridge Pro?

A: Amount constraints for peg-in and peg-out operations in Bridge Pro are in place primarily due to the **static nature of the BitVM protocol**. The BitVM smart contract for each bridge instance is established with its specific operational parameters (like exact peg-out amounts) pre-signed before it is deployed on the Bitcoin network. This "pre-signed" nature means these core parameters cannot be changed once the contract is active. Here's a breakdown:

- **Minimum Peg-in Amount:** A minimum amount is required for peg-in operations. Deploying each BitVM smart contract instance on the Bitcoin network is a resource-intensive and costly process. Setting a minimum peg-in amount helps ensure that each deployment is economically viable and protects the system from potentially spammy or uneconomical transactions.

- **Fixed Peg-out Amounts:** The specific amounts for peg-out operations are determined and immutably set during the pre-signing phase of the contract. Therefore, to perform a peg-out through this bridge, you must burn an amount of YBTC that exactly matches one of these pre-defined denominations for that particular bridge instance. These amounts are not configurable after deployment.

**What if your desired amount doesn't match?**

If the amount you wish to peg-in or peg-out does not align with these pre-set values, we recommend using the **standard (or "non-Pro") version of the BitVM Bridge**. This alternative version is designed to handle more flexible amounts and is also typically faster and less expensive for those kinds of transactions.

## Q: What is flexible peg-out and why do we need it?

A: Flexible peg-out is a feature of the BitVM Bridge designed to make it easier and more efficient for **Brokers** to manage their own Bitcoin (BTC) and bridged Bitcoin (YBTC) positions.

Here's why it's needed:

In some earlier bridge designs (like the one described in the BitVM2 paper, where a Broker is also referred to as an "operator"), if a Broker wanted to convert their own YBTC back to BTC (a "peg-out" operation for themselves), they first had to use their own separate Bitcoin (L1) funds to make the payment to their own Bitcoin address, and would only later be reimbursed by reclaiming the equivalent amount from the BitVM smart contract. This process could be inconvenient, especially for Brokers who frequently need to balance their BTC and YBTC holdings, as it would require them to use their own operational Bitcoin liquidity for the initial transfer and then wait for the reclaim.

Flexible peg-out solves this by allowing Brokers to:

- Directly burn their YBTC.
- Initiate the reclaim process to convert their YBTC to BTC directly from the bridge's Bitcoin collateral **without needing to first pay themselves from their separate L1 Bitcoin holdings**.

This streamlined approach saves Brokers from needing to use their own L1 Bitcoin for the initial step of their own peg-out, preserving their short-term liquidity and simplifying the overall process.
