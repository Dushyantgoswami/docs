---
title: Install CosmWasm VM
slug: Install
---

First, we'll install the branch of Wasm that includes Dymension's replacement for Tendermint, [Dymint](https://github.com/dymensionxyz/dymint). The current version uses a mock data availability and settlement layer configuration.

If you'd like to utilize the running base layers of the [Get Started section](/docs/develop/get-started/setup.mdx) please run a [RDK RollApp](/docs/develop/build/rdk/start.md). Documentation updates in the near future will provide instructions on how to publish data to live testnet environments from the CosmWasm RollApp.

This CosmWasm RollApp tutorial is helpful for building RollApps on your local machine to get a feel for developing with Wasm in Dymension. To get started we will first need to download Dymension's fork of Wasm:

```bash
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.3-alpha
cd wasm
```

Next we will download all of the modules in the dependency graph, ensure all imports are satisified, and move the binaries to the appropriate GOPATH. For setting up GOPATH please visit the [Get Started section](/docs/develop/get-started/setup.mdx) and the official [Go installation tutorial](https://go.dev/doc/install).

```
go mod tidy
go mod download
make install
```

Now that you've installed the Ethermint binaries and moved them to the appropriate path you can run the following command to see the helpful CLI inputs:

```
wasmd --help
```

Next we can move on to scaffolding and running our CosmWasm RollApp...
