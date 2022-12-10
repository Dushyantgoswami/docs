---
title: RDK Modules
slug: setup
---

In this tutorial we will demonstrate how to deploy a Go module to a RDK RollApp.

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
git clone https://github.com/dymensionxyz/local-dymension.git && cd local-dymension

export WORKSPACE_PATH=$HOME/workspace

cd checkers/build_chain_script && sh build.sh
```

:::info Note
In case of a failure in running `sh build.sh` please make sure you have `export GO111MODULE=on`
:::

Alternatively you can scaffold the RDK RollApp with these [instructions](https://github.com/dymensionxyz/local-dymension/blob/main/checkers/build_chain.md). The Checkers RollApp is built upon the Cosmos Academy's [Checkers blockchain tutorial](https://tutorials.cosmos.network/hands-on-exercise/1-ignite-cli/3-stored-game.html).

## Step 3: Starting the RDK environment

In the RDK_RollApp directory, we have a helpful bash script that allows you to instantiate and start your RollApp.

If you followed the [Get Started](/docs/develop/get-started/setup.md) tutorial please run the following script from within the `RDK_RollApp` directory:

```bash
bash init.sh
```

If you would like to run the RDK RollApp with a mock base layer please run the following script from within the `RDK_RollApp` directory:

```bash
bash simulation-init.sh
```

Once you're ready move on [next](/docs/develop/build/rdk/deploy.md) to deploying a Go module to your RollApp!
