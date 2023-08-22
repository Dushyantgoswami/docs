---
title: Genesis message
slug: genesis
---

The subset of the genesis state defined from a given module is generally defined in a `genesis.proto` file.

The struct defining the module's subset of the genesis state is usually called `GenesisState` and contains all the module-related values that need to be initialized during the genesis process.

Create a `genesis.proto` file in the `proto` folder:

```bash
touch proto/genesis.proto
```

And define the `GenesisState` message in the `genesis.proto` file:

```Protobuf
syntax = "proto3";
package hello;

option go_package = "github.com/dymensionxyz/rollapp/x/hello/types";

message GenesisState {}
```
