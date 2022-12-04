# CosmWasm RollApp

In this tutorial we will demonstrate how to deploy a smart contract in [Rust](https://www.rust-lang.org/) using the CosmWasm virtual machine. CosmWasm is a smart contracts platform built for the Cosmos ecosystem by making use of WebAssembly (Wasm).

With the CosmWasm virtual machine you get the safety and power of Rust based smart contracts in your own blockchain. CosmWasm is a powerful framework with inherit safety features such as prevention of re-entrancy attacks (a common attack surface in the EVM).

We highly recommend reading the fantastic CosmWasm documentation [here](https://docs.cosmwasm.com/docs/1.0/). This will provide a general understanding of some of the core feature of CosmWasm. Coupling the safety and ease-of-use of CosmWasm with the flexibility and speed of a RollApps is a powerful blockchain framework.

The CosmWasm smart contract we will demonstrate in this tutorial is one provided by the CosmWasm team for Nameservice purchasing. You can check out the contract [here](https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice).

# Install the CosmWasm VM for your RollApp

```bash
git clone https://github.com/dymensionxyz/wasm.git --branch v0.1.3-alpha
cd wasm
go mod tidy
go mod download
make install
```

Once installed move on [next](../register-rollapp.md) to registering your RollApp!
