---
title: "dYmension Wasm Node"
order: 3
slug: dym-wasm-node
---

# Dymension-Wasm Node

Running dymension-wasm optimistic rollup built using the RDK and dymint.

## Install binary

```sh
git clone git@github.com:dymensionxyz/dymension-flagship.git && cd dymension-flagship

git config --global url.git@github.com:.insteadOf https://github.com/

export GOPRIVATE=github.com/dymensionxyz/*

go mod tidy && go mod download && make install
```

## Start node

Build, init and run the chain:

```sh
# Look at the script to check which parameters can be updated
export KEY_NAME=test-key
export CHAIN_ID=test-chain

./scripts/setup_and_run_node.sh
```
