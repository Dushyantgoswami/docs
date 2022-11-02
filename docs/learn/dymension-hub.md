---
title: "The Dymension Hub"
slug: "dymension-hub"
hide_table_of_contents: true
---

The settlement layer of dymension is termed "The dymension hub”. The dymension hub is a Cosmos SDK Proof-of-Stake chain which utilizes the Tendermint Core state replication model for networking and consensus.<br/>

The dymension Hub incorporates logic for servicing RollApps. It maintains a registrar of deployed RollApps and corresponding vital information such as state, list of sequencers, current active sequencer and more. The dymension Hub is specifically built to provide RollApps with security, interoperability and liquidity. <br/>

_Security_ - Security is inherited from the dymension hub and enforced by its validators and the protocol fraud proof design.<br/>

_Interoperability_ - Dymension RollApps communicate and transact with each other using dedicated modules which exist both on the [RDK](../reference/glossary.md#r) and the dymension hub. We refer to this type of communication as Inter-RollApp Communication (IRC). IRC leverages the common ground of all dymension RollApps - the dymension hub. The dymension hub facilitates trust-minimized bridging for RollApp users within the ecosystem. Additionally, RollApps are capable of communicating with other IBC-enabled chains via the dymension hub.<br/>

_Liquidity_ - The only application logic in the dymension hub not strictly restricted for handling RollApps is the embedded Automated Market Maker (AMM). The goal is to expose RollApps to efficient asset routing, better price discovery and most importantly shared liquidity for the entire ecosystem.
