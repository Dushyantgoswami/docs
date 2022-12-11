---
title: "Build RDK module"
slug: build
---

Let's add a query to the blockchain we just created.

In the Cosmos SDK, a query is a request for information from the blockchain. Queries are used to retrieve data from the blockchain, such as the current state of the ledger or the details of a specific transaction.

## Create a query with Ignite

Run the following command:

```
ignite scaffold query say-hello name --response name
```

The `ignite scaffold query` command is a tool used to quickly create new
queries. When you run this command, it makes changes to your source code to add
the new query and make it available in your API. This command accepts a query
name (`"say-hello"`) and a list of request fields (in our case only `name`). The
optional `--reponse` flag specifies the return values of the query.

This command made the following changes to the source code.

The `proto/hello/hello/query.proto` file was modified to define the request and
response for a query, as well as to add the `SayHello` query in the `Query`
service.

The `x/hello/client/cli/query_say_hello.go` file was created and added to the
project. This file contains a CLI command `CmdSayHello` that allows users to
submit a "say hello" query to the blockchain. This command allows users to
interact with the blockchain in a more user-friendly way, allowing them to
easily submit queries and receive responses from the blockchain.

The `x/hello/client/cli/query.go` was modified to add the `CmdSayHello` command
to the CLI of the blockchain.

The `x/hello/keeper/query_say_hello.go` file was created with a keeper method
called `SayHello`. This method is responsible for handling the "say hello"
query, which can be called by a client using the command-line interface (CLI) or
an API. When the "say hello" query is executed, the `SayHello` method is called
to perform the necessary actions and return a response to the client. The
`SayHello` method may retrieve data from the application's database, process the
data, and return a result to the client in a specific format, such as a string
of text or a data structure.

To change the source code so that the query returns the `"Hello, %s!"` string,
modify the return statement in `query_say_hello.go` to return
`fmt.Sprintf("hello %s", req.Name)`.

```go title="x/hello/keeper/query_say_hello.go"
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

The function now returns a `QuerySayHelloResponse` struct with the `Name` field
set to the string `"Hello, %s!"` with `req.Name` as the value for the `%s`
placeholder. It also returns a nil error to indicate success.
