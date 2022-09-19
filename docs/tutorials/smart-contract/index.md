---
parent:
  title: Create Smart Contracts
  description: Deploy a Smart Contract
  number: 0
tag: deep-dive
order: 0
title: CosmWasm on dYmension's RDK
---

# CosmWasm on dYmension's RDK

dYmension's RDK, similar to the Cosmos SDK, is agnostic to virtual machines built on top of it.
Developers may use CosmWasm, Ethermint or any other supported smart contract platform in the cosmos ecosystem.

In this tutorial we will demonstrate how to deploy a smart contract in [Rust](https://www.rust-lang.org/) using the CosmWasm virtual machine. CosmWasm is a smart contracts platform built for the Cosmos ecosystem by making use of WebAssembly (Wasm).

:::info NOTE:
This tutorial will explore developing with dymint, which is still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our Discord.
:::

You can learn more about CosmWasm [here](https://docs.cosmwasm.com/docs/1.0/).

The smart contract we will use for this tutorial is one provided by the CosmWasm team for Nameservice purchasing.

You can check out the contract [here](https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice).

### Let's begin!
