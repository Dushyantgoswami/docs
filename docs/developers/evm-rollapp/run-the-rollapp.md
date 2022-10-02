---
title: "Run the RollApp"
order: 3
slug: evm-sequencer
---

# Run the RollApp

## Clone the repo

```sh
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.1-alpha
cd ethermint
go mod tidy
go mod download
make install
```

## Start the node

Build, init and run the RollApp:

```sh
sh init.sh
```

Next let's create a solidity smart contract
