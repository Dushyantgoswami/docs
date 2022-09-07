---
title: "Run a Node of dYmension"
slug: "run-a-node"
hidden: false
sidebar_position: 3
hide_table_of_contents: true
---

This section will explain how to run a node of the dYmension hub.

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
dymd keys add user1
```

Using the above address add a genesis transaction and start the chain:

```sh
dymd add-genesis-account <address from the above command> 10000000stake,1000token
dymd gentx user1 1000000stake --chain-id localnet
dymd collect-gentxs
dymd start
```

You should have a running local node! If you have any issues please contact us on [discord](http://discord.gg/mvnh3YVa2W) in the Developer section. We are here for you!
