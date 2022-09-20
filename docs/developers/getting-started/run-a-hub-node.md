---
title: "Run a dYmension hub node"
slug: "run-a-node"
hidden: false
sidebar_position: 2
hide_table_of_contents: true
---

The following steps will guide you on how to configure and run a dymension settlement layer hub node.

:::info Note
This node is a prerequisite for the [Checkers RollApp](../checkers-rollapp/scaffold-rollapp.md) tutorial as the other tutorials ([Wasm RollApp](../cosmwasm-rollapp/index.md) and [EVM RollApp](../evm-rollapp/intro.md)) will
use a mock layer by default.
::::

### Step 1: Install settlement layer binaries

Clone the dymension settlement layer repo

```sh
git clone https://github.com/dymensionxyz/dymension.git
cd dymension
```

Setup the relevant env vars which will be used later for building the chain

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
export SETTLEMENT_RPC="0.0.0.0:36657"
export GRPC_ADDRESS="0.0.0.0:8090"
export GRPC_WEB_ADDRESS="0.0.0.0:8091"
export P2P_ADDRESS="0.0.0.0:36656"
```

Make sure you are inside the `dymension` dir and run the following to build and init the chain

```sh
sh scripts/setup_local.sh
```

Check that the dymd binaries have been successfully installed:

```sh
dymd version
```

If the dymd command is not found an error message is returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

From within the `dymension` directory, start the chain

```sh
sh scripts/run_local.sh
```

### BAM! You have a running settlement layer node, keep it running. Let's continue...
