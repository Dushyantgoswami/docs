---
title: "Export keys"
slug: export-keys-adv
---

In the [init](./initialize-adv.md) section we allocated the token supply to the RollApp deployer. However, you may want to distribute these tokens to users or friends!

Private keys are the password to your blockchain account. Private keys are a long string of unqiue characters used to sign transactions.

### List keys

Run the following command to list the private keys associated with the RollApp:

```
roller keys list
```

Should return as an example:

```
🔑 Addresses:

  my_celes_key        | RollApp Sequencer account on Celestia
  hub_sequencer       | RollApp Sequencer account on the Dymension Hub
  rollapp_sequencer   | RollApp Sequencer account on the RollApp
  relayer-hub-key     | IBC relayer account on Dymension Hub
  relayer-rollapp-key | IBC relayer account on RollApp
```

### Export keys

Run the following command to export the Sequencer's private keys (currently only supporting `hub_sequencer` and `rollapp_sequencer`):

```
roller keys export rollapp_sequencer
```
