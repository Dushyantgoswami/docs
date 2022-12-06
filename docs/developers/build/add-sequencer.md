---
title: "Add Sequencer"
order: 4
slug: add-sequencer
---

RollApp's have sequencers that process transactions and post them to the base layers for security. Sequencers utilize the [Dymint](https://github.com/dymensionxyz/dymint) processing and networking engine that powers the consensus-free blockchain called RollApps.

Initialize and attach a Sequencer:

```bash
export DESCRIPTION="{\"Moniker\":\"$MONIKER_NAME\",\"Identity\":\"\",\"Website\":\"\",\"SecurityContact\":\"\",\"Details\":\"\"}";
export CREATOR_ADDRESS="$(dymd keys show "$KEY_NAME" -a --keyring-backend test)"
export CREATOR_PUB_KEY="$(dymd keys show "$KEY_NAME" -p --keyring-backend test)"

dymd tx sequencer create-sequencer "$CREATOR_ADDRESS" "$CREATOR_PUB_KEY" "$ROLLAPP_ID" "$DESCRIPTION" \
  --from "$KEY_NAME" \
  --chain-id "$CHAIN_ID" \
  --keyring-backend test
```

We input the following flags into the transaction to attach a Sequencer to a RollApp:

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

Developers have the option of integrating available virtual machines and adjusting the native Go modules of the RollApp Development Kit (RDK).

In the next the section developers can choose between integrating the [CosmWasm VM](/docs/developers/build/install-vm/cosmwasm-install.md) and the [EVM](/docs/developers/build/install-vm/evm-install.md). Which one will you choose?
