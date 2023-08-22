---
title: Protobuf generation
slug: protoc
---

Now that we've created and defined the concrete type for our `Query` and `Genesis` object we will generate the Protobuf files.

For generating protobuf files we'll use [docker](https://www.docker.com/) behind the scenes.
Before running the command let's make sure the user is part of the `docker` group.

```sh
sudo usermod -aG docker $USER
newgrp docker
```

From the root of the project run the following command:

```sh
make proto-gen
```

After successfully generating the protobuf files we should see the following file which provides us the interface for us to work with:

```bash
x/hello/types/query.pb.go
x/hello/types/query.pb.gw.go
x/hello/types/genesis.pb.go
```

These file will provide us the interface to implement their respective handlers.
