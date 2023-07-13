---
title: Protobuf generation
slug: protoc
---

Now that we've created and defined the concrete type for our `Query` and `Genesis` object we will generate the interface using [Buf build](https://buf.build/) which provides an efficient way to generate Protobuf files.


```sh
make proto-gen
```

After successfully generating the protobuf files we should see the following file which provides us the interface for us to work with:

```
x/hello/types/query.pb.go
x/hello/types/query.pb.gw.go
x/hello/types/genesis.pb.go
```

These file will provide us the interface to implement their respective handlers.
