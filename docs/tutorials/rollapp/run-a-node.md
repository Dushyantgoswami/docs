---
title: "Run a dYmension node"
slug: "run-a-node"
hidden: false
sidebar_position: 2
hide_table_of_contents: true
---

We present you a local version of the dYmension protocol. This tool comes pre-built with the base layers so you can simulate a real-world experience of interacting with a live dYmension.

### Step 1: Install settlement layer binaries

Clone `dymension`:

```sh
git clone https://github.com/dymensionxyz/dymension.git
cd dymension
make install
```

Check that the dymd binaries have been successfully installed:

```sh
dymd version
```

If the dymd command is not found an error message is returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

From the dymension folder set the following variables to the following:

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
export SETTLEMENT_RPC="0.0.0.0:36657"
export GRPC_ADDRESS="0.0.0.0:8090"
export GRPC_WEB_ADDRESS="0.0.0.0:8091"
export P2P_ADDRESS="0.0.0.0:36656"
```

In the [dymension repo](https://github.com/dymensionxyz/dymension/blob/main/scripts/setup_local.sh) we've included a script for setting up the environment variables, creating an account and preparing the chain for initialization. While still remaining in the dymension folder run this script:

```sh
sh scripts/setup_local.sh
```

Start the chain from the root directory of the dymension repo with this handy [script](https://github.com/dymensionxyz/dymension/blob/main/scripts/run_local.sh):

```sh
sh scripts/run_local.sh
```

### BAM! You have a running settlement layer node, keep it running. Let's continue...
