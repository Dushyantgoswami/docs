---
title: Upgrades
slug: upgrade
---

Networks are periodically upgraded. These instructions are a guide for full nodes that would like to upgrade to the latest testnet.

### 1. Create Backups

Before upgrading your node to the latest version you will first need to reset your data. However, resetting your data will affect your original `priv_validator.json` and `cargo.toml` files.

Make sure to create a backup of both of these files and then proceed to the next step.

### 2. Reset data

Remove the outdated files and reset the data:

```bash
rm ~/.rollapp/config/genesis.json
rm ~/.rollapp/config/addrbook.json
rollappd unsafe-reset-all
```

Your node is now in a clean state. Be aware that the original `priv_validator.json` and `config.toml` files will be affected by this command. If you had any sentry nodes or full nodes set up before, your node will still try to connect to them, but may fail if they haven't also been upgraded.

Make sure that every node has a unique `priv_validator.json`. Do not copy the `priv_validator.json` from an old node to multiple new nodes. Running two nodes with the same `priv_validator.json` will cause you to double sign.

### 3. Software upgrade

Now it is time to upgrade the software. Go to the GitHub repository that maintains the versions [here](https://github.com/dymensionxyz/testnets) and run (replacing `<version>`):

```bash
git checkout <version> && git pull
make
```

If you have issues at this step, please check that you have a compatible version of Go installed (v1.18+).

Your full node is now cleanly upgraded!
