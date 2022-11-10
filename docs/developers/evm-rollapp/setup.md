---
title: "Setup Your Work Environment"
order: 1
description: All you need for the hands-on sections
slug: setup
---

# Setup Your Work Environment

Assuming you've gone through the initial [getting started](../getting-started/intro.md) setup [here](../getting-started/setup.md), you will only need to install npm and truffle for this tutorial.

:::info In this section, you can find all you need to install:

- [npm](https://www.npmjs.com/)
- [Truffle](https://trufflesuite.com/)

:::

## Install npm

npm is a package manager and the world's largest software registry. To install, head to the [Install npm page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Install Truffle

Truffle is a a development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.<br/>
Assuming you've already installed npm you can simply run `npm install -g truffle` for truffle installation.

Next let's see how to run an EVM RollApp sequencer!

:::danger Note
Please make sure you are using the correct `node` version as `truffle` works with specific versions.<br/>
This tutorial was tested with following versions (which can be checked by running `truffle version`):
```sh
Truffle v5.6.5 (core: 5.6.5)
Ganache v7.5.0
Solidity - 0.8.17 (solc-js)
Node v16.18.1
Web3.js v1.7.4
```
::::
