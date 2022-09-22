---
title: "The dYmension Hub"
slug: "dymension-hub"
---

The settlement layer of dYmension is termed "The Hub”. The Hub is a Cosmos SDK Proof-of-Stake chain which utilizes the Tendermint Core state replication model for networking and consensus.<br/>

The Hub incorporates logic for servicing RollApps. It maintains a registrar of deployed RollApps and corresponding vital information such as state, list of sequencers, current active sequencer, execution module checksum and more.<br/>

The Hub is specifically and exclusively built to provide RollApps with security, interoperability and liquidity.
Security is inherited by the Hub and enforced by its validators and the protocol fraud proof design.<br/>

*Interoperability* - dYmension RollApps communicate and transact with each other using dedicated modules which exist both on the [RDK](../reference/glossary.md#r) and the hub. We refer to this type of communication as Inter-RollApp Communication (IRC). IRC leverages the common ground of all dYmension RollApps - the dYmension hub. The dYmension hub facilitates trust-minimized bridging for RollApp users within the ecosystem. Additionally, RollApps are capable of communicating with other IBC-enabled chains via the dYmension hub.<br/> 

*Liquidity* - The only application logic in the dYmension hub not strictly restricted for handling RollApps is the embedded Automated Market Maker (AMM). The goal is to expose RollApps to efficient asset routing, better price discovery and most importantly shared liquidity for the entire ecosystem.
