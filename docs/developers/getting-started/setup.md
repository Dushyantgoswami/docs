---
title: "Set Up Your Work Environment"
order: 2
description: All you need for the hands-on sections
slug: setup
---

# Setup Your Work Environment

On this page, you can find helpful links to set up your work environment for all hands-on sections.

:::info In this section, you can find all you need to install:

-   [Go 1.18](https://go.dev/dl/)
-   [Ignite CLI v0.23.0](https://github.com/ignite/cli/releases/tag/v0.23.0)
-   [Docker](https://www.docker.com/)

:::

## Install Go (1.18)

You need Go to develop with the Dymension RDK. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/dl/).

## Install Ignite (v0.23.0)

Ignite CLI is an easy-to-use CLI tool for creating and maintaining sovereign application-specific blockchains. Blockchains created with Ignite CLI use Cosmos SDK and Tendermint by default. We will utilize Dymension's RDK and Dymint as drop-in replacements for the Cosmos SDK and Tendermint, respectively.

We will be utilizing <b>Ignite v0.23.0</b>:

```bash
rm $(which ignite)
git clone https://github.com/ignite/cli.git
cd cli
git checkout v0.23.0
make install
```

## Install Docker

Containerization technology that enables the creation and use of Linux® containers. To install, head to the [Install Docker Engine page](https://docs.docker.com/engine/install/).
