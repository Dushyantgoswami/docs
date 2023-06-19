---
title: Install EVM
slug: install
---

First, we'll install the branch of Ethermint that includes Dymension's replacement for Tendermint, [Dymint](https://github.com/dymensionxyz/dymint). The current version uses a mock data availability and settlement layer configuration.

If you'd like to utilize the running base layers of the [Get Started section](/docs/develop/get-started/setup.mdx) please run a [RDK RollApp](/docs/develop/build/rdk/start.md). Documentation updates in the near future will provide instructions on how to publish data to live testnet environments from the EVM RollApp.

This EVM RollApp tutorial is helpful for building RollApps on your local machine to get a feel for developing with EVM in Dymension. To get started we will first need to download Dymension's fork of Ethermint:

```bash
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.2-alpha-ethermint-v0.18.0
cd ethermint
```

Next we will download all of the modules in the dependency graph, ensure all imports are satisified, and move the binaries to the appropriate GOPATH. For setting up GOPATH please visit the [Get Started section](/docs/develop/get-started/setup.mdx) and the official [Go installation tutorial](https://go.dev/doc/install).

```
go mod tidy
go mod download
make install
```

Now that you've installed the Ethermint binaries and moved them to the appropriate path you can run the following command to see the helpful CLI inputs:

```
ethermintd --help
```

Next we can move on to scaffolding our EVM RollApp...
