---
title: "Query state root"
slug: "query-rollapp"
hidden: false
sidebar_position: 4
hide_table_of_contents: true
---

TODO

<!--
## Post the updated state

Now we will update the state of the RollApp from our Sequencer:

```sh
dymd tx rollapp update-state "rollapp1" 1 1 "" 0 '{"BD":[{"Height":1}]}' --from user1 --chain-id localnet
```

```sh
dymd tx rollapp update-state [rollapp-id] [start-height] [num-blocks] [da-path] [version] [bds] [--from] [--chain-id]
```

We input flags to update the state of the RollApp:

- `rollappId` defines the rollapp to which the sequencer belongs.
- `startHeight` is the block height of the first block in the batch
- `numBlocks` is the number of blocks included in this batch update
- `DAPath` is the description of the location on the DA layer
- `version` is the version of the rollapp
- `BD` is a list of block description objects (one per block). The height is the height of the block
- `--from` the name of the account that initializes the RollApp (in this example it is "user1")
- `--chain-id` is the name of the chain (in this example it is "localnet")

We are here with you on this jouney! If you have any issues please contact us on [discord](http://discord.gg/mvnh3YVa2W) in the Developer section. Let's build new application logic on top of the RollApp we just initialized. -->
