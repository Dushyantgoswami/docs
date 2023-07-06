---
title: Protobuf generation
slug: protoc
---

Now that we've created the `Message` object we will generate the interface using [Buf build](https://buf.build/) which provides an efficient way to generate Protobuf files.

The `scripts` folder includes file to generate the protobuf files and place them in the appropriate path (i.e. `types` folder in our case).

```sh
sh scripts/protocgen.sh
```

After successfully generating the protobuf files we should see the following file which provides us the interface for us to work with:

```
x/hello/types/query.pb.go
```

These file will provide us the interface to implement their respective handlers.
