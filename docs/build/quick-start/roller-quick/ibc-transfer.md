---
title: "IBC transfer"
slug: ibc-transfer
---

Now that we have an active IBC-enabled RollApp, let's transfer tokens using an IBC transaction from your RollApp to the Dymension Hub faucet address at `dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5`.

Using this faucet, users will be able to request tokens to play around with your RollApp.

:::info NOTE:
 Make sure you use the right source channel. The source channel can be found in the roller [Run](run) terminal output.
 Usually if all works smoothly the default source channel is channel-0.
:::

Now lets transfer some tokens to the faucet address:

```
rollapp_evm tx ibc-transfer transfer transfer <src-channel> dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 1000000000000000000<base-denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```
:::warning NOTE:
if you've set your denom to be e.g `XYZ`, the value of the `<base-denom>` should be `uXYZ` where the value after the `u` is case sensitive.
:::

:::info Note:
The large amount of `0`s for the RollApp denom are due to the fact that the `base denom` is defined as 10^18 for the `denom` as noted in the [initialization](/docs/build/quick-start/roller-quick/initialize.mdx) section.
This is similar to how Ethereum uses `wei` as the base unit and `ether` as the main unit.
:::

Users should expect an approximately 15 minute delay between IBC transaction submission and receipt at the destination address.
This is in order to simulate the fraud proof period where only after it's passed the funds are available on the Dymension Hub.

Run the following command to check the balance of your RollApp token on the Dymension Hub's devnet faucet channel on [Discord](https://discord.com/invite/dymension):

```
$balances dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 <rollapp-id>
```

Once there are RollApp tokens in the Dymension Hub devnet faucet, users will be able to request tokens with the following command:

```
$request <user-address> <rollapp-id>
```

From there it is recommended to utilize the [Portal](https://portal.dymension.xyz/) to IBC transfer to the respective RollApp.

Next lets go over on how to export your keys.
