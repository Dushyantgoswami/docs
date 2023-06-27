---
title: Keeper setup
slug: keeper-setup
---

A keeper can be considered quite literally to be the gatekeeper of a module's store(s). Each store defined within a module comes with a [storeKey](../types/keys.md), which grants unlimited access to it. Keepers primarily expose getter and setter methods for the store(s) managed by their module.

In the `keeper` folder we will create the following file:

```
touch keeper.go
```

### Keeper struct

In which we will create the `Keeper` struct:

```Go
type Keeper struct {
    // External keepers
	accountKeeper types.AccountKeeper
	bankKeeper    types.BankKeeper

    // Store key(s)
	storeKey      storetypes.StoreKey

    // codec
    cdc           codec.BinaryCodec
}
```

### NewKeeper

Next we'll build the `NewKeeper` function that will be called by application constructor function for the new Keeper:

```Go
// NewKeeper creates a new payment module keeper
func NewKeeper(
	cdc codec.BinaryCodec,
    storeKey storetypes.StoreKey,
    accountKeeper types.AccountKeeper,
	bankKeeper types.BankKeeper
) Keeper {
	// ensure payment module account is set
	if addr := accountKeeper.GetModuleAddress(types.ModuleName); addr == nil {
		panic(fmt.Sprintf("%s module account has not been set", types.ModuleName))
	}

	return Keeper{
		cdc:           cdc,
		storeKey:      storeKey,
		accountKeeper: accountKeeper,
		bankKeeper:    bankKeeper,
	}
}
```

### Logger

Logger helps developers understand the flow of code execution and will be utilized in the near future [msg server](./msg_server).

```Go
func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
```

GetModuleAddress returns the payment module account's address.

### GetModuleAddress

```Go
func (k Keeper) GetModuleAddress() sdk.AccAddress {
	return k.accountKeeper.GetModuleAddress(types.ModuleName)
}
```

At it's core this is the base structure of the `Keeper.go` file. We'll next add custom functionality that change the state of the store.
