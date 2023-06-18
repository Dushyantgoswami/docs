---
title: "Dymint"
slug: "dymint"
hide_table_of_contents: true
---

RollApps are similar to [Cosmos App-Chains](https://docs.cosmos.network/v0.46/intro/why-app-specific.html) but outsource the overhead of reaching consensus to the Dymension Hub. The Dymension Hub accepts state updates from RollApp sequencers optimistically and may revert any state transition if proven invalid with [fraud proofs](https://research.paradigm.xyz/rollups).

A [Sequencer](../reference/glossary#s) is the RollApp’s operator that validates, orders, and processes transactions. Sequencers then batches blocks into a larger RollApp block and post the transaction data to a DA layer of choice and an updated state root of the RollApp together with a DA reference (where the data is available) to the Dymension Hub.<br/>

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/dymint-block-production.png').default} alt="dymint-overview" />
</div>

Data and state root publication guarantees that any network participant, whether driven by distrust or economic incentives, may independently verify that genuine computations and honest state transitions were performed by the RollApp sequencer.<br/>

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit [(RDK)](https://github.com/dymensionxyz/RDK). The client component, referred to as [dymint](https://github.com/dymensionxyz/dymint), forked from Celestia's [rollmint](https://github.com/celestiaorg/optimint), is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer communication.

Dymint enables the multi-layer networking responsible for treating the Dymension Hub as the source of truth for RollApps. As the Dymension Hub is a stand-alone PoS blockchain, Dymint is configured to point to the Dymension Hub for state updates and any necessary rollbacks. As there are no consensus tasks in the RollApp itself, dymint can provide the low latency requirements necessary for modern-day applications.
