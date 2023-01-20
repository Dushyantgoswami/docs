---
title: Node FAQs
slug: overview
---

The Dymension Hub uses [Tendermint Core](https://github.com/tendermint/tendermint/blob/master/docs/introduction/what-is-tendermint.md) that relies on a set of validators that are responsible for committing and signing new blocks in the blockchain. These validators run full nodes and participate in the consensus protocol by broadcasting votes which contain signatures signed by each validator's private key.

Validators bond DYM (Dymension's native token) and have tokens "delegated" to them by token holders. Validators and their delegators earn DYM for participating and securing the Dymension Hub. Similar to other Cosmos SDK chains, validators set commission on the rewards their delegators receive.

Besides a validator running a full node, anyone may run the full node of the Dymension Hub to broadcast transactions and connect directly to the network. In the following tutorial we will demonstrate how to run a full node of the Dymension Hub. As the Dymension protocol grows core devs along with the community will continually re-evaluate the hardware requirements for running and staying in-sync with the Dymension Hub.

## Supported OS

We officially support the following architectures:

-   `darwin/arm64`
-   `darwin/x86_64`
-   `linux/arm64`
-   `linux/x86_64`

Other architectures may be supported but have not been officially tested.

## Hardware prerequisites

To prepare for the upcoming testnet and network upgrades the Dymension Hub validators and full nodes should be prepared with the following minimum recommended hardware requirements:

-   Dual Core
-   At least 500GB of SSD disk storage
-   At least 8GB of memory (RAM)
-   At least 100mbps network bandwidth

These requirements will continually be revisted and tested by the core team and community.

## Software prerequisites

Installing Go is a pre-requisite for running a Dymension Hub full node. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/doc/install).
