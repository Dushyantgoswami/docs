---
title: "Build the RollApp"
slug: "register-rollapp"
hidden: false
sidebar_position: 3
hide_table_of_contents: true
---

The [RollApp Development Kit (RDK)](https://github.com/dymensionxyz/rdk) is currently in the developmental stage. In a production environment, developers will be able to modify Go modules for their custom business logic needs.

We provide instructions on how to integrate a virtual machine (e.g. CosmWasm and EVM) into your own RollApp. With a virtual machine developers are able to deploy smart contracts with all of the benefits of owning your own blockchain. Currently, RollApps support [CosmWasm](/docs/developers/build/install-vm/cosmwasm.md) and the [EVM](/docs/developers/build/install-vm/evm.md). But RollApp tech stack is a growing ecosystem and we expect new VMs to be released in the near future.

Let's build our RollApp, first we must register it with our running [Dymension Hub node](/docs/developers/start/run-a-hub-node.md).

# Register the RollApp

Open a new terminal window. Set the relevant environment variables for first creating a RollApp
on the Dymension Hub.

```sh
ROLLAPP_ID="local-rollapp"
MONIKER_NAME="local"
CHAIN_ID="local-testnet"
KEY_NAME="local-user"
```

Send a transaction to the Dymension Hub to create a namespace for the RollApp:

```bash
dymd tx rollapp create-rollapp "$ROLLAPP_ID" stamp1 "genesis-path/1" 3 100 '{"Addresses":[]}' \
  --from "$KEY_NAME" \
  --chain-id "$CHAIN_ID" \
  --keyring-backend test
```

The following flags are required as part of the tranaction:

-   `ROLLAPP_ID` is the unique identifier of the RollApp
-   `codeStamp` is the description of the genesis file location on the data layer
-   `genesisPath` is the description of the genesis file location on the data layer
-   `maxWithholdingBlocks` is the maximum number of blocks for an active sequencer to send a state update
-   `maxSequencers` is the maximum number of sequencers
-   `permissionedAddresses` is a bech32-encoded address list of the sequencers that are allowed to serve this ROLLAPP_ID
-   `--from` the name of the account that initializes the RollApp (in this example it is "user1")
-   `--chain-id` is the name of the chain (in this example it is "localnet")

Let's make sure the RollApp initialization worked:

```sh
dymd query rollapp list-rollapp
```

Contrary to general purpose smart contract blockchains, querying the state of the Dymension Hub blockchain allows users and applications to understand which RollApps exist in the ecosystem. This is what is often regarded as the embedded logic of RollApps in the Dymension Hub.

The previous query should result in:

```bash
rollapp:
  codeStamp: stamp1
  creator: <creator-address>
  genesisPath: genesis-path/1
  maxSequencers: "100"
  maxWithholdingBlocks: "3"
  permissionedAddresses:
    addresses: []
  rollappId: <RollApp ID>
  version: "0"
```
