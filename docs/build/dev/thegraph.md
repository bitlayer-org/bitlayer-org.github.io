# Graph Node

`Graph Node` is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.

- [Official website](https://thegraph.com/)
- [Github](https://github.com/graphprotocol/graph-node)

## Usage

### The Graph Official
The Graph official has not support bitlayer, will coming soon.

### Bitlayer Graph Node
Self hosting graph node service of Bitlayer is avaiable now.
Please contact us via [business](build@bitlayer.org) or [telegram](https://t.me/bitlayer_developers) if you need this service.

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
