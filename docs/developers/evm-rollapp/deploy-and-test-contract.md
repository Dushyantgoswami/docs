---
title: "Deploy the smart contract"
order: 4
slug: contract-deployment
---

# Deploy the Solidity contract

Now that we have our [contract created](create-contract.md) let's see how to deploy it to the EVM RollApp
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

Congrats! You have created an EVM RollApp, deployed a contract on top of it and interacted with it.<br/>
If you want to learn more about dYmension and how it works feel free to checkout our [getting-started](../../get-started.md) and [learn](../../learn/modular-intro.md) sections!<br/>
We're curious to see what you'll build next!<br/>
