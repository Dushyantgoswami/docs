---
title: "Getting Started"
slug: "getting-started"
hidden: false
sidebar_position: 1
hide_table_of_contents: true
---

:::info Welcome to the dYmension documentation

dYmension's documentation serves as the central source for all things dYmension. Learn, build and grow the dYmension ecosystem.

The documentation is broken down into:

- Concepts: Learn about foundational blockchain topics related to dYmension
- Developer Tutorials: Build applications within the dYmension ecosystem
- Node Runners: Run a dYmension node

:::

### What is dYmension?

dYmension is a multi-layered blockchain protocol which provides tooling for building and deploying permission-less application-specific rollups on top of an optimized settlement layer.

Developers receive a highly scalable execution environment and plug themselves into the dYmension and wider [IBC-enabled ecosystem](https://mapofzones.com/). dYmension enables scalability by seperating execution from settlement. Application-specific rollups, referred to as RollApps, is how the dYmension protocol scales in a secure, trust-minimized way.

Each [RollApp](/docs/concepts/rollapps.md) is built using the dYmension RollApp Development Kit (RDK), which is an abstraction of the Cosmos SDK. The flexability of the dYmension settlement layer allows RollApps to be run in a multitude array of virtual machines (evenutally including EVM and others).

dYmension implements a shared security model that strengthens as more applications are deployed. Unlike other shared security protocols such as Polkadot, dYmension provides permission-less access to deploy a RollApp.

### What is the DYM token?

DYM token is required to facilitate the following:

- AMM RollApp token swaps
- IRC and IBC transactions
- State root updates
- Growing staking requirements for RollApp Sequencers

Unlike smart contracts applications in general purpose blockchains, RollApps on dYmension receive their own autonomy. This allows RollApps to have their own native protocol network fee and charge network fees (gas) according to their own custom application logic. Instead of charging end-users of RollApps DYM token as a fee, all fees are charged in the RollApp instance network token (or any other token according to the application logic). This seperation of concerns allows RollApps to build their own sustainable products, while dYmension benefits from the network effects of a growing RollApp ecosystem.

More information regarding tokenomics, airdrops, grants and more will be released to the community in a timely manner. For the latest information or to speak with a core team member of the dYmension protocol reach out to us on [discord](http://discord.gg/mvnh3YVa2W).

### Why dYmension?

The traditional web model is composed of entities paying for segregated pieces of server. For example, when Twitter servers are under heavy use it does not affect Reddit servers. However, in present day blockchains all resources (gas) are priced under one token and all applications fight for space in each block which causes high gas fees and poor user experiences.

dYmension applications (RollApps) receive a segregated high performant execution environment running the application logic. dYmension’s protocol scales with the segregation of resource consumption similar to traditional web infrastructure. However, it also allows applications to plug themselves into an inter-connected, decentralized and trust-minimized environment. dYmension is infrastructure that glues traditional and reliable web2-like instances with the ownership and connectivity advantages of the decentralized internet.

By giving developers their own execution environment dYmemsion gives developers autonomy. Autonomous RollApps retain the benefits of building their own blockchain such as having their own native network fee token, fully flexible application logic and trust-minimized inter-operability with other RollApps and IBC-enabled blockchains. Now developers can build highly scalable, low latency applications while benefiting from their own token as the network fee.

### How does dYmension work?

Build in dYmension's ecosystem is an exciting process that allows developers push the boundaries of what is possible in blockchain. By abstracting the powerful Cosmos SDK into a rollup environment, RollApps are able to have ultra low latency, high throughput and their own autonomy.

Users deploy a RollApp and attach a Sequencer by staking DYM tokens and update state by posting data to their chosen data availability solution (which dYmension provides an easy interface for) and the state to the dYmension settlement hub.

The core team is building the dYmension infrastructure and is expanding the capabilities of the protocol. This documentation will continually be updated for the latest releases in dYmension tech.

To build a RollApp in dYmension's ecosystem follow this [tutorial](/tutorials/deploy-rollapp). After which you may deploy a smart contract in this [tutorial](/tutorials/deploy-sc).

We encourage all members of the community to reach out to us, show the community what they are building and build the future of blockchain!
