---
title: "The Dymension Hub"
slug: "dymension-hub"
hide_table_of_contents: true
---

The dymension hub is the decentralized source of truth, security, and liquidity for the network of RollApp chains. The dymension hub is a Cosmos SDK Proof-of-Stake chain which utilizes the Tendermint Core state replication model for networking and consensus. The utilization of the Cosmos SDK enables the RollApp chains and the dymension hub to natively transfer message across the [IBC-enabled ecosystem.](https://www.mapofzones.com/)<br/>

The dymension Hub embeds logic for servicing RollApps into the protocol. Meaning the dymension hub maintains a registrar of deployed RollApps and corresponding vital information such as state, list of sequencers, current active sequencer and more. The dymension hub is specifically built to provide RollApps with security, interoperability, and liquidity.<br/>

-   <b>Security</b> - Inherited from the dymension hub and enforced by validators and the protocol fraud proof design.
-   <b>Interoperability</b> - Dymension RollApps communicate and transact with each other using dedicated modules which exist both on the RollApp and the dymension hub. Inter-RollApp Communication (IRC) leverages the common ground of all dymension RollApps - the dymension hub. The dymension hub facilitates trust-minimized bridging for RollApp users within the ecosystem. Additionally, RollApps are capable of communicating with other IBC-enabled chains via the dymension hub.
-   <b>Liquidity</b> - The only application logic in the dymension hub not strictly restricted for handling RollApps is an embedded Automated Market Maker (AMM). The goal is to expose RollApps to efficient asset routing, price discovery and most importantly shared liquidity for the entire ecosystem.
