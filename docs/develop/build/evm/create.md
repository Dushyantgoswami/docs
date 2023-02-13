---
title: "Create a smart contract"
slug: create
---

In this section we will go over how to create a NFT for the EVM RollApp. Borrowed from [Foundry's](https://book.getfoundry.sh/tutorials/solmate-nft) tutorial on creating a NFT.

## Create the solidity contract

Create `contracts/NFT.sol` containing the following contract:

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol";

contract NFT is ERC721 {
    uint256 public currentTokenId;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    function mintTo(address recipient) public payable returns (uint256) {
        uint256 newItemId = ++currentTokenId;
        _safeMint(recipient, newItemId);
        return newItemId;
    }

    function tokenURI(uint256 id) public view virtual override returns (string memory) {
        return Strings.toString(id);
    }
}

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

We now have a complied solidity contract! In the next section we'll go over how to deploy and test it.
