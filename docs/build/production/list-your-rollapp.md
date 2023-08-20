---
title: "List RollApp"
slug: "list-rollapp"
---

Now that we have a RollApp deployed, we can list it on the [Dymension Portal](https://portal.dymension.xyz). This will allow other users to discover and interact with the RollApp.

:::info NOTE:
Only developers with the `RollApp-fam` discord role are eligible for listing their RollApp on the portal.
:::

### Interacting with the RollApp

Developers are expected to provide the following end-points either under [http](https://en.wikipedia.org/wiki/HTTP) or [https](https://en.wikipedia.org/wiki/HTTPS). This will allow for users to be able to interact with your RollApp:

1. RollApp RPC Endpoint (by default `26657`)
2. Rest Endpoint (by default `1317`)
3. JSON RPC Endpoint (by default `8545`. Only relevant for EVM RollApps)

:::info NOTE:
If you are using a self-signed certificate for [https](https://en.wikipedia.org/wiki/HTTPS), please add it to your browser's trusted certificates.
:::

## List RollApp

In order to list your RollApp, please make sure the following requirements are met:

1. Funded the discord faucet with your rollapp token as described in the [IBC transfer](/docs/build/quick-start/roller-quick/ibc-transfer.md) section.
2. You have in mind a short description for your rollapp and a logo.

After you have completed the prerequisites, you can list your RollApp on the [Dymension Portal](https://portal.dymension.xyz) by completing the following [form](https://dymension.typeform.com/RollAppListing).

After submitting the form correctly your RollApp will be listed on the [Dymension Portal](https://portal.dymension.xyz)!
