---
title: "Export keys"
slug: export-keys
---

In the [init](./initialize.md) section we allocated the token supply to the RollApp deployer. However, you may want to distribute these tokens to users or friends!

Private keys are a long string of characters used to sign transactions. We will export the Sequencer's private keys so we can easily transfer with metamask.

### Export keys

Run the following command to export the Sequencer's private keys:

```
// TODO
roller export-keys
```

Should return:

```
// TODO
```

### Install metamask

-   Install the [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) extension on your browser
-   In the extension UI, click the top right avatar and then `Settings` > `Networks` > `Add a network`
-   Fill in the new network form with the following details:

```
Network Name: <YOUR-ROLLAPP-NAME>

New RPC URL: <YOUR-ROLLAPP-EVM-RPC>

Chain ID: <YOUR-ROLLAPP-ID>

Currency Symbol (optional): <YOUR-ROLLAPP-DENOM>
```

### Import keys

Click again on the top right avatar and select `Import Account` (make sure that the `Private Key` option is selected).

Paste the [exported private key](#export-keys) in the form input and click `Import`. Your Metamask account balance should show.

### Next steps

That's it! We've successfully built and ran an IBC-enabled RollApp.

Want to develop a custom application with the RollApp? Deploy [EVM smart contracts](/docs/build/develop/evm/overview.md) to your RollApp!
