---
title: Query
slug: query
---

A `query` is a request for information made by end-users of applications through an interface and processed by a full-node. Queries do not require consensus to be processed (as they do not trigger state-transitions); they can be fully handled by one full-node.

We will first need to create a `query.proto` file in the `proto` folder. Now we will define the `query` request and response in the `query.proto` file:

```Protobuf
syntax = "proto3";
package payment;

import "cosmos/base/v1beta1/coin.proto";
import "gogoproto/gogo.proto";
import "google/api/annotations.proto";

option go_package = "github.com/dymensionxyz/rollapp/x/payment/types";

// Query defines the gRPC querier service for the payment module
service Query {
  // Schedules queries payment schedules active in the payment module
  rpc Schedule(QueryScheuleRequest) returns (QueryScheuleResponse) {
    option (google.api.http).get = "/rollapp/payment/schedule";
  }
}

// QueScheulesRequest is the request type of the QueryScheulesRPC method
message QueryScheulesRequest {
    // ID is the payment id
    uint64 id = 1;
}

// QueScheulesResponse is the response type of the QuerScheulesRPC method
message QueryScheulesResponse {
  // Active returns bool for active or non-active
  bool active = 1;
}
```

Now we can build the `Genesis` object...
