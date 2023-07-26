---
title: "Connect Metamask"
slug: connect
---

If you've selected EVM as the application environment the `Run` command will expose RPC end-points. With an EVM RollApp running, we will now connect Metamask.

### Install metamask

Install the [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) extension

### Import keys

If this is your first time setting up the Metamask wallet you can import the RollApp Sequencer's [exported private keys](../roller-quick/export-keys.md). Else, click on the top right avatar and select `Import Account` (make sure that the `Private Key` option is selected).

Paste the exported private key in the form input and click `Import`. Your Metamask account balance should show.

### Add EVM RollApp network

1. In the extension UI, click the top right avatar and then `Settings` > `Networks` > `Add a network`
2. Click `Add a network manually` at the bottom of the page
3. Fill in the new network form with the following details:

```markdown
Network Name: <YOUR-ROLLAPP-NAME>

New RPC URL: <RPC-END-POINT> // Default localhost: http://127.0.0.1:8545

Chain ID: <YOUR-CHAIN-ID> // EIP155 number (middle number of RollApp ID)

Currency Symbol (optional): <YOUR-ROLLAPP-DENOM>
```

Now that we've imported the existing private keys and connected to the runnning EVM RollApp network we can deploy a smart contract to it!
