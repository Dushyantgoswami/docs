---
title: "Connect RollApp"
slug: connect
---

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
