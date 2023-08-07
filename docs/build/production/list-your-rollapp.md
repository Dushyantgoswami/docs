---
title: "List RollApp"
slug: "list-rollapp"
---

Now that we have a RollApp deployed, we can list it on the [Dymension Portal](https://portal.dymension.xyz). This will allow other users to discover and interact with the RollApp.

### Interacting with the RollApp

Developers will are expected to provide the following end-points under [https](https://en.wikipedia.org/wiki/HTTPS). This will allow for users to be able to interact with your RollApp:

1. RollApp RPC Endpoint (by default `26657`)
2. Rest Endpoint (by default `1317`)
3. JSON RPC Endpoint (by default `8545`)(Only for EVM RollApps)

:::info NOTE:
If you are using a self-signed certificate for [https](https://en.wikipedia.org/wiki/HTTPS), please add it to your browser's trusted certificates.
:::

### IBC Testing

Developers are able to permission-lessly add their RollApp to the IBC section of the Portal which will appear only on their local machine. This is designed for easy testing of the IBC functionality.

On the `IBC` section of the `Portal`, select the drop-down networks under `Send From`. There you will see an option called `Add a RollApp manually`.

<div class="image-container-secondary">
    <img class="image--primary" src={require('@site/static/img/add-a-rollapp-manually.png').default} alt="add-a-rollapp" />
</div>

Enter the information requested as specified [above](#interacting-with-the-rollapp).

## List RollApp

For developers with the `RollApp-fam` discord role, they're are eligible for listing the RollApp so everyone can see. Make sure to have completed the following requirements:

1. Funded the discord faucet with your rollapp token as described in the [IBC transfer](/docs/build/quick-start/roller-quick/ibc-transfer.md) section.
2. You have in mind a short description for your rollapp and a logo.

After you have completed the prerequisites, you can list your RollApp on the [Dymension Portal](https://portal.dymension.xyz) by completing the following [form](https://dymension.typeform.com/RollAppListing).

After submitting the form correctly your RollApp will be listed on the [Dymension Portal](https://portal.dymension.xyz)!
