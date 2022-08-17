# Glossary

### C

<details>
    <summary>Chain in Chain</summary>
    dYmension introduces a novel dispute mechanism which implements a simulated chain environment embedded within the settlement chain, referred to as ‘Chain in Chain’ (CIC). CIC emulates the exact context in which a transaction is executed, resulting in a deterministic output. Thus, CIC is capable of resolving disputes in various execution environments, expanding the capabilities and flexibility of the rollup execution spectrum.
</details>

### F

<details>
    <summary>Fraud Dispute</summary>
</details>

### I

<details>
    <summary>Inter-Rollup Communication</summary>
    IRC is an IBC based protocol which provides safe message transferring between dYmension RollApps. IRC leverages the common communication ground of all dYmension RollApps, the dYmension settlement hub.
</details>

### M

<details>
    <summary>Modular Blockchain</summary>
</details>

### O

<details>
    <summary>Optimistic Rollups</summary>
</details>

### R

<details>
    <summary>RDK - RollApp Development Kit</summary>
    dYmension’s rollup factory takes its inspiration from the Cosmos ecosystem which introduced the successful Cosmos SDK. A RollApp instance on dYmension is an application-specific rollup (which we refer to as RollApp), built by using the dYmension RollApp Development Kit, termed RDK. The development kit is a pre-packaged set of generic modules which enable compatible Cosmos SDK functionality, such as creating accounts and token management. The RDK  
    simplifies the process of deploying rollups on top of dYmension’s settlement layer.
</details>

### S

<details>
    <summary>Settlement Hub</summary>
    dYmension settlement hub is a Cosmos SDK Proof-of-Stake chain, that utilizes the Tendermint Core state replication model for networking and consensus. Contrary to a monolithic blockchain, dYmension’s settlement layer is specifically designed to provide a specialized service optimized for rollups. As such rollup servicing logic is embedded in the settlement layer, an attribute known as ‘enshrined rollups’, increasing seamless cooperation between RollApps and the settlement hub.
</details>
