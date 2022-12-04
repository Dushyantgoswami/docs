---
title: "Set Up Your Work Environment"
order: 2
description: All you need for the hands-on sections
slug: setup
---

On this page, you can find helpful links for setting up your work environment.

:::info Note
Installing the appropriate version of Go and Ignite CLI are required for all RollApp tutorials. Please install the following:
:::

### Go (1.18)

You need Go to develop with the Dymension RDK. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/dl/).

### Ignite (v0.23.0)

Ignite CLI is an easy-to-use CLI tool for creating and maintaining sovereign application-specific blockchains. Blockchains created with Ignite CLI use Cosmos SDK and Tendermint by default. We will utilize Dymension's RDK and Dymint as drop-in replacements for the Cosmos SDK and Tendermint, respectively.

We will be utilizing <b>Ignite v0.23.0</b>:

```bash
rm $(which ignite)
git clone https://github.com/ignite/cli.git
cd cli
git checkout v0.23.0
make install
```

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

## EVM installations

:::info Note
For developers who are looking to build a RollApp with a Ethereum Virtual Machine, the following installations are required to follow the tutorial:
:::

### NPM

NPM is a package manager and the world's largest software registry. To install, head to the [Install npm page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Truffle

Truffle is a a development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.<br/>
Assuming you've already installed npm you can simply run `npm install -g truffle` for truffle installation.

Next let's see how to run an EVM RollApp sequencer!

:::info Note
Please make sure you are using the correct `node` version as `truffle` works with specific versions.<br/>
This tutorial was tested with following versions (which can be checked by running `truffle version`):

```bash
Truffle v5.6.5 (core: 5.6.5)
Ganache v7.5.0
Solidity - 0.8.17 (solc-js)
Node v16.18.1
Web3.js v1.7.4
```

::::
