---
title: Run the RollApp
slug: mock
---

Assuming you've [built](/docs/developers/build/register-rollapp.md) your RollApp
Before running the RollApp sequencer let's dive a bit deepr at some arguments we can play with.

-   `dymint.da_layer` the da layer for our RollApp. For now we will use a `mock` DA layer, in the next section we replace the mock DA layer with Celestia.
-   `dymint.block_batch_size` the batch size which will be written to the base layers (i.e DA and settlement layer).
-   `dymint.block_time` block creation interval. The optimal value for setting this argument will be discussed further in the future. For now we will set it to `0.2s`.

Choose the environmental variable based on the virtual machine chosen:

```bash
export VM_VERSION="wasm"
```

```bash
export VM_VERSION="ethermint"
```

Run the RollApp:

```bash
export KEY_NAME="local-user"
export ROLLAPP_ID="local-rollapp"
export SETTLEMENT_RPC="0.0.0.0:36657"
export SETTLEMENT_CONFIG="{\"node_address\": \"http:\/\/$SETTLEMENT_RPC\", \"rollapp_id\": \"$ROLLAPP_ID\", \"dym_account_name\": \"$KEY_NAME\", \"keyring_home_dir\": \"$HOME/.dymension/\", \"keyring_backend\":\"test\"}"
export NAMESPACE_ID=000000000000FFFF

"$VM_VERSION"d start --dymint.aggregator true \
  --dymint.da_layer mock \
  --dymint.settlement_layer dymension \
  --dymint.settlement_config "$SETTLEMENT_CONFIG" \
  --dymint.block_batch_size 500 \
  --dymint.namespace_id "$NAMESPACE_ID" \
  --dymint.block_time 0.2s
```

Congrats! You are now running a RollApp sequencer. Next lets replace the mock data layer for Celestia!
