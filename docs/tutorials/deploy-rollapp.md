---
title: "Deploy a RollApp"
slug: "deploy-rollapp"
---

This tutorial introduces the dYmension Hub and demonstrates how to deploy a RollApp, attach a Sequencer and begin developing in the dYmension ecosystem.

### Step 1: Install Go

dYmension is built using [Go](https://go.dev/doc/install) version 1.18+

```sh
go version
```

### Step 2: Install binaries

Clone `dymension`:

```sh
git clone https://github.com/dymensionxyz/dymension.git
cd dymension
make install
```

Check that the evmosd binaries have been successfully installed:

```sh
dymd version
```

If the dymd command is not found an error message is returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```sh
export PATH=$PATH:$(go env GOPATH)/bin
```

### Step 3: Initializing `dymd`

Initialize the "localnet" chain:
```sh
dymd init test --chain-id localnet
```

Add an account (keep note of the address, you will use it in the following command):

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
You should have a running local node!