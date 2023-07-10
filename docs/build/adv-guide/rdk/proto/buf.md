---
title: Buf
slug: buf
---

`buf` is a tool for working with Protocol Buffers (protobuf) and the related ecosystem of RPC technologies. `buf mod init` and `buf mod update` are commands used in buf for managing your buf modules. Developers may install `buf` on the official website [here](https://buf.build/docs/installation/).

Change the current working directory to the `proto` directory. Then create a `buf.yaml` file. The `buf.yaml` file is a configuration file used by the buf tool. It's placed at the root of your buf module and it allows you to configure various aspects of how buf operates on your .proto files.

```yaml
version: v1
name: buf.build/rollapp
deps:
    - buf.build/cosmos/cosmos-proto
    - buf.build/cosmos/cosmos-sdk
    - buf.build/cosmos/gogo-proto
    - buf.build/googleapis/googleapis
breaking:
    use:
        - FILE
lint:
    use:
        - DEFAULT
        - COMMENTS
        - FILE_LOWER_SNAKE_CASE
    except:
        - UNARY_RPC
        - COMMENT_FIELD
        - SERVICE_SUFFIX
        - PACKAGE_VERSION_SUFFIX
        - RPC_REQUEST_STANDARD_NAME
```

Next create a `buf.gen.gogo.yaml` file. The `buf.gen.gogo.yaml` file is another configuration file for the buf toolchain which is used to specify the plugins to run when generating code from your Protocol Buffers (protobuf) files. The gogo in buf.gen.gogo.yaml typically indicates that you're using gogoproto.

```yaml
version: v1
plugins:
    - name: gocosmos
      out: .
      opt: plugins=grpc,Mgoogle/protobuf/any.proto=github.com/cosmos/cosmos-sdk/codec/types
    - name: grpc-gateway
      out: .
      opt: logtostderr=true,allow_colon_final_segments=true
```

Next we'll run the following command to update the module's dependency list:

```
buf mod update
```

`buf mod update`: This command updates the module's dependency list based on the buf.lock file. The buf.lock file is a file that specifies the exact versions of other buf modules that your module depends on. The buf mod update command reads the buf.lock file and downloads the necessary versions of the dependencies, making sure that your module has exactly the versions it needs.

Now we can go ahead and generate the protobufs...
