---
title: Msg Server
slug: msg_server
---

The message server must perform all validation required (both stateful and stateless) to make sure the message is valid. The signer is charged for the gas cost of this validation. For example, a msgServer method for a transfer message should check that the sending account has enough funds to actually perform the transfer.

After the validation is successful, the msgServer method uses the keeper functions to access the state and perform a state transition.

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
