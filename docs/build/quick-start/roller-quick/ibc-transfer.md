---
title: "IBC transfer"
slug: ibc-transfer
---

Now that we have an active IBC-enabled RollApp, let's transfer tokens using an IBC transaction from your RollApp to the Dymension Hub faucet address at `dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5`.

Using this faucet, users will be able to request tokens to play around with your RollApp.

:::info NOTE:
When making a faucet request, you will receive 500 \* 10^{decimal-points} base tokens.
To ensure a smooth token distribution process for your network, it is crucial to provide the faucet with an adequate amount of tokens (in multiples of 500).
:::

### Transfer IBC Tokens

First, let's find the source channel for our RollApp:

```bash
roller relayer channel show
```

The output should look similar to the following:

```bash
💈 Relayer Channels: src, channel-0 <-> channel-1, dst
```

The source channel, in this case `channel-0`, will be used in the following command and will be referred to as `<src-channel>`.

Next, let's make the actual transfer:

:::warning NOTE:
if the following command, if you've set your denom to be e.g `XYZ`, the value of the `<base-denom>` should be `uXYZ` where the value after the `u` is case sensitive.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="guide">
<TabItem value="EVM RollApp" label="EVM RollApp">

```
rollapp_evm tx ibc-transfer transfer transfer <src-channel> dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 5000000000000000000000000<base-denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```
</TabItem>

<TabItem value="Custom RollApp" label="Custom RollApp">

```
rollapp tx ibc-transfer transfer transfer <src-channel> dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 5000000000000000000000000<base-denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```
</TabItem>
</Tabs>
````

:::info Note:
The large amount of `0`s for the RollApp denom are due to the fact that the `base denom` is defined as 10^18 for the `denom` as noted in the [initialization](/docs/build/quick-start/roller-quick/initialize.mdx) section.
This is similar to how Ethereum uses `wei` as the base unit and `ether` as the main unit.
:::

Users should expect an approximately 15 minute delay between IBC transaction submission and receipt at the destination address.
This is in order to simulate the fraud proof period where only after it has passed will the funds be available on the Dymension Hub.

````mdx-code-block

<Tabs groupId="guide">
<TabItem value="Froopyland" label="Froopyland">

Run the following command to check the balance of your RollApp token on the Dymension Hub's froopyland faucet [discord channel](https://discord.com/channels/956961633165529098/1143231362468434022):

</TabItem>

<TabItem value="Devnet" label="Devnet">

Run the following command to check the balance of your RollApp token on the Dymension Hub's devnet faucet [discord channel](https://discord.com/channels/956961633165529098/1125047988247593010):

</TabItem>
</Tabs>
````

:::info Note:
It may take up to 5 minutes until your balance is available in the faucet
:::

```
$balances dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 <rollapp-id>
```

Once there are RollApp tokens in the Dymension Hub devnet faucet, users will be able to request tokens with the following command:

```
$request <user-address> <rollapp-id>
```

From there it is recommended to utilize the [Portal](https://portal.dymension.xyz/) for IBC transfers to the respective RollApp.

Next lets go over on how to export your keys.
