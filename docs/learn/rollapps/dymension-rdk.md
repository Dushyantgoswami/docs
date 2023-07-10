---
title: "Dymension RDK"
slug: "dymension-rdk"
hide_table_of_contents: true
---

Dymension RDK (RollApp Development Kit) is the Cosmos SDK for RollApps. The [Cosmos SDK](https://docs.cosmos.network/main/modules) is a development kit that comes pre-built with various modules that expediate the building process.

RollApps are composed out of two core services, client and server. The server is the application side designated for the RollApp deployer to implement custom business logic alongside the pre-packaged modules. The client component, referred to as [dymint](./dymint), is a drop-in replacement for Tendermint and responsible for block production, peer message propagation and inter-layer networking.

<div class="image-container-fourth">
    <img class="image--secondary" src={require('@site/static/img/rdk-transaction.png').default} alt="dymint-overview" />
</div>
<br/>

Most Cosmos SDK modules may be integrated into the RollApp for building a RollApp. Core modules inherited from the Cosmos SDK and IBC are:

-   [Auth](https://docs.cosmos.network/v0.46/modules/auth/) - Base transaction and account types
-   [Bank](https://docs.cosmos.network/v0.46/modules/bank/) - Facilitating token transfers
-   [Capability](https://docs.cosmos.network/v0.46/modules/capability/) - Provisioning, tracking, and authenticating multi-owner capabilities at runtime
-   [Gov](https://docs.cosmos.network/v0.46/modules/gov/) - On-chain proposals and voting
-   [Params](https://docs.cosmos.network/v0.46/modules/params/) - Globally available parameter store
-   [Upgrade](https://docs.cosmos.network/v0.46/modules/upgrade/) - Handling software upgrades
-   [IBC](https://ibc.cosmos.network/) - Bridging protocol

Additional smart contract frameworks have been developed and deployed to production under various licenses:

-   [EVMOS EVM](https://docs.evmos.org/protocol/modules/evm) - EVM smart contracts built by EVMOS team
-   [Polaris EVM](https://github.com/berachain/polaris/tree/main/cosmos/x/evm) - EVM smart contracts built by Berachain team
-   [CosmWasm](https://github.com/CosmWasm/cosmwasm) - Wasm framework built Confio and Cosmos contributors

Unlike the Cosmos SDK default modules, a few adjustments have been made that define the Dymension RDK:

-   [Epochs](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/epochs) - RollApps utilize [elastic block production](./dymint.md#elastic-block-production) which may cause inconsistencies in block production thus RollApps utilize time-based rather than height-based approach for state triggers.
-   [Mint](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/mint) - RollApps utilize time-based mint module built for consistent token creation. The mint module built by the Osmosis and Stride teams has been generalized by removing references to pools/incentive structures tied to the aformentioned protocols.
-   [Dist](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/dist) - Allocates tokens between the Sequencer (block proposer), members, and community pool.
-   [Sequencers](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/sequencers) - Creates an account to receive rewards for operating the RollApp
-   [Staking](https://github.com/dymensionxyz/dymension-rdk/tree/main/x/staking) - Wrapper on the existing Cosmos SDK Staking module that prevents validator updates on the Proof-of-stake layer.
