---
title: "Modular Blockchain"
slug: "modular-blockchain"
---

The traditional web model is composed of entities paying for segregated pieces of server. For example, when Twitter servers are under heavy use it does not affect Reddit servers. Similarly, dYmension applications receive a segregated high performant execution environment running the application logic. dYmension’s protocol scales with the segregation of resource consumption similar to traditional web infrastructure. However, it also allows applications to plug themselves into an inter-connected, decentralized and trust-minimized environment. dYmension is infrastructure that glues traditional and reliable web2-like instances with the ownership and connectivity advantages of the decentralized internet.

dYmension follows a modular blockchain architecture design that decouples different functions of a ‘Monolithic’ blockchain for greater performance and scalability. ‘Monolithic’ blockchains handle transaction execution, state settlement, data processing and provide a consensus on the canonical history of the chain.

![Modular Blockchain](/img/modular_blockchain.svg)

**The functions that modular blockchains specialize in are:**

- Execution layer: Processes transactions
- Settlement layer: Dispute resolution, maintain state roots and bridge between environments
- Data availability layer: Ensures all data is made available when the block is proposed (no hidden transactions)

dYmension takes the unique approach of sharding the execution layer into application-specific rollups (RollApps). This design allows each application to have its own execution environment. The settlement layer of dYmension is termed "the Hub." The hub is a central place for security, liquidity and inter-operability. By implementing a settlement layer, dYmension is able to connect the ecosystem of RollApps with one another and the broader IBC-enabled world. The dYmension protocol is designed to be data availability solution agnostic. RollApp Sequencers shall have the ability to choose which data availability solution best fits their needs.
