---
title: Keeper functionality
slug: keeper-func
---

Now that we've created the core structure of the `payment` module's Keeper we will add the Getter and Setter functions in the same `keeper.go` file. Typically, a getter method will have the following signature:

```Go
func (k Keeper) Get(ctx sdk.Context, key string) returnType
```

Similarly, a setter method will have the following signature:

```Go
func (k Keeper) Set(ctx sdk.Context, key string, value valueType)
```

We will try to keep these functions to a minimal core requirement for setting or getting data from the store. Firstly, we'll create a function that utilizes the `Bank` Keeper that we've specified in the [expected_keepers](../types/expected-keepers.md):

```Go
// GetBalances returns the amount of coins available in the safety fund
func (k Keeper) GetBalances(ctx sdk.Context) sdk.Coins {
	return k.bankKeeper.GetAllBalances(ctx, k.GetModuleAddress())
}
```

Next we'll add the functionality to...

```Go
// ReleaseFund releases coins from the safety fund to the specified recipient
func (k Keeper) SendTokens(ctx sdk.Context, recipient sdk.AccAddress, amount sdk.Coins) error {
	return k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, recipient, amount)
}
```

Now that we've created the core Keeper functionality that changes the state of the application, we'll build the handler in `msg_server`...
