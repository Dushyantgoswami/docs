---
title: "How RollApps Work"
slug: "rollapps"
---

An application deployed on dYmension is an autonomous execution environment which is referred to as a RollApp. RollApps possess their own autonomy, which means they retain the benefits of building their own blockchain such as having their own native network fee token, fully flexible application logic and trust-minimized inter-operability with other RollApps and IBC-enabled blockchains.

RollApps evolve from the Cosmos Network. Cosmos is a network of interoperable blockchains, each implemented with different properties suitable for their individual use cases. Cosmos lets developers create blockchains that maintain sovereignty, have fast transaction processing and are interoperable.<sup>1</sup> Cosmos chains utilize the Cosmos SDK, which is an open-source framework for building the application layer of Proof-of-Stake blockchains. Blockchains built with the Cosmos SDK are generally referred to as application-specific blockchains.

Cosmos SDK based blockchains are built out of composable modules. Blockchain developers create customized business logic in new modules and integrate with the provided modules from the Cosmos SDK. The Cosmos SDK includes pre-built modules for actions such as minting new tokens, setting a gas fee, staking tokens and much more. The application-specific blockchains are customized to operate a single application. Instead of building a decentralized application on top of an underlying blockchain like Ethereum, developers build their own blockchain. While the design is to create application-specific blockchain, modules are flexible and may be used to create Virtual Machines that accept [CosmWasm](https://cosmwasm.com/), [EVM](https://docs.evmos.org/) and much more in the future!

# Cosmos Chain Architecture

![Cosmos Architecture](./images/cosmos-architecture-overview-plain.jpeg)

Cosmos blockchains utilize the Tendermint Core for networking and consensus.<sup>2</sup> Tendermint Core is an application-agnostic engine that is responsible for propagating and ordering transaction bytes. Tendermint Core relies on the Byzantine-Fault-Tolerant (BFT) algorithim to reach consensus on the order of transactions. Tendermint passes transactions to the application through an interface called ABCI. Transactions must pass validation checks to be included in the mempool of a full node and relayed to peer nodes. When a block of valid transactions is received by the Tendermint Core, each transaction is passed to the application to be processed. At the beginning and end of each block arbitrary application logic may be executed, creating automatic code execution.

Additionally, Cosmos introduced the inter-blockchain communication (IBC) protocol<sup>3</sup> for trust-minimized bridging between blockchains. IBC connects chains that share similar functionalities, in this case, instant finality provided by the Tendermint consensus algorithm. Two chains passing messages between one another require a light client of the opposing chain. Relayers then pass information between the light clients. The trust relies on the two validator sets of the connected blockchains, rather than the typically significant trust assumptions with multi-sig bridges.

dYmension's blockchain utilizes the Cosmos SDK to build application logic, Tendermint for networking and consensus and IBC for inter-operability. dYmension goes further in building on top of these core technologies and is able to create RollApps. Utilizing the core Cosmos technology enables dYmension to significantly increase scalability and the efficiency of blockchain applications.

In parallel to the modularity of the entire protocol, dYmension RollApps are disaggregated themselves. RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit (`RDK`). The client component, referred to as `dymint` and a drop-in replacement for [Tendermint](https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html), is responsible for block production, peer message propagation and inter-layer communication. As there are no consensus tasks in the RollApp itself, dymint can provide the low latency requirements necessary for modern-day applications.

# dYmension RollApp Architecture

![RollApp Architecture](./images/rollapp-overview.svg)

A RollApp transaction lifecycle begins by sending a request to a RollApp Sequencer which processes the transaction. Akin to the Cosmos SDK process, a transaction is validated within `dymint` after which the data is transmitted to the `RDK` layer via an ABCI-compatible implementation for [Optimistic Rollups](/docs/concepts/modular-blockchain.md). After the transaction is processed by the Sequencer in the appropriate RDK module the data is transmitted back to `dymint`. At this stage the Sequencer batches transactions into a RollApp block and publishes the batch and state roots to the data and settlement layers, respectively. By seperating the RollApp's execution environment from the settlement layer and data layer, applications can significantly increase performance capabilities, while maintaining a trust-minimized and inter-connected application.

References:

1. What is Cosmos? https://tutorials.cosmos.network/
2. What is Tendermint? https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html
3. Inter-blockchain Communication https://ibcprotocol.org/
