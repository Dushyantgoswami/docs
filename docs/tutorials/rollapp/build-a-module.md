---
title: "Build a Module"
order: 6
description: An easy way to build your application-specific rollup
tag: deep-dive
---

# Build the checkers module

The dYmension RDK is built on top of the Cosmos SDK. This means that building a module is the same process. As firm believers of DRY we point you to the amazing tutorial by the Cosmos Academy [here](https://tutorials.cosmos.network/academy/3-my-own-chain/exercise-intro.html) to learn about building a Cosmos SDK module and at the same time a dYmension RDK module.

Cosmos SDK enables developers to build modules that implement the business logic of their application.

Modules are by convention defined in the ./x/ subfolder (e.g. the bank module will be defined in the ./x/bank folder). They generally share the same core components:

- Keeper: used to access the module's store(s) and update the state.
- Msg service: used to process messages when they are routed to the module by BaseApp and trigger state-transitions.
- Query service: used to process user queries when they are routed to the module by BaseApp.
- Interfaces: for end users to query the subset of the state defined by the module and create messages of the custom types defined in the module.

In addition to these components, modules implement the AppModule interface in order to be managed by the module manager.

Take your time in understanding how to build a module. When you're ready to continue, let's run the RollApp.
