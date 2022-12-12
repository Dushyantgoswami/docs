---
title: Run the RDK RollApp
slug: run
---

Now that you have added a query to your RollApp and modified it to return the value you want, you can start your RollApp.

The following build command compiles the source code of the project into a binary and installs the binary in the `$(go env GOPATH)/bin` directory:

```
ignite chain build
```

#### Let's run the RDK RollApp!

We will run the RollApp with a [Dymint](https://github.com/dymensionxyz/dymint) aggregator. Let's dive a bit deepr at some arguments we can play with. 
-   `dymint.da_layer` the DA layer for our RollApp. Developers currently have the choice of running a mock DA layer for fast local development or a public testnet provided by Celestia.
-   `dymint.block_batch_size` the batch size which will be written to the base layers (i.e DA and Dymension Hub).
-   `dymint.block_time` block creation interval. The optimal value for setting this argument will be discussed further in the future. For now we will set it to 0.2s.

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following command:

```bash
hellod start --dymint.aggregator true \
  --dymint.settlement_layer dymension \
  --dymint.settlement_config "$SETTLEMENT_CONFIG" \
  --dymint.block_batch_size 500 \
  --dymint.namespace_id "$NAMESPACE_ID" \
  --dymint.da_layer "celestia" \
  --dymint.da_config="$DA_CONFIG" \
  --dymint.block_time 0.2s
```

If you would like to run the RDK RollApp with a mock base layer please run the following command:

```bash
hellod start --dymint.aggregator true \
  --dymint.da_layer mock \
  --dymint.settlement_config "{\"root_dir\": \"$HOME/.wasmd\", \"db_path\": \"data\"}" \
  --dymint.settlement_layer mock \
  --dymint.block_batch_size 1000 \
  --dymint.namespace_id "$NAMESPACE_ID" \
  --dymint.block_time 0.2s
```

Once you're ready move on [next](/docs/develop/build/rdk/run.md) to interacting with your running RDK RollApp!
