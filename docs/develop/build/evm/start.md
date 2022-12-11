---
title: EVM
slug: evm
---

In the following EVM RollApp tutorial we will demonstrate how to deploy a [Solidity](https://docs.soliditylang.org/) smart contract using [truffle](https://trufflesuite.com/) on top of an EVM RollApp.

## Step 1: Required installations

#### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Setup page and install Go](/docs/develop/get-started/setup.mdx).

### NPM

NPM is a package manager and the world's largest software registry. To install, head to the [Install npm page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Truffle

Truffle is a a development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.

Assuming you've already installed npm you can simply run `npm install -g truffle` for truffle installation.

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

## Step 2: Install Ethermint for your RollApp

```bash
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.2-alpha-ethermint-v0.18.0
cd ethermint
go mod tidy
go mod download
make install
```

## Step 3: Starting the EVM environment

In the Ethermint directory, we've included a helpful bash script that allows you to instantiate and start a local EVM environment.

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following script from within the `ethermint` directory:

```bash
bash init.sh
```

If you would like to run the EVM RollApp with a mock base layer please run the following script from within the `ethermint` directory:

```bash
bash simulation-init.sh
```

This bash script does everything needed to start your EVM environment. Once you're ready move on [next](/docs/develop/build/evm/create.md) to creating a smart contract for your RollApp!
