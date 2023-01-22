---
title: "Reset and troubleshooting"
slug: "reset-node"
---

Occasionally you may need to perform a comlpete reset of your node due to data corruption or misconfiguration. Resetting will remove all data in ~/.rollapp/data and the addressbook in ~/.rollapp/config/addrbook.json and reset the node to genesis state.

Perform a complete reset of your dymd:

```sh
  rollappd tendermint unsafe-reset-all
```

Running this command successfully will produce the following log:

```
[ INF ] Removed existing address book file=/home/user/.rollapp/config/addrbook.json
[ INF ] Removed all blockchain history dir=/home/user/.rollapp/data
[ INF ] Reset private validator file to genesis state keyFile=/home/user/.rollapp/config/priv_validator_key.json stateFile=/home/user/.rollapp/data/priv_validator_state.json
```

### Change Genesis

To change the genesis version, delete `~/.rollapp/config/genesis.json`.

You can recreate a genesis version via the following steps:

```bash
 rollappd add-genesis-account <ADDRESS_HERE> 100000000urollapp
 rollappd gentx <KEY_NAME_HERE> 10000000urollapp --chain-id=<chain-id>
 dymd collect-gentxs
```

### Reset personal data

You may be unable to use your node and its associated accounts after changing your personal data. Do not perform this action unless your node is disposable.

To change your personal data to a pristine state, delete both `~/.rollapp/config/priv_validator_state.json` and `~/.rollapp/config/node_key.json`.

### Node health

A healthy node will have the following files in place and populated:

-   Addressbook `~/.rollapp/config/addrbook.json`
-   Genesis file `~/.rollapp/config/genesis.json`
-   Validator state `~/.rollapp/config/priv_validator_state.json`
-   Node key `~/.rollapp/config/node_key.json`
