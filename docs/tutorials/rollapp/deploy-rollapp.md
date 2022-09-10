---
title: "Deploy a RollApp"
slug: "deploy-rollapp"
hidden: false
sidebar_position: 4
hide_table_of_contents: true
---

Init the chain

```sh
ignite chain build
checkersd tendermint unsafe-reset-all
checkersd init test-moniker --chain-id=checkers
checkersd keys add player1
checkersd keys add player2
checkersd add-genesis-account $(checkersd keys show player1 -a) 100000000000stake
checkersd add-genesis-account $(checkersd keys show player2 -a) 100000000000stake
checkersd gentx player1 100000000stake --chain-id checkers
checkersd collect-gentxs
```

Init namespace-id

```sh
export NAMESPACE_ID=000000000000FFFF
```

Start the chain

_after any change, call: `ignite chain build`_

```sh
checkersd start --dymint.aggregator true \
    --dymint.da_layer mock \
    --dymint.settlement_config "{\"root_dir\": \"$HOME/.checkers\", \"db_path\": \"data\"}" \
    --dymint.settlement_layer mock \
    --dymint.block_batch_size 1000 \
    --dymint.namespace_id "$NAMESPACE_ID" \
    --dymint.block_time 1s
```
