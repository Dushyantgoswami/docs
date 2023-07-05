---
title: Genesis message
slug: genesis
---

The subset of the genesis state defined from a given module is generally defined in a `genesis.proto` file. Create a `genesis.proto` file in the `proto` folder:

```
touch genesis.proto
```

The struct defining the module's subset of the genesis state is usually called `GenesisState` and contains all the module-related values that need to be initialized during the genesis process.

```protobuf
syntax = "proto3";
package rollapp.payment;

option go_package = "github.com/rollapp/x/payment/types";

// GenesisState defines the payment module's genesis state
// We will initialize the payment module with an empty genesis state
message GenesisState {}
```

We've setup the `payment` module for an empty Genesis state. Now that we've defined the `genesis.proto` file we can move ahead and use the Protobuf generating files already in the `scripts` folder.
