---
title: Node FAQs
slug: overview
---

RollApps use the [RDK](https://github.com/dymensionxyz/dymension-rdk) and [Dymint](https://github.com/dymensionxyz/dymint) for networking and as an execution engine. Unlike networks that rely on the Tendermint Core for networking and consensus, RollApp sequencers are designated full node operators that batch blocks together and publish them to the designated data availability and Dymension Hub.

Besides a sequencer running a full node, anyone may run the full node of the Dymension Hub to broadcast transactions and connect directly to the RollApp network. In the following tutorial we will demonstrate how to run a full node of an active RollApp network. Each RollApp network is its own individual blockchain and hardware requirments may change from network to network.

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
-   At least 16GB of memory (RAM)
-   At least 100mbps network bandwidth

These requirements will continually be revisted and tested by the core team and community.

## Software prerequisites

Installing Go is a pre-requisite for running a Dymension Hub full node. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/doc/install).
