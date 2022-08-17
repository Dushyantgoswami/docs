# Glossary

### A

<details>
    <summary>Autonomous rollups</summary>
    A type of rollup that establishes its own validity rules while delegating responsibilities for determining the canonical state to an underlying settlement layer.  
</details>

### B

<details>
    <summary>Batching</summary>
    Sequencers gather executed transaction data and store it on the data layer for public availability and verification. The frequency of data batching is decided by the Sequencer, adjusting for their application needs.
</details>

### C

<details>
    <summary>Chain in Chain</summary>
    dYmension introduces a novel dispute mechanism which implements a simulated chain environment embedded within the settlement chain, referred to as ‘Chain in Chain’ (CIC). CIC emulates the exact context in which a transaction is executed, resulting in a deterministic output. Thus, CIC is capable of resolving disputes in various execution environments, expanding the capabilities and flexibility of the rollup execution spectrum.
</details>

<details>
    <summary>Cosmos SDK</summary>
    The Cosmos SDK is an open-source framework for building public Proof-of-Stake (PoS) blockchains. Blockchains built with the Cosmos SDK are generally referred to as application-specific blockchains.
</details>

### D

<details>
    <summary>Data availability problem</summary>
    The data availability problem states: If the block proposer does not publish all of the data no one would be able to detect hidden transactions. <br /> <br />
    If a block producer just publishes the block header but not the transaction data, then full nodes won’t be able to check if the transactions are valid and generate fraud proofs if they’re not valid. It is a requirement that block producers must publish all the data for their blocks, but we need a way to enforce this.<br /> <br />

</details>

<details>
    <summary>Dispute Period</summary>
    
</details>

### E

<details>
    <summary>Execution environment</summary>
    
</details>

<details>
    <summary>Embedded AMM</summary>
    
</details>

### F

<details>
    <summary>Fraud Proof</summary>
</details>

### H

<details>
    <summary>Honest majority assumption</summary>
    
</details>

<details>
    <summary>Honest minority assumption</summary>
    
</details>

### I

<details>
    <summary>Inter-Blockchain Communication (IBC)</summary>
    
</details>

<details>
    <summary>Inter-Rollup Communication (IRC)</summary>
    IRC is an IBC based protocol which provides safe message transferring between dYmension RollApps. IRC leverages the common communication ground of all dYmension RollApps, the dYmension settlement hub.
</details>

### L

<details>
    <summary>Light Client</summary>
    
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
    <summary>RollApp</summary>
    
</details>

<details>
    <summary>RollApp Development Kit (RDK)</summary>
    dYmension’s rollup factory takes its inspiration from the Cosmos ecosystem which introduced the successful Cosmos SDK. A RollApp instance on dYmension is an application-specific rollup (which we refer to as RollApp), built by using the dYmension RollApp Development Kit, termed RDK. The development kit is a pre-packaged set of generic modules which enable compatible Cosmos SDK functionality, such as creating accounts and token management. The RDK  
    simplifies the process of deploying rollups on top of dYmension’s settlement layer.
</details>

### S

<details>
    <summary>Settlement Hub</summary>
    dYmension settlement hub is a Cosmos SDK Proof-of-Stake chain, that utilizes the Tendermint Core state replication model for networking and consensus. Contrary to a monolithic blockchain, dYmension’s settlement layer is specifically designed to provide a specialized service optimized for rollups. As such rollup servicing logic is embedded in the settlement layer, an attribute known as ‘enshrined rollups’, increasing seamless cooperation between RollApps and the settlement hub.
</details>

<details>
    <summary>Sequencers</summary>
    
</details>

<details>
    <summary>Sharding</summary>
    One way of increasing the throughput of a blockchain is to split the blockchain into multiple chains called shards. The point of sharding is to split up the block producers in the network so that instead of every block producer processing every transaction, they split up their processing power into different shards that only process some transactions. RollApps are execution environment shards, Sequencers and participating full nodes network transactions and maintain a light client of the settlement layer for updating state and connecting to other execution shards. 
</details>

<details>
    <summary>Shared Security</summary>
    
</details>

<details>
    <summary>Slashing</summary>
    
</details>

<details>
    <summary>Staking</summary>
    
</details>

### V

<details>
    <summary>Verifiers</summary>
    
</details>
