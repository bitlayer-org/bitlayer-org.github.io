---
sidebar_position: 3
---

# Compile, Run and Deploy

This guide walks you through compiling and running Bitlayer.

## Download

Download the Bitlayer source code using the following git command:

```
git clone https://github.com/bitlayer-org/bitlayer-l2.git
```

## Install Golang

Before compiling Bitlayer, make sure you have Golang installed on your system. Refer to the official Golang website ([https://go.dev/dl/](https://go.dev/dl/)) for download and installation instructions.

## Compile

1. Navigate to the directory where you cloned the Bitlayer source code using:

   ```
   cd /path/to/bitlayer-l2
   ```

2. Compile Bitlayer by running the following command:

   ```
   make geth
   ```

   This will create a compiled binary in the `build/bin` folder.

## Run

1. Get a list of available options and their descriptions by running:

   ```
   ./build/bin/geth --help
   ```

2. Refer to the [Command-line Options documentation](https://geth.ethereum.org/docs/fundamentals/command-line-options) for specific usage details.

**Custom Option:**

Bitlayer offers a custom option named `--traceaction`:

```
--traceaction value     (default: 0)
    Trace internal tx call/create/suicide action, 0=no trace, 1=trace only native token > 0, 2=trace all
```

This option allows you to enable or disable custom JSON-RPC methods for tracing internal transactions.

## Deployment

Introduce systemd management configs.

### Hardware

#### Minimum
```
8core
16g
ssd iops>5k
```

#### Recommended
```
16core
32g
ssd iops>5k
```

#### Network & Port

```
External IP Address
Port TCP/UDP 31031
```

### Chain Node

* config.toml
```
[Eth]
SyncMode = "snap"
TrieCleanCacheRejournal= 300000000000
TrieTimeout = 20000000000


[Eth.Miner]
GasFloor = 40000000
GasCeil = 40000000
GasPrice = 50000000
Recommit = 3000000000


[Eth.TxPool]
NoLocals = true
Journal = "transactions.rlp"
Rejournal = 600000000000
PriceLimit = 50000000
PriceBump = 10
AccountSlots = 64
GlobalSlots = 10240
AccountQueue = 32
GlobalQueue = 1024
Lifetime = 1800000000000
DiscountContract="0xcfB249808860Af63C500da0426EF17431699a36f"

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

### Start Bash
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
--verbosity 3 
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
--verbosity 3  
```

If no network flags were provided, the node will connect the bitlayer mainnet by default. If you want to connect to bitlayer testnet, add:

```
--testnet
```
and change this line in the config:
```
DiscountContract="0x077d303A09Cf37dcb27c99458f411267E30d2e0f"
```

### systemd config

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
