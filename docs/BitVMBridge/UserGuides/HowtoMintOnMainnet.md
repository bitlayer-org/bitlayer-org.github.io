---
sidebar_position: 43
---

# How to Mint on Mainnet Beta?

## Prerequisites

Before you begin, please ensure you have:

- A Bitcoin wallet with available UTXOs (not linked to BRC-20 or other derivative assets).
- An EVM-compatible wallet (e.g., MetaMask) to receive YBTC.

---

## 1. Connect Your Bitcoin Wallet

### 1.1 Visit [BitVM Bridge](https://bitvmbridge.bitlayer.org/bridge-pro/mint) and connect your Bitcoin wallet

<img src="/img/BitvmBridge/tutorial/mainnet-mint/connect-btc-wallet.png"  style={{ maxWidth: '100%', height: 'auto' }}  />

---

### 1.2 Confirm Amount and Ethereum Address

Enter the amount you want to mint (up to 5 BTC), and provide your Ethereum wallet address.  
If an EVM wallet is already connected, the receiving address will be auto-filled.

You can add [YBTC](https://etherscan.io/token/0xd9e3719f53b61047d5bbbe9e3fb18ea1e07b1b02) to your wallet with a single click.

<img src="/img/BitvmBridge/tutorial/mainnet-mint/confirm-address-amount.png" style={{ maxWidth: '100%', height: 'auto' }}  />

---

### 1.3 Enter Invitation Code

If it is your first time minting YBTC, you will be prompted to enter the invitation code when clicking the UTXO button. After entering, it will automatically jump to the next step.

<img src="/img/BitvmBridge/tutorial/mainnet-mint/invite-dialog.png" style={{ maxWidth: '100%', height: 'auto' }}  />

---

## 2. Select Funding UTXOs

Choose UTXOs that are not associated with assets such as BRC-20.  
If the selected UTXOs contain more BTC than required, the excess will be automatically returned to your Bitcoin address.

<img src="/img/BitvmBridge/tutorial/mainnet-mint/pick-your-funding-utxo.png" style={{ maxWidth: '100%', height: 'auto' }}  />

---

## 3. Generate Deposit Address

The BitVM Bridge Network will generate a custom smart contract address to receive your BTC.  
This contract is created based on your peg-in request.

<img src="/img/BitvmBridge/tutorial/mainnet-mint/generate-address-for-deposit.png" style={{ maxWidth: '100%', height: 'auto' }}  />

---

## 4. Deposit BTC

Carefully review the deposit details, then send your BTC to the generated address.  
The confirmation process typically takes 60–100 minutes. You may safely close the window — the minting will continue in the background.

<img src="/img/BitvmBridge/tutorial/mainnet-mint/make-your-btc-deposit.png" style={{ maxWidth: '100%', height: 'auto' }}  />

---

## 5. Check YBTC in Your Wallet

Once the minting process is complete, YBTC will appear in your EVM wallet.  
The official contract address for YBTC is:

**[0xd9E3719F53b61047D5Bbbe9E3FB18eA1E07B1B02](https://etherscan.io/token/0xd9e3719f53b61047d5bbbe9e3fb18ea1e07b1b02)**

<img src="/img/BitvmBridge/tutorial/mainnet-mint/ybtc-in-wallet.png" style={{ maxWidth: '50%', height: 'auto' }}  />
