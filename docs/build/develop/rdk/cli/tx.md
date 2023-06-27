---
title: Transaction
slug: tx
---

```Go
package cli

import (
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"

	"github.com/rollapp/x/payment/types"
)

func getRegisterAccountCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-payment TODO",
		Short: "Setup continuous payment to a different user",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := &types.MsgCreatePayment{
				Sender:       clientCtx.GetFromAddress().String(),
                // TODO
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
```
