---
title: "Integrate Metamask"
slug: add-metamask-wallet
---

In this section we'll see how to connect a [Metamask wallet](https://metamask.io/) to our EVM RollApp.

## Adding our EVM RollApp to Metamask

1. Install the [Metamask extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) on your browser.
2. In the extension UI, click the top right avatar and then `Settings` > `Networks` > `Add a network`.
3. Fill in the new network form with the following details:

```yaml
Network Name: EVM RollApp Local

New RPC URL: http://localhost:8545/

Chain ID: 9000

Currency Symbol (optional): TEVMOS
```

## Import a RollApp account to MetaMask

Click again on the top right avatar and select `Import Account` (make sure that the `Private Key` option is selected).

Export your private key by running the following command:

```sh
# the key is taken from the 'init.sh' script founds in the ethermint repo.
KEY="mykey"

ethermintd keys unsafe-export-eth-key $KEY --keyring-backend test
```

Paste the exported private key in the form input and click `Import`.

Your Metamask account balance should now show 99990000 TEVMOS (or a bit less if you interacted previously with the truffle contract).
