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

### Initialize and configure moniker:

We recommend saving the mainnet chain-id into your Dymension client.toml. This will make it so you do not have to manually pass in the chain-id flag for every CLI command.

Initialize the node with a human-readable name:

```bash
dymd init <MONIKER> --chain-id dym-test-1
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

### Start the light client daemon (LCD):

To enable the REST API and Swagger, and to start the LCD, complete the following steps:

1. Open `~/.dymension/config/app.toml`.

2. Locate the `API Configuration` section (`[api]`).

3. Change `enable = false` to `enable = true`.

```
# Enable defines if the API server should be enabled.
enable = true
```

4. Optional: Swagger defines if swagger documentation should automatically be registered. To enable Swagger, change `swagger = false` to `swagger = true`.

```toml
swagger = true
```

5. If the process is currently running, restart the service via `systemctl restart dymd`. Once restarted, the LCD will be available (by default on port `127.0.0.1:1317`).

### Set up `external_address` in `config.toml`

In order to be added to the address book in seed nodes, you need to configure `external_address` in `config.toml`. This addition will prevent continuous reconnections. The default P2P_PORT is `26656`.

```sh
sed -i -e 's/external_address = \"\"/external_address = \"'$(curl httpbin.org/ip | jq -r .origin)':26656\"/g' ~/.dymension/config/config.toml
```
