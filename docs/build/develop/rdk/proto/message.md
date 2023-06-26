---
title: Message
slug: message
---

`Msgs` are objects whose end-goal is to trigger state-transitions. They are wrapped in transactions, which may contain one or more of them.

Module developers define the messages for their module by adding methods to the Protobuf Msg service, and also implement the corresponding MsgServer. Protobuf generates a MsgServer interface for each module Msg service, and the module developer needs to implement this interface.

In the `tx.proto` file we will define:

```protobuf
syntax = "proto3"; // Defines the version of Protocol buffers
package rollapp.payment; // Package is the path of the current directory

// go_package requires the path of the types directory for the payment module
// this is used for protobuf generation
option go_package = "github.com/rollapp/x/payment/types";

// Service Msg defines the RPC end-point for the method
service Msg {
    // service indicates that the service is a Msg service and that requests
    // must be transported via blockchain transactions rather than gRPC.
    option (cosmos.msg.v1.service) = true;

    // CreatePayment defines a method for creating a new automatic payment
    rpc CreatePayment(MsgCreatePayment) returns (MsgCreatePaymentResposne);
}

// MsgCreatePayment defines the Msg object for state-transitions
message MsgCreatePayment {
    string from_address = 1;
    string to_address = 2;
    uint64 amount = 3;
    uint64 payment_distribution_start_epoch = 4;
}

// MsgCreatePaymentResponse defines the repsonse object expected for MsgCreatePayment
// We will leave this field empty with no response required
message MsgCreatePaymentResponse {}
```

Now that we've defined the `tx.proto` file we can move ahead and use the Protobuf generating files already in the `scripts` folder to be able to implement the `CreatePayment` method.
