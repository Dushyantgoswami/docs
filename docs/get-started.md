---
title: "Getting Started"
slug: "get-started"
hidden: false
sidebar_position: 1
hide_table_of_contents: true
---

:::info Welcome to the dYmension documentation

dYmension's documentation serves as the central source for all things dYmension. Learn, build and grow the dYmension ecosystem.

The documentation is structured as follows:

- [Learn](/docs/learn/modular-intro.md): Learn about foundational topics related to dYmension
- [Developers](/docs/developers/getting-started/intro.md): Build RollApps within the dYmension ecosystem
- [Validators](/docs/validators/full-node/index.md): Run a dYmension hub node
:::

## What Is dYmension?

dYmension is a multi-layer protocol built for servicing high performant blockchains called [RollApps](/docs/learn/rollapps.md) (aka app-specfic-rollups/modular execution environments).

dYmension allows anyone to build and deploy their own blockchain, a RollApp instance on top of dYmension’s settlement layer.

The dYmension settlement layer, also referred to as the dYmension Hub, is the protocol base layer. The dYmension Hub is a Proof of Stake neutral blockchain which provides conseunes, security and liquidity for RollApps.

RollApps are built with dYmension's RollApp Development Kit (RDK) which is based on the popular [Cosmos SDK](https://docs.cosmos.network/). RollApp Developers are able to choose the token, fee-structure, logic and VM (e.g EVM, WASM) in which their RollApp will operate.

For a deeper dive checkout the [Litepaper](/docs/dymension-litepaper/index.md) and [glossary](/docs/reference/glossary.md) concepts.

## Why dYmension?

### 2-Order Network Effects

dYmension is a permissionless network of RollApps. Deploying a RollApp means easily plugging into 2-order network effects, as RollApps enjoy seamless connectivity not only with each other but also with the entire [IBC-enabled ecosystem](https://mapofzones.com/) via the dYmension Hub.

### Easy Deployment

With dYmension, building a blockchain doesn't come with the overhead of bootstraping a network, such as assembleing a validatodr set. Developers can easily deploy a blockchain as if they are running their own isolated EC2 instance while still remaining true to the decentralized, permission-less and trust-minimized nature of the blockchain ethos.

### Autonomy

RollApps are autonomous, meaning RollApps set their own economic and decentralization parameters.

### Value Accrual

Contrary to dApps on general purpose blockchains such as Ethereum, which require users to pay gas fees in the network’s token (i.e. ETH), RollApp end-user pay transaction fees with the application’s native token or whichever other token chosen by the RollApp (e.g. stablecoins, other IBC-enabled-tokens or completely new logic for fee collection).

### Performance

As RollApps outsource the consensus to the dYmension Hub, they are capable of delivering substantial throughput and lower latency compared to consensus constrained blockchains.

In the next sections we'll dive deeper into how dYmension works. Though we recommend going over it, this is not a requirement for building a RollApp, so for those of you who can't wait - skip ahead and start [building](/docs/developers/getting-started/intro.md)!
