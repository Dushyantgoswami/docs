---
title: "IBC transfer"
slug: ibc-transfer-adv
---

Now that we have an active IBC-enabled RollApp, let's send an IBC transaction from the RollApp to the Dymension Hub faucet. From their users will be able to request tokens to play around with your RollApp.

`dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5` is the faucet address on the Dymension Hub devnet that will allow users to request RollApp tokens. Note the source channel (i.e. src-channel) during the [Relayer](./relayer.md) stage (i.e. channel-0).

:::info NOTE:
When making a faucet request, you will receive 500 * 10^{decimal-points} base tokens.
To ensure a smooth token distribution process for your network, it is crucial to provide the faucet with an adequate amount of tokens (in multiples of 500).
:::

```
rollapp_evm tx ibc-transfer transfer transfer <src-channel> dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 5000000000000000000000000<denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

Note the large amount of `0`s for the RollApp denom. As noted in the [initialization](/docs/build/adv-guide/roller-adv/initialize-adv.mdx) section the `denom` is 10^18 of the `token symbol` or 18 `0`s. Please note any custom denom metadata implemented in the RDK RollApp.

Users should expect an approximately ~15 minute delay between IBC transaction submission and receipt at the destination address.

Run the following command to check the balance of your RollApp token on the Dymension Hub's devnet faucet channel on [Discord](https://discord.com/invite/dymension):

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

From there it is recommended to utilize the [Portal](https://portal.dymension.xyz/) to IBC transfer to the respective RollApp.

Now that we've interacted with the RollApp, let's export private keys in case we want to transfer ownership or move funds via a wallet...
