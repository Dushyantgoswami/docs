---
title: Let's build a RollApp!
slug: setup
---

:::info NOTE:
The following RollApp tutorials will explore developing with the [RDK](https://github.com/dymensionxyz/rdk) and [Dymint](https://github.com/dymensionxyz/dymint), which are still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our [Discord](http://discord.gg/dymension).
:::

# Installation requirements

#### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Go download and install page](https://go.dev/dl/).

#### <b>Ignite (v0.23.0)</b>

Ignite CLI is an easy-to-use CLI tool for creating and maintaining sovereign application-specific blockchains. Blockchains created with Ignite CLI use Cosmos SDK and Tendermint by default. We will utilize Dymension's RDK and Dymint as drop-in replacements for the Cosmos SDK and Tendermint, respectively.

We will be utilizing <b>Ignite v0.23.0</b>:

```bash
rm $(which ignite)
git clone https://github.com/ignite/cli.git
cd cli
git checkout v0.23.0
make install
```
