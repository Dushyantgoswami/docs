---
title: Query Server
slug: query_server
---

`query_server` is the implemented handler of queries submitted by users to the `payment` module.

The following query server handler checks whether or not a payment schedule is active:

```Go
package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/rollapp/x/payment/types"
)

type queryServer struct{ k Keeper }

// NewQuerySErverImpl creates an implementation of the `QueryServer` interface
// for the given keeper.
func NewQueryServerImpl(k Keeper) types.QueryServer {
	return &queryServer{k}
}

func (qs queryServer) Schedule(goCtx context.Context, req *types.QueryScheduleRequest) (*types.QueryScheduleResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // TODO some logic

	return &types.QueryScheduleResponse{Schedule: schedule}, nil
}
```

Now that we've set up the handler queries to the `payment` module, let's build the CLI to make it easy to interact with the `payment` module.
