---
title: Setup your Work Environment
slug: setup
---

The following tutorial will guide developers on how to deploy a `Counter RollApp` with the developers choice of application environment. Currently available is developing with Go modules via the [RDK](/docs/developers/build/application-env/rdk.md) or using a virtual machine such as the [CosmWasm VM](/docs/developers/build/application-env/cosmwasm.md) and the [EVM](/docs/developers/build/application-env/evm.md).

:::info NOTE:
Installing the appropriate version of Go and Ignite CLI are required for all RollApp tutorials.
The tutorials will explore developing with the [RDK](https://github.com/dymensionxyz/rdk) and [Dymint](https://github.com/dymensionxyz/dymint), which are still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our [Discord](http://discord.gg/dymension).
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
