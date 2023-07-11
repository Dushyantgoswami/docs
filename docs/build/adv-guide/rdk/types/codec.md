---
title: Encoding
slug: codec
---

The `types/codec.go` of the `hello` module is a file that is responsible for setting up the binary [encoding and decoding](https://protobuf.dev/programming-guides/encoding/) of data structures. This is especially important for blockchain-based applications where information needs to be efficiently stored and transmitted.

```Go
package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
```

`RegisterMsgServiceDesc` function is used in order for clients (CLI and grpc-gateway) to have the URLs registered. The `RegisterMsgServiceDesc` function should be called inside the module's `RegisterInterfaces` method using the proto-generated `&_Msg_serviceDesc`.

Now that we've setup the registeration of the concrete types that the `hello` module uses we can proceed in building the genesis state of the module.
