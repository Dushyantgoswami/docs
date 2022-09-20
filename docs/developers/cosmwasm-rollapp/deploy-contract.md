---
title: "Deploy a smart contract"
order: 4
slug: contract-deployment
---

# Deploy Wasm contract

In the next section we will deploy a NameService contract on top of our Wasm RollApp.
The goal of the NameService contract is to let users buy names and to set a value these names resolve to.
The owner of a given name will be the current highest bidder.

## Contract compilation

Compile the Smart Contract:

```sh
git clone https://github.com/InterWasm/cw-contracts && cd cw-contracts && git checkout main && cd contracts/nameservice

rustup default stable && RUSTFLAGS='-C link-arg=-s' cargo wasm
```

Optimize the Smart Contract.
The result will be saved in the `artifacts` directory:

```sh
# In the contract directory folder (in our example - `contracts/nameservice`)
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.6
```

set an env var for the nameservice wasm file:

```sh
export WASM_FILE=artifacts/cw_nameservice.wasm
```

## Contract deployment

Deploy the smart contract and fetch the deployment transaction hash:

```sh
TX_FLAGS="--chain-id $CHAIN_ID --gas-prices 0uwasm --gas auto --gas-adjustment=1.1"

TX_HASH=$(wasmd tx wasm store "$WASM_FILE" --from "$KEY_NAME" $(echo $TX_FLAGS) --output json -y | jq -r '.txhash')
```

## Contract instantiation

Let's start by querying our transaction hash for its Code ID

```sh
CODE_ID=$(wasmd query tx --type=hash "$TX_HASH" --chain-id "$CHAIN_ID" --output json | jq -r '.logs[0].events[-1].attributes[0].value')
```

Create an `instantiate` message for the contract

```sh
INIT='{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}'
```

Instantiate the contract by sending an `instantiate` transaction

```sh
wasmd tx wasm instantiate "$CODE_ID" "$INIT" --from $KEY_NAME --label "name service" $(echo $TX_FLAGS) -y --no-admin
```

Now that we've deployed the contract, let's start interacting with it