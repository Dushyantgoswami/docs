---
title: "Full Node"
slug: "index"
hidden: false
sidebar_position: 0
hide_table_of_contents: true
---

# Full Nodes

dYmension's settlement layer uses the [Tendermint Core](https://github.com/tendermint/tendermint/blob/master/docs/introduction/what-is-tendermint.md), which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators run full nodes and participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.

Validator candidates can bond their own DYM (dYmension's native token) and have the tokens "delegated" to them by token holders. Validators and their delegators will earn DYM for participating and securing the dYmension settlement layer. Similar to other Cosmos SDK chains, validators may set commission on the rewards their delegators receive.

Besides running a full node as a validator, anyone may run the full node of dYmension to broadcast transactions and connect directly to the blockchain. In the following tutorial we will demonstrate how to run a full node of the dYmension settlement layer. As the dYmension protocol grows and gets closer to a public testnet and mainnet dYmension core devs along with the community will continually re-evaluate the hardware requirements for running and staying in-sync with the dYmension settlement layer.

This section explains how to run a full node of the dYmension hub.

## Step 1: Install Go

Installing Go is a pre-requisite for running a dYmension full node. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/doc/install).

### Step 2: Install binaries

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

Should return "latest". If the dymd command is not found an error message is returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

### Step 3: Initializing `dymd`

Set the following variables:

```sh
export CHAIN_ID="local-testnet"
export KEY_NAME="local-user"
export MONIKER_NAME="local"
```

Occasionally you may need to perform a comlpete reset of your node due to data corruption or misconfiguration. Resetting will remove all data in ~/.dymension/data and the addressbook in ~/.dymension/config/addrbook.json and reset the node to genesis state.

Perform a complete reset of your dymd:

```sh
  dymd tendermint unsafe-reset-all
```

When starting a node you need to initialize a chain with a user:

```sh
  dymd init "$MONIKER_NAME" --chain-id "$CHAIN_ID"
  dymd keys add "$KEY_NAME" --keyring-backend test
  dymd add-genesis-account "$(dymd keys show "$KEY_NAME" -a --keyring-backend test)" 100000000000stake
  dymd gentx "$KEY_NAME" 100000000stake --chain-id "$CHAIN_ID" --keyring-backend test
  dymd collect-gentxs
```

Now start the chain!

```sh
dymd start
```

You should have a running local node! Let's run a sample transaction.

Keep the node running and open a new tab in the terminal. Let's get your validator consensus address.

### Step 4: Running a transaction

```sh
dymd tendermint show-address
```

This returns an address with the prefix "dymvalcons" or the dYmension validator consensus address.

To further learn about the dYmension protocol please visit our brief overview on [how dYmension works](/docs/learn/dymension.md), our more in-depth [litepaper](/docs/dymension-litepaper/index.md) and our tutorial on how to [create a RollApp on top of dYmension's settlement layer.](/docs/tutorials/rollapp/index.md)

If you have any issues please contact us on [discord](http://discord.gg/dymension) in the Developer section. We are here for you!
