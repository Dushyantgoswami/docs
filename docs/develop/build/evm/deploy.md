---
title: "Deploy a smart contract"
slug: deploy
---

Now that we've connected our running EVM RollApp node to Metamask let's build and deploy a smart contract to the blockchain. In this section we will go over how to create a NFT contract on the EVM RollApp. Borrowed from [Foundry's](https://book.getfoundry.sh/tutorials/solmate-nft) tutorial on creating a NFT.

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
