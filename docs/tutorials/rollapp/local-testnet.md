---
title: "Local dYmension"
slug: "local-testnet"
hidden: false
sidebar_position: 2
hide_table_of_contents: true
---

We present you a Docker of the dYmension protocol. This tool comes pre-built with the base layers so you can simulate a real-world experience of interacting with a live dYmension.

TODO - Docker

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

Set the following variables to the following: 

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
export SETTLEMENT_RPC="0.0.0.0:36657"
export P2P_ADDRESS="0.0.0.0:36656"
```

Start the chain from the root directory of the dymension repo with this handy script:
```sh
./scripts/run_local.sh
```

### BAM! You have a running settlement layer...
