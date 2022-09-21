---
title: "Setup Your Work Environment"
order: 2
description: All you need for the hands-on sections
slug: setup
---

# Setup Your Work Environment

Assuming you've gone through the initial [getting started](../getting-started/intro ) setup [here](../getting-started/setup ), you will only need to install Rust related libraries for this tutorial.

:::info In this section, you can find all you need to install:

- [Docker](https://www.docker.com/)
- [Rust](https://www.rust-lang.org/)

:::

## Install Docker

Containerization technology that enables the creation and use of Linux® containers. To install, head to the [Install Docker Engine page](https://docs.docker.com/engine/install/).

## Install Rust

To work with Rust, you need to install it first. You can find a well-documented install step-by-step in the [Install page from Rust](https://www.rust-lang.org/tools/install).

## Install Rustup

For Mac/Linux users:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
rustup default stable && rustup target list --installed && rustup target add wasm32-unknown-unknown
```

Next let's see how to run a Wasm RollApp sequencer!