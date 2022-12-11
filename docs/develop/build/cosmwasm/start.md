---
title: CosmWasm
slug: setup
---

In this tutorial we will demonstrate how to deploy a smart contract using the CosmWasm virtual machine. CosmWasm [documentation](https://docs.cosmwasm.com/docs/1.0/) is a more in-depth source of information for working with the framework.

## Step 1: Required installations

#### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Setup page and install Go](/docs/develop/get-started/setup.mdx).

### Rust

To work with Rust, you need to install it first. You can find a well-documented install step-by-step in the [Install page from Rust](https://www.rust-lang.org/tools/install).

### Rustup

For Mac/Linux users:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
rustup default stable && rustup target list --installed && rustup target add wasm32-unknown-unknown
```

### Docker

Containerization technology that enables the creation and use of Linux® containers. To install, head to the [Install Docker Engine page](https://docs.docker.com/engine/install/).

## Step 2: Install the CosmWasm VM

```bash
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.3-alpha
cd wasm
go mod tidy
go mod download
make install
```

## Step 3: Starting the CosmWasm environment

In the Wasm directory, we have a helpful bash script that allows you to instantiate and start your RollApp.

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following script from within the `wasm` directory:

```bash
bash init.sh
```

If you would like to run the CosmWasm RollApp with a mock base layer please run the following script from within the `wasm` directory:

```bash
bash simulation-init.sh
```

Once you're ready move on [next](/docs/develop/build/cosmwasm/deploy.md) to deploying a smart contract to your RollApp!
