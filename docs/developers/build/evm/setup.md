---
title: EVM environment
slug: evm
---

Did you ever want your own super fast Ethereum blockchain?

With EVM RollApps now you can have your own Ethereum Virtual Machine. Many developers are comfortable with the easy to learn, wildly flexible, and incredibly successful Ethereum Virtual Machine. The incredible work produced by the [EVMOS](https://github.com/evmos/ethermint) team brought the EVM to the Cosmos stack. Now we're taking it one step further into the RollApp ecosystem. What will you re-imagine when you combine the speed and flexibility of RollApps with the ease-of-use and amazing developer community of the Ethereum Virtual Machine.

In the following EVM RollApp tutorial we will demonstrate how to deploy a [Solidity](https://docs.soliditylang.org/) smart contract using [truffle](https://trufflesuite.com/) on top of an EVM RollApp.

The smart contract we will use for this tutorial is a simple contract implementation of a counter functionallity, but this is just a glimpse of the power that combining RollApps with the EVM unlocks. We're looking forward to seeing the ingenuity of EVM developers!

:::info NOTE:
Before we continue please visit our [Setup Work Environment](/docs/developers/start/setup.md) page to make sure you have the proper software installed.
:::

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

## Install Ethermint for your RollApp

```bash
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.2-alpha-ethermint-v0.18.0
cd ethermint
go mod tidy
go mod download
make install
```

# Instantiating the EVM RollApp

In the Ethermint directory, we have a helpful bash script that allows you to instantiate a local EVM RollApp.

Run the following from within the `ethermint` directory:

```bash
bash init.sh
```

This bash script does everything needed to initialize your EVM RollApp. Once you're ready move on [next](/docs/developers/run/overview.md) to running your RollApp!
