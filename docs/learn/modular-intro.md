---
title: "Modular Architecture Introduction"
slug: "modular-intro"
hide_table_of_contents: true
---

In order to understand how the dymension protocol works it is first important to breakdown the general functionalities a blockchain provides into the following:

-   <b>Execution</b> - Transaction processing and state computation
-   <b>Settlement & Consensus</b> - Ensuring the order, rules, and state of the blockchain is agreed upon by a majority of the participants
-   <b>Data Availability</b> - Making sure all data is published and available to the public

Dymension follows a “*Modular”* blockchain paradigm. Instead of one monolithic blockchain performing all of the above functionalities, the responsibilities are disaggregated into multiple layers. Each layer is built from the ground-up to service its specific role in the stack.

### The dymension stack:

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-execution.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Execution</h3>
        <p class="card-text">RollApp Chains</p>
    </div>
</div>

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-settlement.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Settlement & Consensus</h3>
        <p class="card-text">The Dymension Hub</p>
    </div>
</div>

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-da.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Data Availability</h3>
        <p class="card-text">DA supported by the dymension protocol</p>
    </div>
</div>

RollApps can be deployed on top of the dymension hub by any developer making use of dymension’s hub connectivity, security, and liquidity. Dymension is DA agnostic, RollApp developers can choose DA providers which are supported by the dymension protocol according to their cost and security preferences.

The technicalities of the dymension infrastructure are abstracted away from RollApp developers. Developers are mainly responsible with the application logic of their RollApp. Dymension is designed for easy RollApp chain bootstrapping and deployment.
