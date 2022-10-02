---
title: "Run the RollApp"
order: 3
slug: dym-wasm-node
---

# Run the RollApp

## Install the binary

```sh
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.1-alpha && cd wasm
go mod tidy
go mod download
make install
```

## Start the node

Build, init and run the RollApp using the following script:

```sh
export KEY_NAME=test-key
export CHAIN_ID=test-chain

sh scripts/setup_and_run_node.sh
```

Next let's deploy a smart contract
