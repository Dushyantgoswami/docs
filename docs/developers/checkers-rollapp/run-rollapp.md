---
title: "Run the RollApp"
slug: "run-rollapp"
hidden: false
sidebar_position: 4
hide_table_of_contents: true
---

## Run the dYmension RollApp

Before running the RollApp sequencer let's dive a bit deepr at some arguments we can play with.

- `dymint.da_layer` the da layer for our RollApp. for now we will use a `mock` da layer.
- `dymint.block_batch_size` the batch size which will be written to the base layers (i.e DA and settlement layer).
- `dymint.block_time` block creation interval. The optimal value for setting this argument will be discussed further in the future. For now we will set it to `0.2s`.

Run the checkers RollApp chain:

```sh
export KEY_NAME="local-user"
export ROLLAPP_ID="checkers"
export SETTLEMENT_RPC="0.0.0.0:36657"
export SETTLEMENT_CONFIG="{\"node_address\": \"http:\/\/$SETTLEMENT_RPC\", \"rollapp_id\": \"$ROLLAPP_ID\", \"dym_account_name\": \"$KEY_NAME\", \"keyring_home_dir\": \"$HOME/.dymension/\", \"keyring_backend\":\"test\"}"
export NAMESPACE_ID=000000000000FFFF

checkersd start --dymint.aggregator true \
  --dymint.da_layer mock \
  --dymint.settlement_layer dymension \
  --dymint.settlement_config "$SETTLEMENT_CONFIG" \
  --dymint.block_batch_size 500 \
  --dymint.namespace_id "$NAMESPACE_ID" \
  --dymint.block_time 0.2s
```

Congrats! You are now running a RollApp sequencer.<br/>
Next lets see how to interact with our RollApp.
