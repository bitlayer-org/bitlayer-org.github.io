---
sidebar_position: 35
sidebar_label: Yield Distribution & Capital Flow
---

#  Yield Distribution & Capital Flow

---

##  Capital Flow Overview

1. **User Deposit**
   - Users deposit **YBTC.B** into the project's **Vault contract on Bitlayer**.

2. **Cross-chain Execution**
   - Every day at **18:00 Beijing Time**, user-deposited YBTC.B is **bridged** to the target blockchain according to the selected Vault strategy.

3. **Strategy Allocation**
   - The bridged YBTC.B is deposited into the **yield-generating protocol** on the target chain for reward accumulation.

---

##  Interest Settlement: Chain-Specific Details

###  Sui DeFi Vault (Real-Time Yield Accrual)

####  DEEP Rewards
- Distributed **hourly** via **Navi protocol**.
- Users can **claim rewards directly**.
- Rewards provided by the **Sui ecosystem**.
- Yield is denominated in **DEEP**, converted to BTC **weekly** by the finance team and reinvested into the Bitlayer Vault.

####  Interest Accounting
- Interest recalculated **every 24 hours**.
- Exchange ratios are **updated automatically**.
- **BTR subsidy** updated daily.

####  User Allocation Quota
- Retail users allocated **10% of total Vault quota**.
- If unused within **48 hours**, funds are **reallocated**.
- **Phase 1 Quota**: `50 BTC`.

---

###  Avalanche DeFi Vault (7-Day Yield Cycle)

####  AVAX Rewards
- Provided by the **Avalanche ecosystem** via **Folks Finance**.
- Rewards distributed **weekly**.
- Converted to BTC every **7 days** by the finance team and injected back into the Bitlayer Vault.

####  Interest Accounting
- Interest recalculated **daily** with exchange rate adjustments.
- **BTR subsidy** updated **every 24 hours**.

####  User Allocation Quota
- **10% retail user quota**.
- If unused in **48 hours**, funds are **redirected**.
- **Phase 1 Quota**: `200 BTC`.

---

###  Plume DeFi Vault (90-Day Maturity Yield)

####  PLUME Incentives
- Rewards issued every **90 days** by the **Plume ecosystem** *(not active in current phase)*.
- **Pending confirmation** from project lead (Allen) on:
  - Whether users receive yield if redeemed **before 90 days**.

####  User Allocation Quota
- **TBD**, pending internal and Plume confirmation.
