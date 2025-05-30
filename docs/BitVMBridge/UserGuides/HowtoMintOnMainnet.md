---
sidebar_position: 43
---

# How to Mint on Mainnet?

## Prerequisites

## 1. Connect Bitcoin Wallet

#### 1.1 Visit [BitVM Bridge](https://bitvmbridge.bitlayer.org/bridge-pro/mint), Connect Bitcoin Wallet.

<img src="/img/BitvmBridge/tutorial/mainnet-mint/connect-btc-wallet.png"  style={{ maxWidth: '100%', height: 'auto' }}  />


#### 1.2 Confirm address and amount

Enter amount within 5, and input your Ethereum  address(If you have connected an EVM wallet, your EVM receiving address will be automatically filled in.). You can add [YBTC](https://etherscan.io/token/0xd9e3719f53b61047d5bbbe9e3fb18ea1e07b1b02) to your wallet with one click.
<img src="/img/BitvmBridge/tutorial/mainnet-mint/confirm-address-amount.png" style={{ maxWidth: '100%', height: 'auto' }}  />

## 2. Pick your funding UTXOs

Please ensure the selected UTXOs are not associated with derivative assets like BRC20.
If UTXOs you choosed containes more BTC than you mint, extra BTC will back to your BTC address

<img src="/img/BitvmBridge/tutorial/mainnet-mint/pick-your-funding-utxo.png" style={{ maxWidth: '100%', height: 'auto' }}  />
## 3. Generate address for Deposit

The BitVM Bridge Network will generate a smart contract which will accept you BTC according to your peg-in request.
You can view the logic rules of this smart contract through a visualized diagram.
<img src="/img/BitvmBridge/tutorial/mainnet-mint/generate-address-for-deposit.png" style={{ maxWidth: '100%', height: 'auto' }}  />

## 4. Make your BTC Deposit

Confirm all information and transfer your BTC. This operation will cost 60-100 Mins, it is safe to close the window. Minting process will continue as a background process and will not be interrupted.
<img src="/img/BitvmBridge/tutorial/mainnet-mint/make-your-btc-deposit.png" style={{ maxWidth: '100%', height: 'auto' }}  />

## 5. Check YBTC in Wallet

Once YBTC appears in your wallet, the minting process is complete. YBTC contract address is [0xd9E3719F53b61047D5Bbbe9E3FB18eA1E07B1B02 ](https://etherscan.io/token/0xd9e3719f53b61047d5bbbe9e3fb18ea1e07b1b02)
<img src="/img/BitvmBridge/tutorial/mainnet-mint/ybtc-in-wallet.png" style={{ maxWidth: '50%', height: 'auto' }}  />