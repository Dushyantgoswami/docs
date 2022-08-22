---
title: "RollApps"
slug: "rollapps"
---

An application deployed to dYmension’s ecosystem is called a RollApp. RollApps have their own autonomy, meaning they have minimal interactions with low level blockchain logic namely a significant reduction in handling networking and consensus requirements. Autonomous RollApps still retain the benefits of building their own blockchain such as having their own native network fee token, flexible application logic and trust-minimized inter-operability with other RollApps and IBC-enabled blockchains.

RollApps on dYmension exist in their own sharded execution environment in which Sequencers process transactions off-chain. A Sequencer can be a single machine (e.g. AWS machine) or a group of machines that take turns to process transactions. A RollApp derives its name from rollups, which are blockchain scaling solutions designed to reduce latency and costs for the end-users. Rollups process transactions off-chain and post the data and updated state roots on-chain. By posting data and state roots on-chain any actor, whether driven by distrust or by economic incentives, may independently verify that a Sequencer properly performed their work.

From an architectural point of view, dYmension RollApps are also disaggregated themselves. Similarly to a Cosmos chain, the RollApp itself is composed out of two core services, networking and application. The application side is designated for the RollApp deployer to implement their business logic alongside the pre-packaged modules that construct the RollApp development kit.

RollApps operate in an optimistic fraud proof design. This design assumes an optimistic view towards the honesty of the Sequencers, hence the term optimistic. However, in order to produce an environment where users of a network do not have to simply trust Sequencers, a dispute period is installed. During this dispute period other actors are able to verify that the Sequencer is reporting correct state updates based on the published data and application logic. If anyone discovers a state update that is not correct, they can publish a “fraud proof” demonstrating the correct state transition. If the Sequencer provided an incorrect state update, the state is reverted to the previously agreed upon state and the Sequencer is “slashed.”

RollApp Sequencers post data to a supported data availability layer which checks that published data was made fully available. Risks of censorship are further reduced by introducing permission-less and rotating Sequencers. dYmension introduces a system in which an application may be processed by third-party Sequencers, which is known as permission-less PoS sequencing.
