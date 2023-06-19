---
title: Run EVM RollApp
slug: run
---

To set up the appropriate working environment please input the following env variables:

```
KEY="mykey"
CHAINID="ethermint_9000-1"
MONIKER="localtestnet"
KEYRING="test"
KEYALGO="eth_secp256k1"
```

Next we will configure out client to save the chain-id and keyring-backend type:

```
ethermintd config keyring-backend $KEYRING
ethermintd config chain-id $CHAINID
```

Let's initalize our Genesis file:

```
ethermintd init $MONIKER --chain-id $CHAINID
```

Now that we've initialized a Genesis file, please replace all instances of the `stake` denom with `aphoton` by running the following commands. This will be the name of the currency we use in our EVM RollApp:

```
sed -i'' -e 's/bond_denom": ".*"/bond_denom": "aphoton"/' "$HOME"/.ethermintd/config/genesis.json
sed -i'' -e 's/mint_denom": ".*"/mint_denom": "aphoton"/' "$HOME"/.ethermintd/config/genesis.json
sed -i'' -e 's/denom": ".*"/denom": "aphoton"/' "$HOME"/.ethermintd/config/genesis.json
```

We will now create a local key pair for our EVM RollApp. The `Key` is used to identify the key and to perform operations, such as signing transactions, accessing funds, or granting permissions, on behalf of the associated account or address.

```
ethermintd keys add $KEY --keyring-backend $KEYRING
```

We will next add our created account to the generated Genesis file and add tokens for genesis. Replace `<Address>` with the generated address from the created key pair.

```
ethermintd add-genesis-account <Address> 100000000000000000000000000aphoton --keyring-backend $KEYRING
```

Next we will delegate most of these tokens to your validator node and prepare the next for start.

```
ethermintd gentx $KEY 1000000000000000000000aphoton --keyring-backend $KEYRING --chain-id $CHAINID
```

Now that we've created a validator and self-delegated tokens we can save it to the genesis file.

```
ethermintd collect-gentxs
```

Next we'll ensure that the genesis file is setup correctly:

```
ethermintd validate-genesis
```

Last but not least we will run the EVM RollApp with `Dymint` as a replacement for Tendermint. Note, in this tutorial we are using a mock data availability layer and settlement layer for quick testing. For a tutorial with a greater scope please visit the [Get Started](/docs/develop/get-started/setup.mdx) section and run a [RDK RollApp](/docs/develop/build/rdk/start.md).

```
ethermintd start --dymint.aggregator true \
  --dymint.da_layer mock \
  --dymint.settlement_config "{\"root_dir\": \"$HOME/.ethermintd\", \"db_path\": \"data\"}" \
  --dymint.settlement_layer mock \
  --pruning=nothing \
  --minimum-gas-prices=0.0001aphoton\
  --dymint.block_batch_size 1000 \
  --dymint.namespace_id 000000000000FFFF \
  --dymint.block_time 0.5s \
  --json-rpc.api eth,txpool,personal,net,debug,web3,miner \
  --api.enable
```
