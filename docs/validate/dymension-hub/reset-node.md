---
title: "Reset and troubleshooting"
slug: "reset-node"
---

Occasionally you may need to perform a comlpete reset of your node due to data corruption or misconfiguration. Resetting will remove all data in ~/.dymension/data and the addressbook in ~/.dymension/config/addrbook.json and reset the node to genesis state.

Perform a complete reset of your dymd:

```sh
  dymd tendermint unsafe-reset-all
```

Running this command successfully will produce the following log:

```
[ INF ] Removed existing address book file=/home/user/.dymension/config/addrbook.json
[ INF ] Removed all blockchain history dir=/home/user/.dymension/data
[ INF ] Reset private validator file to genesis state keyFile=/home/user/.dymension/config/priv_validator_key.json stateFile=/home/user/.dymension/data/priv_validator_state.json
```

### Change Genesis

To change the genesis version, delete `~/.dymension/config/genesis.json`.

You can recreate a genesis version via the following steps:

```bash
 dymd add-genesis-account <ADDRESS_HERE> 100000000udym
 dymd gentx <KEY_NAME_HERE> 10000000udym --chain-id=dym-test-1
 dymd collect-gentxs
```

### Reset personal data

You may be unable to use your node and its associated accounts after changing your personal data. Do not perform this action unless your node is disposable.

To change your personal data to a pristine state, delete both `~/.dymension/config/priv_validator_state.json` and `~/.dymension/config/node_key.json`.

### Node health

A healthy node will have the following files in place and populated:

-   Addressbook `~/.dymension/config/addrbook.json`
-   Genesis file `~/.dymension/config/genesis.json`
-   Validator state `~/.dymension/config/priv_validator_state.json`
-   Node key `~/.dymension/config/node_key.json`
