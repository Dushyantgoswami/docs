---
title: "The Dymension Hub"
slug: "dymension-hub"
hide_table_of_contents: true
---

The Dymension Hub is the decentralized source of truth, security, and liquidity for the network of RollApps. The Dymension Hub is a Cosmos SDK Proof-of-Stake blockchain which utilizes the Tendermint Core state replication model for networking and consensus. The utilization of the entire Cosmos SDK stack enables RollApps and the Dymension Hub to natively transfer message across the [IBC-enabled ecosystem.](https://www.mapofzones.com/)<br/>

The Dymension Hub embeds logic for servicing RollApps into the protocol. Meaning the Dymension Hub maintains a registrar of deployed RollApps and corresponding vital information such as state, list of sequencers, current active sequencer and more. The Dymension Hub is specifically built to provide RollApps with security, interoperability, and liquidity.<br/>

-   <b>Security</b> - Inherited from the Dymension Hub and data availability layer. Security for RollApp users is enforced by validators of the Dymension Hub and the protocol's fraud proof design. By relying on an honest-majority of the Dymension Hub validator set, RollApps may operate with an honest-minority (i.e. 1/N trust assumption) and have significantly reduced bootstrapping overhead.
-   <b>Interoperability</b> - RollApps communicate and transact with one another via dedicated modules which exist both on the RollApp and the Dymension Hub. Inter-RollApp Communication (IRC) leverages the common ground of all RollApps - the Dymension Hub. The Dymension Hub facilitates trust-minimized bridging for RollApp users within the ecosystem. Additionally, RollApps are capable of natively communicating with other IBC-enabled blockchains via the Dymension Hub.
-   <b>Liquidity</b> - The only application logic in the Dymension Hub not strictly restricted for handling RollApps is an embedded Automated Market Maker (AMM). The AMM is designed to expose RollApps to efficient asset routing, price discovery and most importantly shared liquidity for the entire ecosystem.
