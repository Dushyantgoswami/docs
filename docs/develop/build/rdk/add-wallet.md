---
title: "Integrate Keplr Wallet"
slug: add-keplr-wallet
---

## Adding the RollApp network

Make sure you have the [Keplr extension](https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en) installed in your browser and configured with an account.

CD into the `checkersd` directory and run the following command in order to install a Keplr helper for adding new local networks to the wallet:

```bash
cd keplr && npm install && npm run dev
```

Open the [tool interface](http://localhost:8081/) and follow the next instructions:

1. Update the relevant fields if necessary (in case nothing has changed in the setup phase this step may be skipped).
2. Click `Submit`.
3. A Keplr pop-up should appear. Click the `Approve` button to add the network to the list of supported networks.
4. Open the Keplr extension and change the network (the selector in the top) to the RollApp network (default: `Dymension-checkers`).

## Send tokens to the wallet

Copy the account address (by clicking on the address at the top of the Keplr extension) and set the `ACCOUNT_ADDRESS` variable with the copied value:

```sh
ACCOUNT_ADDRESS=<keplr-account-address>
```

Send a transaction from the RollApp account to the account address shown in the Keplr wallet:

```sh
KEY_NAME=test-key

checkersd tx bank send $(checkersd keys show $KEY_NAME -a) $ACCOUNT_ADDRESS 1000000000ucheckers
```

Your account balance should now show 1000 checkers (if not, try refreshing the wallet or change and return to the network).
