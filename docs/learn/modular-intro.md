---
title: "Modular Architecture Introduction"
slug: "modular-intro"
---

In order to understand how the dYmension protocol works it is first important to abstract the general functionalities a blockchain provides into the following:

1. Execution - Transaction processing and state computation.
2. Settlement & Consensus  - Enforcing the protocol rules, ensuring the order and state of the blockchain is agreed upon by all participants. 
3. Data  - Making sure all the data published is available.

dYmension follows a “*Modular”* blockchain paradigm. By this design, instead of one monolithic blockchain preforming all above functionalities, the responsibilities are segregated to multiple layers where each is built from the ground-up to service it’s specific role in the stack.

The dYmension modular stack is as follow:

1. Execution - [RollApps](./rollapps.md).
2. Settlement & Consensus - the dYmension settlement layer, termed [dYmension Hub](./dymension-hub.md).
3. Data - Data Availability providers supported by the dYmension protocol.

![Modular Blockchain](./images/modular-architecture-overview.svg)

RollApps can be deployed on top of the dYmension Hub by any developer making use of dYmension’s Hub’s connectivity, security and liquidity. As for data availability (DA); dYmension is DA agnostic as long as the dYmension’s Hub supports it. RollApp developers can choose their preferred DA provider according to their cost and security preferences.