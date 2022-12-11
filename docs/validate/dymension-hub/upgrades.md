---
title: Upgrades
slug: upgrades
---

## Upgrade the testnet

Networks are periodically upgraded. These instructions are a guide for full nodes that would like to upgrade to the latest testnet.

### 1. Create Backups

Before you may upgrade your node to the latest version of testnet, you will first need to reset your data. However, resetting your data will affect your original `priv_validator.json` and `cargo.toml` files.

Make sure to create a backup of both of these files and then proceed to the next step.

### 2. Reset data

Remove the outdated files and reset the data:

```bash
rm ~/.dymension/config/genesis.json
rm ~/.dymension/config/addrbook.json
dymd unsafe-reset-all
```

Your node is now in a pristine state. Be aware that the original `priv_validator.json` and `config.toml` files will be affected by this command. If you had any sentry nodes or full nodes set up before, your node will still try to connect to them, but may fail if they haven't also been upgraded.

Make sure that every node has a unique `priv_validator.json`. Do not copy the `priv_validator.json` from an old node to multiple new nodes. Running two nodes with the same `priv_validator.json` will cause you to double sign.

### 3. Software upgrade

Now it is time to upgrade the software. Go to the project directory and run:

```bash
git checkout master && git pull
make
```

If you have issues at this step, please check that you have a compatible version of GO installed (v1.18+).

Your full node is now cleanly upgraded!

## Exporting state

Dymension can export the entire application state to a JSON file. You can use this file for manual analysis or as the genesis file of a new network.

Export state:

```bash
dymd export > [filename].json
```

You can also export a state from a particular height. The following command will export the state after the block height you specify:

```bash
dymd export --height [height] > [filename].json
```

If you plan to start a new network from the exported state, export with the `--for-zero-height` flag:

```bash
dymd export --height [height] --for-zero-height > [filename].json
```

For more information on seeds and peers, visit the [Tendermint documentation](https://github.com/tendermint/tendermint/blob/master/docs/tendermint-core/using-tendermint.mdx#peers).

## Optimizing Memory Management

Some users of the Dymension Hub node software may experience abnormal memory usage. This behaviour is endemic in the Cosmos SDK.

You can install `jemalloc` to assist in managing this issue.

Jemalloc provides better memory management than linux out of the box. You can learn more at

[https://jemalloc.net/](https://jemalloc.net/) .

To install jemalloc, run the following command:

```
sudo apt-get install -y libjemalloc-dev
```

After installation, edit your `dymd.service` to match the following configuration.

```

sudo vim /etc/systemd/system/dymd.service

```

```

[Unit]

Description=Dymd

[Service]

Type=simple

User=ubuntu

ExecStart=/home/ubuntu/go/bin/dymd start --home /home/ubuntu/.dymension --log_level error

WorkingDirectory=/home/ubuntu/.dymension

Restart=always

RestartSec=1s

SyslogIdentifier=dymd

LimitNOFILE=65535

Environment=LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libjemalloc.so

[Install]

WantedBy=multi-user.target

```

## Additional Settings

### `seed_mode`

In seed mode, your node constantly crawls the network and looks for peers. If another node requests addresses, it responds and disconnects. Seed mode will not work if the peer-exchange reactor is disabled.

```toml
seed_mode = true
```

### `seeds`

To manually identify seed nodes, edit the following setting in `config.toml`.

```toml
# Comma separated list of seed nodes to connect to
seeds = "id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:4444"
```

### `persistent_peers`

The nodes you specify are the trusted persistent peers that can help anchor your node in the p2p network. If the connection fails, they are dialed and automatically redialed for 24 hours. The automatic redial functionality uses exponential backoff and stops after 24 hours of trying to connect.

If the value of `persistent_peers_max_dial_period` is more than zero, the pause between each call to each persistent peer will not exceed `persistent_peers_max_dial_period` during exponential backoff, and the automatic redial process continues.

```toml
# Comma separated list of nodes to keep persistent connections to.
persistent_peers = "id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:26656"
```
