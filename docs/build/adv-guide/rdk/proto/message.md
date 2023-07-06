---
title: Message
slug: message
---

`Msgs` are objects whose end-goal is to trigger state-transitions. They are wrapped in transactions, which may contain one or more of them.

Protobuf generates a MsgServer interface for each module Msg service upon which we will implement the [handler](/docs/build/adv-guide/rdk/keeper/msg_server.md).

But firstly, we will create a `tx.proto` file in the `proto/blog` folder and define it as such:

```protobuf
syntax = "proto3"; // Defines the version of Protocol buffers
package blog; // Package is the path of the current directory

// go_package requires the path of the types directory for the blog module
// this is used for protobuf generation

option go_package = "rollapp/x/blog/types";

// Msg defines the Msg service.
service Msg {
  // service indicates that the service is a Msg service and that requests
  // must be transported via blockchain transactions rather than gRPC.
  option (cosmos.msg.v1.service) = true;

  rpc CreatePost (MsgCreatePost) returns (MsgCreatePostResponse);
}

message MsgCreatePost {
  string creator = 1;
  string title   = 2;
  string body    = 3;
}

message MsgCreatePostResponse {
  uint64 id = 1;
}
```

Now that we've defined the `tx.proto` file we can move ahead and build the `query` protobuf file.
