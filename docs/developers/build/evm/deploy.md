---
title: "Deploy the smart contract"
slug: deploy
---

# Deploy the Solidity contract

Now that we have our [contract created](create.md) let's see how to deploy it to the EVM RollApp
and test it.

## Contract deployment

```sh
truffle migrate --network development
```

## Contract testing

```sh
truffle test --network development
```

Assuming everythign went well, you should see the following message after the tests completed successfully:

```sh
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  Contract: Counter
    ✔ should add (1026ms)


  1 passing (2s)
```

Next, let's see how to connect our EVM RollApp to metamask.
