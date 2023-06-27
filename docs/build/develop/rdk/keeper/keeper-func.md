### TODO

```
-  Transaction -> CLI/ABCI -> App -> ModuleRouter -> MsgServer (CreatePayment implementation) -> Keeper (Store changes) -> EmitEvent
```

Typically, a getter method will have the following signature:

```Go
func (k Keeper) Get(ctx sdk.Context, key string) returnType
```

Similarly, a setter method will have the following signature:

```Go
func (k Keeper) Set(ctx sdk.Context, key string, value valueType)
```

```Go
// GetBalances returns the amount of coins available in the safety fund
func (k Keeper) GetBalances(ctx sdk.Context) sdk.Coins {
	return k.bankKeeper.GetAllBalances(ctx, k.GetModuleAddress())
}
```

```Go
// ReleaseFund releases coins from the safety fund to the specified recipient
func (k Keeper) SendTokens(ctx sdk.Context, recipient sdk.AccAddress, amount sdk.Coins) error {
	return k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, recipient, amount)
}
```
