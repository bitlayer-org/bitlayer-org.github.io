---
sidebar_position: 3
---

# Indexing-3rd-Party

## What is a Subgraph?

Subgraph is a customized, open-source solution for indexing and accessing real-time blockchain data through the GraphQL API. They provide developers with powerful tools to build, customize, and access blockchain data according to their needs.

This document will guide you through creating, deploying, and querying this subgraph.

## Prerequisites

Before getting started, make sure you have:

- Registered a Bifrost account and obtained an API key.
  - Please visit one of the following links and fill out the form to apply for an API key:
    - [Apply for API key](https://forms.gle/tijPPdW37hFX6QFG9)
- Installed the [Graph CLI](https://github.com/graphprotocol/graph-cli).
- Installed the [Yarn package manager](https://yarnpkg.com/).

## Creating a Subgraph

1. Choose a subgraph name in the format `<username>/<subgraph-name>`, for example, "alice/mysubgraph".
   - `<username>`: This is your username on Bifrost.
   - `<subgraph-name>`: This is the specific name you choose for your subgraph, which usually reflects the functionality of the subgraph or the smart contract it indexes.

2. Run the following command in your terminal, replacing `{apikey}` with your Bifrost API key obtained from the links above and `<username/subgraph-name>` with your chosen subgraph name:

   ```bash
   graph create --node https://bifrost.bfno.de/{apikey} <username/subgraph-name>
