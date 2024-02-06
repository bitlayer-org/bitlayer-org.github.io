# Compile and Run

## Download
Download source code via `git`
```
git clone https://github.com/bitlayer-org/bitlayer-l2.git
```
## Install Golang
Reference: [Go Download and install](https://golang.org/doc/install)

## Compile
```
cd /path/to/bitlayer-l2
make geth
```

Compilation is completed, the generated binary is in the folder `build/bin`.

## Run
By running `./build/bin/geth --help`, we can get all `option` info. Specific usage can refer to [Command-line Options](https://geth.ethereum.org/docs/interface/command-line-options)

## Deployment

please refer [deployment](./dev/deploy.md)

