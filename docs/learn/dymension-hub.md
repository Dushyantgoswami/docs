---
title: "The dYmension Hub"
slug: "dymension-hub"
---

The settlement layer of dYmension is termed "The dYmension Hub”. The dYmension Hub is a Cosmos SDK Proof-of-Stake chain which utilizes the Tendermint Core state replication model for networking and consensus.<br/>

The dYmension Hub incorporates logic for servicing RollApps. It maintains a registrar of deployed RollApps and corresponding vital information such as state, list of sequencers, current active sequencer and more. The dYmension Hub is specifically built to provide RollApps with security, interoperability and liquidity. <br/>

*Security* - Security is inherited from the dYmension Hub and enforced by its validators and the protocol fraud proof design.<br/>

*Interoperability* - dYmension RollApps communicate and transact with each other using dedicated modules which exist both on the [RDK](../reference/glossary.md#r) and the dYmension Hub. We refer to this type of communication as Inter-RollApp Communication (IRC). IRC leverages the common ground of all dYmension RollApps - the dYmension Hub. The dYmension Hub facilitates trust-minimized bridging for RollApp users within the ecosystem. Additionally, RollApps are capable of communicating with other IBC-enabled chains via the dYmension Hub.<br/> 

*Liquidity* - The only application logic in the dYmension Hub not strictly restricted for handling RollApps is the embedded Automated Market Maker (AMM). The goal is to expose RollApps to efficient asset routing, better price discovery and most importantly shared liquidity for the entire ecosystem.
