---
title: "Register"
slug: register
---

Registering the RollApp adds a namespace in the Dymension Hub to account for the newly initalized RollApp.

Instead of managing a multi-sig smart contract, a developer only needs to register the RollApp with a simple command. Registering the RollApp to the Dymension Hub allows a Sequencer to publish state updates on-chain and furthermore facilitates bridging between ecosystems.

The following command utilizes the addresses generated in the [previous step](initialize) :

```
roller tx register
```

Should return:

```
💈 Rollapp '<rollapp-id>' has been successfully registered on the hub.
```

Let's proceed and run the RollApp...
