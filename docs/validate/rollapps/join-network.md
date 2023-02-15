---
title: Join a network
slug: join-network
---

It is highly recommended that you set up a private local network before joining a public network. This will help you get familiar with the setup process, and provide an environment for testing. The following sections outline this process.

## Set up a local node

Validators can set up a private RollApp network to become familiar with running a full node before joining a public network.

The simplest RollApp network you can set up is a local testnet with just a single node. In a single-node environment, you have one account and are the only sequencer signing blocks for your private network.

1. Initialize a genesis file:

```
rollappd init <Moniker> --chain-id=rollappx
```

1. Generate a RollApp account. Replace the variable with your account name:

```
rollappd keys add <KEY_NAME_HERE>
```

2. Run the following commands to add your account and set the initial balance:

```
rollappd add-genesis-account <ADDRESS_HERE> 600000000000urax
```

3. Declare your validator and self-delegation via a special transaction included in the genesis file called a gentx:

```
rollappd gentx <KEY_NAME> 500000000000urax --chain-id rollappx
```

4. Add the gentx to the genesis file:

```
rollappd collect-gentxs
```

5. Run the following command to start your private network:

```
rollappd start
```

If the private Dymension Hub network is set up correctly, your `rollappd` node will be running on `tcp://localhost:26656`, listening for incoming transactions, and signing blocks.

## Join a public network

#### Download the genesis file

**Genesis file** specifies the account balances and parameters at the start of the network to use when replaying transactions and syncing.

-   Chain-id: rollappx
-   Binaries: https://github.com/dymensionxyz/dymension-rdk
-   Version: TODO
-   Git commit: TODO
-   Genesis: TODO
-   Seed nodes: TODO

For default `rollappd` configurations, the `genesis` should be placed under `~/.rollapp/config/genesis.json`.

Continue to the [Sync](./sync.md) page to find out more about syncing your node.
