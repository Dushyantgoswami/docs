---
title: "Full Node"
slug: "index"
hidden: false
sidebar_position: 0
hide_table_of_contents: true
---

# Full Nodes

dYmension's settlement layer is based on [Tendermint Core](https://github.com/tendermint/tendermint/blob/master/docs/introduction/what-is-tendermint.md), which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators run full nodes and participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.

Validator candidates can bond their own staking tokens and have the tokens "delegated", or staked, to them by token holders. DYM is dYmension's native token. Validators and their delegators will earn DYM as block provisions and tokens as transaction fees through execution of the Tendermint consensus protocol. Similar to other Cosmos SDK chains validators may set commission on the fees their delegators receive as additional incentive.

Besides running a full node as a validator, any one can run the full node of dYmension to broadcast transactions and connect directly to the blockchain. In the following tutorial we will demonstrate how to run a full node of the dYmension settlement layer.
As the usage of the blockchain grows, the server requirements may increase as well, so you should have a plan for updating your server as well.

This section will explain how to run a full node of the dYmension hub.

### Step 1: Install binaries

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

### Step 2: Initializing `dymd`

Initialize the "localnet" chain:

```sh
dymd init test --chain-id localnet
```

Add an account (keep note of the address, pub-key and name, you will use it in the following commands):

```sh
dymd keys add Alice
```

Using the above address add a genesis transaction and start the chain:

```sh
dymd add-genesis-account <address from the above command> 10000000stake,1000token
dymd gentx Alice 1000000stake --chain-id localnet
dymd collect-gentxs
```

Now start the chain!

```sh
dymd start
```

You should have a running local node! If you have any issues please contact us on [discord](http://discord.gg/dymension) in the Developer section. We are here for you!
