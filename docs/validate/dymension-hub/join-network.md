---
title: Join a network
slug: join-network
---

It is highly recommended that you set up a private local network before joining a public network. This will help you get familiar with the setup process, and provide an environment for testing. The following sections outline this process.

## Set up a local private network

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
