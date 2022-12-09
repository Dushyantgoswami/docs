---
title: Run a Dymension Hub node
slug: run-a-node
---

The following steps will guide you in configuring and running a Dymension Hub node for local development.

:::info Note
Testnet and Mainnet production environments does not require running a Dymension Hub node, that is handled by a public network of full nodes.
::::

#### Step 1: Install Dymension Hub:

```bash
git clone https://github.com/dymensionxyz/dymension.git --branch v0.1.0-alpha
cd dymension
```

#### Step 2: Setup the relevant environment variables:

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
export SETTLEMENT_RPC="0.0.0.0:36657"
export GRPC_ADDRESS="0.0.0.0:8090"
export GRPC_WEB_ADDRESS="0.0.0.0:8091"
export P2P_ADDRESS="0.0.0.0:36656"
```

#### Step 3: Setup the Dymension Hub node:

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

#### Step 4: Run the Dymension Hub node:

From within the `dymension` directory, start the chain:

```bash
sh scripts/run_local.sh
```

Now that you have a running Dymension Hub node, let's connect our RollApp's blockchain database...
