---
title: "Interact with the contract"
slug: interact
---

## Contract Interaction

Fetch specific contract instances

```sh
ALL_CONTRACTS=$(wasmd query wasm list-contract-by-code $CODE_ID --chain-id "$CHAIN_ID" --output json)

CONTRACT=$(echo $ALL_CONTRACTS | jq -r '.contracts[-1]')
```

Register two names (Alice and Bob) in the NameService contract

```sh
wasmd tx wasm execute $CONTRACT "{\"register\":{\"name\":\"bob\"}}" --amount 100uwasm --from $KEY_NAME $(echo $TX_FLAGS) -y
wasmd tx wasm execute $CONTRACT "{\"register\":{\"name\":\"alice\"}}" --amount 100uwasm --from $KEY_NAME $(echo $TX_FLAGS) -y
```

Query the contract information

```sh
wasmd query wasm contract $CONTRACT --chain-id "$CHAIN_ID"
```

Query the contract balance

```sh
wasmd query bank balances $CONTRACT --chain-id "$CHAIN_ID"
```

Query the owner of the name

```sh
wasmd query wasm contract-state smart $CONTRACT "{\"resolve_record\": {\"name\": \"bob\"}}" --chain-id "$CHAIN_ID" --output json
```

Next let's see how to transfer tokens between RollApp accounts and view it in the [Keplr](https://www.keplr.app/) wallet.
