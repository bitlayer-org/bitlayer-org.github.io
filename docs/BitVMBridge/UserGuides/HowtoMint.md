---
sidebar_position: 53
---

# How to Mint on Testnet?

## Prerequisites

To get started, ensure you have wallets supporting BTC and EVM-compatible addresses, you can get test tokens from the [links](./GetTestToken.md).

- Bitcoin BitVMNet
  - Wallet: [Xverse](https://www.xverse.app/)
- Ethereum Sepolia Testnet
  - Wallet: [MetaMask](https://metamask.io/), [OKX Web3](https://www.okx.com/web3), [Coinbase Wallet
    ](https://www.coinbase.com/wallet)

## 1. Connect Bitcoin Wallet

#### 1.1 Visit [BitVM Bridge](https://bitvmbridge.bitlayer.org/), Connect Bitcoin BitVMNet, and Sign in.

<img src="/img/BitvmBridge/tutorial/mint/connect-wallet-1.png"  style={{ maxWidth: '50%', height: 'auto' }}  />


#### 1.2 Set the BTC URL for Signet mode in your Xverse wallet, [Setup Guide](https://docs.bitlayer.org/docs/BitVMBridge/UserGuides/XverseBTCUrl/)
<img src="/img/BitvmBridge/tutorial/mint/xverse-btc-url.png" style={{ maxWidth: '50%', height: 'auto' }}  />

#### 1.3 Confirm address and amount

Enter amount within 0.0001~0.001, and input your Sepolia address(If you have connected an EVM wallet, your EVM receiving address will be automatically filled in.).
<img src="/img/BitvmBridge/tutorial/mint/confirm-address-amount-2.png" style={{ maxWidth: '50%', height: 'auto' }}  />
## 2. Pick your funding UTXOs

Please ensure the selected UTXOs are not associated with derivative assets like BRC20.
If UTXOs you choosed containes more BTC than you mint, extra BTC will back to your BTC address

<img src="/img/BitvmBridge/tutorial/mint/pick-your-funding-utxo-1.png" style={{ maxWidth: '50%', height: 'auto' }}  />
## 3. Generate address for Deposit

The BitVM Bridge Network will generate a smart contract which will accept you BTC according to your peg-in request.
You can view the logic rules of this smart contract through a visualized diagram.
<img src="/img/BitvmBridge/tutorial/mint/generate-address-for-deposit-1.png" style={{ maxWidth: '50%', height: 'auto' }}  />

## 4. Make your BTC Deposit

Confirm all information and transfer your BTC.
<img src="/img/BitvmBridge/tutorial/mint/make-your-btc-deposit.png" style={{ maxWidth: '50%', height: 'auto' }}  />

## 5. Mint your YBTC on Ethereum

This operation will cost 20-30Mins, it is safe to close the window. Minting process will continue as a background process and will not be interrupted.

<img src="/img/BitvmBridge/tutorial/mint/mint-your-btc-on-ethereum.png" style={{ maxWidth: '50%', height: 'auto' }}  />