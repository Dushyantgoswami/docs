---
title: "Build RDK module"
slug: build
---

Let's add a query to the blockchain we just created. In the Cosmos SDK, a query is a request for information from the blockchain. Queries are used to retrieve data from the blockchain, such as the current state of the ledger or the details of a specific transaction.

```
ignite scaffold query say-hello name --response name
```

The `ignite scaffold query` command is a tool used to quickly create new queries. This command accepts a query name (`"say-hello"`) and a list of request fields (in our case only `name`). The optional `--reponse` flag specifies the return values of the query.

This command made the following changes to the source code:

-   `proto/hello/hello/query.proto`: Modified to define the request and response for a query, as well as to add the `SayHello` query in the `Query` service.
-   `x/hello/client/cli/query_say_hello.go` : Created and added to the project. This file contains a CLI command `CmdSayHello` that allows users to submit a "say hello" query to the blockchain.
-   `x/hello/client/cli/query.go`: Modified to add the `CmdSayHello` command to the CLI of the blockchain.
-   `x/hello/keeper/query_say_hello.go`: Created with a keeper method called `SayHello`. When the "say hello" query is executed, the `SayHello` method is called to perform the necessary actions and return a response to the client.

To change the source code so that the query returns the `"Hello, %s!"` string, modify the return statement in `query_say_hello.go` to return `fmt.Sprintf("hello %s", req.Name)`.

```go title="x/hello/keeper/grpc_query_say_hello.go"
func (k Keeper) SayHello(goCtx context.Context, req *types.QuerySayHelloRequest) (*types.QuerySayHelloResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx
	// highlight-next-line
	return &types.QuerySayHelloResponse{Name: fmt.Sprintf("Hello, %s!", req.Name)}, nil
}
```

The function now returns a `QuerySayHelloResponse` struct with the `Name` field set to the string `"Hello, %s!"` with `req.Name` as the value for the `%s` placeholder. It also returns a nil error to indicate success.
