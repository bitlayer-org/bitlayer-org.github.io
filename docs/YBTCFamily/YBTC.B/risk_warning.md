---
sidebar_position: 40
sidebar_label: Risk Warnings
---

#  Important Notes & Risk Warnings

---

##  Important Notes

- **Early redemption is unavailable** during the lock-up period, unless explicitly supported by the Vault (e.g., flexible Vaults).
- **Penalty fees** may apply to early exits, depending on the Vault design. Please refer to the specific product interface for details.
- Some Vaults adopt a **T+5 redemption delay** due to strategy liquidation or off-chain asset settlement requirements.
- Users will be **notified automatically** once funds are ready for claim after the redemption window ends.
- **Quantitative Vaults** or strategies involving real-world assets (RWAs) may require additional **waiting time (T+n)** to complete liquidation before redemptions are processed.

---

##  Risk Warnings

### 🛠 Contract Risk
- Vulnerabilities in the **Vault contract** or **partner protocol contracts** may lead to loss of user funds.

###  Strategy Execution Risk
- **Quantitative strategies** or **RWA configurations** may underperform or fail to meet yield expectations.
- In some cases, returns may be **significantly lower** or even result in **capital losses**.

###  Liquidity Risk
- If the Vault’s underlying strategy fails to recover funds in time at maturity, **withdrawals may be delayed**.
- This is especially relevant for **fixed-term or RWA-backed Vaults**.

###  Cross-Chain Bridge Risk
- Vaults involving **cross-chain operations** expose users to risks from **technical failures**, **delays**, or **bridge exploits**.
- Users should assess the **security** and **stability** of any cross-chain component before depositing.

---

Please review all Vault terms and risk disclosures carefully before participating. Yield is **not guaranteed**, and all strategies carry **inherent risks**.
