# EVM RollApp

Did you ever want your own super fast Ethereum blockchain?

With EVM RollApps now you can have your own Ethereum Virtual Machine. Many developers are comfortable with the easy to learn, wildly flexible, and incredibly successful Ethereum Virtual Machine. The incredible work produced by the [EVMOS](https://github.com/evmos/ethermint) team brought the EVM to the Cosmos stack. Now we're taking it one step further into the RollApp ecosystem. What will you re-imagine when you combine the speed and flexibility of RollApps with the ease-of-use and amazing developer community of the Ethereum Virtual Machine.

In the following EVM RollApp tutorial we will demonstrate how to deploy a [Solidity](https://docs.soliditylang.org/) smart contract using [truffle](https://trufflesuite.com/) on top of an EVM RollApp.

The smart contract we will use for this tutorial is a simple contract implementation of a counter functionallity, but this is just a glimpse of the power that combining RollApps with the EVM unlocks. We're looking forward to seeing the ingenuity of EVM developers!

:::info NOTE:
Before we continue please visit our [Setup Work Environment](/docs/developers/start/setup.md) page to make sure you have the proper software installed.
:::

## Install the EVM for your RollApp

```bash
git clone https://github.com/dymensionxyz/ethermint.git --branch v0.1.2-alpha-ethermint-v0.18.0
cd ethermint
go mod tidy
go mod download
make install
```

Once installed move on [next](../register-rollapp.md) to registering your RollApp!
