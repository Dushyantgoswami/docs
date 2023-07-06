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

func (qs queryServer) SayHello(goCtx context.Context, req *types.QuerySayHelloRequest) (*types.QuerySayHelloResponse, error) {
    if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }
    ctx := sdk.UnwrapSDKContext(goCtx)
    // TODO: Process the query
    _ = ctx
    return &types.QuerySayHelloResponse{Name: fmt.Sprintf("hello %s", req.Name)}, nil
}
```

Now that we've set up the handler queries to the `payment` module, let's build the CLI to make it easy to interact with the `payment` module.
