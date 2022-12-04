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
This tutorial will explore developing with dymint, which is still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our Discord.
:::

# CosmWasm RollApp

In this tutorial we will demonstrate how to deploy a smart contract in [Rust](https://www.rust-lang.org/) using the CosmWasm virtual machine. CosmWasm is a smart contracts platform built for the Cosmos ecosystem by making use of WebAssembly (Wasm).

With the CosmWasm virtual machine you get the safety and power of Rust based smart contracts in your own blockchain. CosmWasm is a powerful framework with inherit safety features such as prevention of re-entrancy attacks (a common attack surface in the EVM).

We highly recommend reading the fantastic CosmWasm documentation [here](https://docs.cosmwasm.com/docs/1.0/). This will provide a general understanding of some of the core feature of CosmWasm. Coupling the safety and ease-of-use of CosmWasm with the flexibility and speed of a RollApps is a powerful blockchain framework.

The CosmWasm smart contract we will demonstrate in this tutorial is one provided by the CosmWasm team for Nameservice purchasing. You can check out the contract [here](https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice).

# EVM RollApp

Did you ever want your own super fast Ethereum blockchain?

With EVM RollApps now you can have your own Ethereum Virtual Machine. Many developers are comfortable with the easy to learn, wildly flexible, and incredibly successful Ethereum Virtual Machine. The incredible work produced by the [EVMOS](https://github.com/evmos/ethermint) team brought the EVM to the Cosmos stack. Now we're taking it one step further into the RollApp ecosystem. What will you re-imagine when you combine the speed and flexibility of RollApps with the ease-of-use and amazing developer community of the Ethereum Virtual Machine.

In the following EVM RollApp tutorial we will demonstrate how to deploy a [Solidity](https://docs.soliditylang.org/) smart contract using [truffle](https://trufflesuite.com/) on top of an EVM RollApp.

The smart contract we will use for this tutorial is a simple contract implementation of a counter functionallity, but this is just a glimpse of the power that combining RollApps with the EVM unlocks. We're looking forward to seeing the ingenuity of EVM developers!

### Let's begin!
