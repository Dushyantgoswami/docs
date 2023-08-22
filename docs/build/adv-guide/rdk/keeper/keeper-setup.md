---
title: Keeper setup
slug: keeper-setup
---

A keeper can be considered quite literally to be the gatekeeper of a module's store(s). Each store defined within a module comes with a [storeKey](../types/keys.md), which grants unlimited access to it. Keepers primarily expose getter and setter methods for the store(s) managed by their module.

Let's begin by creating the `keeper.go` file in the `keeper` folder:

```bash
touch x/hello/keeper/keeper.go
```

Now let's add the following code to the `keeper.go` file:

```Go
package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
)

type Keeper struct {
	cdc      codec.BinaryCodec
	storeKey storetypes.StoreKey
}

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey storetypes.StoreKey,

) Keeper {
	return Keeper{
		cdc:      cdc,
		storeKey: storeKey,
	}
}
```

At its core this is the base structure of the `Keeper.go` file. We'll next add custom functionality that change the state of the store.
