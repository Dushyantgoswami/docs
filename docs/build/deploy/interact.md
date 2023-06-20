---
title: "Interact"
slug: interact
---

Now that we've set up a working IBC-connected RollApp, let's send an IBC transaction from the RollApp to the Dymension Hub.

Note the source channel (i.e. src-channel) during the [Run](run) stage (i.e. channel-0).

`````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

````mdx-code-block

We will begin by initializing the configuration files of the RollApp. This will include important components such as the RollApp ID, the name of the currency, and location where the RollApp data will be published to.

<Tabs groupId="version">
<TabItem value="bash" label="EVM">

```
rollapp_evm tx ibc-transfer transfer transfer <src-channel> <dst-dym-address> 800<denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

</TabItem>
<TabItem value="zsh" label="Go">

```
rollapp tx ibc-transfer transfer transfer <src-channel> <dst-dym-address> 800<denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

</TabItem>
</Tabs>
`````

Bridging from a RollApp to the Dymension Hub (and furthermore the IBC ecosystem) requires a dispute period to allow fraud proof submission to the Dymension Hub. Users should expect an approximately ~15 minute delay between IBC transaction submission and receipt at the destination address.

Run the following command to check the balance of the destination Dymension Hub address:

```
// TODO
RPC request
```
