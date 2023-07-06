---
title: Keeper setup
slug: keeper-setup
---

A keeper can be considered quite literally to be the gatekeeper of a module's store(s). Each store defined within a module comes with a [storeKey](../types/keys.md), which grants unlimited access to it. Keepers primarily expose getter and setter methods for the store(s) managed by their module.

In the `keeper` folder we will create a file called `keeper.go`

### Keeper struct

First we will import the necessary files to get started:

```Go
package keeper

import (
	"fmt"

	"github.com/cometbft/cometbft/libs/log"
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"

	"hello/x/hello/types"
)
```

In which we will create the `Keeper` struct:

```Go
type Keeper struct {
	cdc        codec.BinaryCodec
	storeKey   storetypes.StoreKey
	memKey     storetypes.StoreKey
	paramstore paramtypes.Subspace
}
```

### NewKeeper

Next we'll build the `NewKeeper` function that will be called by application constructor function for the new Keeper:

```Go
func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey storetypes.StoreKey,
	ps paramtypes.Subspace,

) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{
		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,
	}
}
```

### Logger

Logger helps developers understand the flow of code execution.

```Go
func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
```

At its core this is the base structure of the `Keeper.go` file. We'll next add custom functionality that change the state of the store.
