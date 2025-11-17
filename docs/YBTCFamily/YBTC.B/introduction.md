---
sidebar_position: 5
sidebar_label: Introduction
---

# YBTC.B: Cross-chain Wrapped Native BTC Asset

## Overview

**YBTC.B** is a wrapped version of Bitlayer's Native BTC, designed to function as a universal cross-chain liquidity standard across both EVM and non-EVM chains. It enables users to deploy native Bitcoin liquidity seamlessly within DeFi ecosystems on multiple networks.

---

## Purpose

YBTC.B is engineered with the following core objectives:

### 1. Make BTC Programmable and Usable  

Unlock the value of native BTC by making it accessible and composable across DeFi protocols spanning multiple chains.

### 2. Create a Unified BTC Liquidity Standard  

Whether on Sui, Avalanche, Plume, Starknet or any other chains, YBTC.B represents a **1:1 Bitcoin-pegged asset**—backed and redeemable on demand.

### 3. Serve as a Cross-chain DeFi Hub Asset  

Acts as the liquidity medium connecting native Bitcoin with **yield-generating strategies (Vaults)**, **lending protocols**, **AMMs**, and **staking infrastructures** across chains.

---

## Key Features

- **1:1 Peg to Native BTC**  
  Each YBTC.B token is fully backed by a corresponding amount of native BTC, either bridged or locked on-chain, and is redeemable at any time.
  
- **Multi-chain Yield Bearing**  
  YBTC.B can be deposited into **DeFi and CeDeFi Vaults** across multiple chains to earn BTC-denominated yield. Strategies include LP farming, lending, and fixed-income RWAs, with automated reward compounding and flexible redemption mechanisms.

- **Cross-chain Composability**  
  YBTC.B can move freely between **Bitlayer**, **EVM-compatible chains** (e.g., Avalanche, Plume), and **non-EVM chains** (e.g., Sui, Starknet), ensuring fluid capital mobility.

- **Unified Asset Format**  
  Regardless of the destination chain, YBTC.B maintains a **consistent token logic and peg structure**, simplifying wallet and protocol integration.

---

## Token Origin & Minting

### Underlying Asset  

YBTC.B is derived from **Bitlayer Native BTC**, which itself is **backed 1:1 by off-chain BTC** reserves.

Refer to [Proof of Reserve](../../Learn/Bitlayer%20PoS/POR.md) for the proof of Bitlayer native BTC.

### Minting Mechanism  

YBTC.B is minted through **verified smart contracts** when users bridge BTC into Bitlayer and initiate wrapping via the official bridge infrastructure.

YBTC.B is backed 1:1 by Bitlayer native BTC. Users can query information directly from the [YBTC.B contract on Bitlayer](https://www.btrscan.com/address/0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335?tab=Contract).

#### More detailed information about YBTC.B

- YBTC.B contract has been upgraded to V2 version, which implements ERC4626 standard.
- Users can deposit Bitlayer native BTC via `deposit() public payable` function, or deposit [Bitlayer WBTC](https://www.btrscan.com/token/0xff204e2681a6fa0e2c3fade68a1b28fb90e4fc5f?tab=Contract) (a wrapped token of Bitlayer native BTC) via ERC4626 functions `deposit(uint256 assets, address receiver) public` 0r `mint(uint256 shares, address receiver) public`.
- Users can query `totalAssets()` for the amount of underlying asset, and `totalSupply` for the total supply of YBTC.B.
- Bitlayer network is EVM-compatible, which requires that the Bitlayer native BTC has a decimals of `18`, but the decimals of YBTC.B is `8`, their value equivalence is `1 YBTC.B = 1 BTC`, meaning that on-chain, `1 units of YBTC.B should equal 1e10 wei of BTC` in terms of the smallest precision units. There's a `getConvertRatio` function in the YBTC.B contract, which returns a fixed value of `1e10`. **Users should note the difference in decimals between the Bitlayer native BTC and YBTC.B tokens**.
- The YBTC.B contract restricts the deposited BTC amount to be `an integer multiple of 1e10`, ensuring that **users do not lose any BTC due to precision truncation**.
- **YBTC.B is originally minted on Bitlayer network**, all deployed version on other chains is a bridged-version, mainly bridged via Chainlink-CCIP protocol.

---

## How to Acquire YBTC.B

- **Bridge from Native BTC**  
  Use Bitlayer’s official bridge to transfer BTC into Bitlayer Layer 2 and mint YBTC.B directly.

- **Buy on DEXs**  
  YBTC.B is available on **AMMs and liquidity pools** across supported chains.

- **Borrow via Lending Platforms**  
  Supported as a **collateral asset** or **borrowable token** via partner DeFi protocols.

---

## Contract Addresses

| Chain Name | Contact Address |
| --------------------------- | ------------------ |
| Bitlayer   | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://www.btrscan.com/token/0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335) |
| Sui        | [0xa03ab7eee2c8e97111977b77374eaf6324ba617e7027382228350db08469189e::ybtc::YBTC](https://suivision.xyz/coin/0xa03ab7eee2c8e97111977b77374eaf6324ba617e7027382228350db08469189e::ybtc::YBTC) |
| Avalanche  | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://snowscan.xyz/token/0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335)|
| Plume      | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://explorer.plume.org/token/0x2cd3CdB3bd68Eea0d3BE81DA707bC0c8743D7335) |
| BSC        | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://bscscan.com/token/0x2cd3CdB3bd68Eea0d3BE81DA707bC0c8743D7335) |
| Ethereum   | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://etherscan.io/token/0x2cd3CdB3bd68Eea0d3BE81DA707bC0c8743D7335) |
| Plasma     | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://plasmascan.to/address/0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335) |
| Ink        | [0x2cd3cdb3bd68eea0d3be81da707bc0c8743d7335](https://inkonscan.xyz/address/0x2cd3CdB3bd68Eea0d3BE81DA707bC0c8743D7335) |
| Solana     | [3VcKofugG1SPJmjuiEZCJL5mk1JkyqGZ19ByeMWXVWfK](https://explorer.solana.com/address/3VcKofugG1SPJmjuiEZCJL5mk1JkyqGZ19ByeMWXVWfK) |
| Starknet   | [0x02cab84694e1be6af2ce65b1ae28a76009e8ec99ec4bc17047386abf20cbb688](https://starkscan.co/token/0x02cab84694e1be6af2ce65b1ae28a76009e8ec99ec4bc17047386abf20cbb688) |

---

YBTC.B represents a foundational component in enabling programmable Bitcoin liquidity across DeFi, bridging native BTC with scalable multi-chain applications.
