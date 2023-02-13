---
title: Scaffold EVM
slug: scaffold
---

## Install Ethermint for your RollApp

First, we'll install the branch of Ethermint that includes Dymension's replacement for Tendermint.

```bash
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.2-alpha-ethermint-v0.18.0
cd ethermint
go mod tidy
go mod download
make install
```

## Start the EVM environment

In the Ethermint directory, we've included a helpful bash script that allows you to instantiate and start a local EVM environment.

```bash
cd scripts
```

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following script from within the `ethermint` directory:

```bash
bash init.sh
```

If you would like to run the EVM RollApp with a mock base layer please run the following script from within the `ethermint` directory:

```bash
bash simulation-init.sh
```

This bash script does everything needed to start your EVM environment. Once you're ready move on [next](/docs/develop/build/evm/create.md) to creating a smart contract for your RollApp!
