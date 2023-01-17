---
title: CosmWasm
slug: setup
---

In this tutorial we will demonstrate how to build a RollApp which supports the CosmWasm Virtual Machine and deploy a smart contract to it. CosmWasm's [book](https://book.cosmwasm.com/index.html) is a more in-depth source of information for working with CosmWasm.

## Step 1: Required installations

### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Setup page and install Go](/docs/develop/get-started/setup.mdx).

### Docker

To be able to upload Rust Wasm Contracts into the blockchain you will need to install [Docker](https://docs.docker.com/engine/install/). To minimize your contract size you will be required to run a CosmWasm Rust Optimizer. Without the smart contract optimizer complex contracts might exceed a size limit.

### Rust

To work with Rust, you need to install it first. You can find a well-documented install step-by-step in the [Install page from Rust](https://www.rust-lang.org/tools/install).

### Rustup

For Mac/Linux users:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
rustup default stable && rustup target list --installed && rustup target add wasm32-unknown-unknown
```
