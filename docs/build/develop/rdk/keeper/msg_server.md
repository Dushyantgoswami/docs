---
title: Msg server
slug: msg_server
---

`msg_server` is the implemented handler of transactions submitted by users.

The message server must perform all validation required to make sure the message is valid. For example, a msgServer method for a transfer message should check that the sending account has enough funds to actually perform the transfer.

```Go
package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/rollapp/x/payment/types"
)

type msgServer struct{ k Keeper }

// NewMsgServerImpl creates an implementation of the `MsgServer` interface for
// the given keeper.
func NewMsgServerImpl(k Keeper) types.MsgServer {
	return &msgServer{k}
}

func (ms msgServer) CreatePayment(goCtx context.Context, req *types.MsgCreatePayment) (*types.MsgCreatePaymentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check user balance
	// Send tokens
	// Log


	recipientAddr, err := sdk.AccAddressFromBech32(req.Recipient)
	if err != nil {
		return nil, err
	}

	if err := ms.k.SendTokens(ctx, recipientAddr, req.Amount); err != nil {
		return nil, err
	}

	ms.k.Logger(ctx).Info(
		"created payment schedule",
		"recipient", req.Recipient,
		"amount", req.Amount.String(),
	)

	return &types.MsgCreatePaymentResponse{}, nil
}
```

The `msg_server` implementation is registered in the [module manager](../root/module-manager.md) which we'll do soon. Now that we've created an implementation of the `msg_server` for the `payment` module, we will create a module interface via command-line interface (CLI) for easily sending transactions to the blockchain.
