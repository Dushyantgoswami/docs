---
title: Setup RDK RollApp
slug: setup
---

In this tutorial we will demonstrate how to build an example `Hello World` RollApp. The RDK RollApp tutorial is borrowed from Ignite's tutorial [here](https://docs.ignite.com/guide/hello). For a more in-depth tutorial on building Cosmos SDK and Dymension RDK modules please visit the Cosmos Academy's [tutorial](https://tutorials.cosmos.network/hands-on-exercise/1-ignite-cli/3-stored-game.html).

## Required installations

#### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Setup page and install Go](/docs/develop/get-started/setup.mdx).

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
