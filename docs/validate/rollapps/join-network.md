---
title: Join a network
slug: join-network
---

### Download the genesis file and address book

In the RollApp testnet [here](https://github.com/dymensionxyz/testnets/rollapps/readme.md) repository we've included Genesis files and Address books to sync your full node.

**Genesis file** specifies the account balances and parameters at the start of the network to use when replaying transactions and syncing.

**Addressbook** lists a selection of peers for your node to dial to in order to discover other nodes in the network.

The `genesis` and `addressbook` files should be placed under `~/.<rollapp-name>/config/genesis.json` and `~/.<rollapp-name>/config/addrbook.json` respectively.

Continue to the [Sync](./sync.md) page to find out more about syncing your node.
