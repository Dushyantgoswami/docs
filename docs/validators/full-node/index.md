---
title: "Validators Overview"
slug: "index"
hidden: false
sidebar_position: 0
hide_table_of_contents: true
---

# Overview

dYmension's settlement layer uses the [Tendermint Core](https://github.com/tendermint/tendermint/blob/master/docs/introduction/what-is-tendermint.md), which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators run full nodes and participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.

Validator candidates can bond their own DYM (dYmension's native token) and have the tokens "delegated" to them by token holders. Validators and their delegators will earn DYM for participating and securing the dYmension settlement layer. Similar to other Cosmos SDK chains, validators may set commission on the rewards their delegators receive.

Besides running a full node as a validator, anyone may run the full node of dYmension to broadcast transactions and connect directly to the blockchain. In the following tutorial we will demonstrate how to run a full node of the dYmension settlement layer. As the dYmension protocol grows and gets closer to a public testnet and mainnet dYmension core devs along with the community will continually re-evaluate the hardware requirements for running and staying in-sync with the dYmension settlement layer.

### Supported OS

We officially support macOS, Windows and Linux only in the following architectures:

- `darwin/arm64`
- `darwin/x86_64`
- `linux/arm64`
- `linux/x86_64`
- `windows/x86_64`

### Minimum Requirements

To prepare for the upcoming testnet and network upgrades the dYmension settlement layer validators and full nodes should be prepared with the following minimum recommended hardware requirements:

- Quad Core
- At least 500GB of SSD disk storage
- At least 64GB of memory (RAM)
- At least 100mbps network bandwidth

These requirements will continually be revisted and tested by the core team and community.
