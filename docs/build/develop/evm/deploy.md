---
title: "Deploy"
slug: deploy
---

## Compile the smart contract

Change to the `Solidity Compiler` page and match the Compiler version to the one stated at the top of the smart contract (i.e. 0.8.19). Then compile `NFT.sol`. Now you will be able to deploy the smart contract to the Remix VM.

Navigate to the `Deploy & Run Transactions` on the sidebar. Make sure the Remix VM is set as the destination.

Your smart contract has two parameters in the constructor:

```
string memory _name
string memory _symbol
```

## Deploy the smart contract

Enter the arguments next to the `Deploy` button. Once you've submitted the transaction the smart contract will be live on the local instance.
