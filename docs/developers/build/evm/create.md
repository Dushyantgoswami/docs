---
title: "Create a smart contract"
order: 3
slug: create
---

# Create a solidity smart contract

In the next section we will go over on how to create a [truffle](https://trufflesuite.com/) project
which we'll use for development of the solidity smart contract.

## Create and init a truffle project

Create a new directory to host the contracts and initialize it:

```sh
mkdir ethermint-truffle && cd ethermint-truffle

truffle init
```

## Create the solidity contract

Create `contracts/Counter.sol` containing the following contract:

```js
contract Counter {
  uint256 counter = 0;

  function add() public {
    counter++;
  }

  function subtract() public {
    counter--;
  }

  function getCounter() public view returns (uint256) {
    return counter;
  }
}
```

Create `test/counter_test.js` containing the following tests:

```js
const Counter = artifacts.require("Counter");

contract("Counter", (accounts) => {
    const from = accounts[0];
    let counter;

    before(async () => {
        counter = await Counter.new();
    });

    it("should add", async () => {
        await counter.add();
        let count = await counter.getCounter();
        assert(count == 1, `count was ${count}`);
    });
});
```

## Edit the truffle config

In the same directory open `truffle-config.js` and uncomment the development section in networks:

```js
development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 8545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
}
```

## Compile the contract

```sh
truffle compile
```

We now have a complied solidity contract! in the next section we'll go over on how to deploy and test it.
