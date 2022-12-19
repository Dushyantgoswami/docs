---
title: Join a network
slug: join-network
---

It is highly recommended that you set up a private local network before joining a public network. This will help you get familiar with the setup process, and provide an environment for testing. The following sections outline this process.

## Set up a local private network

Validators can set up a private Dymension Hub network to become familiar with running a full Dymension Hub node before joining a public network.

The simplest Dymension Hub network you can set up is a local testnet with just a single node. In a single-node environment, you have one account and are the only validator signing blocks for your private network.

1. Initialize your genesis file that will bootstrap the network. Replace the following variables with your own information:

```bash
dymd init <MONIKER> --chain-id=<TESTNET_NAME>
```

2. Generate a Dymension account. Replace the variable with your account name:

```bash
dymd keys add <KEY_NAME_HERE>
```

3. Run the following commands to add your account and set the initial balance:

```bash
dymd add-genesis-account <ADDRESS_HERE> 100000000udym
dymd gentx <KEY_NAME> 10000000udym --chain-id=<TESTNET_NAME>
dymd collect-gentxs
```

4. Run the following command to start your private network:

```bash
dymd start
```

If the private Dymension Hub network is set up correctly, your Dymd node will be running on `tcp://localhost:26656`, listening for incoming transactions, and signing blocks.
