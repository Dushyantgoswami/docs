---
title: "dYmension Wasm Node"
order: 3
slug: dym-wasm-node
---

# Dymension-Wasm Node

Running dymension-wasm RollApp built using the RDK and dymint.

## Install the binary

```sh
git clone git@github.com:dymensionxyz/dymension-flagship.git && cd dymension-flagship
go mod tidy && go mod download && make install
```

## Start the node

Build, init and run the RollApp using the following script.

```sh
export KEY_NAME=test-key
export CHAIN_ID=test-chain

./scripts/setup_and_run_node.sh
```
