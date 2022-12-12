---
title: "Add RollApp sequencer"
slug: init-sequencer
---

Like a validator, RollApp sequencers process transactions, produce RollApp blocks, and submit a batched set of blocks for security.

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

#### Next let's connect our RollApp instance to a blockchain database...