---
title: "IBC transfer"
slug: ibc-transfer
---

Now that we have a running IBC-connected RollApp, let's send an IBC transaction from the RollApp to the Dymension Hub faucet. From their users will be able to request tokens to play around with your RollApp.

Note the source channel (i.e. src-channel) during the [Run](run) stage (i.e. channel-0).

```
rollapp_evm tx ibc-transfer transfer transfer <src-channel> <faucet-address> 800<denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

Bridging from a RollApp to the Dymension Hub (and furthermore the IBC ecosystem) requires a dispute period to allow for fraud proof submission to the Dymension Hub.

Users should expect an approximately ~15 minute delay between IBC transaction submission and receipt at the destination address.

Run the following command to check the balance of your RollApp token on the Dymension Hub's faucet:

```
// TODO balance
RPC request
```

Now that we've sent tokens to the faucet, let's send some tokens to friends!
