---
sidebar_position: 53
---

# How to Mint on Testnet?

## Prerequisites

To get started, make sure you have wallets that support both BTC and EVM-compatible addresses.  
You can get test tokens from the following [test token faucet links](./GetTestToken.md).

- **Bitcoin BitVMNet**
  - Recommended Wallet: [Xverse](https://www.xverse.app/)
- **Ethereum Sepolia Testnet**
  - Supported Wallets: [MetaMask](https://metamask.io/), [OKX Web3](https://www.okx.com/web3), [Coinbase Wallet](https://www.coinbase.com/wallet)

---

## 1. Connect Your Bitcoin Wallet

### 1.1 Open [BitVM Bridge](https://bitvmbridge.bitlayer.org/), connect to **Bitcoin BitVMNet**, and sign in.

<img src="/img/BitvmBridge/tutorial/mint/connect-wallet-1.png" style={{ maxWidth: '50%', height: 'auto' }} />

---

### 1.2 Configure Signet Mode in Xverse

Set the BTC node URL in your Xverse wallet to enable Signet mode.  
Follow this [setup guide](https://docs.bitlayer.org/docs/BitVMBridge/UserGuides/XverseBTCUrl/).

<img src="/img/BitvmBridge/tutorial/mint/xverse-btc-url.png" style={{ maxWidth: '50%', height: 'auto' }} />

---

### 1.3 Confirm Address and Amount

Enter an amount between **0.0002 and 0.0006 BTC**, and input your **Sepolia address**.  
If your EVM wallet is connected, the receiving address will be auto-filled.

<img src="/img/BitvmBridge/tutorial/mint/confirm-address-amount-2.png" style={{ maxWidth: '50%', height: 'auto' }} />

---

## 2. Select Funding UTXOs

Choose UTXOs that are **not associated with derivative assets** (e.g., BRC-20).  
If your selected UTXOs contain more BTC than the requested mint amount, the excess will be automatically returned to your Bitcoin address.

<img src="/img/BitvmBridge/tutorial/mint/pick-your-funding-utxo-1.png" style={{ maxWidth: '50%', height: 'auto' }} />

---

## 3. Generate Deposit Address

A unique smart contract will be generated to receive your BTC based on your peg-in request.  
You can preview the contract logic through a visualized diagram.

<img src="/img/BitvmBridge/tutorial/mint/generate-address-for-deposit-1.png" style={{ maxWidth: '50%', height: 'auto' }} />

---

## 4. Make Your BTC Deposit

Carefully review all transaction details and send your BTC to the generated address.

<img src="/img/BitvmBridge/tutorial/mint/make-your-btc-deposit.png" style={{ maxWidth: '50%', height: 'auto' }} />

---

## 5. Mint YBTC on Ethereum

The minting process takes approximately **20–30 minutes**.  
It’s safe to close the window — the process will continue in the background and will not be interrupted.

<img src="/img/BitvmBridge/tutorial/mint/mint-your-btc-on-ethereum.png" style={{ maxWidth: '50%', height: 'auto' }} />
