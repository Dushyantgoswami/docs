---
title: "Dymension ELI5"
slug: "eli5"
hide_table_of_contents: true
---

Dymension is like a full-stack web application where users interact with RollApps (front-end), the Dymension Hub (back-end) acts as the brain of the ecosystem, and the data availability networks (database) provide a place to publicize data.

<b>RollApps</b> are the interactive face of the Dymension network. Like any web application, each RollApp is fully customizable. You can build games, DeFi, NFT projects and much more!
<br />
<br />

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-execution.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Front-end</h3>
        <p class="card-text">RollApps</p>
    </div>
</div>

<b>The Dymension Hub</b> plays a similar role to a server in a traditional web application. It orchestrates the network by handling requests from RollApps and facilitating communication among them.

<br />
<br />

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-settlement.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Back-end</h3>
        <p class="card-text">Dymension Hub</p>
    </div>
</div>

<b> Data Availability Networks </b> hold a role similar to a database in a web application, providing data as needed. These networks store transaction data which are confirmed by the Dymension Hub, analogous to a traditional database storing and serving data upon request.

<br />
<br />

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-da.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Database</h3>
        <p class="card-text">Data availability networks</p>
    </div>
</div>

Next let's dive a bit deeper and learn about the inner-working of the Dymension network!
