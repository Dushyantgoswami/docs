---
title: "RollApps Overview"
slug: "rollapps"
---

An application deployed on dYmension is an autonomous execution environment which is referred to as a RollApp. RollApps possess their own autonomy, which means they retain the benefits of building their own blockchain such as having their own native network fee token, fully flexible application logic and trust-minimized inter-operability with other RollApps and IBC-enabled blockchains.

In parallel to the modularity of the entire protocol, dYmension RollApps are disaggregated themselves. RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit (`RDK`). The client component, referred to as `dymint` and corresponds to Cosmos’s Tendermint, is responsible for block production, peer message propagation and inter-layer communication. As there are no consensus tasks in the process, dymint can provide the low latency requirements necessary for modern-day applications.

![RollApp Architecture](/img/rollapp-overview.svg)

A RollApp transaction lifecycle begins by sending a request to a RollApp Sequencer which processes the transaction, batches it into a RollApp block and publishes the batch and state roots to the data and settlement layers, respectively. For the end-user the only application and nodes they interact with is that of the RollApp itself.

By seperating the RollApp's execution environment from the settlement layer and data layer, applications can significantly increase performance capabilities, while maintaining a trust-minimized and inter-connected application. Additionally, dYmension's RDK is provided in mature language frameworks such as Go and Rust, with the ability to use EVM which is generally written in Solidity and alike languages.
