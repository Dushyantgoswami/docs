---
title: Genesis
slug: genesis
---

We will now implemenet two core methods on the `GenesisState` of the `payment` module in a new file called `genesis.go`.

`InitGenesis` method is executed during `InitChain` when the application is first started. Given a GenesisState, it initializes the subset of the state managed by the module by using the module's keeper setter function on each parameter within the GenesisState.

`ExportGenesis` method is executed whenever an export of the state is made. It takes the latest known version of the subset of the state managed by the module and creates a new GenesisState out of it. This is mainly used when the chain needs to be upgraded via a hard fork. In our implementation we will return an empty `GenesisState`.

```Go
package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/rollapp/x/payment/types"
)

// InitGenesis initializes the payment module's storage according to the
// provided genesis state.
//
// NOTE: we call `GetModuleAccount` instead of `SetModuleAccount` because the
// "get" function automatically sets the module account if it doesn't exist.
func (k Keeper) InitGenesis(ctx sdk.Context, _ *types.GenesisState) {
	// set module account
	k.accountKeeper.GetModuleAccount(ctx, types.ModuleName)
}

// ExportGenesis returns a genesis state for a given context and keeper.
func (k Keeper) ExportGenesis(_ sdk.Context) *types.GenesisState {
	return &types.GenesisState{}
}
```

Now that we've built the functionality for initializing and exporting the `GenesisState` of the `payment` module, we can move forward and build the implementation of the `MsgCreatePayment`.
