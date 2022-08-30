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

Add an account (keep note of the address and name, you will use it in the following command):

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

### Step 4: Deploy a RollApp

Open a new tab in the terminal (keep the node running). Initialize a new RollApp:

```sh
dymd tx rollapp create-rollapp "rollapp1" stamp1 "genesis-path/1" 3 100 '{"Addresses":[]}' --from user1 --chain-id localnet
```

This is how it would look without our template:
```sh
dymd tx rollapp create-rollapp [rollapp-id] [code-stamp] [genesis-path] [max-withholding-blocks] [max-sequencers]  [permissioned-addresses] [--from] [--chain-id]
```

We input a six flags into the transaction to create a new RollApp:

- `rollappId` is the unique identifier of the rollapp chain.
- `codeStamp` is the description of the genesis file location on the DA
- `genesisPath` is the description of the genesis file location on the DA
- `maxWithholdingBlocks` is the maximum number of blocks for an active sequencer to send a state update
- `maxSequencers` is the maximum number of sequencers
- `permissionedAddresses` is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId. In the case of an empty list, the rollapp is considered permissionless.
- `--from` the name of the account that initializes the RollApp (in this example it is "user1")
- `--chain-id` is the name of the chain (in this example it is "localnet")

Let's make sure the RollApp initialization worked:

```sh
dymd query rollapp list-rollapp
```

Should result in (note that there is a version to track RollApp upgrades): 

```sh
rollapp:
  codeStamp: stamp1
  creator: <creator-address>
  genesisPath: genesis-path/1
  maxSequencers: "100"
  maxWithholdingBlocks: "3"
  permissionedAddresses:
    addresses: []
  rollappId: rollapp1
  version: "0"
```

## Step 5: Attach a Sequencer

```sh
dymensiond tx sequencer create-sequencer "dym1fnmapmvvrk8vchdh3ne0v5p6l5n2s093mffte7" '{"@type": "/cosmos.crypto.secp256k1.PubKey","key": "A1PnLi9BGKzUoyJTsyq09MUvxUg+ZgcKgv1l0EE5tJXx"}' "rollapp2" '{"Moniker":"moniker3","Identity":"","Website":"","SecurityContact":"","Details":""}' --from alice
```




```sh
dymensiond tx rollapp update-state "rollapp2" 0 1 "" 0 '{"BD":[{"Height":0}]}' --from bob
```
