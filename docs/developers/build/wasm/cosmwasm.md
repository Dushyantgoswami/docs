---
title: CosmWasm environment
slug: cosmwasm
---

In this tutorial we will demonstrate how to deploy a smart contract in [Rust](https://www.rust-lang.org/) using the CosmWasm virtual machine. Coupling the safety and ease-of-use of CosmWasm with the flexibility and speed of RollApps is a powerful developmental framework.

Reviewing the CosmWasm documentation [here](https://docs.cosmwasm.com/docs/1.0/) will provide an in-depth overview of CosmWasm.

## CosmWasm installations

:::info Note
For developers who are looking to build a RollApp with a CosmWasm Virtual Machine, the following installations are required to follow the tutorial:
:::

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

# Install the CosmWasm VM

```bash
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.3-alpha
cd wasm
go mod tidy
go mod download
make install
```

# Instantiate the Genesis Event

In the Wasm directory, we have a helpful bash script that allows you to instantiate the Genesis parameters for your RollApp.

Run the following from within the `wasm` directory:

```bash
bash init.sh
```

This bash script does everything needed to instantiate the Genesis parameters for your RollApp. Once you're ready, move on to [running your RollApp!](/docs/developers/run/data-layer/mock.md)
