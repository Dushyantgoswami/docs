---
title: "Dymint"
slug: "dymint"
hide_table_of_contents: true
---

### Overview

RollApps are similar to [Cosmos App-Chains](https://docs.cosmos.network/v0.46/intro/why-app-specific.html) but outsource the overhead of reaching consensus to the Dymension Hub. The Dymension Hub accepts state root updates from RollApp Sequencers optimistically and may revert any state transition if proven invalid with [fraud proofs](https://research.paradigm.xyz/rollups). State roots updates enable light client [bridging](bridging.md) and access to cross-chain message passing.

### Transaction lifecycle

Sequencers are the RollApp operators that validate, order, and process transactions. Sequencers expose RPC end-points for users to submit transactions that are valid according to the state machine of the RollApp. After a transaction is submitted and processed, the Sequencer responds with an immediate state update.

At a configurable time the Sequencer batches the locally existing processed transactions and publishes the data on-chain to a data availability network of the RollApp's choice. At this point a full node of the RollApp network may request data from the data availability network and verify the RollApp's state root.

After receiving a response from the data availability network that the published data was accepted, the Sequencer publishes the state root to the Dymension Hub. Along with the updated state root of the RollApp a DA reference (where the data is available) is submitted to the Dymension Hub in the case that the Dymension Hub needs to verify a fraud proof submission.

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/dymint-block-production.png').default} alt="dymint-overview" />
</div>

As blocks are produced optimisitcally and don't require active network validation Sequencers are able to produce blocks at configurably low block times. RollApps deployed to the [35-C network](https://github.com/dymensionxyz/testnets/tree/main/dymension-hub/35-C) are able to achieve stable performance with 0.2 second blocktimes.

### Base layer unavailability

Upon base layer unavailability, Dymint does not process transactions in the mempool but continually tries to send a transaction to the appropriate base layer. Upon a positive liveness response from the base layer Dymint will resume processing existing transactions in the mempool. While it is possible to configure Dymint in a manner that continue to operate without publishing transaction data on-chain, Dymension's core team has taken an approach of satisfying security over liveness properties during the RollApp's operation.

### Elastic block production

Dymint implements elastic block production (EBP) for significantly greater operating efficiencies. Instead of continually publishing blocks with no transaction data blocks are produced on-demand as transactions arrive into the mempool of a Sequencer. This is designed to significantly reduce the operating costs of a RollApp Sequencer.

Sequencers produce blocks with no transactions only at certain defined checkpoints (i.e. every minute) to suffice a liveness check with the Dymension Hub. As such, to provide stable token creation (e.g. minting) Sequencers utilize time-based distributions rather than height-based (which is commonly found in Cosmos app-chains).
