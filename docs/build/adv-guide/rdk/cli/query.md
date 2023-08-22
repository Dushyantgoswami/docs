---
title: Query
slug: query
---

After implementing the query logic, you will need to make the query available to clients so that they can call it and receive the response.

We will implement this in a new `query.go` file in the `x/hello/client/cli/` folder:

```bash
touch x/hello/client/cli/query.go
```

The `query.go` file will contain the following code:

```Go
package cli

import (
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"

	"github.com/dymensionxyz/rollapp/x/hello/types"
)

// GetQueryCmd returns the parent command for all hello query commands.
func GetQueryCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Querying commands for the hello module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(
		CmdSayHello(),
	)

	return cmd
}

func CmdSayHello() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "say-hello [name]",
		Short: "Query say-hello",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqName := args[0]
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			params := &types.QuerySayHelloRequest{
				Name: reqName,
			}
			res, err := queryClient.SayHello(cmd.Context(), params)
			if err != nil {
				return err
			}
			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}
```

Once you have provided a CLI command, users will be able to call the say-hello query and receive the appropriate response.
