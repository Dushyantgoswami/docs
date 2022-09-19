---
title: "Contract Interaction"
order: 5
slug: contract-interaction
---

# Contract Interaction

In this section we will deploy and interact with our NameService contract.

## Contract Deployment

Deploy the smart contract and fetch the deployment transaction hash

```sh
TX_FLAGS="--chain-id $CHAIN_ID --gas-prices 0uwasm --gas auto --gas-adjustment=1.1"

TX_HASH=$(wasmd tx wasm store "$WASM_FILE" --from "$KEY_NAME" $(echo $TX_FLAGS) --output json -y | jq -r '.txhash')
```

## Contract Instantiation

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

## Contract Interaction

Fetch some specific contract instance

```sh
ALL_CONTRACTS=$(wasmd query wasm list-contract-by-code $CODE_ID --chain-id "$CHAIN_ID" --output json)

CONTRACT=$(echo $ALL_CONTRACTS | jq -r '.contracts[-1]')
```

Register two names in the NameService contract

```sh
wasmd tx wasm execute $CONTRACT "{\"register\":{\"name\":\"bob\"}}" --amount 100uwasm --from $KEY_NAME $(echo $TX_FLAGS) -y
wasmd tx wasm execute $CONTRACT "{\"register\":{\"name\":\"alice\"}}" --amount 100uwasm --from $KEY_NAME $(echo $TX_FLAGS) -y
```

Query the contract info

```sh
wasmd query wasm contract $CONTRACT --chain-id "$CHAIN_ID"
```

Query the contract balances

```sh
wasmd query bank balances $CONTRACT --chain-id "$CHAIN_ID"
```

Query the owner of the name

```sh
wasmd query wasm contract-state smart $CONTRACT "{\"resolve_record\": {\"name\": \"bob\"}}" --chain-id "$CHAIN_ID" --output json
```
