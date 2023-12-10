---
title: "Export keys"
slug: export-keys
---

In the [init](./initialize.mdx) section we allocated the token supply to the RollApp deployer. However, you may want to distribute these tokens to users or friends! We will do so by exporting the Sequencer's private keys so we can easily transfer with a web wallet.

Private keys are the password to your blockchain account. Private keys are a long string of unique characters used to sign transactions.

### List keys

Run the following command to list the private keys associated with the RollApp:

```
roller keys list
```

Should return as an example:

```
🔑 Addresses:

  my_celes_key        | RollApp Sequencer account on the Celestia network
  hub_sequencer       | RollApp Sequencer account on the Dymension Hub
  rollapp_sequencer   | RollApp Sequencer account on the RollApp
  relayer-hub-key     | IBC relayer account on Dymension Hub
  relayer-rollapp-key | IBC relayer account on RollApp
```

### Export keys

Run the following command to export the Sequencer's private keys (currently supporting `hub_sequencer`, `rollapp_sequencer` and `my_celes_key`):

```
roller keys export hub_sequencer
```

The security of the `hub_Sequencer` private keys is important for participating in other Dymension networks with the same account. We recommend storing this information in a secure place.
