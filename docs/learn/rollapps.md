---
title: "RollApps"
slug: "rollapps"
hide_table_of_contents: true
---

## What is a RollApp?

A RollApp is an application-specific rollup. Unlike dApps built on generic-purpose rollups, apps built as a RollApp are their own application-specific blockchain less the consensus and validator nodes. RollApps have their own autonomy. <br/>

_Autonomy_ is the control you gain from owning your own blockchain execution layer with the exception of having to adhere to the underlying base layers protocol rules. Here the underlying base layers is primarily the [dymension hub.](/docs/learn/dymension-hub.md) Some of the advantages of having autonomy entails choice of native network fee token and a full control over the blockchain logic. As the name implies, RollApps are in-fact [rollups](https://vitalik.ca/general/2021/01/05/rollup.html) which are a scaling solution built to increase transaction throughput and reduce the latency and computational costs of blockchains.<br/>

RollApps are similar to [Cosmos App-Chains](https://docs.cosmos.network/v0.46/intro/why-app-specific.html) but outsource the overhead of the consensus to the dymension hub, with the help of optimistic fraud proofs. A [Sequencer](../reference/glossary#s) which is the RollApp’s operating machine that validates, orders, and executes transactions. Then the sequencer batches them into RollApp blocks. It then posts the transaction data to a DA layer of choice and submits an updated state root of the RollApp together with a DA reference (where the data is available) to the dymension hub.<br/>

Data and state root publication guarantees that any network participant, whether driven by distrust or economic incentives, may independently verify that genuine computations and honest state transitions were performed by the RollApp Sequencer.<br/>

## RollApps architecture

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit [RDK](https://github.com/dymensionxyz/RDK). The client component, referred to as [dymint](https://github.com/dymensionxyz/dymint), forked from Celestia's [rollmint](https://github.com/celestiaorg/optimint), is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer communication. As there are no consensus tasks in the RollApp itself, dymint can provide the low latency requirements necessary for modern-day applications.<br/>

<div class="image-container-primary">
    <img class="image--primary" src={require('./images/rollapp-architecture-overview.png').default} alt="rollapp-overview" />
</div>

A RollApp transaction lifecycle begins by sending a request to a RollApp Sequencer which processes the transaction. The transaction, assuming valid, is then included in a block after been processed by the relevant RDK module. After a predetermined number of blocks a batch is created by the sequencer. At this stage the sequencer publishes the batch and the batch metadata (e.g. state roots) to the DA layer and the dymension hub, respectively.<br/>

## Cosmos compatibility

The RDK builds upon the Cosmos-SDK by adding new modules and modifying existing ones for ensuring RollApp compatibility with the Cosmos ecosystem. New modules are designed specifically for handling validator-less RollApp application logic. RollApps are capable of interacting with any IBC-enabled chain using the dymension hub and as such will be part of the growing cosmos ecosystem. In fact, dymension as a protocol is designed to facilitate the growth of the cosmos and interchain ecosystem. By being IBC-enabled the dymension hub facilitates trust-minimized message passing between RollApps, Cosmos zones, and further IBC-enabled ecosystems.
