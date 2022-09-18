---
title: "Initialize a RollApp"
slug: "Initialize-rollapp"
hidden: false
sidebar_position: 3
hide_table_of_contents: true
---

## Step 1: Create a RollApp instance

Open a new tab in the terminal (keep the node running). Initialize a new RollApp:

```sh
CHAIN_ID="local-testnet"
KEY_NAME="local-user"

dymd tx rollapp create-rollapp "$ROLLAPP_ID" stamp1 "genesis-path/1" 3 100 '{"Addresses":[]}' \
  --from "$KEY_NAME" \
  --chain-id "$CHAIN_ID" \
  --keyring-backend test
```

This is how it would look without our template:

```sh
dymd tx rollapp create-rollapp [rollapp-id] [code-stamp] [genesis-path] [max-withholding-blocks] [max-sequencers] [permissioned-addresses] [--from] [--chain-id]
```

We input flags into the transaction to create a new RollApp:

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
  rollappId: <RollApp ID>
  version: "0"
```

## Step 2: Attach a Sequencer

Initialize and attach a Sequencer:

```sh
MONIKER_NAME="local"
DESCRIPTION="{\"Moniker\":\"$MONIKER_NAME\",\"Identity\":\"\",\"Website\":\"\",\"SecurityContact\":\"\",\"Details\":\"\"}";
CREATOR_ADDRESS="$(dymd keys show "$KEY_NAME" -a --keyring-backend test)"
CREATOR_PUB_KEY="$(dymd keys show "$KEY_NAME" -p --keyring-backend test)"

dymd tx sequencer create-sequencer "$CREATOR_ADDRESS" "$CREATOR_PUB_KEY" "$ROLLAPP_ID" "$DESCRIPTION" \
  --from "$KEY_NAME" \
  --chain-id "$CHAIN_ID" \
  --keyring-backend test
```

This is how it would look without our template:

```sh
dymd tx sequencer create-sequencer [<creator-address] [<creator-pub-key] [<rollapp-id] [<description] [<--from] [<--chain-id]
```

We input flags into the transaction to attach a Sequencer:

- `creatorAddress` is the bech32-encoded address of the creator account.
- `creator-pub-key` is the public key of the creator.
- `rollappId` defines the rollapp to which the sequencer belongs.
- `description` defines the descriptive terms for the sequencer:

```sh
{
    "Moniker": moniker defines a human-readable name for the sequencer.
    "Identity": identity defines an optional identity signature (ex. UPort or Keybase).
    "Website": website defines an optional website link.
    "SecurityContact":securityContact defines an optional email for security contact.
    "Details": details define other optional details.
}'
```
