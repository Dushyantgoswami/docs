---
title: "IBC transfer"
slug: ibc-transfer-adv
---

Now that we have an active IBC-enabled RollApp, let's send an IBC transaction from the RollApp to the Dymension Hub faucet. From their users will be able to request tokens to play around with your RollApp.

`dym12ad4lux36lta7d75v2w6je2y386y9s5xp658pz` is the faucet address on the Dymension Hub devnet that will allow users to request RollApp tokens. Note the source channel (i.e. src-channel) during the [Run](run) stage (i.e. channel-0).

```
rollapp_evm tx ibc-transfer transfer transfer <src-channel> dym12ad4lux36lta7d75v2w6je2y386y9s5xp658pz 1000000000000000000<denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

Note the large amount of `0`s for the RollApp denom. As noted in the [initialization](/docs/build/adv-guide/roller-adv/initialize-adv.mdx) section the `denom` is 10^18 of the `token symbol` or 18 `0`s. Please note any custom denom metadata implemented in the RDK RollApp.

Users should expect an approximately ~15 minute delay between IBC transaction submission and receipt at the destination address.

Run the following command to check the balance of your RollApp token on the Dymension Hub's devnet faucet channel on [Discord](https://discord.com/invite/dymension):

```
$balances dym12ad4lux36lta7d75v2w6je2y386y9s5xp658pz <rollapp-id>
```

Once there are RollApp tokens in the Dymension Hub devnet faucet, users will be able to request tokens with the following command:

```
$request <user-address> <rollapp-id>
```

From there it is recommended to utilize the [Portal](https://portal.dymension.xyz/) to IBC transfer to the respective RollApp.

Now that we've interacted with the RollApp, let's export private keys in case we want to transfer ownership or move funds via a wallet...
