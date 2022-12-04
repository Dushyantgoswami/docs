---
title: "Install a Virtual Machine"
order: 1
slug: install-vm
---

## Install the binary CW

```bash
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.3-alpha && cd wasm
go mod tidy
go mod download
make install
```

## Clone the repo EVM

```bash
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.2-alpha-ethermint-v0.18.0
cd ethermint
go mod tidy
go mod download
make install
```
