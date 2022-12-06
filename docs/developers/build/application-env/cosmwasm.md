---
title: CosmWasm environment
slug: cosmwasm
---

In this tutorial we will demonstrate how to deploy a smart contract in [Rust](https://www.rust-lang.org/) using the CosmWasm virtual machine. CosmWasm is a smart contracts platform built for the Cosmos ecosystem by making use of WebAssembly (Wasm).

With the CosmWasm virtual machine you get the safety and power of Rust based smart contracts in your own blockchain. CosmWasm is a powerful framework with inherit safety features such as prevention of re-entrancy attacks (a common attack surface in the EVM).

We highly recommend reading the fantastic CosmWasm documentation [here](https://docs.cosmwasm.com/docs/1.0/). This will provide a general understanding of some of the core feature of CosmWasm. Coupling the safety and ease-of-use of CosmWasm with the flexibility and speed of a RollApps is a powerful blockchain framework.

The CosmWasm smart contract we will demonstrate in this tutorial is one provided by the CosmWasm team for Nameservice purchasing. You can check out the contract [here](https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice).

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

# Instantiating the CosmWasm RollApp

In the Wasm directory, we have a helpful bash script that allows you to instantiate a local CosmWasm RollApp.

Run the following from within the `wasm` directory:

```bash
bash init.sh
```

This bash script does everything needed to initialize your EVM RollApp. Once you're ready move on [next](/docs/developers/run/overview.md) to running your RollApp!
