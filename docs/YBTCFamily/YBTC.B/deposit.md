---
sidebar_position: 25
sidebar_label: How to
---

# How to Deposit?

##  Target Users
This section is intended for users who wish to deposit their **YBTC.B** or **BTC** assets into the Vault to earn **BTC-denominated yield**. It applies to **all supported blockchains** (e.g., Sui, Avalanche, Plume, Starknet) and both Vault types (DeFi Vault and CeDeFi Vault).

---

##  Asset Options

You may deposit using either of the following:

### - YBTC.B (Wrapped BTC)
- Requires **token approval** before deposit (default is unlimited).
- Upon deposit, users receive a **Vault Proof Token** (e.g., `AvaxYBTC.B`) representing their share.
- Initially, deposits are **1:1**, but the rate updates after each **yield distribution**.

### - BTC (Native Layer-2 BTC on Bitlayer)
- **No approval needed**.
- BTC is **automatically converted** to YBTC.B during the deposit process.
- Converted YBTC.B is then deposited into the selected Vault.

---

##  Step-by-Step Guide

1. Visit the **official Vault platform** or a supported **partner interface**.
2. Select the **Vault product** you want to participate in.
3. Choose the asset to deposit: **YBTC.B** or **Bitlayer BTC**.
4. (Optional) Click `[Max]` to autofill the max depositable amount:
   - For BTC, reserve a **small balance** for gas fees.
5. Confirm the transaction.
6. Upon success, a **Vault Proof Token** will be issued to your wallet.

---

##  Deposit Limits & Quotas

- Some Vaults (e.g., **Sui**) may have **fixed capacity limits**.
- If the cap is reached, **further deposits will be blocked**.
- If your deposit exceeds the quota, the system will display a **warning**.

---

# How to Determine Ownership?

##  Proof Token: Vault Ownership Certificate

After staking BTC assets (as **YBTC.B**), the Vault system mints a **Proof Token** representing your **ownership** and **claim** to future returns.

###  Functions:
- Records amount staked, deposit timestamp, and expected yield.
- Sole certificate for redeeming original BTC (or YBTC.B) + interest.
- In some cases, these are **ERC-20 transferable tokens**, usable for:
  - Secondary market trading
  - Collateral in DeFi
  - Re-staking into other protocols

---

##  Proof Token Naming Rules

### 1. **On-Chain DeFi Vaults**
Proof Tokens are named by chain:
- `SuiYBTC.B`
- `AvaxYBTC.B`
- `PlumeYBTC.B`
- `StarkYBTC.B`

### 2. **CeDeFi Vaults**
Prefix with `ce` to indicate hybrid strategy:
- `ceSuiYBTC.B`
- `ceAvaxYBTC.B`
- `cePlumeYBTC.B`

### 3. **Third-party Partner Integrations**
Naming is determined by the partner:
- Example: Folks → `FolksYBTC.B`

---

# How to Redeem?

##  Redemption Overview

Users can redeem staked assets and earned yield by initiating a **redemption request**. Redemptions follow maturity rules and ensure liquidity integrity.

---

## 🪜 Step-by-Step Redemption Process

1. Log in to the **Vault dashboard**.
2. Check **maturity status**:
   - **Locked Vaults**: No early redemption unless explicitly supported.
   - **Flexible Vaults**: Early exit allowed with potential penalty.
3. Select the Vault entry and click `[Redeem]`.
4. View:
   - Estimated **BTC payout** (principal + yield)
   - **Applicable fees**
   - **Redemption timeline**
5. Confirm the transaction. The request will be submitted.

---

##  Redemption Mechanics

- **Vault Proof Token** must be approved for use by the contract (unlimited by default).
- **Default redemption duration**: 5 days.
  - No yield accrues during this window.
  - Multiple redemptions reset the timer.
- Upon request:
  - The LP token is **locked** (claim ticket).
  - At settlement:
    - Token is **transferred** (advance model), or
    - **Burned** when assets are returned.
- After completion, users **claim BTC principal + yield**.

---

##  Conversion Rate

Redemption amount is calculated using:
BTC Received = Total BTC in Vault / Total YBTC.B Supply

This ensures **proportional** and **fair distribution** based on real Vault performance.