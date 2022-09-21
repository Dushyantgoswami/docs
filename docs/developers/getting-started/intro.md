---
parent:
  title: Build Your Own RollApp
  description: Build your first dYmension RollApp
  number: 0
tag: deep-dive
order: 0
title: Build Your Own RollApp
---

# Build a RollApp

In the following tutorials will go over building various flavors of a dYmension RollApp using the RollApp Development Kit (RDK) and dymint, dYmension's drop-in replacement for tendermint.<br/> 

dYmension's RDK, similar to the Cosmos SDK, is agnostic to virtual machines built on top of it. Developers may use CosmWasm, Ethermint or any other supported smart contract platform in the cosmos ecosystem.<br/>

The developers section contains tutorials which demonstrate both the ability to build the RollApp logic using the RDK or incorporating external modules for running various VMs on top of it.

The next sections of this tutorial will describe how to prepare your work environment and run a dymension hub node which will use us for the next [Checkers RollApp](../checkers-rollapp/scaffold-rollapp) tutorial.

:::info NOTE:
The RollApp needs a settlement layer (dymension hub) for security.
Local development may use a local running dymenion hub node or alternatively a mock layer.
In the [Checkers RollApp](../checkers-rollapp/index) tutorial we will use a hub node but for the rest of the tutorials ([Wasm RollApp](../cosmwasm-rollapp/index) and [EVM RollApp](../evm-rollapp/intro))
we will use a mock.
:::

:::info NOTE:
The tutorials will explore developing with the RDK and dymint, which are still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our [Discord](http://discord.gg/dymension).
:::

### Prerequisites

Given the following tutorials are targeted for developers who are experienced with the Cosmos-SDK, we recommend going over the following Ignite developers docs to better understand the different components and the basics of how to build with Ignite and the RDK:

- [Hello World](https://docs.ignite.com/guide/hello)
- [Blog and Module Basics](https://docs.ignite.com/guide/blog)
- [Nameservice Tutorial](https://docs.ignite.com/guide/nameservice)
- [Scavenger Hunt](https://docs.ignite.com/guide/scavenge)

### Let's begin!
