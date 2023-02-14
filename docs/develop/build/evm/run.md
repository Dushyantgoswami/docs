---
title: Run EVM RollApp
slug: run
---

Next we'll initialize the EVM RollApp. To set up the appropriate working environment please input the following env variables:

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

Next we will create a key pair for our EVM RollApp. The `<Key_Name>` is used to identify the key and to perform operations, such as signing transactions, accessing funds, or granting permissions, on behalf of the associated account or address. Please replace `<Key_Name>` with an identifiable name.

```
ethermintd keys add $KEY --keyring-backend $KEYRING --algo $KEYALGO
```

Now we'll initalize our Genesis file:

```
ethermintd init $MONIKER --chain-id $CHAINID
```

Now that we've initialized a Genesis file, please open the file `~/.ethermintd/config/genesis.json` and replace all instances of the `stake` denom with `aphoton`. This will be the name of the currency we use in our EVM RollApp.

```
ethermintd add-genesis-account $KEY 100000000000000000000000000aphoton --keyring-backend $KEYRING
```

Next we will delegate most of these tokens to your validator node and prepare the next for start.

```
ethermintd gentx $KEY 1000000000000000000000aphoton --keyring-backend $KEYRING --chain-id $CHAINID
```

Now that we've created a validator and self-delegated tokens we can save it to the genesis file.

```
ethermintd collect-gentxs
```

Next we'll ensure everything worked and that the genesis file is setup correctly:

```
ethermintd validate-genesis
```

Last but not least we will run the EVM RollApp with `Dymint` replacement for Tendermint.

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
