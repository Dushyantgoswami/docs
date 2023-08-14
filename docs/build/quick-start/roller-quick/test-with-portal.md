---
title: "Test with Portal"
slug: test-with-portal
---

Developers are able to permission-lessly add their RollApp to the IBC section of the [Portal](https://portal.dymension.xyz/) which will appear only on their local machine. This is designed for easy testing of the IBC functionality.

On the `IBC` section of the [Portal](https://portal.dymension.xyz/), select the drop-down networks under `Send From`. There you will see an option called `Add a RollApp manually`.

<div class="image-container-secondary">
    <img class="image--primary" src={require('@site/static/img/add-a-rollapp-manually.png').default} alt="add-a-rollapp" />
</div>

Developers are expected to provide the following end-points under [https](https://en.wikipedia.org/wiki/HTTPS). This will allow for users to be able to interact with your RollApp:

1. RollApp RPC Endpoint (by default `26657`)
2. Rest Endpoint (by default `1317`)
3. JSON RPC Endpoint (by default `8545`)(Only for EVM RollApps)

:::info NOTE:
If you are using a self-signed certificate for [https](https://en.wikipedia.org/wiki/HTTPS), please add it to your browser's trusted certificates.
:::
