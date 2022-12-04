---
parent:
    title: Build Your Own RollApp
    description: Build your Dymension RollApp
    number: 1
tag: deep-dive
order: 1
title: Build Your Own RollApp
---

RollApps are blockchains. RollApps have the flexability of building your own Cosmos app-chain, but without the techincal and economic overhead of bootstrapping a distributed validator network (i.e. security). At Dymension, we strive to make the developer's user experience second to none.

In a production environment, developers are able to modify Go modules for their business logic needs. However, to make the developers life a bit easier, we provide instructions on how to implement a virtual machine (e.g. CosmWasm and EVM) within your own RollApp. With a virtual machine, developers are able to deploy smart contracts with all of the benefits of deploying you own blockchain.

The RollApp Development Kit (RDK) is currently in the developmental stage. While developers will be able to add their own custom modules to their RollApp, currently we would like to demonstrate how to turn a smart contract into a blockchain! So we put the power into your hands, do you want a CosmWasm RollApp or an EVM RollApp?

:::info NOTE:
This tutorial will explore developing with Dymint, which is still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our Discord.
:::

# Let's begin!
