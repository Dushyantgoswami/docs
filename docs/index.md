---
title: "Developer Documentation"
slug: "/"
hidden: false
sidebar_position: 0
hide_table_of_contents: true
---

# dYmension Documentation Portal

This documentation is designed to help you build and interact with dYmension. It cover dYmension as a concept, explains the dYmension tech stack and documents procedures for deploying an application to dYmension.

This is an open-source community effort, so feel free to suggest new topics by creating an issue in the [GitHub](https://github.com/dymensionxyz/docs/issues), add new content and provide examples wherever you think might be helpful. All documentation can be edited via GitHub.

## A Hitchhiker's Guide to dYmension

### Overview

dYmension introduces robust infrastructure and tools for building application-specific rollups on top of a specialized settlement layer. dYmension is akin to a hub and factory for such applications. dYmension applications scale with the segregation of resource consumption while plugging into an inter-connected, decentralized and trust-minimized environment. dYmension is infrastructure that glues traditional and reliable web2-like instances with the ownership and connectivity advantages of the decentralized internet.

dYmension follows a modular blockchain architecture design that decouples different functions of a ‘Monolithic’ blockchain for greater performance and scalability. In dYmension each application is its own execution environment and the dYmension hub is the settlement layer. Various data availability providers will co-exist in a modular future; thus, dYmension is designed to be data availability agnostic, enabling RollApps to easily choose their data availability provider.

### Concepts

<div class="docs-card-container">
<div class="row row-cols-1 row-cols-md-3a g-4">
  
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column" >
    <a href="guides/getting-started" class="card-title card-link stretched-link"> <h2>Getting started</h2></a>
    <p class="card-text">Begin by setting up your Aptos development environment.</p>
</div>
  </div>
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column">
    <a href="tutorials/aptos-quickstarts/" class="card-title card-link stretched-link"> <h2>Run quickstart tutorials</h2></a>
    <p class="card-text">Submit your first transaction, write your first Move module, deploy your first coin, and more.</p>
</div>
</div>
</div>
</div>

## Concepts and guides

<div class="docs-card-container">
<div class="row row-cols-1 row-cols-md-2a g-4">
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column">
    <a href="concepts/aptos-concepts" class="card-title card-link stretched-link"> <h2>Concepts</h2></a>
    <p class="card-text">Learn the key concepts of the Aptos Blockchain, including transactions, accounts, gas and transaction fees, nodes, and more. </p>
</div>
</div>
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column" >
    <a href="guides/aptos-guides" class="card-title card-link stretched-link"> <h2>How it works</h2></a>
    <p class="card-text">How does interacting with the Aptos Blockchain work, how Move works on Aptos, how to create a signed transaction, and more.</p>
</div>
  </div>
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column">
    <a href="guides/move-guides/move-on-aptos" class="card-title card-link stretched-link"> <h2>Move on Aptos</h2></a>
    <p class="card-text">Learn how Move works on the Aptos Blockchain.</p>
</div>
</div>
</div>
</div>

## Nodes

<div class="docs-card-container">
<div class="row row-cols-1 row-cols-md-3a g-4">
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column" >
    <a href="nodes/nodes-index" class="card-title card-link stretched-link"> <h2>Run a Validator or a FullNode</h2></a>
    <p class="card-text">Install and run a Validator or a FullNode.</p>
</div>
</div>
  <div class="col">
    <div class="card card-body h-100 d-flex flex-column"  >
    <a href="nodes/nodes-index#for-a-local-testnet" class="card-title card-link stretched-link"> <h2>Run a local testnet</h2></a>
    <p class="card-text">Run a Validator node on your local testnet.</p>
</div>
  </div>
  
</div>
</div>

## SDKs and APIs

<div class="docs-card-container">
<div class="row row-cols-1 row-cols-md-3a g-4">
  <div class="col">
    <div class="card h-100" >
    <div class="card-body d-flex flex-column" >
    <a href="https://aptos-labs.github.io/ts-sdk-doc/" class="card-title card-link stretched-link"> <h2>Typescript SDK</h2></a>
    <p class="card-text">API reference for transacting with the Aptos Blockchain.</p>
</div>
</div>
</div>
  <div class="col">
  <div class="card h-100" >
    <div class="card-body d-flex flex-column"  >
    <a href="https://fullnode.devnet.aptoslabs.com/v1/spec#/" class="card-title card-link stretched-link"> <h2>REST API</h2></a>
    <p class="card-text">Reference for the REST API to interact with the Aptos Blockchain.</p>
</div>
</div>
</div>
</div>
</div>
