# Bitlayer Roadmap

<table>
  <tr style="background:rgba(0,0,0,0)">
    <th colspan="5">Bitlayer-l2 Technical Route</th>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <th>Stage</th>
    <th>Definition</th>
    <th>Time</th>
    <th>Delivery Content</th>
    <th>Description</th>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td rowspan="4">Mainnet V1</td>
    <td rowspan="4">BTC main chain assets can be mapped through the PoS side chain</td>
    <td rowspan="4">2024 Q1</td>
    <td>PoS side chain</td>
    <td>Based on DPoSA consensus, supporting token economic model</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>BTC<->BL cross-chain bridge</td>
    <td>Wrapping third parties (such as polyhedra) to support BTC/BRC-20 and BL two-way cross-chain</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>Developer Kit</td>
    <td>RPC/Testnet/Faucet/Developer Website/Browser</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>Commonly used assets</td>
    <td>Mapping of mainstream assets</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td rowspan="1">Technical Whitepaper</td>
    <td rowspan="1"></td>
    <td rowspan="1">2024 Q2</td>
    <td rowspan="1">Technical white paper</td>
    <td>A complete explanation of the technical solution including DLC+BitVM</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td rowspan="4">Mainnet V2</td>
    <td rowspan="4">Verify the technical white paper without based on BitVM. Seamless migration for developers and users, achieving the highest security model in the industry</td>
    <td rowspan="4">2024 Q3</td>
    <td>Layer2</td>
    <td>A model with sequencer and DA</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>Funds cross-chain</td>
    <td>Safe deposit and withdrawal based on DLC protocol</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>Status verification</td>
    <td>Implement the multi-signature Oracle and take OP challenge</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>Capital escape</td>
    <td>Multi-signature controlled DLC-Attestors realize fund escape</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td rowspan="2">Mainnet V3</td>
    <td rowspan="3">Seamless migration for developers and users, achieving Bitcoin equivalent security</td>
    <td rowspan="2">2025 Q2</td>
    <td>Status verification</td>
    <td>BitVM implementation for OP challenges</td>
  </tr>
  <tr style="background:rgba(0,0,0,0)">
    <td>Capital escape</td>
    <td>Decentralized DLC-Attestors achieve fund escape</td>
  </tr>
</table>


## Vision & Architecture

Bitlayer aims to implement BitVM to validate L2 state transitions on Bitcoin L1 using an Optimistic Rollup approach. The project plans to achieve a trustless and Turing-complete BTC L2 through several iterative phases.

#### Architecture

![](images/bitlayer-testnet/architecture.png)
