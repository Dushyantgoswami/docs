---
title: "dYmension Litepaper"
slug: "litepaper"
---

# The dYmension Blockchain

## Home of the RollApps

dYmension introduces a multi-layer blockchain protocol with robust tooling for building application-specific rollups. dYmension is akin to a hub and factory for such applications, which are referred to as RollApps. In this document we examine the technological, economic and social aspects of the dYmension protocol. Furthermore, we present the grand vision for dYmension, the modular architecture of its design and a high level overview of dYmension’s prominent core concepts.

### Rollup Factory - RollApp Development Kit (RDK)

dYmension’s rollup factory takes its inspiration from the Cosmos ecosystem which introduced the successful Cosmos SDK. A RollApp instance on dYmension is an application-specific rollup, built by using the dYmension RollApp Development Kit, termed RDK. The development kit is a pre-packaged set of generic modules which enable Cosmos SDK functionalities, such as creating accounts and token management. The RDK simplifies the process of deploying a rollup on top of dYmension’s settlement layer.

### dYmension Settlement Layer

A Cosmos SDK Proof-of-Stake chain which utilizes the Tendermint Core state replication model for networking and consensus. Contrary to a monolithic blockchain dYmension’s settlement layer, also referred to as a Hub, is specifically designed to provide an optimized service for rollups. As such, rollup servicing logic is enshrined within the settlement layer, resulting in a hub for native interoperability between RollApps.

### Inter-Rollup Communication (IRC)

IRC is an Inter-Blockchain Communication (IBC) based protocol which provides safe message transferring between dYmension RollApps. IRC leverages the common communication ground of all dYmension RollApps, the dYmension settlement hub.

### RollApp Virtual Machine (RVM)

dYmension introduces a novel dispute mechanism which generates a RollApp specific virtual machine for resolving transaction disputes within the settlement chain. RVM emulates the exact context and logic in which a transaction is executed resulting in a deterministic output. As such, RVM is capable of resolving disputes in various execution environments.

### Embedded Hub AMM

dYmension embeds a native Automated Market Maker (AMM) into the settlement hub to achieve shared liquidity on top of shared security. The AMM is designated for RollApp facilitation and is regarded as essential infrastructure for RollApps. The embedded AMM is the sole applicative logic on the settlement layer which is not restricted for RollApp usage only.

### Full PDF

Click [here for the full PDF of the dYmension Litepaper](/papers/litepaper.pdf).
