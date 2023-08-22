---
title: "Dymint"
slug: "dymint"
hide_table_of_contents: true
---

### Overview

RollApps are similar to [Cosmos App-Chains](https://docs.cosmos.network/v0.46/intro/why-app-specific.html) but outsource the overhead of reaching consensus to the Dymension Hub. The Dymension Hub accepts state root updates from RollApp Sequencers optimistically and may revert any state transition if proven invalid with [fraud proofs](https://www.paradigm.xyz/2021/01/almost-everything-you-need-to-know-about-optimistic-rollup). State roots updates enable light client [bridging](bridging.md) and access to cross-chain message passing.

### Transaction lifecycle

Sequencers are the RollApp operators that validate, order, and process transactions. Sequencers expose RPC end-points for users to submit transactions that are valid according to the state machine of the RollApp. After a transaction is submitted and processed, the Sequencer responds with an immediate state update.

At a configurable period the Sequencer batches the locally existing processed transactions. Batched blocks are gossiped to peer full nodes as well as published on-chain to a data availability network of the RollApp's choice. Block gossiping provides peer full nodes a lower latency for receiving state updates, however, economic security is derived from publishing data on a decentralized network. Therefore, full nodes of the RollApp network may request data from the data availability network and verify the RollApp's state root.

After receiving a response from the data availability network that the published data was accepted, the Sequencer then publishes the state root to the Dymension Hub. Metadata, including a reference path to the chosen data availability network, is submitted to the Dymension Hub along with the RollApp's updated state root. With data published on-chain the Dymension Hub may then verify any fraud proof submissions.

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/dymint-block-production.png').default} alt="dymint-overview" />
</div>

As blocks are produced optimisitcally and don't require active network validation Sequencers are able to produce blocks at configurably low block times. RollApps deployed to the [35-C network](https://github.com/dymensionxyz/testnets/tree/main/dymension-hub/35-C) were able to maintain an average latency period of 0.2 second with max TPS of ~20,000 transactions.

### Base layer unavailability

Upon base layer unavailability, Dymint does not process transactions in the mempool but continually tries to send a transaction to the appropriate base layer. Upon a positive liveness response from the base layer Dymint will resume processing existing transactions in the mempool. While it is possible to configure Dymint in a manner that continue to operate without publishing transaction data on-chain, Dymension's core team has taken an approach of satisfying security over liveness properties during the RollApp's operation.

### Elastic block production

Dymint implements elastic block production (EBP) for significantly greater operating efficiencies. Instead of continually publishing blocks with no transaction data blocks are produced on-demand as transactions arrive into the mempool of a Sequencer. This is designed to significantly reduce the operating costs of a RollApp Sequencer.

Sequencers produce blocks with no transactions only at certain defined configurable checkpoints (e.g. every minute) to provide stable state transitions independent of transactions (e.g. minting based on epoch). As such, RollApps by default utilize time-based distributions rather than height-based (which is commonly found in Cosmos app-chains).
