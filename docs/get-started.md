---
title: "Get Started"
slug: "get-started"
hidden: false
sidebar_position: 1
hide_table_of_contents: true
---

:::info Welcome to the dYmension documentation

dYmension's documentation serves as the central source for all things dYmension. Learn, build and grow the dYmension ecosystem.

The documentation is broken down into:

- Concepts: Learn about foundational topics related to dYmension
- Developers: Build applications within the dYmension ecosystem
- Node Runners: Run a dYmension node

:::

### What is dYmension?

dYmension is a multi-layered blockchain protocol which provides tooling for building and deploying permission-less application-specific rollups on top of an optimized settlement layer.

Developers receive a highly scalable execution environment and plug themselves into dYmension and the wider [IBC-enabled ecosystem](https://mapofzones.com/). dYmension enables scalability by seperating execution from consensus. Application-specific rollups, referred to as RollApps, is how the dYmension protocol scales in a secure and trust-minimized manner.

Each [RollApp](/docs/concepts/rollapps.md) is built using dYmension's RollApp Development Kit (RDK), which is built on top of the [Cosmos SDK](https://docs.cosmos.network/). The flexability of the dYmension settlement layer allows for RollApps to be run in a multitude array of virtual machines (including EVM, CosmWasm and others).

dYmension implements a shared security model that strengthens as more applications are deployed. Unlike other shared security protocols such as Polkadot, dYmension provides permission-less access to deploy a RollApp.

### What is DYM (Native Asset)?

DYM is required to facilitate the following:

- dYmension embeds an AMM in the settlement layer. To facilitate token swaps DYM is required as a form of gas to the network.
- dYmension facilitates Inter-RollApp message passing (IRC) and Inter-Blockchain Communication (IBC) both of which require the DYM token for network fees.
- dYmension requires Sequencers to submit an update to the state of the RollApp every pre-determined checkpoint. As such this transaction requires a fee to be paid in DYM.
- dYmension introduces decentralized Sequencers for RollApps in which the transaction processing time is based on the relative amount of staked DYM. As such, when there is a greater amount of potential income a greater amount of DYM is staked.

RollApps on dYmension receive their own autonomy. This means RollApps retain their own native protocol network fee and charge network fees (gas) according to their own custom application logic. Instead of charging end-users of RollApps DYM token as a fee, all fees are charged in the RollApp's network token (or any other token according to the application logic). This seperation of concerns allows RollApps to build their own sustainable products, while dYmension benefits from the network effects of a growing RollApp ecosystem.

More information regarding tokenomics, airdrops, grants and more will be released to the community in a timely manner. For the latest information or to speak with a core team member of the dYmension protocol reach out to us on [discord](http://discord.gg/dymension).

### Why dYmension?

The traditional web model is composed of entities paying for segregated pieces of server. For example, when Twitter servers are under heavy use it does not affect Reddit servers. However, in present day blockchains applications fight for space in each block and all gas is priced under one token. This design has shown to cause high gas fees and poor user experiences.

dYmension's RollApps receive a segregated high performant execution environment running the application logic similar to that of the traditional web model. But unlike the traditional web model dYmension allows applications to plug themselves into an inter-connected, decentralized and trust-minimized environment. dYmension is infrastructure that glues traditional and reliable web2-like instances with the ownership and connectivity advantages of the decentralized internet.

By giving developers their own execution environment dYmemsion gives developers autonomy. Autonomous RollApps retain the benefits of building their own blockchain such as having their own native network fee token, fully flexible application logic and trust-minimized inter-operability with other RollApps and IBC-enabled blockchains. Now developers can build highly scalable, low latency applications with their own token as the network fee while not having to gather a highly available and neutral validator set.

Today, you can [build your own RollApp](/docs/tutorials/rollapp/index.md) and [create your own CosmWasm Smart Contract](/docs/tutorials/smart-contract/index.md) to a RollApp! We encourage all members of the community to reach out to us, show the community what they are building and build the future of blockchain!
