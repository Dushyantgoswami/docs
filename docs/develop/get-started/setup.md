---
title: Let's build a RollApp!
slug: setup
---

:::info NOTE:
The `Get Started` section will demonstrate how set up a Dymension Hub node and Celestia light client for a RollApp to publish state updates and transaction data, respectively. If you would like to build locally with only a RollApp full node, please skip to the relevant RollApp application environment:

-   [RDK modules](/docs/develop/build/rdk/start.md)
-   [CosmWasm](/docs/develop/build/cosmwasm/start.md)
-   [EVM](/docs/develop/build/evm/start.md)

:::

# Installation requirements

#### <b>Go (1.18)</b>

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Go download and install page](https://go.dev/dl/).

#### <b>Ignite (v0.23.0)</b>

Ignite CLI is an easy-to-use CLI tool for creating and maintaining sovereign application-specific blockchains. Blockchains created with Ignite CLI use Cosmos SDK and Tendermint by default. We will utilize Dymension's RDK and Dymint as drop-in replacements for the Cosmos SDK and Tendermint, respectively.

We will be utilizing <b>Ignite v0.23.0</b>:

```bash
rm $(which ignite)
git clone https://github.com/ignite/cli.git
cd cli
git checkout v0.23.0
make install
```
