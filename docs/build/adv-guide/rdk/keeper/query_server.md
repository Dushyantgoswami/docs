---
title: Query Server
slug: query_server
---

`query_server` is the implemented handler of queries submitted by users to the `hello` module.

```Go
package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/rollapp/x/hello/types"
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

    _ = ctx
    return &types.QuerySayHelloResponse{Name: fmt.Sprintf("hello %s", req.Name)}, nil
}
```

Now that we've set up the handler queries to the `hello` module, let's build the CLI to make it easy to interact with the `hello` module.
