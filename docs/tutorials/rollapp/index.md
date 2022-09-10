---
parent:
  title: Build Your Own RollApp
  description: Build your first dYmension RollApp
  number: 0
tag: deep-dive
order: 0
title: Build Your Own RollApp
---

# Build a Checkers RollApp

This tutorial guide will go over building a dYmension RDK app for dymint, dYmension's drop-in replacement of tendermint for RollApps. The next sections are all about creating a decentralized game of checkers using Ignite CLI and the dYmension RDK. Each section progressively advances the project.

### In this tutorial, you will:

- Find instructions on how to setup your work environment.
- Work with the Ignite CLI.
- Learn how to run a node and interact with the RollApp and dYmension blockchain.
- Begin implementing a RollApp for a checkers game.

:::info NOTE:
This tutorial will explore developing with dymint, which is still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our Discord. Furthermore, while dymint allows you to build RollApps on dYmension, it currently does not support fraud proofs yet and is therefore running in "pessimistic" mode, where nodes would need to re-execute the transactions to check the validity of the chain (i.e. a full node). Furthermore, dymint currently only supports a single sequencer.
:::

### Pre-requisites

Given this tutorial is targeted for developers who are experienced in Cosmos-SDK, we recommend you go over the following tutorials in Ignite to understand all the different components in Cosmos-SDK before proceeding with this tutorial:

- [Hello World](https://docs.ignite.com/guide/hello)
- [Blog and Module Basics](https://docs.ignite.com/guide/blog)
- [Nameservice Tutorial](https://docs.ignite.com/guide/nameservice)
- [Scavenger Hunt](https://docs.ignite.com/guide/scavenge)

### Let's begin!
