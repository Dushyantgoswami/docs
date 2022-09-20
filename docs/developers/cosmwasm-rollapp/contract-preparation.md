---
title: "Contract Preparation"
order: 4
slug: contract-preparation
---

# Deploying a NameService contract

In the next section we will deploy a NameService contract on top of our CosmWasm RollApp.
The goal of the NameService contract is to let users buy names and to set a value these names resolve to.
The owner of a given name will be the current highest bidder.

Compile the Smart Contract

```sh
git clone https://github.com/InterWasm/cw-contracts && cd cw-contracts && git checkout main && cd contracts/nameservice

rustup default stable && RUSTFLAGS='-C link-arg=-s' cargo wasm
```

Optimize the Smart Contract.
The result will be saved in the `artifacts` directory.

```sh
# In the contract directory folder (in our example - `contracts/nameservice`)
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.6
```

set an env var for the nameservice wasm file

```sh
export WASM_FILE=artifacts/cw_nameservice.wasm
```
