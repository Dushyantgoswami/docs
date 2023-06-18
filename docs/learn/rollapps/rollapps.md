---
title: "RollApps"
slug: "rollapps"
hide_table_of_contents: true
---

RollApps are similar to [Cosmos App-Chains](https://docs.cosmos.network/v0.46/intro/why-app-specific.html) but outsource the overhead of reaching consensus to the Dymension Hub. The Dymension Hub accepts state updates from RollApp sequencers optimistically and may revert any state transition if proven invalid with [fraud proofs](https://research.paradigm.xyz/rollups).

A [Sequencer](../reference/glossary#s) is the RollApp’s operator that validates, orders, and processes transactions. Sequencers then batches blocks into a larger RollApp block and post the transaction data to a DA layer of choice and an updated state root of the RollApp together with a DA reference (where the data is available) to the Dymension Hub.<br/>

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/dymint-block-production.png').default} alt="dymint-overview" />
</div>

Data and state root publication guarantees that any network participant, whether driven by distrust or economic incentives, may independently verify that genuine computations and honest state transitions were performed by the RollApp sequencer.<br/>

## RollApp Architecture

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit [(RDK)](https://github.com/dymensionxyz/RDK). The client component, referred to as [dymint](https://github.com/dymensionxyz/dymint), forked from Celestia's [rollmint](https://github.com/celestiaorg/optimint), is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer communication.

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/ibc-bridging.png').default} alt="dymint-overview" />
</div>

Dymint enables the multi-layer networking responsible for treating the Dymension Hub as the source of truth for RollApps. As the Dymension Hub is a stand-alone PoS blockchain, Dymint is configured to point to the Dymension Hub for state updates and any necessary rollbacks. As there are no consensus tasks in the RollApp itself, dymint can provide the low latency requirements necessary for modern-day applications.<br/>

<div class="image-container-primary">
    <img class="image--primary" src={require('../images/rollapp-architecture-overview.png').default} alt="rollapp-overview" />
</div>

RollApp transaction lifecycles begin by sending a request to a RollApp sequencer which processes the transaction. The transaction, assuming valid, is then included in a block after being processed by the relevant RDK module. After a predetermined number of blocks a batch is created by the sequencer. At this stage the sequencer publishes the batch and the batch metadata (e.g. state roots) to the DA layer and the Dymension Hub, respectively.<br/>

## Cosmos compatibility

Dymension's RDK builds upon the Cosmos-SDK by adding new modules and modifying existing ones for ensuring RollApp compatibility with the Cosmos ecosystem. New modules are designed specifically for handling validator-less RollApp application logic. RollApps are capable of interacting with any IBC-enabled chain using the Dymension Hub and as such will be part of the growing Cosmos ecosystem.

Dymension as a protocol is designed to facilitate the growth of the Cosmos and inter-chain ecosystem. By being natively IBC-enabled, the Dymension Hub facilitates trust-minimized message passing between RollApps, Cosmos zones, and further IBC-enabled ecosystems.

Unlike traditional app-chains, RollApps delegate consensus to the Dymension Hub. The Dymension Hub thus acts as the decentralized source of truth and decides when a RollApp is in good standing. As such, the Dymension Hub intermediates transfers in and out of RollApps. By utilizing the existing IBC stack, RollApps are able to be connected to the IBC-enabled ecosystem even without consensus.
