---
title: "Documentation Portal"
slug: "/"
hidden: false
sidebar_position: 1
hide_table_of_contents: true
---

<div class="card image-card overlay-primary">
    <img class="background" loading="eager" src={require('@site/static/img/background.jpeg').default} alt="background" />
    <div class="card-body">
        <div class="card-body-overlay"></div>
        <p class="card-text"><b>Dymension</b> empowers people to easily deploy their own lightning fast blockchains called <b>RollApps</b>. This documentation serves as the central source for all things Dymension.</p>
    </div>
</div>

<div class="row row-cols-1 row-cols-md-3 main-actions">
    <div class="col">
        <div class="card card-body">
            <a href="learn/modular-intro" class="card-link stretched-link"> 
                <h2 class="card-title">Learn</h2>
            </a>
            <p class="card-text">Your educational guide to Dymension</p>
            <div class="card-actions">
                <button class="action-button">Get Started</button>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card card-body">
            <a href="developers/start/overview" class="card-link stretched-link"> 
                <h2 class="card-title">Develop</h2>
            </a>
            <p class="card-text">Build your own RollApp</p>
            <div class="card-actions">
                <button class="action-button">Build</button>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card card-body">
            <a href="validators/full-node/index" class="card-link stretched-link"> 
                <h2 class="card-title">Full node</h2>
            </a>
            <p class="card-text">Run a Node in the Dymension Network</p>
            <div class="card-actions">
                <button class="action-button">Run a Node</button>
            </div>
        </div>
    </div>
</div>

## What Is Dymension?

Dymension is a network of modular blockchains called RollApps and at the center of it all is the Dymension Hub. Dymension allows anyone to build and deploy their own consensus-free blockchain, a RollApp.

The Dymension Hub is the protocol's settlement layer and acts as decentralized source of truth for the network. The Dymension Hub is a Proof of Stake blockchain which provides consensus, security, and liquidity for RollApps.

RollApps are built with Dymension's RollApp Development Kit (RDK) which is based on the popular [Cosmos SDK](https://docs.cosmos.network/). RollApp developers are able to choose the network token, application logic and virtual machine (e.g EVM, CosmWasm, and more) in which their RollApp operates. A great way to think about Dymension is as an app-chain (Dymension Hub) for app-rollups (RollApps).

For a deeper dive into the Dymension protocol checkout the [learn section](/docs/learn/modular-intro.md), [litepaper](/docs/dymension-litepaper/index.md), and [glossary](/docs/reference/glossary.md).

## Why Dymension?

### Easy Deployment

With dymension building a blockchain doesn't come with the overhead of bootstrapping a validator set. Developers can easily deploy a blockchain as if they are running their own isolated EC2 instance while still remaining true to the decentralized, permission-less, and trust-minimized nature of the blockchain ethos.

### Autonomy

RollApps are autonomous worlds. RollApps set their own logic, decentralization and governance parameters. They are akin to sovereign worlds (i.e. app-chains) but delegate consensus to the Dymension Hub for efficient bootstrapping.

### Value Accrual

Contrary to dApps on general purpose blockchains such as Ethereum, which require users to pay gas fees in the network’s token (i.e. ETH), RollApp end-users pay transaction fees with the application’s native token or whichever other token chosen by the RollApp (e.g. stablecoins, other IBC-enabled-tokens or completely new logic for fee collection).

### Performance

As RollApps outsource consensus to the Dymension Hub, they are capable of delivering substantial throughput and lower latency than consensus constrained blockchains.

In the next sections we'll dive deeper on how Dymension works. We recommend going over it, however this is not a requirement for building a RollApp, so for those who can't wait - skip ahead and start [building!](/docs/developers/start/overview.md)
