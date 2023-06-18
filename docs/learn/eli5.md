---
title: "Dymension ELI5"
slug: "eli5"
hide_table_of_contents: true
---

Dymension can be seen as a busy city filled with interconnected highways. Just like how a city's traffic system manages cars, Dymension is a system that manages different blockchains.

In the [Cosmos ecosystem](https://cosmos.network/) each blockchain is like a car that needs its own fuel to run. That fuel is economic security, which helps prevent operators (called validators) from publishing transactions that shouldn't be accepted.

Dymension does things a bit differently. It's like a network of electric cars that all get their energy from the charging hub - the Dymension Hub. That means each blockchain doesn't need its own supply of fuel (economic security). It's a simpler, more efficient way to get around.

### Dymension stack:

<b>The Execution Lane</b> - This is where transactions are processed off-chain (out of the main traffic) and only the important updates are published on-chain (brought into the main flow). It's a bit like taking a shortcut to avoid traffic jams and only getting on the highway when necessary.
<br /><br />

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-execution.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Execution</h3>
        <p class="card-text">RollApps</p>
    </div>
</div>

<b>The Settlement and Consensus Roundabout</b> - This part of Dymension makes sure all the updates published on-chain follow the correct rules. If they don't, they are rejected - kind of like a traffic cop that checks if cars are following the rules of the road.
<br /><br />

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-settlement.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Settlement & Consensus</h3>
        <p class="card-text">Dymension Hub</p>
    </div>
</div>

<b>The Data Availability Superhighway</b> - This is where all the data is published for everyone to see and check. It's like a giant billboard displaying all the necessary information, ensuring everything is transparent.
<br /><br />

<div class="card image-card light-background">
    <img class="background" src={require('./images/modular-architecture-da.png').default} alt="background" />
    <div class="card-body">
        <h3 class="card-title">Data Availability</h3>
        <p class="card-text">DA providers</p>
    </div>
</div>
