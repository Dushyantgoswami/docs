---
title: Encoding
slug: codec
---

The `types/codec.go` of the `payment` module is a file that is responsible for setting up the binary [encoding and decoding](https://protobuf.dev/programming-guides/encoding/) of data structures. This is especially important for blockchain-based applications where information needs to be efficiently stored and transmitted.

Binary wire encoding of types in the Cosmos SDK can be broken down into two main categories, client encoding and store encoding. Client encoding mainly revolves around transaction processing and signing, whereas store encoding revolves around types used in state-machine transitions and what is ultimately stored in the Merkle tree.

```Go
package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	registry.RegisterImplementations(
		(*sdk.Msg)(nil),
		&MsgCreatePayment{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
```

`RegisterImplementations` function is typically used to register the concrete types that a module uses. This registration is important for the interface registry and codec. An interface registry is used to keep track of all the concrete implementations of interfaces that are used in the application. When you call `RegisterImplementations`, you register the concrete types with the interface registry, so that when the application encounters an interface, it knows which concrete type to use.

`RegisterMsgServiceDesc` function is used in order for clients (CLI and grpc-gateway) to have the URLs registered. The `RegisterMsgServiceDesc` function should be called inside the module's `RegisterInterfaces` method using the proto-generated `&_Msg_serviceDesc`.

Now that we've setup the registeration of the concrete types that the `payment` module uses we can proceed in building the genesis state of the module.
