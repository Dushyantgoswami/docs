---
title: "Run a Dymension Hub node"
slug: "run-a-node"
hidden: false
sidebar_position: 2
hide_table_of_contents: true
---

The following steps will guide you on how to configure and run a Dymension Hub node. This is useful for local developement and understanding the interactions developers may require with the Dymension Hub (e.g. initializing a new RollApp).

:::info Note
Testnet and Mainnet production environments do not require installing and running a Dymension Hub node, that is handled by a public network of full nodes.
::::

### Step 1: Install Dymension Hub binaries:

```bash
git clone https://github.com/dymensionxyz/dymension.git --branch v0.1.0-alpha
cd dymension
```

### Step 2: Setup the relevant environment variables:

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
export SETTLEMENT_RPC="0.0.0.0:36657"
export GRPC_ADDRESS="0.0.0.0:8090"
export GRPC_WEB_ADDRESS="0.0.0.0:8091"
export P2P_ADDRESS="0.0.0.0:36656"
```

### Step 3: Setup the Dymension Hub node:

Make sure you are inside the `dymension` dir and run the following to build and init the chain:

```bash
sh scripts/setup_local.sh
```

Check that the `dymd` binaries have been successfully installed:

```bash
dymd version
```

If the `dymd` command is not found an error message will be returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

:::info Note
If the the `dymd` command is still not found please make sure you also update GOPATH in your `~/.bashrc`
:::

### Step 4: Run the Dymension Hub node:

From within the `dymension` directory, start the chain:

```bash
sh scripts/run_local.sh
```

The Dymension Hub is center of the Dymension ecosystem. We will soon show how RollApps delegate consensus to the Dymension Hub and get the benefits of an ultra-low latent blockchain environment.

Setting up a Dymension Hub node is abstracted away from developers in a production environment. This is a demonstration of the Dymension stack in a local environment. In a public network such as a Testnet or Mainnet, developers do not need to run a Dymension Hub full node.

### Now that you have a running Dymension Hub node, let's build our RollApp...
