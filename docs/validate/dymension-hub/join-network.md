---
title: Join a network
slug: join-network
---

It is highly recommended that you set up a private local network before joining a public network. This will help you get familiar with the setup process, and provide an environment for testing. The following sections outline this process.

## Set up a local node

Validators can set up a private Dymension Hub network to become familiar with running a full Dymension Hub node before joining a public network.

The simplest Dymension Hub network you can set up is a local testnet with just a single node. In a single-node environment, you have one account and are the only validator signing blocks for your private network.

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
dymd gentx <KEY_NAME> 10000000udym --chain-id dym-test-1
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

**Addressbook** lists a selection of peers for your node to dial to in order to discover other nodes in the network. The current testnet information is as follows:

-   Network: 35-C
-   Genesis: TODO
-   AddressBook: TODO
-   Seed nodes: TODO

For default `dymd` configurations, the `genesis` and `addressbook` files should be placed under `~/.dymension/config/genesis.json` and `~/.dymension/config/addrbook.json` respectively.

### Additional Settings

#### `seed_mode`

In seed mode, your node constantly crawls the network and looks for peers. If another node requests addresses, it responds and disconnects. Seed mode will not work if the peer-exchange reactor is disabled.

```toml
seed_mode = true
```

#### `seeds`

To manually identify seed nodes, edit the following setting in `config.toml`.

```toml
# Comma separated list of seed nodes to connect to
seeds = "id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:4444"
```

#### `persistent_peers`

The nodes you specify are the trusted persistent peers that can help anchor your node in the p2p network. If the connection fails, they are dialed and automatically redialed for 24 hours. The automatic redial functionality uses exponential backoff and stops after 24 hours of trying to connect.

If the value of `persistent_peers_max_dial_period` is more than zero, the pause between each call to each persistent peer will not exceed `persistent_peers_max_dial_period` during exponential backoff, and the automatic redial process continues.

```toml
# Comma separated list of nodes to keep persistent connections to.
persistent_peers = "id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:26656"
```

Continue to the [Sync](./sync.md) page to find out more about syncing your node.
