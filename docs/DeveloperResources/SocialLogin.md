---
sidebar_position: 5
---

# Social Login

[Arcana Network](https://arcana.network) SDKs allow Web3 developers to onboard app users via [social login](https://docs.arcana.network/concepts/social-login). 

Authenticated users can instantly access the embedded, non-custodial [Arcana wallet](https://docs.arcana.network/concepts/anwallet/) from within the app context and sign blockchain transactions.

Use [Auth Quick Start Guide](https://docs.arcana.network/quick-start/) to allow social login for onboarding users and enable Arcana Wallet in the app context. 

## Arcana Wallet

Bitlayer chain is available out of the box as part of the pre-configured blockchain network list in the [Arcana wallet](https://docs.arcana.network/concepts/anwallet/). Users don't need to install a browser extension to use the Arcana wallet. Authenticated users of apps integrated with the [Arcana Auth SDK](https://docs.arcana.network/concepts/authsdk) can instantly access the Arcana wallet from within the app context. It is a built-in, non-custodial, embedded wallet available via the Arcana Auth SDK.

![Arcana Wallet Bitlayer enabled](/img/DeveloperResources/arcana-wallet-bitlayer.gif)

Developers can configure the chains using the Arcana Developer Dashboard and select Bitlayer chain as the default. This will ensure that when a user logs into the app, the Bitlayer chain shows up as the active chain. Users can perform blockchain transactions through the wallet UI on the Bitlayer chain instantly. Besides default chain settings, developers can also tailor the user experience of signing blockchain transactions through customization and wallet visibility settings.

![Arcana Developer Dashboard Chain Management](/img/DeveloperResources/arcana-dashboard-bitlayer-default.png)

Arcana Wallet is available for [desktop, mobile, gaming apps and more](https://docs.arcana.network/auth/sdk-installation).

Check out various features in the [Arcana Wallet User Guide](https://docs.arcana.network/user-guides/wallet-ui/).

## Enable Arcana Wallet

Users cannot directly access the Arcana wallet as a standalone application. App developers must integrate the app with the Arcana Auth SDK and enable users to access the Arcana Wallet within the app.

Developers need to follow these steps for integration:

1. **Register the app** with the [Arcana Developer Dashboard](https://dashboard.arcana.network/), and copy the unique client identifier for the app.
2. **Configure Auth SDK usage** via the dashboard, specify social login options, default chain, wallet user experience settings, etc.
3. **Install the Arcana Auth SDK and use the client identifier to integrate the app**. Initialize the `AuthProvider`, then add a single line code to onboard users by calling the `connect()` method and enabling the plug-and-play login UI. After a successful user login, *Arcana wallet will automatically display within the app context*, enabling the user to sign blockchain transactions instantly. 

:::note

Arcana wallet supports [JSON/RPC calls and Web3 wallet operations](https://docs.arcana.network/web-sdk/auth-usage-guide#arcana-wallet-operations).

:::

## References

* [Social login Providers](https://docs.arcana.network/web3-stack/auth/)
* [Blockchain networks](https://docs.arcana.network/web3-stack/chains/)
* [Browsers](https://docs.arcana.network/web3-stack/browsers/)
* [Supported App Types](https://docs.arcana.network/web3-stack/apps/)
* [SDK Reference Guides](https://docs.arcana.network/guides/dev/sdk-ref/)