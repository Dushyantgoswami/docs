---
title: "The dYmension Hub"
slug: "dymension-hub"
---

dYmension introduces robust infrastructure and tools for building application-specific rollups on top of a specialized settlement layer. dYmension is akin to a hub and factory for such applications. dYmension follows a modular blockchain architecture design that decouples different functions of a ‘Monolithic’ blockchain for greater performance and scalability. In dYmension each application is its own execution environment and the dYmension hub is the settlement layer.

dYmension settlement layer is a Cosmos SDK Proof-of-Stake chain, that utilizes the Tendermint Core state replication model for networking and consensus. Contrary to a monolithic blockchain, dYmension’s settlement layer is specifically designed to provide an optimized service for rollups. dYmension embeds a native automated market maker (AMM) into the settlement hub to achieve shared liquidity on top of shared security. The AMM is designated for RollApp facilitation and is regarded as essential infrastructure for RollApps.

dYmension’s settlement hub is built from the ground up with the mission of supporting RollApps with the utmost security, liquidity and seamless inter-connectivity. The settlement hub maintains a registrar of deployed RollApps and their related information which is part of dYmension’s state. The attribute of natively servicing rollups on the settlement layer is known as ‘enshrined rollups’, as the settlement layer meticulously incorporates the logic for maintaining RollApps within the layer.

To handle enshrined rollups efficiently, dYmension optimizes the settlement layer for dispute resolution. dYmension introduces a novel method for resolving disputes, in which each dispute concerns one transaction. dYmension’s design implements a virtual simulated chain environment embedded within the settlement layer which we refer to as ‘Chain in Chain’ (CIC). CIC emulates the exact context in which the disputed transaction was executed.

dYmension RollApps communicate and transact with each other via embedded modules, we refer to this type of communication as Inter-RollApp Communication (IRC). IRC leverages the common ground of all dYmension RollApps, which is the shared settlement layer. dYmension’s shared settlement layer can be viewed as a hub for all inter-rollup communication. The settlement layer facilitates a trust-minimized bridging environment for RollApp users within the ecosystem and when interacting with other IBC-enabled chains.

dYmension introduces an embedded AMM on the settlement hub enabling the creation of a core financial center. This AMM is designed to enable efficiently aggregated liquidity, price discovery for new RollApps, and most importantly shared liquidity for the entire ecosystem. dYmension’s AMM is an essential part of the dYmension infrastructure stack as it creates a native liquidity hub designed to facilitate safe and efficient value pricing across RollApps.
