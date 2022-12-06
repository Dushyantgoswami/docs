---
title: "Register the RollApp"
slug: "register-rollapp"
hidden: false
sidebar_position: 3
hide_table_of_contents: true
---

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
