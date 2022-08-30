---
title: "Optimistic Rollups"
slug: "optimistic-rollups"
---

Optimistic rollups reduce computation on the main chain by processing transactions off-chain. Optimistic rollups derive security from the main chain they utilize by posting transaction results on-chain. Rollups work in an execution environment which is considered “off-chain.” Instead of processing all transactions on the blockchain, a Sequencer executes transactions, batches them and submit an updated state to the main chain.

By moving the computational efforts off-chain, nodes with less computational power can keep up with high amounts of information re-processing and participate in the consensus of the network. This enables the network as a whole to scale superlineraly to the cost of running the system.<sup>1</sup> In dYmension's architecture, compatible rollups post transaction data to a data availability layer and publish a new state root on dYmension's settlement layer. This reduces the efforts of each validating node participating in dYmension's network.

Optimistic rollups assume off-chain transactions are valid and don't publish proofs of validity for transactions posted on-chain. This separates optimistic rollups from zero-knowledge rollups which publish proofs of validity for off-chain transactions.<sup>2</sup> Instead a dispute period is installed to allow permissionless actors to post invalidity proofs (refered to as Fraud Proofs). If anyone discovers a batch that is not correct, they can publish a fraud proof demonstrating the correct state transition. If indeed the sequencer provided incorrect information the state of the blockchain is reverted and the sequencer is “slashed” (they lose tokens they’ve bonded to participate in the network). Optimisitic design requires only O(1) data in state to be stored on the settlement layer for O(N) off-chain transactions.

A pre-requisite for submiting a fraud proof to the settlement layer is that all of the data was made available when the block was published. This means that for every state transition, all of the associated data was published. This allows different actors to verify the state is valid and submit any fraud proofs if there is a transaction included by the Sequencer that is not valid according to the application logic. If a Sequencer included a magic (but fraudulent) transaction that minted themselves a bunch of token the data availability would guarantee this transaction was included in the published block and a fraud proof can then be submitted by any actor demonstrating the invalidity of the specified transaction.

This unique integration of data availability guarantees and a dispute period for fraud proofs allows users confidently interact with application's Sequencers. Furthermore, this design enables dYmension to hyper-scale blockchain applications. In dYmension's protocol, each application receives its own designated rollup environment and the settlement layer handles any fraud dispute, inter-connectivity with other applications and security.

References:

1. (Almost) Everything you need to know about Optimistic Rollup https://research.paradigm.xyz/rollups
2. Optimistic Rollups https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/
