---
sidebar_position: 2
---

# The Graph
`Graph Node` is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.
- [Official website](https://thegraph.com/)
- [Github](https://github.com/graphprotocol/graph-node)
## Usage
### The Graph Official
The Graph official has not support bitlayer, will coming soon.

### Bitlayer Graph Node
Self hosting graph node service of Bitlayer is avaiable now.
Please contact us via business or [telegram](https://t.me/bitlayer_developers) if you need this service.

### Project Local Graph Node
We recommend following the [Official documentation](https://thegraph.com/docs/) for deployment. The next operation is only intended as a simple setup tutorial for reference.
#### Set up graph-node
For convenience reasons, we use the official [docker compose](https://github.com/graphprotocol/graph-node/tree/master/docker) for node, database, and IPFS deployment.
Note that the value of the `ethereum` field in `docker-compose.yml` is replaced with `Bitlayer`'s node connection information.
```
graph-node:
    image: graphprotocol/graph-node
    ports:
      - '8000:8000'
      - '8001:8001'
      - '8020:8020'
      - '8030:8030'
      - '8040:8040'
    depends_on:
      - ipfs
      - postgres
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: 'mainnet:http://127.0.0.1:8545'  #replaced with bitlayer rpc info
      RUST_LOG: info
```
 > Note: The node connected to graph-node needs to be in `archive` mode (add flag --syncmode full --gcmode archive when starting the node), we recommend each user to build their own RPC node.

### Migration
You can migrate your subgraph from bitlayer graph node or project local graph node to offical environment when the graph enables bitlayer.
To migrate smoothly, please set dataSources.source.startBlock in subgraph.yaml, we suggest using the block in which the contract was created. 


## Deploying a Subgraph

This guide provides steps for deploying a subgraph using the Bitlayer Graph Node service available on both testnet and mainnet.

### Endpoints

- **Testnet Endpoint**
  - **Subgraph Query (GraphQL):** `https://bitlayer-testnet-graph-query.unifra.io`
  - **Deployment Management (JSON-RPC):** `https://bitlayer-testnet-graph-node.unifra.io/`
  - **IPFS Node:** `https://bitlayer-testnet-graph-ipfs.unifra.io/`

- **Mainnet Endpoint**
  - Details for mainnet endpoints will be similar but are not listed here.

### Steps for Deployment

1. **Install graph-cli**
   ```bash
   yarn global add @graphprotocol/graph-cli
   ```

2. **Clone a sample subgraph**
   ```bash
   git clone https://github.com/graphprotocol/graph-tooling.git
   ```

3. **Configure the subgraph**
   - Replace the network field in `examples/example-subgraph/subgraph.yml` with `BitlayerTestnet`.
   - Example configuration:
     ```yaml
     specVersion: 0.0.5
     description: 'example of a subgraph'
     repository: https://github.com/graphprotocol/graph-tooling.git
     schema:
       file: ./schema.graphql
     dataSources:
       - kind: ethereum/contract
         name: ExampleSubgraph
         network: BitlayerTestnet
     ```

4. **Create your subgraph on the graph node**
   ```bash
   cd examples/example-subgraph
   graph create xxxx/subgraph_xx --node=https://bitlayer-testnet-graph-node.unifra.io/
   ```

5. **Publish your subgraph to the Graph Node**
   ```bash
   graph deploy xxxx/subgraph_xx ./subgraph.yaml --version-label=v1 --node=https://bitlayer-testnet-graph-node.unifra.io --ipfs=https://bitlayer-testnet-graph-ipfs.unifra.io/
   ```

6. **Query data from the subgraph using the GraphQL endpoint**
   ```bash
   curl -X POST https://bitlayer-testnet-graph-query.unifra.io/subgraphs/name/xxxx/subgraph_xx -H "Content-Type: application/json" -d '{
     "query": "query { exampleEntities(first: 100) {id } _meta { block {number, hash} } }"
   }'
   ```

This procedure outlines how to deploy and manage subgraphs on the Bitlayer Graph Node service, making full use of the available testnet resources.

### Subgraph Configuration Example

```yaml
specVersion: 0.0.5
description: 'example of a subgraph'
repository: https://github.com/graphprotocol/graph-tooling.git
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: ExampleSubgraph
    network: BitlayerTestnet
    source:
      address: '0x22843e74c59580b3eaf6c233fa67d8b7c561a835'
      abi: ExampleContract
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      file: ./src/mapping.ts
      entities:
        - ExampleEntity
        - OtherEntity
      abis:
        - name: ExampleContract
          file: ./abis/ExampleContract.json
      eventHandlers:
        - event: ExampleEvent(indexed string)
          handler: handleExampleEvent
```

### Detailed Subgraph Configuration

```yaml
specVersion: 0.0.5
description: 'example of a subgraph'
repository: https://github.com/graphprotocol/graph-tooling.git
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: ExampleSubgraph
    network: BitlayerTestnet
    source:
      address: '0x22843e74c59580b3eaf6c233fa67d8b7c561a835'
      abi: ExampleContract
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      file: ./src/mapping.ts
      entities:
        - ExampleEntity
        - OtherEntity
      abis:
        - name: ExampleContract
          file: ./abis/ExampleContract.json
      eventHandlers:
        - event: ExampleEvent(indexed string)
          handler: handleExampleEvent
```

### Deployment Steps

1. **Install graph-cli**
   ```bash
   yarn global add @graphprotocol/graph-cli
   ```

2. **Clone a sample subgraph**
   ```bash
   git clone https://github.com/graphprotocol/graph-tooling.git
   ```

3. **Replace the network field in the subgraph configuration**
   Navigate to `examples/example-subgraph` and update `subgraph.yml` with `BitlayerTestnet`.

4. **Create your subgraph on the graph node**
   ```bash
   graph create xxxx/subgraph_xx --node=https://bitlayer-testnet-graph-node.unifra.io/
   ```

5. **Publish your subgraph to the Graph Node**
   ```bash
   graph deploy xxxx/subgraph_xx ./subgraph.yaml --version-label=v1 --ipfs=https://bitlayer-testnet-graph-ipfs.unifra.io/ --node=https://bitlayer-testnet-graph-node.unifra.io/
   ```

6. **Query data from your subgraph using the GraphQL endpoint**
   ```bash
   curl -X POST https://bitlayer-testnet-graph-query.unifra.io/subgraphs/name/xxxx/subgraph_xx -H "Content-Type: application/json" -d '{
     "query": "query { exampleEntities(first: 100) {id } _meta { block {number, hash} } }"
   }'
   ```
