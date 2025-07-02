---
sidebar_position: 25
sidebar_label: Tutorial
---

# How to Deposit?

##  Target Users
This section is intended for users who wish to deposit their **YBTC.B** or **BTC** assets into the Vault to earn **BTC-denominated yield**. It applies to **all supported blockchains** (e.g., Sui, Avalanche, Plume, Starknet) and both Vault types (DeFi Vault and CeDeFi Vault).

---

##  Asset Options

You may deposit using either of the following:

### - YBTC.B
- Requires **token approval** before deposit (default is unlimited).
- Upon deposit, users receive a **Vault Proof Token** (e.g., `AvaxYBTC.B`) representing their share.
- Initially, deposits are **1:1**, but the rate updates after each **yield distribution**.

### - Bitlayer Native BTC
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

---

##  Proof Token Naming Rules

### 1. **On-Chain DeFi Vaults**
Proof Tokens are named by chain:
- `SuiYBTC.B`
- `AvaxYBTC.B`
- `PlumeYBTC.B`
- `StarkYBTC.B`

### 2. **CeDeFi Vaults**
TBD


---

# How to Redeem?

##  Redemption Overview

Users can redeem staked assets and earned yield by initiating a **redemption request**. Redemptions follow maturity rules and ensure liquidity integrity.

---

## 🪜 Step-by-Step Redemption Process

1. Select the Vault entry and click `[Redeem]`.
2. View:
   - Estimated **BTC payout** (principal + yield)