---
title: "Build a Module"
order: 6
description: An easy way to build your application-specific rollup
tag: deep-dive
---

# Build the checkers module

The dymension RDK is built on top of the Cosmos SDK. As such, building a new module is the same process as building a new Cosmos SDK module. To start learning how to build a module using the RDK please go over the following [tutorial](https://developers.cosmos.network/academy/3-my-own-chain/exercise-intro.html) by the Cosmos Academy.

Cosmos SDK enables developers to build modules that implement the business logic of their application.

Modules are by convention defined in the ./x/ subfolder (e.g. the bank module will be defined in the ./x/bank folder). They generally share the same core components:

- Keeper: used to access the module's store(s) and update the state.
- Msg service: used to process messages when they are routed to the module by BaseApp and trigger state-transitions.
- Query service: used to process user queries when they are routed to the module by BaseApp.
- Interfaces: for end users to query the subset of the state defined by the module and create messages of the custom types defined in the module.

In addition to these components, modules implement the AppModule interface in order to be managed by the module manager.

Take your time in understanding how to build a module. When you're ready to continue, let's run the RollApp.
