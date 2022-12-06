---
title: "Set Up Your Work Environment"
order: 2
description: All you need for the hands-on sections
slug: setup
---

:::info Note
Installing the appropriate version of Go and Ignite CLI are required for all RollApp tutorials. Please install the following:
:::

### Go (1.18)

The appropriate version of Go is required to develop with Dymension's RDK. If you do not have go installed on your system, head to the [Go download and install page](https://go.dev/dl/).

### Ignite (v0.23.0)

Ignite CLI is an easy-to-use CLI tool for creating and maintaining sovereign application-specific blockchains. Blockchains created with Ignite CLI use Cosmos SDK and Tendermint by default. We will utilize Dymension's RDK and Dymint as drop-in replacements for the Cosmos SDK and Tendermint, respectively.

We will be utilizing <b>Ignite v0.23.0</b>:

```bash
rm $(which ignite)
git clone https://github.com/ignite/cli.git
cd cli
git checkout v0.23.0
make install
```
