---
sidebar_position: 8
---

# Telegram Mini App Integration

<aside>
💡

>This guide describes how to install the necessary dependencies, configure wagmi, and initialize the wallet connection, ensuring that the wallet app is successfully invoked in the Telegram Mini App environment for integration with the Bitlayer chain.

</aside> 

## Step 1: Install the Required Dependencies

```js
npm install @tanstack/react-query @telegram-apps/react-router-integration @telegram-apps/sdk @telegram-apps/sdk-react @telegram-apps/telegram-ui @tonconnect/ui-react eruda react react-dom react-router-dom viem wagmi
```

## Step 2: Configure Wallet Connect and Bitlayer Chain Information in wagmiConfig

In this section we will configure Wallet Connect and the Bitlayer mainnet and testnet information through wagmi.

1. Get the projectId for your project from [Wallet Connect Cloud](https://cloud.walletconnect.com/).
2. Import `btr` (Bitlayer mainnet) and `btrTestnet` (Bitlayer testnet) provided by wagmi.
3. Use `createConfig` to create the wagmi configuration, including the chain information and Wallet Connect projectId.
4. After configuring wagmiConfig, import it into the `WagmiProvider`.

```jsx
  <WagmiProvider config={wagmiConfig}>
    <App />
  </WagmiProvider>
```

The code example is as follows:

```jsx
import { http, createConfig } from "wagmi";
import { btr, btrTestnet } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [btr, btrTestnet],
  connectors: [
    // Get projectId at https://cloud.walletconnect.com
    walletConnect({
      projectId: "YOUR_PROJECT_ID",
    }),
  ],
  transports: {
    [btr.id]: http(),
    [btrTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
```

## Step 3: Initialize Wallet Connection in the Dapp (Metamask)

When initializing the Dapp, we need to address the compatibility issue of Wallet Connect within the Telegram Mini App environment. The key point here is to invoke the wallet through Wallet Connect by overriding `window.open` during the Dapp page initialization.

- In the `useEffect` hook, the `window.open` method is overridden to handle specific URL schemes, such as `metamask://`, which is the protocol Wallet Connect typically uses to launch wallets.
- Handling specific URLs: In the overridden `window.open` method, when the URL starts with `metamask://`, it is converted to `https://metamask.app.link/`. The reason for this conversion is:
    - The native URL scheme `metamask://` cannot be directly used in the Telegram Mini App because it is not correctly recognized by Telegram’s in-app browser.
    - By converting the protocol to an https://-based URL, it allows the browser to redirect to a compatible web link, which can then trigger the Metamask app.
- Use `utils.openLink` from the Telegram Mini App SDK to open the link: By calling `utils.openLink(url)`, the converted URL can be opened within the Telegram Mini App environment. This ensures that the link is handled correctly by the in-app browser and eventually triggers the wallet app.

<aside>
💡

>Note: This method relies on the API provided by the Telegram Mini App, so it can only be executed within the Telegram Mini App environment. You should ensure that this method is not executed in other environments.

</aside>

The code example is as follows:

```jsx
  import { initUtils } from '@telegram-apps/sdk';
  
  const isTelegramEnvironment = async () => {
  try {
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      return true;
    }

    if (
      "TelegramWebviewProxy" in window &&
      typeof window.TelegramWebviewProxy.postEvent === "function"
    ) {
      window.TelegramGameProxy = { receiveEvent() {} };
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error detecting Telegram environment", error);
    return false;
  }
};

  // Override window.open in useEffect
  useEffect(() => {
    const init = async () => {
      const isTG = await isTelegramEnvironment();
      if (!isTG) {
        return;
      }
      const utils = initUtils(); // Initialize the Telegram SDK utility class
      window.open = (url) => {
        console.log(`Try to openLink ${url}`);
        try {
          if (!url) {
            return null;
          }

          if (typeof url !== "string") {
            url = url.toString();
          }

          if (url.startsWith("metamask://")) {
            url = url.replace("metamask://", "https://metamask.app.link/"); // Replace the MetaMask-specific link with a compatible app link
          }

          console.log(`Opening ${url}`);
          utils.openLink(url); // Use Telegram's SDK utility to open the link, suitable for the Telegram Mini App environment
        } catch (error) {
          console.error(`Failed to openLink ${url}`, error);
        }

        return null;
      };
    };
    init();
  }, []);
```

# **Step 4: Handle Wallet Connection with wagmi**

In Step 2 and Step 3, we completed two key steps:

1. Configured Wallet Connect and Bitlayer chain information in wagmi.
2. Overrode the `window.open` method during Dapp initialization.

After completing these steps, you can handle wallet connections through wagmi, enabling the connection to the Bitlayer chain via Wallet Connect within the Telegram Mini App.

```jsx
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button, Cell, List, Section, Text } from "@telegram-apps/telegram-ui";

export function WalletConnectPage() {
  const { connectors, connect, isLoading: isConnecting } = useConnect();
  const { disconnect, isLoading: isDisconnecting } = useDisconnect();
  const { address, chain } = useAccount();

  const handleConnect = async () => {
    const connector = connectors.find(
      (connector) => connector.id === "walletConnect"
    );
    if (!connector) {
      console.warn("Connector not found");
      return;
    }
    try {
      await connect({ connector });
      console.log("Connected successfully");
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      console.log("Disconnected successfully");
    } catch (error) {
      console.error("Disconnection failed", error);
    }
  };

  return (
    <List>
      <Section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          height: "100vh",
        }}
      >
        <Cell>
          {!address ? (
            <Button
              onClick={handleConnect}
              disabled={isConnecting}
              style={{ backgroundColor: "#E36E1B", color: "black" }}
            >
              {isConnecting ? "Connecting..." : "Connect to Bitlayer"}
            </Button>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Text>Connected Address: {address}</Text>
              <Text>Chain: {chain?.name}</Text>
              <Button
                onClick={handleDisconnect}
                style={{ backgroundColor: "#E36E1B", color: "black" }}
                disabled={isDisconnecting}
              >
                {isDisconnecting ? "Disconnecting..." : "Disconnect"}
              </Button>
            </div>
          )}
        </Cell>
      </Section>
    </List>
  );
}
```

## Full Example Code

```jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, createConfig, WagmiProvider } from "wagmi";
import { walletConnect } from "wagmi/connectors";
import { btr, btrTestnet } from "wagmi/chains";
import { initUtils } from "@telegram-apps/sdk";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { WalletConnectPage } from "./walletPage";

const isTelegramEnvironment = async () => {
  try {
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      return true;
    }

    if (
      "TelegramWebviewProxy" in window &&
      typeof window.TelegramWebviewProxy.postEvent === "function"
    ) {
      window.TelegramGameProxy = { receiveEvent() {} };
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error detecting Telegram environment", error);
    return false;
  }
};

const queryClient = new QueryClient();
const projectId = "66d607b203a67132234a7b85c0353f61";

const wagmiConfig = createConfig({
  chains: [btr, btrTestnet],
  connectors: [
    // Get projectId at https://cloud.walletconnect.com
    walletConnect({
      projectId: projectId,
    }),
  ],
  transports: {
    [btr.id]: http(),
    [btrTestnet.id]: http(),
  },
});

const App = () => {
  useEffect(() => {
    const init = async () => {
      const isTG = await isTelegramEnvironment();
      if (!isTG) {
        return;
      }
      const utils = initUtils(); // Initialize the Telegram SDK utility class
      window.open = (url) => {
        console.log(`Try to openLink ${url}`);
        try {
          if (!url) {
            return null;
          }

          if (typeof url !== "string") {
            url = url.toString();
          }

          if (url.startsWith("metamask://")) {
            url = url.replace("metamask://", "https://metamask.app.link/"); // Replace the MetaMask-specific link with a compatible app link
          }

          console.log(`Opening ${url}`);
          utils.openLink(url); // Use Telegram's SDK utility to open the link, suitable for the Telegram Mini App environment
        } catch (error) {
          console.error(`Failed to openLink ${url}`, error);
        }

        return null;
      };
    };
    init();
  }, []);

  return (
    <React.StrictMode>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <AppRoot>
            <WalletConnectPage />
          </AppRoot>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

## Appendix

<aside>
💡

>Bitlayer provides a more detailed and complete demo project for reference: [https://github.com/bitlayer-org/tg-mini-app-demo](https://github.com/bitlayer-org/tg-mini-app-demo)

</aside>