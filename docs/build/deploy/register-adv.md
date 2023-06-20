---
title: "Register"
slug: register-adv
---

Registering the RollApp adds a namespace in the core logic of the Dymension Hub to account for the newly initalized RollApp.

Instead of managing a multi-sig smart contract, a developer only needs to register the RollApp with a simple command. Registering the RollApp to the Dymension Hub allow a Sequencer to publish state updates on-chain and furthermore facilitate the bridging between ecosystems.

The following command utilizes the public keys generated in the [previous step](initialize-adv) :

```
roller register
```

Should return:

```
💈 Rollapp '<rollapp-id>' has been successfully registered on the hub.
```

Now that we've successfully registered the RollApp to the Dymension Hub let's proceed and run the RollApp.
