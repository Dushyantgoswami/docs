---
title: "Deploy a smart contract"
slug: deploy
---

# Deploy CosmWasm contract

The following instructions are from the deploying a smart contract section of the [CosmWasm book](https://book.cosmwasm.com/). For more information on building and deploying CosmWasm smart contracts please visit the CosmWasm book.

## Contract compilation

Open a new terminal window. Download the following smart contracts:

```bash
git clone git@github.com:CosmWasm/cw-plus.git
cd cw-plus
```

Navigate to the project root and run the following command using Docker to optimize the size of the file for deployment:

```Dockerfile
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.11
```

After a couple of minutes you should have an artifact directory in your repo and there should be a cw4-group.wasm file being the contract we want to upload.

## Contract deployment

Let's save common transaction variables so we don't take up space:

```bash
TX_FLAGS="--chain-id $CHAIN_ID --gas-prices 0uwasm --gas auto --gas-adjustment=1.1"
```

Upload the smart contract:

```bash
wasmd tx wasm store ./artifacts/cw4_group.wasm --from $KEY_NAME $(echo $TX_FLAGS) -y -b block
```

You should get an output with information about what happened. Let's store our transaction hash for future use.

Additionally, there should be an event called store_code, with a single attribute code_id - its value field is the code id of our uploaded contract. We can save the code_id with the following command. Please replace `"TX_HASH_HERE"` with the previously returned tx hash.

```bash
CODE_ID=$(wasmd query tx --type=hash "TX_HASH_HERE" --chain-id "$CHAIN_ID" --output json | jq -r '.logs[0].events[-1].attributes[0].value')
```

## Contract instantiation

Now that we've uploaded the smart contract, we can go ahead and instantiate the contract by submitting the `instantiate` transaction.

Please replace `"ADDRESS_HERE"` with the address of the admin of the contract. `admin` is an address that would be eligible to execute messages on this contract. It is crucial to set it to your address, as we will want to learn how to execute contracts.

```bash
wasmd tx wasm instantiate $CODE_ID \
  '{ "admin": "wasm1kh3slet7xsh6fma2nxfent792gqwppkmddpvvd", "members": [] }' \
  --from $KEY_NAME --label "Group" --no-admin $(echo $TX_FLAGS) -y
```

We can now get the contract address by querying the tx hash previously received. Please replace `"TX_HASH_HERE"` with the previously returned tx hash.

```bash
CONTRACT_ADDRESS=$(wasmd query tx --type=hash "TX_HASH_HERE" --chain-id "$CHAIN_ID" --output json | jq -r '.logs[0].events[0].attributes[-2].value')
echo $CONTRACT_ADDRESS
```
