---
title: "Modular Architecture Introduction"
slug: "modular-intro"
hide_table_of_contents: true
---

In order to understand how the dymension protocol works it is first important to abstract the general functionalities a blockchain provides into the following:

- <b>Execution</b> - Transaction processing and state computation.
- <b>Settlement & Consensus</b> - Enforcing the protocol rules, ensuring the order and state of the blockchain is agreed upon by all participants.
- <b>Data</b> - Making sure all the data published is available.

Dymension follows a “*Modular”* blockchain paradigm. By this design, instead of one monolithic blockchain preforming all above functionalities, the responsibilities are segregated to multiple layers where each is built from the ground-up to service it’s specific role in the stack.

### The dymension modular stack is as follows:

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

RollApps can be deployed on top of the dymension hub by any developer making use of dymension’s hub connectivity, security and liquidity. As for data availability (DA); dymension is DA agnostic. RollApp developers can choose DA providers which are supported by the dymension Hub according to their cost and security preferences.
