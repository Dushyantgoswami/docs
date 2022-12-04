---
title: "Integrate Keplr"
order: 6
slug: integrate-keplr
---

# Integrate Keplr

In the next sections we'll see how to add the [Keplr wallet](https://www.keplr.app/) extension to the browser, add our cosmwasm RollApp to the list of keplr networks and send tokens to the account on the wallet.

## Adding the RollApp network

Make sure you have the [Keplr extension](https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en) installed in your browser and configured with an account.

Cd the `wasm` repo cloned in the [previous step](./run-the-rollapp.md/#install-the-binary) and run the following command in order to install a keplr helper for adding new local networks to the wallet:

```sh
cd keplr && npm install && npm run dev
```

Open the [tool interface](http://localhost:8081/) and follow the next instructions:

1. Update the relevant fields if necessary (in case nothing has changed in the setup phase this step can be skipped).
2. click `Submit`.
3. A Keplr pop-up should appear. Click the `Approve` button to add the network to the list of supported networks.
4. Open the Keplr extension and change the network (the selector in the top) to the RollApp network (default: `Dymension-wasm`).

## Send tokens to the wallet

Copy the account address (by clicking on the address at the top of the Keplr extension) and set the `ACCOUNT_ADDRESS` var with the copied value:

```sh
ACCOUNT_ADDRESS=<keplr-account-address>
```

Send a transaction from the RollApp account to the account address shown in the Keplr wallet:

```sh
KEY_NAME=test-key

wasmd tx bank send $(wasmd keys show $KEY_NAME -a) $ACCOUNT_ADDRESS 1000000000uwasm
```

Your account balance should now show 1000 WASM (if not, try refresh the wallet or change and return the network).<br/>

That's it for this tutorial! We've built a Wasm RollApp, deployed a contract on top of it, interacted with it, setup a Keplr wallet and sent tokens to the wallet adress.
Next, let's see how to build an EVM RollApp!
