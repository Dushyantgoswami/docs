---
title: Run CosmWasm RollApp
slug: run
---

To set up the appropriate working environment please input the following env variables:

```
KEY_NAME="mykey"
CHAIN_ID="wasm-rollapp"
MONIKER="localtestnet"
KEYRING="test"
```

Next we will configure our client to save the chain-id and keyring-backend type:

```
wasmd config keyring-backend $KEYRING
wasmd config chain-id $CHAIN_ID
```

Let's initalize our Genesis file:

```
wasmd init $MONIKER --chain-id $CHAIN_ID
```

Now that we've initialized a Genesis file, please replace all instances of the `stake` denom with `uwasm` by running the following commands. This will be the name of the currency we use in our CosmWasm RollApp:

```
sed -i'' -e 's/bond_denom": ".*"/bond_denom": "uwasm"/' "$HOME"/.wasmd/config/genesis.json
sed -i'' -e 's/mint_denom": ".*"/mint_denom": "uwasm"/' "$HOME"/.wasmd/config/genesis.json
sed -i'' -e 's/denom": ".*"/denom": "uwasm"/' "$HOME"/.wasmd/config/genesis.json
```

We will now create a local key pair for our CosmWasm RollApp. The `Key` is used to identify the key and to perform operations, such as signing transactions, accessing funds, or granting permissions, on behalf of the associated account or address.

```
wasmd keys add $KEY_NAME --keyring-backend $KEYRING
```

We will next add our created account to the generated Genesis file and add tokens for genesis. Replace `<Address>` with the generated address from the created key pair.

```
wasmd add-genesis-account <Address> 100000000000000000000000000uwasm --keyring-backend $KEYRING
```

Next we will delegate most of these tokens to your validator node and prepare the next for start.

```
wasmd gentx $KEY_NAME 1000000000000000000000uwasm --keyring-backend $KEYRING --chain-id $CHAIN_ID
```

Now that we've created a validator and self-delegated tokens we can save it to the genesis file.

```
wasmd collect-gentxs
```

Next we'll ensure that the genesis file is setup correctly:

```
wasmd validate-genesis
```

Last but not least we will run the CosmWasm RollApp with `Dymint` as a replacement for Tendermint. Note, in this tutorial we are using a mock data availability layer and settlement layer for quick testing. For a tutorial with a greater scope please visit the [Get Started](/docs/develop/get-started/setup.mdx) section and run a [RDK RollApp](/docs/develop/build/rdk/start.md).

```
wasmd start --dymint.aggregator true \
  --dymint.da_layer mock \
  --dymint.settlement_config "{\"root_dir\": \"$HOME/.wasmd\", \"db_path\": \"data\"}" \
  --dymint.settlement_layer mock \
  --dymint.block_batch_size 1000 \
  --dymint.namespace_id 000000000000FFFF \
  --dymint.block_time 0.2s
```
