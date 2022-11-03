---
title: "Validators Overview"
slug: "index"
hidden: false
sidebar_position: 0
hide_table_of_contents: true
---

# Overview

The dymension hub uses the [Tendermint Core](https://github.com/tendermint/tendermint/blob/master/docs/introduction/what-is-tendermint.md) that relies on a set of validators that are responsible for committing and signing new blocks in the blockchain. These validators run full nodes and participate in the consensus protocol by broadcasting votes which contain signatures signed by each validator's private key.

Validators bond their DYM (dymension's native token) and have the tokens "delegated" to them by token holders. Validators and their delegators earn DYM for participating and securing the dymension hub (i.e. the settlement layer). Similar to other Cosmos SDK chains, validators set commission on the rewards their delegators receive.

Besides a validator running a full node, anyone may run the full node of the dymension hub to broadcast transactions and connect directly to the blockchain. In the following tutorial we will demonstrate how to run a full node of the dymension settlement layer. As the dymension protocol grows core devs along with the community will continually re-evaluate the hardware requirements for running and staying in-sync with the dymension settlement layer.

### Supported OS

We officially support macOS, Windows and Linux only in the following architectures:

-   `darwin/arm64`
-   `darwin/x86_64`
-   `linux/arm64`
-   `linux/x86_64`
-   `windows/x86_64`

### Minimum Requirements

To prepare for the upcoming testnet and network upgrades the dymension settlement layer validators and full nodes should be prepared with the following minimum recommended hardware requirements:

-   Dual Core
-   At least 500GB of SSD disk storage
-   At least 8GB of memory (RAM)
-   At least 100mbps network bandwidth

These requirements will continually be revisted and tested by the core team and community.
