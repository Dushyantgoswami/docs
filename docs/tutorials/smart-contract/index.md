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

dYmension's RDK, similar to the Cosmos SDK, is agnostic to the virtual machine built on top of the RollApp. This flexibility allows RollApp builders to continually develop and push the boundaries of execution environment technologies. In dYmension developers may use CosmWasm modules, Ethermint modules, and others built in the future to run smart contracts on top of RollApps. So if you are a developer that uses Move, Solidity or whichever smart contract language you prefer you may do so.

In this tutorial we will demonstrate how to deploy a smart contract in [Rust](https://www.rust-lang.org/) using the CosmWasm virtual machine. CosmWasm is a smart contracting platform built for the Cosmos ecosystem by making use of WebAssembly (Wasm) to build smart contracts for Cosmos-SDK.

:::info NOTE:
This tutorial will explore developing with dymint, which is still in Alpha stage. If you run into bugs, please write a Github Issue ticket or let us know in our Discord. Furthermore, while dymint allows you to build RollApps on dYmension, it currently does not support fraud proofs yet and is therefore running in "pessimistic" mode, where nodes would need to re-execute the transactions to check the validity of the chain (i.e. a full node). Furthermore, dymint currently only supports a single sequencer.
:::

You can learn more about CosmWasm [here](https://docs.cosmwasm.com/docs/1.0/).

The smart contract we will use for this tutorial is one provided by the CosmWasm team for Nameservice purchasing.

You can check out the contract [here](https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice).

### Let's begin!
