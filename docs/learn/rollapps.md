---
title: "RollApps"
slug: "rollapps"
---

## What is a RollApp?

RollApp is an application specific rollup. Unlike dApps built on a generic-purpose rollups, apps built as a RollApp have their own autonomy. Developers can use dYmension’s RollApp Development Kit (RDK) to develop a RollApp.<br/>

*Autonomy* is the control you gain from owning your blockchain execution layer with the exception of having to adhere to the underlying base layers protocol rules.
Some of the advantages of having autonomy entails choice of native network fee token and a full control over the blockchain logic.
As the name implies, RollApps are in-fact [rollups](https://vitalik.ca/general/2021/01/05/rollup.html) which are a scaling solution built to increase transaction throughput and reduce the latency and computational costs of blockchains.<br/>

RollApps work by outsourcing the overhead of the consensus to the dYmension Hub, with the help of optimistic fraud proofs.<br/>
A [Sequencer](../reference/glossary#s), which is the RollApp’s operating machine, sequences (orders) transactions, executes them and batches them into RollApp blocks. It then posts the transaction data to a DA layer of choice and submits an updated state root of the RollApp together with a DA reference (where the data is available) to the hub.<br/>

Data and state root publication guarantees that any actor, whether driven by distrust or by economic incentives, may independently verify that genuine computations and honest state transitions were performed by the RollApp Sequencer.<br/>

## RollApps architecture

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit [RDK](../reference/glossary#r). The client component, referred to as [dymint](../reference/glossary#d) is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer communication. As there are no consensus tasks in the RollApp itself, dymint can provide the low latency requirements necessary for modern-day applications.<br/>

![RollApp Architecture](./images/rollapp-overview.svg)

A RollApp transaction lifecycle begins by sending a request to a RollApp Sequencer which processes the transaction. The transaction, assuming valid, is then included in a block after been processed by the relevant RDK module. After a predetermined number of blocks, a batch is created by the sequencer. At this stage the sequencer publishes the batch and the batch metadata (e.g  state roots) to the DA layer and the dymension hub, respectively.<br/>

## Cosmos compatiblity

Similar to Cosmos blockchains, dYmension RollApps are designed to create application-specific blockchains minus the consensus overhead.<br/>
The RDK builds upon the Cosmos-SDK by adding new modules and modifying existing ones for ensuring RollApp compatibility with the dymension protocol while still staying compatible with popular cosmos ecosystem tooling.<br/>
RollApps are capable of interacting with any IBC-enabled chain using the dymension hub and as such will be part of the cosmos ecosystem internet of blockchains.<br/>