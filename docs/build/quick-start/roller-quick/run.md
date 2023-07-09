---
title: "Run"
slug: run
---

Now that we've registered the EVM RollApp on the Dymension Hub we can proceed to begin running the RollApp.

:::info NOTE:
The following command abstracts some of the components required for running an IBC-enabled RollApp. For advanced users or for those interested in learning about the different components of an active RollApp please proceed to the [advanced guide](/docs/build/adv-guide/roller-adv/da-light-client.md) .
:::

To start the EVM RollApp run the following command:

```
roller run
```

Enabling IBC takes a few minutes in which the develoepr is expected to see `starting...`. After which an `active` status will appear with the respective source IBC channels. IBC channels are created to facilitate applications such as token transfers from the RollApp to other ecosystems.

During the `Run` process a RollApp with an IBC connection to the Dymension Hub is started. A status table will appear with information about the RollApp and IBC relayer. Developers should see an output with useful information such as this:

<img class="image--primary" loading="eager" src={require('@site/static/img/roller-status.png').default} alt="background" />

Let's continue and interact with the running IBC-enabled RollApp...
