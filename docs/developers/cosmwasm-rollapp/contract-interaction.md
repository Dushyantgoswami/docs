---
title: "Interact with the contract"
order: 5
slug: contract-interaction
---

# Interact with the contract

In this section we will interact with our newly deployed NameService contract.

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

That's it for this tutorial! We've built a Wasm RollApp, deployed a contract on top of it and interacted with it.<br/>
Next, let's see how to build an EVM RollApp!
