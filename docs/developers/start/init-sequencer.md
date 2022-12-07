---
title: "RollApp sequencer"
slug: init-sequencer
---

Like a validator, RollApp sequencers processes transactions, produces RollApp blocks, and submit a batched set of blocks to the base layers for security. Sequencers utilize the [Dymint](https://github.com/dymensionxyz/dymint) processing and networking engine that powers the consensus-free blockchain called RollApps.

# Create a sequencer account

```bash
export DESCRIPTION="{\"Moniker\":\"$MONIKER_NAME\",\"Identity\":\"\",\"Website\":\"\",\"SecurityContact\":\"\",\"Details\":\"\"}";
export CREATOR_ADDRESS="$(dymd keys show "$KEY_NAME" -a --keyring-backend test)"
export CREATOR_PUB_KEY="$(dymd keys show "$KEY_NAME" -p --keyring-backend test)"

dymd tx sequencer create-sequencer "$CREATOR_ADDRESS" "$CREATOR_PUB_KEY" "$ROLLAPP_ID" "$DESCRIPTION" \
  --from "$KEY_NAME" \
  --chain-id "$CHAIN_ID" \
  --keyring-backend test
```

This entity will post state updates automatically to the Dymension Hub. We've input the following flags into the transaction to attach a Sequencer to a RollApp:

-   `creatorAddress` is the bech32-encoded address of the creator account
-   `creator-pub-key` is the public key of the creator
-   `rollappId` defines the rollapp to which the sequencer belongs
-   `description` defines the descriptive terms for the sequencer

Let's make sure that adding a sequencer to the RollApp worked:

```bash
dymd query sequencer list-sequencer
```

Should result in (note that there is a version to track RollApp upgrades)

```bash
pagination:
  next_key: null
  total: "0"
sequencer:
  creator: <creator-address>
  description:
    details: ""
    identity: ""
    moniker: local
    securityContact: ""
    website: ""
  pubkey:
    '@type': /cosmos.crypto.secp256k1.PubKey
    key: <sequencer-pub-key>
  rollappId: <rollapp-id>
  sequencerAddress: <sequencer-address>
```

Now that we've set up our Dymension Hub node for posting state updates, Celestia light client for publishing data, registered our RollApp and attached a Sequencer, we will next choose the application environment you would like to work in.

Dymension puts the power into the developer's hands. Developers have the option of working directly with the [RDK](/docs/developers/build/rdk/setup.md) modules or integrating a virtual machine such as the [CosmWasm VM](/docs/developers/build/cosmwasm/setup.md) and the [EVM](/docs/developers/build/evm/setup.md).

#### Which application environment will you build with?
