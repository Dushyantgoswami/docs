---
title: RDK Modules
slug: setup
---

In this tutorial we will demonstrate how to deploy a Go module to a RDK RollApp. The RDK RollApp tutorial is built upon Ignite's [tutorial](https://docs.ignite.com/guide/hello). For a more in-depth tutorial on building RDK modules please visit the Cosmos academy's [tutorial](https://tutorials.cosmos.network/hands-on-exercise/1-ignite-cli/3-stored-game.html).

## Step 1: Required installations

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

## Step 2: Scaffold the RDK RollApp

```bash
ignite scaffold chain hello
cd hello
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@v0.1.2-alpha
go mod tidy
go mod download
ignite chain build
```

## Step 3: Starting the RDK environment

In the `Hello` directory, we have a helpful bash script that allows you to instantiate and start your RollApp.

If you followed the [Get Started](/docs/develop/get-started/setup.md) tutorial please run the following script from within the `Hello` directory:

```bash
bash init.sh
```

If you would like to run the RDK RollApp with a mock base layer please run the following script from within the `Hello` directory:

```bash
bash simulation-init.sh
```

Once you're ready move on [next](/docs/develop/build/rdk/deploy.md) to deploying a Go module to your RollApp!
