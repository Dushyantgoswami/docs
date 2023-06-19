---
title: "Dymension RDK"
slug: "dymension-rdk"
hide_table_of_contents: true
---

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit [(RDK)](https://github.com/dymensionxyz/dymension-rdk). The client component, referred to as [dymint](https://github.com/dymensionxyz/dymint), is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer communication.

Dymension RDK is the [Cosmos SDK](https://docs.cosmos.network/main) for rollups. Developers are able to use modules such as the [EVM module](https://docs.evmos.org/protocol/modules/evm) built by the EVMOS team or [Polaris](https://github.com/berachain/polaris/tree/main/cosmos/x/evm) by Berachain. With additional support for [CosmWasm](https://github.com/CosmWasm/cosmwasm) and other smart contract frameworks.

// Transaction flow

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/rdk-transaction.png').default} alt="dymint-overview" />
</div>

-   Modules

    -   Epoch
    -   Mint
    -   Dist
    -   Sequencer
    -   Staking

-   Elastic block production
