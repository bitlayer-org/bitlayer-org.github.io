---
sidebar_position: 3
---

# Compile and Run

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