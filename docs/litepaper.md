---
title: "dYmension Litepaper"
slug: "litepaper"
---

# The dYmension Blockchain

## Home of the RollApps

### Abstract

dYmension introduces robust infrastructure and tools for building application-specific rollups on top of a specialized settlement layer. dYmension is akin to a hub and factory for such applications. In this document we examine the economic, technological and social aspects of the dYmension protocol. Furthermore, we present the grand vision of dYmension, the problems the protocol uniquely solves and the modular architecture of its design.

### Rollup Factory - RDK RollApp Development Kit

dYmension’s rollup factory takes its inspiration from the Cosmos ecosystem which introduced the successful Cosmos SDK. A RollApp instance on dYmension is an application-specific rollup, built by using the dYmension RollApp Development Kit, termed RDK. The development kit is a pre-packaged set of generic modules which enable Cosmos SDK functionality, such as creating accounts and token management. The RDK simplifies the process of deploying a rollup on top of dYmension’s settlement layer.

### dYmension Settlement Layer

dYmension settlement layer is a Cosmos SDK Proof-of-Stake chain, that utilizes the Tendermint Core state replication model for networking and consensus. Contrary to a monolithic blockchain, dYmension’s settlement layer is specifically designed to provide an optimized service for rollups. As such rollup servicing logic is enshrined into the settlement layer, resulting in a hub for seamless interoperability between RollApps and the settlement layer.

### Inter-Rollup Communication (IRC)

IRC is an Inter-Blockchain Communication (IBC) based protocol which provides safe message transferring between dYmension RollApps. IRC leverages the common communication ground of all dYmension RollApps, the dYmension settlement hub. To facilitate cross-chain transactions with other IBC-enabled chains the dYmension hub utilizes IBC.

### Chain in Chain - Fraud Dispute

dYmension introduces a novel dispute mechanism which implements a simulated virtual chain environment embedded within the settlement chain and referred to as ‘Chain in Chain’ (CIC). CIC emulates the exact context in which a transaction is executed on a RollApp, resulting in a deterministic output. Hence, CIC is capable of resolving disputes in various execution environments, expanding the capabilities and flexibility of the rollup execution spectrum.

### Embedded Hub AMM

dYmension embeds a native automated market maker (AMM) into the settlement hub to achieve shared liquidity on top of shared security. The AMM is designated for RollApp facilitation and is regarded as essential infrastructure for RollApps. The embedded AMM is the sole applicative logic on the settlement layer which is not restricted for RollApp usage only.

Click [here for the full PDF of the dYmension Litepaper](/papers/litepaper.pdf).
