---
title: Join a network
slug: join-network
---

It is highly recommended that you set up a private local network before joining a public network. This will help you get familiar with the setup process, and provide an environment for testing. The following sections outline this process.

## Set up a local node

Validators can set up a private Dymension Hub network to become familiar with running a full Dymension Hub node before joining a public network.

The simplest Dymension Hub network you can set up is a local testnet with just a single node. In a single-node environment, you have one account and are the only validator signing blocks for your private network.

1. Initialize a genesis file:

```
dymd init <Moniker>
```

1. Generate a Dymension account. Replace the variable with your account name:

```
dymd keys add <KEY_NAME_HERE>
```

2. Run the following commands to add your account and set the initial balance:

```
dymd add-genesis-account <ADDRESS_HERE> 100000000udym
```

3. Declare your validator and self-delegation via a special transaction included in the genesis file called a gentx:

```
dymd gentx <KEY_NAME> 10000000udym --chain-id local-testnet
```

4. Add the gentx to the genesis file:

```
dymd collect-gentxs
```

5. Run the following command to start your private network:

```
dymd start
```

If the private Dymension Hub network is set up correctly, your Dymd node will be running on `tcp://localhost:26656`, listening for incoming transactions, and signing blocks.

## Join a public network

#### Download the genesis file and address book

**Genesis file** specifies the account balances and parameters at the start of the network to use when replaying transactions and syncing.

-   Chain-id: 35-C
-   Binaries: https://github.com/dymensionxyz/dymension.git
-   Version: v0.2.0-beta
-   Git commit: 987e33407911c0578251f3ace95d2382be7e661d
-   Genesis: [Link here](https://github.com/dymensionxyz/testnets/blob/main/dymension-hub/35-C/genesis.json)
-   Seed nodes: [Link here](https://github.com/dymensionxyz/testnets/blob/main/dymension-hub/35-C/seeds.txt)

For default `dymd` configurations, the `genesis` should be placed under `~/.dymension/config/genesis.json`.

Continue to the [Sync](./sync.md) page to find out more about syncing your node.
