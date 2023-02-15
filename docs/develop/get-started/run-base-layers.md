---
title: Run base layers
slug: run-base-layers
---

The following steps will guide you in configuring and running a docker of Celestia's [Mocha testnet](https://docs.celestia.org/nodes/mocha-testnet/) for data publication and a local full node of the [Dymension Hub](/docs/learn/dymension-hub.md) for submitting state updates. This combination allows RollApps to act as their own blockchain and inherit the interoperability of the IBC ecosystem.

:::info Note
The following tutorial utilizes [Docker](https://docs.docker.com/engine/install/) to quickly bootstrap a Celestia light client. Developers may head over to Celestia's light client [tutorial](https://docs.celestia.org/nodes/light-node) for step-by-step instructions that do not involve Docker.

:::

#### Step 1: Run Celestia light client:

Note that the Celestia address must be funded with TIA to publish data to the Mocha testnet. Please take the created address which you receive when you first run the following command and request tokens on the Celestia discord Mocha faucet channel.

```dockerfile
docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-747c9e5 celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha
```

#### Step 2: Install Dymension Hub:

In a new terminal window we will next download the latest version of the Dymension Hub. We will run this binary on our local machine.

```bash
git clone https://github.com/dymensionxyz/dymension.git --branch v0.2.0-beta
cd dymension
```

#### Step 3: Setup the relevant environment variables:

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
export SETTLEMENT_RPC="0.0.0.0:36657"
export GRPC_ADDRESS="0.0.0.0:8090"
export GRPC_WEB_ADDRESS="0.0.0.0:8091"
export P2P_ADDRESS="0.0.0.0:36656"
```

#### Step 4: Setup the Dymension Hub node:

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

#### Step 5: Run the Dymension Hub node:

From within the `dymension` directory, start the chain:

```bash
sh scripts/run_local.sh
```

Now that you have a running Celestia light client and Dymension Hub node, let's register our RollApp...
