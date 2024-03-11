# Deployment

Introduce systemd management configs.

## Hardware

### minimun
```
8core
16g
ssd iops>5k
```

### recommended
```
16core
32g
ssd iops>5k
```

### network&port

```
External IP Address
Port TCP/UDP 31031
```

## chain node

* config.toml
```
[Eth]
SyncMode = "snap"
TrieCleanCacheRejournal= 300000000000
TrieTimeout = 20000000000


[Eth.Miner]
GasFloor = 40000000
GasCeil = 40000000
GasPrice = 100000000
Recommit = 3000000000


[Eth.TxPool]
NoLocals = true
Journal = "transactions.rlp"
Rejournal = 600000000000
PriceLimit = 100000000
PriceBump = 10
AccountSlots = 64
GlobalSlots = 10240
AccountQueue = 32
GlobalQueue = 1024
Lifetime = 1800000000000

[Node]
DataDir = "/data/bitlayer-l2/chain/data"
InsecureUnlockAllowed = true
NoUSB = true
IPCPath = "geth.ipc"
HTTPHost = "0.0.0.0"
HTTPPort = 8545
HTTPCors = ["*"]
HTTPVirtualHosts = ["*"]
HTTPModules = ['eth', 'net', 'web3']

WSHost = "0.0.0.0"
WSPort = 8546
WSModules = ['eth', 'net', 'web3']

GraphQLVirtualHosts = ["localhost"]


[Node.P2P]
MaxPeers = 50
NoDiscovery = false
ListenAddr = ":31031"
EnableMsgEvents = false

[Node.HTTPTimeouts]
ReadTimeout = 30000000000
WriteTimeout = 30000000000
IdleTimeout = 120000000000
```

use snap sync in the config, if full needed - change this line
```
SyncMode = "snap"
```
to
```
SyncMode = "full"
```

## start bash
> To show full detail help info of all flags, type `geth help` or `geth -h`

* run.sh


```
#!/usr/bin/env bash
/data/bitlayer-l2/chain/geth-linux-amd64 \
--config /data/bitlayer-l2/chain/config.toml  \
--log.file /data/bitlayer-l2/chain/logs/chain.log \
--log.rotate=true \
--authrpc.port 8445 \
--traceaction 2 \
--verbosity 3  >> /data/bitlayer-l2/chain/logs/systemd_chain_console.out 2>&1
```

if you need to use it as archive node, add: 

```
--syncmode full \
--gcmode archive \
```

so: 

```
#!/usr/bin/env bash
/data/bitlayer-l2/chain/geth-linux-amd64 \
--config /data/bitlayer-l2/chain/config.toml  \
--log.file /data/bitlayer-l2/chain/logs/chain.log \
--log.rotate=true \
--authrpc.port 8445 \
--traceaction 2 \
--syncmode full \
--gcmode archive \
--verbosity 3  >> /data/bitlayer-l2/chain/logs/systemd_chain_console.out 2>&1
```

If no network flags were provided, the node will connect the bitlayer mainnet by default. If you want to connect to bitlayer testnet, add:

```
--testnet
```

## systemd config

```
[Unit]
Description=bitlayer-l2 chain service

[Service]
Type=simple
ExecStart=/bin/sh /data/bitlayer-l2/chain/run.sh
WorkingDirectory=/data/bitlayer-l2/chain
TimeoutSec=600
Restart=on-failure
RestartSec=5s

LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```