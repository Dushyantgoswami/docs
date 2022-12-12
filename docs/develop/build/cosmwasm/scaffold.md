---
title: Scaffold CosmWasm VM
slug: scaffold
---

## Install the CosmWasm VM

```bash
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.3-alpha
cd wasm
go mod tidy
go mod download
make install
```

## Start the CosmWasm environment

In the Wasm directory, we've included a helpful bash script that allows you to instantiate and start your RollApp.

```bash
cd scripts
```

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following script from within the `wasm` directory:

```bash
bash init.sh
```

If you would like to run the CosmWasm RollApp with a mock base layer please run the following script from within the `wasm` directory:

```bash
bash simulation-init.sh
```

Once you're ready move on [next](/docs/develop/build/cosmwasm/deploy.md) to deploying a smart contract to your RollApp!
