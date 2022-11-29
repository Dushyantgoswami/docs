---
title: "Modular Architecture Introduction"
slug: "modular-intro"
hide_table_of_contents: true
---

In order to understand how the Dymension protocol works it is first important to breakdown the general functionalities that a blockchain provides:

-   <b>Execution</b> - Transaction processing and state computation
-   <b>Settlement & Consensus</b> - Ensuring the order, rules, and state of the blockchain is agreed upon by a majority of the participants
-   <b>Data Availability</b> - Making sure all data is published and publicly available

Dymension follows a *“Modular”* blockchain paradigm. Instead of one monolithic blockchain performing all of the above functionalities, the responsibilities are disaggregated into multiple layers. Each layer is built from the ground-up to service its specific role in the stack.

### The dymension stack:

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-execution.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Execution</h3>
        <p class="card-text">RollApps</p>
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
        <p class="card-text">DA supported by Dymension</p>
    </div>
</div>

RollApps can be deployed on top of the Dymension Hub by any developer making use of Dymension’s connectivity, security, and liquidity. Dymension is DA agnostic, RollApp developers can choose DA providers which are supported by the Dymension protocol according to their cost and security preferences.

The technicalities of the Dymension infrastructure are abstracted away from RollApp developers. Dymension is designed for easy RollApp bootstrapping and deployment. Developers are mainly responsible with the application logic of their RollApp. Furthermore, Dymension utilizes existing technological components such that developers that are familiar with a paritcular software (i.e. CosmWasm VM) may utilize the technology that they are most comfortable with.
