---
title: "Deploy a smart contract"
slug: deploy
---

# Deploy CosmWasm contract

The following instructions are from the deploying a smart contract section of the [CosmWasm book](https://book.cosmwasm.com/). For more information on building and deploying CosmWasm smart contracts please visit the CosmWasm book.

## Contract compilation

Open a new terminal window. Download and compile the following smart contract:

```bash
# Download the repository
git clone https://github.com/InterWasm/cw-contracts
cd cw-contracts
git checkout main
cd contracts/nameservice

# compile the wasm contract with stable toolchain
rustup default stable
cargo wasm
```

The compilation should output the file target/wasm32-unknown-unknown/release/cw_nameservice.wasm.

```bash
ls -lh
```

Let's try running the unit tests:

```bash
RUST_BACKTRACE=1 cargo unit-test
```

Navigate to the project root and run the following command to optimize the size of the file for deployment:

```Dockerfile
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.6
```

Set an environmental variable for the nameservice wasm file:

```sh
export WASM_FILE=artifacts/cw_nameservice.wasm
```

## Contract deployment

Deploy the smart contract and fetch the deployment transaction hash:

```bash
KEY_NAME=test-key
CHAIN_ID=test-chain
TX_FLAGS="--chain-id $CHAIN_ID --gas-prices 0uwasm --gas auto --gas-adjustment=1.1"

TX_HASH=$(wasmd tx wasm store "$WASM_FILE" --from "$KEY_NAME" $(echo $TX_FLAGS) --output json -y | jq -r '.txhash')
```

## Contract instantiation

Let's start by querying our transaction hash for its Code ID

```bash
CODE_ID=$(wasmd query tx --type=hash "$TX_HASH" --chain-id "$CHAIN_ID" --output json | jq -r '.logs[0].events[-1].attributes[0].value')
```

Create an `instantiate` message for the contract

```bash
INIT='{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}'
```

Instantiate the contract by sending an `instantiate` transaction

```bash
wasmd tx wasm instantiate "$CODE_ID" "$INIT" --from $KEY_NAME --label "name service" $(echo $TX_FLAGS) -y --no-admin
```
