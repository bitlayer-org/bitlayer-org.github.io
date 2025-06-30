---
sidebar_position: 30
sidebar_label: BTR Subsidy
---

# BTR Subsidy

To further enhance user yield, the protocol introduces a **BTR incentive subsidy** distributed based on user participation in the Vault.

---

##  Key Details

###  Incentive Mechanism
- Eligible users receive **BTR tokens** as a reward.
- Rewards are **calculated based on proportional TVL contribution**.
- Distributed at a **fixed rate of 3% APR**.

###  Backend Integration Required
- This feature requires **API integration** by the project team.
- Used to **track user rewards** and **apply the 3% BTR subsidy**.

###  Centralized Tracking
- **Off-chain accounting system** is used for managing BTR rewards.
- Reflected in the user's **account center or dashboard**.

###  Data Refresh Cycle
- BTR subsidy is **updated every 24 hours** based on latest user TVL snapshot.

---

##  BTR Reward Formula

```text
Daily BTR Reward = (User TVL × 3%) / 365 / 0.3
```
