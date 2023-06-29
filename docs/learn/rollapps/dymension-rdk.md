---
title: "Dymension RDK"
slug: "dymension-rdk"
hide_table_of_contents: true
---

Dymension RDK is the Cosmos SDK for rollups. The [Cosmos SDK](https://docs.cosmos.network/main/modules) comes pre-built with various modules that expediate the building process.

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules that construct the RollApp Development Kit [(RDK)](https://github.com/dymensionxyz/dymension-rdk). The client component, referred to as [dymint](./dymint), is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer networking.

Some of the core modules are:

-   [Bank](https://docs.cosmos.network/main/modules/bank) - Facilitating token transfers
-   [Staking](https://docs.cosmos.network/main/modules/staking) - Proof-of-stake layer for public blockchains
-   [Gov](https://docs.cosmos.network/main/modules/gov) - On-chain proposals and voting
-   [Upgrade](https://docs.cosmos.network/main/modules/upgrade) - Handling software upgrades

Additional smart contract frameworks have been developed and deployed to production under various licenses:

-   [EVMOS EVM](https://docs.evmos.org/protocol/modules/evm) - EVM smart contracts built by EVMOS team
-   [Polaris EVM](https://github.com/berachain/polaris/tree/main/cosmos/x/evm) - EVM smart contracts built by Berachain team
-   [CosmWasm](https://github.com/CosmWasm/cosmwasm) - Wasm framework built Confio and Cosmos contributors

Unlike the Cosmos SDK default modules, a few adjustments have been made that define the Dymension RDK:

-   [Epochs](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/epochs) - RollApps utilize elastic block production which may cause inconsistencies in block production thus RollApps utilize time-based rather than height-based approach for state triggers.
-   [Mint](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/mint) - RollApps utilize time-based mint module built for consistent token creation. The mint module built by the Osmosis and Stride teams has been generalized by removing references to pools/incentive structures tied to the aformentioned protocols.
-   [Dist](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/dist) - Allocates tokens between the Sequencer (block proposer), members, and community pool.
-   [Sequencers](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/sequencers) - TODO
-   [Staking](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/staking) - Wrapper on the existing Cosmos SDK Staking module that prevents validator updates on the Proof-of-stake layer.
