---
title: Query
slug: query
---

A `query` is a request for information made by end-users of applications through an interface and processed by a full-node. Queries do not require consensus to be processed (as they do not trigger state-transitions); they can be fully handled by one full-node.

We will first need to create a `query.proto` file in the `proto` folder:

```bash
touch proto/query.proto
```

Now we will define the `query` request and response in the `query.proto` file:

```Protobuf
syntax = "proto3";
package hello;

import "cosmos/base/v1beta1/coin.proto";
import "gogoproto/gogo.proto";
import "google/api/annotations.proto";

option go_package = "github.com/dymensionxyz/rollapp/x/hello/types";

// Query defines the gRPC querier service for the hello module
service Query {
  // SayHello queries hello with QuerySayHelloRequest
  rpc SayHello(QuerySayHelloRequest) returns (QuerySayHelloResponse) {
      option (google.api.http).get = "/hello/hello/say_hello/{name}";
  }
}

// QueScheulesRequest is the request type of the QueryScheulesRPC method
message QuerySayHelloRequest {
  string name = 1;
}


// QueScheulesResponse is the response type of the QuerScheulesRPC method
message QuerySayHelloResponse {
  string name = 1;
}
```
