---
title: "Dymint"
slug: "dymint"
hide_table_of_contents: true
---

RollApps are similar to [Cosmos App-Chains](https://docs.cosmos.network/v0.46/intro/why-app-specific.html) but outsource the overhead of reaching consensus to the Dymension Hub. The Dymension Hub accepts state updates from RollApp sequencers optimistically and may revert any state transition if proven invalid with [fraud proofs](https://research.paradigm.xyz/rollups).

Sequencers are the RollApp operators that validate, order, and process transactions. Sequencers then batch blocks into a larger RollApp block and post the transaction data to a DA layer of choice and an updated state root of the RollApp together with a DA reference (where the data is available) to the Dymension Hub in case of verifying a fraud proof.<br/>

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/dymint-block-production.png').default} alt="dymint-overview" />
</div>

As blocks are produced optimisitcally and don't require active network validation Sequencers are able to produce blocks at configurably low block times. RollApps deployed to the [35-C network](https://github.com/dymensionxyz/testnets/tree/main/dymension-hub/35-C) are able to achieve stable performance with 0.2 second blocktimes.

After a transaction is submitted and processed, the Sequencer responds with an immediate state update. At a configurable time the Sequencer batches the locally existing processed transactions and publishes the data on-chain to a data availability network of the RollApp's choice. At this point a full node of the RollApp may request data from the data availability network and verify the RollApp's state root. After receiving a response from the data availability network that the published data was accepted the Sequencer publishes the state root to the Dymension Hub.

Upon base layer unavailability Dymint does not process transactions in the mempool but continually tries to send a transaction to the appropriate base layer. Upon a positive liveness response from the base layer Dymint will continue processing existing transactions in the mempool.

As noted in the [Dymension RDK](./dymension-rdk) explanation Dymint implements elastic block production (EBP) for significantly greater operating efficiancies. Blocks are produced on-demand as transactions arrive into the mempool of a Sequencer. Sequencers produce blocks with no transactions only at certain defined checkpoints (i.e. every minute) to suffice a liveness check with the Dymension Hub.
