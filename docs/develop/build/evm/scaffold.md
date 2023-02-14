---
title: Scaffold EVM
slug: scaffold
---

## Start the EVM environment

Next we'll initialize the EVM RollApp. Please replace `<Moniker>` with the name of your local validator node.

```
ethermintd init $MONIKER --chain-id ethermint_9000-1
```

Now that we've initialized a Genesis file, please open the file `~/.ethermintd/config/genesis.json` and replace all instances of the `stake` denom with `tEVMOS`.

Next we will create a key pair for our EVM RollApp. The `<Key_Name>` is used to identify the key and to perform operations, such as signing transactions, accessing funds, or granting permissions, on behalf of the associated account or address. Please replace `<Key_Name>` with an identifiable name.

```
ethermintd keys add $KEY
```

This command initalizes our Genesis file and creates a local key pair. Next we'll use our created address and add a balance for our genesis event. `1000000000tEVMOS` is the balance allocated to your account on genesis.

```
ethermintd add-genesis-account <Address> 1000000000tEVMOS --chain-id ethermint_9000-1
```

Next we will delegate most of these tokens to your validator node and prepare the next for start.

```
ethermintd gentx <Key_Name> 900000000tEVMOS --chain-id ethermint_9000-1
```

Now that we've created a validator and self-delegated tokens we can save it to the genesis file.

```
ethermintd collect-gentxs
```

Last but not least we will run the EVM RollApp with `Dymint` replacement for Tendermint.

```
ethermintd start
```
