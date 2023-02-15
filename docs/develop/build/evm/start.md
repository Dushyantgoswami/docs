---
title: EVM
slug: evm
---

In the following tutorial we will demonstrate how to deploy a [Solidity](https://docs.soliditylang.org/) smart contract using [Remix IDE](https://remix.ethereum.org/) to an EVM RollApp. The EVM RollApp utilizes [Ethermint](https://github.com/evmos/ethermint) built by the Evmos team which simulates the Ethereum Virtual Machine in the Cosmos stack. [Dymint](https://github.com/dymensionxyz/dymint), replaces Tendermint's conesensus engine enabling low latent app-chains.

The tutorial includes references to Remix IDE which is a web application for quick testing and deployment of primarily EVM compatible smart contracts. For production deployments it is recommmended to use a testing development suite such as [Foundry](https://book.getfoundry.sh/), [Hardhat](https://hardhat.org/), or others recommended by the developer community.

### Required installations

#### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Setup page and install Go](/docs/develop/get-started/setup.mdx).
