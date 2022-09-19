---
title: "Set Up Your Work Environment"
order: 2
description: All you need for the hands-on sections
slug: setup
---

# Setup Your Work Environment

On this page, you can find helpful links to set up your work environment for all hands-on sections.

:::info In this section, you can find all you need to install:

- [Go](https://go.dev/)
- [Ignite CLI](https://ignite.com/)
- [Rust](https://www.rust-lang.org/)

:::

## Install Go

You need Go to develop with the dYmension `RDK`. If you still need to install Go on your system, head to the [Go download and install page](https://go.dev/doc/install).

## Install Rust

To work with Rust, you may need to install it first. You can find a well-documented install step-by-step in the [Install page from Rust](https://www.rust-lang.org/tools/install).

## Install Rustup

On Mac/Linux systems, here are the commands for installing it:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

rustup default stable && rustup target list --installed && rustup target add wasm32-unknown-unknown
```
