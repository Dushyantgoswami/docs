---
title: "Cosmos Network"
slug: "cosmos-network"
---

Cosmos is a network of interoperable blockchains, each implemented with different properties suitable for their individual use cases. Cosmos lets developers create blockchains that maintain sovereignty, have fast transaction processing, and are interoperable.<sup>1</sup> Cosmos chains utilize the Cosmos SDK, which is an open-source framework for building the application layer of Proof-of-Stake blockchains. Blockchains built with the Cosmos SDK are generally referred to as application-specific blockchains.
<br />

![Map of Zones](/img/cosmos_networks.png)
<small className="figure">Source: https://tutorials.cosmos.network/</small>
<br />
<br />

Cosmos SDK based blockchains are built out of composable modules. Blockchain developers create customized business logic in new modules and integrate with the provided modules from the Cosmos SDK. The Cosmos SDK includes pre-built modules for actions such as minting new tokens, setting a gas fee, staking tokens and much more. The application-specific blockchains are customized to operate a single application. Instead of building a decentralized application on top of an underlying blockchain like Ethereum, developers build their own blockchain.

<br />

![Cosmos Architecture](/img/cosmos_architecture_overview.png)
<small className="figure">Source: https://tutorials.cosmos.network/</small>
<br />
<br />

Cosmos blockchains utilize the Tendermint Core for networking and consensus.<sup>2</sup> Cosmos SDK blockchain use the Tendermint Core for networking and consensus. Tendermint Core is an application-agnostic engine that is responsible for propagating and ordering transaction bytes. Tendermint Core relies on the Byzantine-Fault-Tolerant (BFT) algorithim to reach consensus on the order of transactions. Tendermint passes transactions to the application through an interface called ABCI. Transactions must pass a validation checks to be included in the mempool of a full node and relayed to peer nodes. When a block of valid transactions is received by the Tendermint Core, each transaction is passed to the application to be processed. At the beginning and end of each block arbitrary application logic may be executed, creating automatic code execution.

Additionally, Cosmos introduced the inter-blockchain communication (IBC) protocol<sup>3</sup> for trust-minimized bridging between blockchains IBC is a cross-chain messaging protocol for homogenous blockchains. This means that it connects chains that share similar functionalities, in this case, instant finality provided by the Tendermint consensus algorithm and ones that have light client functionality. Two chains passing messages between one another require a light client of the opposing chain. Relayers then pass information betweene the light clients. The trust relies on the two validator sets of the connected blockchains, rather than the typically significant trust assumptions with multi-sig bridges.

dYmension builds on top of the Cosmos network. dYmension's blockchain utilizes the Cosmos SDK to build application logic, Tendermint for networking and consensus and IBC for inter-operability. dYmension goes further in abstracting these core technologies and is able to create RollApps, highly scalable application-specific rollups. Utilizing the core Cosmos technology enables dYmension to significantly increase scalability and the efficiency of blockchain applications.

References:

1. What is Cosmos? https://tutorials.cosmos.network/
2. What is Tendermint? https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html
3. Inter-blockchain Communication https://ibcprotocol.org/
