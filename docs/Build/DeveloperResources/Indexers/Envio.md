---
sidebar_position: 0
---

# Envio

[Envio](https://envio.dev/?utm_source=bitlayer&utm_medium=partner-docs) is a high-performance indexing framework that turns smart contract events into a queryable GraphQL API, with managed hosting on Envio Cloud.

HyperIndex, Envio's indexing framework, natively supports indexing any EVM chain out of the box. That means you can index Bitlayer today using RPC as the data source, no waiting for dedicated support.

## Why Envio?

- Native support for any EVM chain, including Bitlayer, out of the box
- Real-time and historical data through a single GraphQL API
- Automatic indexer generation from a contract address with `pnpx envio init`
- TypeScript, JavaScript, or ReScript event handlers, with reorg support
- Managed hosting on Envio Cloud, or self-host your own deployment

## Indexing Bitlayer with Envio

Bitlayer uses RPC as the data source. Define it in your `config.yaml` using chain ID `200901`:

```yaml
name: IndexerName # Specify indexer name
chains:
  - id: 200901 # Bitlayer Mainnet
    rpc: https://rpc.bitlayer.org
    start_block: START_BLOCK_NUMBER # Specify the starting block
    contracts:
      - name: ContractName
        address:
          - "0xYourContractAddress"
        events:
          - event: Event # Specify event
```

See the [RPC data source guide](https://docs.envio.dev/docs/HyperIndex/rpc-sync?utm_source=bitlayer&utm_medium=partner-docs) and the [configuration guide](https://docs.envio.dev/docs/HyperIndex/configuration-file?utm_source=bitlayer&utm_medium=partner-docs) for the full set of options. Want HyperSync speed for Bitlayer? Request it on [Discord](https://discord.gg/envio).

## Getting Started

1. Initialise your indexer and import your Bitlayer contract with `pnpx envio init`. See the [Quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=bitlayer&utm_medium=partner-docs).
2. Configure Bitlayer and your RPC in `config.yaml`.
3. Run your indexer locally with Docker, or deploy it with a git-based workflow on [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service-deployment?utm_source=bitlayer&utm_medium=partner-docs).
4. Query your indexed data through the GraphQL API.

Need help setting up your indexer? Reach out on [Discord](https://discord.gg/envio), where the team is always happy to help.

[Website](https://envio.dev/?utm_source=bitlayer&utm_medium=partner-docs) | [Docs](https://docs.envio.dev/?utm_source=bitlayer&utm_medium=partner-docs) | [Supported Networks](https://docs.envio.dev/docs/HyperIndex/supported-networks?utm_source=bitlayer&utm_medium=partner-docs) | [Discord](https://discord.gg/envio) | [X](https://twitter.com/envio_indexer) | [GitHub](https://github.com/enviodev)
