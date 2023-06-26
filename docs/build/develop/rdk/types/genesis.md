---
title: Genesis
slug: genesis
---

The module manager of the application is responsible for calling the InitGenesis method of each of the application's modules in order. This order is set by the application developer via the manager's SetOrderGenesisMethod, which is called in the application's constructor function.

The subset of the genesis state defined from a given module is generally defined in a genesis.proto file (more info on how to define protobuf messages). The struct defining the module's subset of the genesis state is usually called GenesisState and contains all the module-related values that need to be initialized during the genesis process.

-   DefaultGenesisState
-   ValidateGenesis
