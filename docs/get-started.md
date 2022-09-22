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

## What is dYmension?

dYmension is a multi-layer protocol built for servicing high performant blockchains called [RollApps](/docs/learn/rollapps.md) (aka app-specfic-rollups/modular execution environments).

dYmension allows anyone to build and deploy their own blockchain, a RollApp instance on top of dYmension’s settlement layer.

The dYmension settlement layer, also referred to as the dYmension Hub, is the protocol base layer. The dymension hub is a Proof of Stake neutral blockchain which provides conseunes, security and liquidity for RollApps.

RollApps are built with dYmension's RollApp Development Kit (RDK) which is based on the popular [Cosmos SDK](https://docs.cosmos.network/). RollApp Developers are able to choose the token, fee-structure, logic and VM (e.g EVM, WASM) in which their RollApp will operate.

For a deeper dive checkout the [Litepaper](/docs/dymension-litepaper/index.md) and [glossary](/docs/reference/glossary.md) concepts.

## Why dYmension?

### 2-order network effects

dYmension is a permissionless network of RollApps. Deploying a RollApp means easily plugging into 2-order network effects, as RollApps enjoy seamless connectivity not only with each other but also with the entire [IBC-enabled ecosystem](https://mapofzones.com/) via the dYmension hub.

### Easy deployment

With dYmension, building a blockchain doesn't come with the overhead of bootstraping a network.
Developers can easily deploy a blockchain as if they are running their own isolated EC2 instance while still remaining true to the decentralized, permission-less and trust-minimized nature of the blockchain ethos.

### Automony

RollApps are autonomous, meaning RollApps set their own economic and decentralization parameters.

### Value accrual

The benefits of deploying a RollApp over a smart contract is one of the most important features of dYmension’s protocol. When you deploy a smart contract to a blockchain like Ethereum the network fees (gas) are paid in the network’s token (i.e. ETH). This is because users pay gas fees to [network proposers and validators](https://ethereum.org/en/developers/docs/gas/) to have their transaction included in the next block. When you deploy a RollApp, it’s like having your own blockchain, so all end-user fees are paid in the application’s token or whichever token you want to accept (e.g. stablecoins, IBC chains, RollApps…).

### Performance

As RollApps outsource the consensus to the dymension hub, they are capable of delivering substantial throughput and lower latency compared to consensus constrained blockchains.

In the next secions we'll dive deeper on how dymension works. Though we recommend going over it, this is not a requirement for building a RollApp, so for those of you who can't wait - skip ahead and start [building](/docs/developers/checkers-rollapp/index.md)!
