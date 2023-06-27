---
title: Module manager
slug: modular-manager
---

The module manager of the application is responsible for calling the InitGenesis method of each of the application's modules in order. This order is set by the application developer via the manager's SetOrderGenesisMethod, which is called in the application's constructor function.
