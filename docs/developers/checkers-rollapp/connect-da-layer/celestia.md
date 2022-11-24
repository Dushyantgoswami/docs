---
title: "Celestia DA"
slug: "celestia"
hidden: false
hide_table_of_contents: true
---

# Celestia

## Overview

So far we've run the RollApp with a mock data availablity (DA) layer. In this section we'll see how to replace the mock with Celestia's DA layer.<br/>

Celestia is a DA layer that provides a scalable solution for block space using light clients and data availability sampling. You can read more about Celestia's DA layer [here](https://docs.celestia.org/concepts/how-celestia-works/data-availability-layer). In the following sections we'll see how to run a Celestia light client in order to send data from the checkers RollApp to Celestia's DA Layer.

### Step 1: Run the celestia light client

In order to write our RollApp batches to Celestia, we will need to run a Celestia light node and fund it.<br/>
Head over to Celestia's light node [tutorial](https://docs.celestia.org/nodes/light-node) for a step-by-step instructions.<br/>
Make sure that by the end of the tutorial you can view your account balance and that it's positive.

### Step 2: Reset the Hub node

Once you've got the Celestia's light node up and running, we'll start by stopping the current process of the hub node and running it again.<br/>

1. Stop the hub node by killing the relevant process.
2. Reset and run the hub node by following [steps 2 and 3](../../getting-started/run-a-hub-node.md/#step-2-setup-the-relevant-env-vars) then come back here to continue the tutorial.

### Step 3: Reset the RollApp State

In order to run the checkers RollApp with celestia as the DA we'll start by:

1. Stopping the current RollApp process.
2. Reseting the RollApp state by deleting it's data:

```sh
rm -rf ~/.checkers/data
```

### Step 4: Run the RollApp with Celestia as the DA

:::warning Note
The tutorial assumes a default Celestia namespace id `000000000000FFFF` and a default Celestia light node port `26659`.
:::

Setup the relevant env vars:

```sh
export KEY_NAME="local-user"
export ROLLAPP_ID="checkers"
export SETTLEMENT_RPC="0.0.0.0:36657"
export SETTLEMENT_CONFIG="{\"node_address\": \"http:\/\/$SETTLEMENT_RPC\", \"rollapp_id\": \"$ROLLAPP_ID\", \"dym_account_name\": \"$KEY_NAME\", \"keyring_home_dir\": \"$HOME/.dymension/\", \"keyring_backend\":\"test\"}"
export NAMESPACE_ID=000000000000FFFF

export CELESTIA_LIGHT_CLIENT_ENDPOINT="127.0.0.1:26659"
export DA_CONFIG="{\"base_url\": \"http:\/\/$CELESTIA_LIGHT_CLIENT_ENDPOINT\", \"timeout\": 60000000000, \"gas_limit\": 6000000, \"namespace_id\": [0,0,0,0,0,0,255,255]}"
```

Run the RollApp:

```sh
checkersd start --dymint.aggregator true \
  --dymint.settlement_layer dymension \
  --dymint.settlement_config "$SETTLEMENT_CONFIG" \
  --dymint.block_batch_size 500 \
  --dymint.namespace_id "$NAMESPACE_ID" \
  --dymint.da_layer "celestia" \
  --dymint.da_config="$DA_CONFIG" \
  --dymint.block_time 0.2s
```

Walla! At this point you should have a running RollApp which writes it's data to Celestia and it's state to the dymension settlement layer!<br/>

:::warning Note
For local development purposes we recommend working with a mock DA layer to prevent unexpected behaviors.<br/>
:::

Next let's interact with the RollApp!
