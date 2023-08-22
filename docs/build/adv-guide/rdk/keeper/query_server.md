---
title: Query Server
slug: query_server
---

`queryServer` is the implemented handler of queries submitted by users to the `hello` module.
In the `keeper` folder we will create a file called `query.go`:

```bash
touch x/hello/keeper/query.go
```

Now let's add the following code to the `query.go` file:


```Go
package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/dymensionxyz/rollapp/x/hello/types"
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
