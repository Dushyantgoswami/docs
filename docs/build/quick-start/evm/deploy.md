---
title: "Deploy"
slug: deploy
---

## Compile the smart contract

Change to the `Solidity Compiler` page and match the Compiler version to the one stated at the top of the smart contract (i.e. 0.8.19).

Then compile `NFT.sol` by pressing the green play button.

Navigate to the Deploy & Run Transactions on the sidebar. Make sure the `Injected Provider - MetaMask` is set to the wallet address with your tokens.

Your smart contract has two parameters in the constructor:

```
string memory _name
string memory _symbol
```

## Deploy the smart contract

Enter the arguments next to the `Deploy` button. Once you've submitted the transaction a Metamask pop-up will appear to sign and deploy the transaction.

<div class="image-container-secondary">
    <img class="image--primary" src={require('@site/static/img/remix-deploy.png').default} alt="dymint-overview" />
</div>
