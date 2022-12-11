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
        <p class="card-text"><b>Dymension</b> is a network of easily deployable and lightning fast modular blockchains called <b>RollApps</b>. This documentation serves as the central source for all things Dymension.</p>
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
            <a href="develop/get-started/setup" class="card-link stretched-link"> 
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
            <a href="validate/dymension-hub/overview" class="card-link stretched-link"> 
                <h2 class="card-title">Validate</h2>
            </a>
            <p class="card-text">Secure the Dymension Network</p>
            <div class="card-actions">
                <button class="action-button">Run a Node</button>
           </div>
        </div>
    </div>
</div>

## What Is Dymension?

Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps. At the center of the Dymension network exists the Dymension Hub that provides consensus, security, and liquidity for RollApps.

RollApps are their own blockchains built with Dymension's RollApp Development Kit (RDK), based on the popular [Cosmos SDK](https://docs.cosmos.network/). RollApp developers are able to choose their network token, fully customizable business logic, and application environment (e.g RDK Go modules, EVM, CosmWasm, and more).

For a deeper dive into the Dymension protocol checkout the [learn section](/docs/learn/modular-intro.md), [litepaper](/docs/dymension-litepaper/index.md), and [glossary](/docs/reference/glossary.md).

## Why Dymension?

### Easy Deployment

With Dymension building a blockchain doesn't come with the overhead of bootstrapping a validator set. Developers can easily deploy a blockchain as if they are running their own isolated EC2 instance while still remaining true to the decentralized, permission-less, and trust-minimized nature of the blockchain ethos.

### Autonomy

RollApps are autonomous worlds. RollApps set their own logic, decentralization and governance parameters. They are akin to sovereign worlds (i.e. app-chains) but delegate consensus to the Dymension Hub for efficient bootstrapping.

### Value Accrual

Contrary to dApps on general purpose blockchains such as Ethereum, which require users to pay gas fees in the network’s token (i.e. ETH), RollApp end-users pay transaction fees with the application’s native token or whichever other token chosen by the RollApp (e.g. stablecoins, other IBC-enabled-tokens or completely new logic for fee collection).

### Performance

As RollApps outsource consensus to the Dymension Hub, they are capable of delivering substantial throughput and lower latency than consensus constrained blockchains.

In the next sections we'll dive deeper on how Dymension works. We recommend going over it, however this is not a requirement for building a RollApp, so for those who can't wait - skip ahead and start [building!](/docs/develop/get-started/setup.mdx)
