---
title: Protobuf generation
slug: protoc
---

Now that we've created the defined the concrete type for our `message` object we will generate the interface using [Buf build](https://buf.build/) which provides an efficient way to generate Protobuf files.

In the `scripts` folder create a new file called `protocgen.sh`.

```sh
#!/bin/sh
#
# This script is intended to be run inside the osmolabs/osmo-proto-gen:v0.8
# docker container: https://hub.docker.com/r/osmolabs/osmo-proto-gen

set -eo pipefail

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
    if grep "option go_package" $file &> /dev/null ; then
      echo $file
      buf generate --template ./proto/buf.gen.gogo.yaml $file
    fi
  done
done

# move proto files to the right places
if [ -d "./github.com/dymensionxyz/rollapp" ]; then
  cp -r github.com/dymensionxyz/rollapp/* ./
  rm -rf github.com
fi

go mod tidy
```

We will be able to call this script for the root directory of our application:

```sh
sh scripts/protocgen.sh
```

After successfully generating the protobuf files we should see the following file which provides us the interface for us to work with:

```
x/hello/types/query.pb.go
x/hello/types/query.pb.gw.go
```

These file will provide us the interface to implement their respective handlers.
