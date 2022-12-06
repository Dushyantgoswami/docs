---
title: Build the RollApp
slug: register-rollapp
---

The [RollApp Development Kit (RDK)](https://github.com/dymensionxyz/rdk) is currently in the developmental stage. As such there may be breaking changes as the code base is upgraded and moves closer to a production product.

In the following tutorial we provide instructions on how to build a `Counter RollApp` with your choice of application environment. The following tutorial will guide developers on how to deploy a simple counter application with Go module via the [RDK](/docs/developers/build/application-env/rdk.md) or using a virtual machine such as the [CosmWasm VM](/docs/developers/build/application-env/cosmwasm.md) and the [EVM](/docs/developers/build/application-env/evm.md).

Before we continue, make sure to have installed the proper version for your [work environment](/docs/developers/start/setup.md) and have started a [Dymension Hub node](/docs/developers/start/run-a-hub-node.md). Let's build our `Counter RollApp`, first we must register it with the Dymension Hub.

# Register the RollApp

Open a new terminal window. Set the relevant environment variables for first creating a RollApp
on the Dymension Hub.

```sh
ROLLAPP_ID="counter-rollapp"
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
