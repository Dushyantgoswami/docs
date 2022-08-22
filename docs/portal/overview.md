# Development Portal

This documentation is designed to help you build and interact with dYmension. It cover dYmension as a concept, explains the dYmension tech stack and documents procedures for deploying an application to dYmension.

This is an open-source community effort, so feel free to suggest new topics by creating an issue in the [GitHub](https://github.com/dymensionxyz/docs/issues), add new content and provide examples wherever you think might be helpful. All documentation can be edited via GitHub.

## A Hitchhiker's Guide to dYmension

### Overview

dYmension introduces robust infrastructure and tools for building application-specific rollups on top of a specialized settlement layer. dYmension is akin to a hub and factory for such applications. dYmension applications scale with the segregation of resource consumption while plugging into an inter-connected, decentralized and trust-minimized environment. dYmension is infrastructure that glues traditional and reliable web2-like instances with the ownership and connectivity advantages of the decentralized internet.

dYmension follows a modular blockchain architecture design that decouples different functions of a ‘Monolithic’ blockchain for greater performance and scalability. In dYmension each application is its own execution environment and the dYmension hub is the settlement layer. Various data availability providers will co-exist in a modular future; thus, dYmension is designed to be data availability agnostic, enabling RollApps to easily choose their data availability provider.

### The dYmension Hub

- [Overview](/docs/hub/overview.md) - _ Overview of The dYmension Hub _
- [Node Runners](/docs/hub/node-runner.md) - _ Breakdown on how to run a node in the Hub _
- [Interact with The Hub](/docs/hub/interact.md) - _ Breakdown on how to use the Hub _

### RollApps

- [Overview](/docs/rollapps/overview.md) - _ Overview of dYmension applications _
- [RDK](#) - _ How dYmension makes deploying an application easy _
- [Inter-RollApp Communication](#) - _ How to transfer across RollApps _
- [Deploying an app](#) - _ How to deploy an application to dYmension _
- [Inteacting with RollApps](#) - _ Breakdown on how to interact with RollApps _
