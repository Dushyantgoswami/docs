---
title: "Interact"
slug: interact
---

## Compile the smart contract

Change to the `Solidity Compiler` page and match the Compiler version to the one stated at the top of the smart contract (i.e. 0.8.19). Then compile `NFT.sol`. Now you will be able to deploy the smart contract to the EVM RollApp.

Navigate to the `Deploy & Run Transactions` on the sidebar. Make sure the Remix VM is set as the destination.

Your smart contract has two parameters in the constructor:

```
string memory _name
string memory _symbol
```

## Deploy the smart contract

Enter the arguments next to the `Deploy` button. When you select `Deploy` a pop-up MetaMask should appear and will ask you to sign the transaction to deploy the contract to your EVM RollApp.

Once you've signed the transaction, the smart contract will be live on the local instance.

## Interact with the smart contract

Copy your Remix VM address and paste it below in the `mintTo` section. After submitting the address the address will be minted an NFT!
