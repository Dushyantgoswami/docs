---
title: Initialize RDK RollApp
slug: setup
---

In this tutorial we will demonstrate how to build an example `Hello World` RollApp. The RDK RollApp tutorial is borrowed from Ignite's tutorial [here](https://docs.ignite.com/guide/hello). For a more in-depth tutorial on building Cosmos SDK and Dymension RDK modules please visit the Cosmos Academy's [tutorial](https://tutorials.cosmos.network/hands-on-exercise/1-ignite-cli/3-stored-game.html).

## Step 1: Required installations

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

## Step 2: Scaffold the RDK RollApp

```bash
ignite scaffold chain hello
cd hello
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@v0.1.2-alpha
go mod tidy
go mod download
ignite chain serve
```

Once the server is started you will see ports open up on your local machine. We can stop the process by running `ctrl + c`, this will save the created genesis file.

Please run `ctrl + c` to stop the server. You should get a notification stating the location of the exported genesis file:

```
Genesis state saved in ~/.ignite/local-chains/hello/exported_genesis.json
```

Let's move on to building a Go module with Ignite for our RollApp...
