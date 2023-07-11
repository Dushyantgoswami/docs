---
title: "Create a smart contract"
slug: create
---

In this section we will go over how to deploy a NFT contract to your EVM RollApp. NFT (ERC-721) is a popular Ethereum token standard generally associated with pictures of monkeys, penguins, and feet.

We will be using the [Remix IDE](https://remix.ethereum.org/) a web-based IDE that is useful for testing and deploying EVM smart contracts.

### Create a Solidity file

In `Remix` there is a `Contracts` folder on the sidebar. Let's create a new file called `NFT.sol`.

### Import ERC-721

Now that we have the `NFT.sol` file open we can import the required dependencies:

-   Specify the Solidity compiler for our file, in our case we will be using `0.8.19` version of Solidity
-   Import a helper file for returning `String` types
-   Import ERC-721 contract built by `transmissions11` that is optimized for low gas consumption

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol";
```

### Build your contract

Now that we've imported the required files, we can build our custom NFT implementation.

In the `constructor` function we will initialize the `name` and `symbol` for the NFT.

```js
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

Let's continue and deploy the NFT contract to the running EVM RollApp!

If you do not have a RollApp instance running please return after running a [EVM RollApp](../roller-quick/install.md).
