---
parent:
    title: Run Your RollApp
    description: Run your RollApp
    number: 3
tag: deep-dive
order: 3
title: Run Your RollApp
---

So far we've [prepared](/docs/developers/start/overview.md) our RollApp and [built](/docs/developers/build/overview.md) it. Now it's time to deploy it!

In this next section we will power up the engine of RollApps, [Dymint](https://github.com/dymensionxyz/dymint). Introduced earlier in the [learn section](/docs/learn/rollapps.md), Dymint is the client componentof RollApp. Dymint is a drop-in replacement for Tendermint and is responsible for block production, peer message propagation and inter-layer communication.

Dymint may produce blocks at very low block times and then batches these blocks together and posts the data to the configured data layer and the state root/data reference to the Dymension Hub. Due to the removal of reaching consensus each block across peer nodes, end-users are able to enjoy very low latent applications with high throughput. On top of this, the removal of the validator set facilitates a wider design space for developer ingenuity in the business logic of the application.

In the next sections we will configure a mock data layer and then replace this with a live data layer (Celestia). Afterwards, we deploy a smart contract to the respective RollApp virtual machine you have [chosen to deploy](/docs/developers/build/overview.md). Finally we will query the [running Dymension Hub node](/docs/developers/start/run-a-hub-node.md) for the updated state root of the RollApp.

Step-by-step we've learned the Dymension stack and the exciting developments in the RollApp world!

# Let's start our engines!
