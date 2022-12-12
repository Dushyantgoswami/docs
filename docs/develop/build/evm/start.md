---
title: EVM
slug: evm
---

In the following EVM RollApp tutorial we will demonstrate how to deploy a [Solidity](https://docs.soliditylang.org/) smart contract using [truffle](https://trufflesuite.com/) on top of an EVM RollApp.

## Required installations

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
Truffle v5.6.9 (core: 5.6.9)
Ganache v7.5.0
Solidity v0.5.16 (solc-js)
Node v18.7.0
Web3.js v1.7.4
```

::::
