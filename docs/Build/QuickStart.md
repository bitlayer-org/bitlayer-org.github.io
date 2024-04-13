---
sidebar_position: 1
---

# Quick Start Guide
:::tip Note:

We currently support Solidity up to version v0.8.23. Updates for newer versions might be delayed. 

:::
### Hardhat

Modify your Hardhat config file `hardhat.config.ts` to point at the Bitlayer Testnet public RPC.



```jsx
const config: HardhatUserConfig = {
  ...
  networks: {
    bitlayer: {
      url: ["https://testnet-rpc.bitlayer.org" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
```





### Foundry

To deploy using the Bitlayer Testnet Public RPC, run:

```bash
forge create ... --rpc-url=https://https://testnet-rpc.bitlayer.org/ --legacy
```



### Remix Web IDE

After compiling your contracts, the easiest way to deploy using Remix is by [setting up Metamask](https://docs.bitlayer.org/user-guide/setup#metamask), then selecting the **Bitlayer Testnet** network.

In the “Deploy and Run Transactions” tab, use the “Environment” drop-down and select “Injected Provider - MetaMask.”

Connect your wallet and select the Bitlayer Testnet. Your account should be selected automatically in Remix, and you can click “Deploy.”

### Truffle

:::caution

 The Truffle Suite is being **sunset**. For information on ongoing support, migration options and FAQs, visit the [Consensys blog](https://consensys.io/blog/consensys-announces-the-sunset-of-truffle-and-ganache-and-new-hardhat?utm_source=github&utm_medium=referral&utm_campaign=2023_Sep_truffle-sunset-2023_announcement_). 

:::

Assuming you already have a Truffle environment setup, go to the Truffle [configuration file](https://trufflesuite.com/docs/truffle/reference/configuration/), `truffle.js`. Make sure to have installed HDWalletProvider: `npm install @truffle/hdwallet-provider@1.4.0`


```js
const HDWalletProvider = require("@truffle/hdwallet-provider")
...
module.exports = {
  networks: {
    bitlayer: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, "https://testnet-rpc.bitlayer.org"),
      network_id: '*',
    },
  }
}
```

### Brownie

To add the Bitlayer Testnet, run the following command:



```bash
brownie networks add Bitlayer host=https://testnet-rpc.bitlayer.org chainid=200810 
```

To set this as your default network, add the following in your project config file:



```yaml
networks:
  default: bitlayer
```

Another way to add the Bitlayer Testnet is to create a `yaml` file and run a command to add it.

This is an example of a yaml file called `network-config.yaml`



```yaml
live:
- name: Ethereum
 networks:
 - chainid: 200810
   explorer: https://testnet-scan.bitlayer.org
   host: https://testnet-rpc.bitlayer.org
   id: bitlayer
   name: Bitlayer Testnet
```

To add the Bitlayer Testnet to the network list, run the following command:



```bash
brownie networks import ./network-config.yaml
```

To deploy on Bitlayer, run the following command. In this example, `token.py` is the script to deploy the smart contract. Replace this with the name of your script:



```bash
brownie run token.py --network Bitlayer
```

### ethers.js

Setting up a Bitlayer Testnet provider in an `ethers` script:



```jsx
import { ethers } from "ethers"

const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.bitlayer.org")
```

### scaffold-eth

To deploy using Scaffold-eth, you’ll need to point both your Hardhat and React settings at the Bitlayer Testnet.

#### Configure Hardhat

In the `packages/hardhat/hardhat.config.js` file, you’ll add the network and select it as the default network.

```jsx
...
//
// Select the network you want to deploy to here:
//
const defaultNetwork = "Bitlayer";
...
module.exports = {
...
	networks: {
...
          Bitlayer: {
            url: "https://testnet-rpc.bitlayer.org",
            accounts: {
              mnemonic: mnemonic(),
            },
          },
	}
...
}
```

Be sure to fund the deployment wallet as well! Run `yarn generate` to create the wallet and `yarn account` to check its funds. Once funded, run `yarn deploy --network Bitlayer` to deploy on the Bitlayer testnet.

