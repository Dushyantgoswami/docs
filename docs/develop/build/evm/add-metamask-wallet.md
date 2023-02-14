---
title: "Integrate Metamask"
slug: add-metamask-wallet
---

Next we'll connect a [Metamask wallet](https://metamask.io/) to our EVM RollApp so we can use it in [Remix IDE](https://remix.ethereum.org/) to deploy a smart contract.

## Adding our EVM RollApp to Metamask

1. Install the [Metamask extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) on your browser.
2. In the extension UI, click the top right avatar and then `Settings` > `Networks` > `Add a network`.
3. Fill in the new network form with the following details:

```yaml
Network Name: EVM RollApp Local

New RPC URL: http://localhost:8545/

Chain ID: 9000

Currency Symbol (optional): tEVMOS
```

## Import a RollApp account to MetaMask

Click again on the top right avatar and select `Import Account` (make sure that the `Private Key` option is selected).

Export your private key by running the following command:

```sh
ethermintd keys unsafe-export-eth-key $KEY --keyring-backend test
```

Paste the exported private key in the form input and click `Import`. Your Metamask account balance should TEVMOS.

## Add Metamask wallet to Remix IDE

On the [Remix IDE](https://remix.ethereum.org/) go to the `DEPLOY & RUN TRANSACTIONS` on the bottom of the sidebar. There you will be able to change the network from the Remix VM and connect to the EVM RollApp node currently running via the Metamask wallet.

Select the `Injected Provider - Metamask` and select address from the imported private keys. Now that we have the wallet and connection setup let's continue to build and deploy our smart contract.
