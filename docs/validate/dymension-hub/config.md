---
title: Node configuration
slug: config
---

The following information describes important node configuration settings within the `~/.dymension/config/` directory. It is recommended that you update these settings with your own information.

```bash
~/.dymension/config
│-- addrbook.json                       # Registry of peers to connect to
│-- app.toml                            # dymd configuration file
│-- client.toml                         # Configurations for the cli wallet
│-- config.toml                         # Tendermint configuration file
│-- genesis.json                        # Gensesis transactions
│-- node_key.json                       # Private key used for node authentication in the p2p protocol
└-- priv_validator_key.json             # Key used by the validator to sign blocks
```

### Initialize and configure moniker

We recommend saving the testnet chain-id into your Dymension client.toml. This will make it so you do not have to manually pass in the chain-id flag for every CLI command.

Initialize the node with a human-readable name:

```bash
dymd init <MONIKER> --chain-id 35-C
```

Monikers can only contain ASCII characters. Using Unicode characters will render your node unreachable by other peers in the network.

You can update your node's moniker by editing the `moniker` field in `~/.dymension/config/config.toml`.

### Update bond denom:

1. Open `~/.dymension/config/genesis.json`

2. Find and replace all instances of `stake` with `udym`

3. Save and close the `Genesis.json`

### Update minimum gas prices:

1. Open `~/.dymension/config/app.toml`

2. Modify `minimum-gas-prices` and set the minimum price of gas a validator will accept to validate a transaction and to prevent spam.

The recommended setting is:
`minimum-gas-prices = "0.15udym"`

**Example**:

```toml
# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 0.25token1;0.0001token2).

minimum-gas-prices = "0.15udym"

```

### Set up `external_address`

In order to be added to the address book in seed nodes, you need to configure `external_address` in `config.toml`. This addition will prevent continuous reconnections. The default P2P_PORT is `26656`.

```sh
sed -i -e 's/external_address = \"\"/external_address = \"'$(curl httpbin.org/ip | jq -r .origin)':26656\"/g' ~/.dymension/config/config.toml
```

### Set up `seed_mode`

In seed mode, your node constantly crawls the network and looks for peers. If another node requests addresses, it responds and disconnects. Seed mode will not work if the peer-exchange reactor is disabled. If you would like to run your full node in seed mode change the following config for your client.

```toml
seed_mode = true
```

### Add `seeds`

To manually identify seed nodes, edit the following setting in `config.toml`. Listed below is the Dymension Core Team seed node for Dymension's 35-C testnet. For community provided seed nodes please visit the GitHub repository of the [testnet](https://github.com/dymensionxyz/testnets/tree/main/dymension-hub/35-C).

```toml
# Comma separated list of seed nodes to connect to
seeds = "c6cdcc7f8e1a33f864956a8201c304741411f219@3.214.163.125:26656"
```

### Add `persistent_peers`

The nodes you specify are the trusted persistent peers that can help anchor your node in the p2p network. If the connection fails, they are dialed and automatically redialed for 24 hours. The automatic redial functionality uses exponential backoff and stops after 24 hours of trying to connect.

If the value of `persistent_peers_max_dial_period` is more than zero, the pause between each call to each persistent peer will not exceed `persistent_peers_max_dial_period` during exponential backoff, and the automatic redial process continues. The following is an example, for relevant peers see the [testnet](https://github.com/dymensionxyz/testnets/blob/main/dymension-hub/35-C) GitHub repository.

```toml
# Comma separated list of nodes to keep persistent connections to.
persistent_peers = "id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:26656"
```
