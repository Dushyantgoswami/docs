---
title: Scaffold RDK RollApp
slug: scaffols
---

Scaffolding the `hello` chain provides us the necessary files for building our simple demo application.

```bash
ignite scaffold chain hello
cd hello
```

Next we'll replace the existing Cosmos SDK with Dymension's RDK which includes Dymint that will power our execution client.

```
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@v0.1.2-alpha
go mod tidy
go mod download
```

Once we've downloaded the RDK, we'll `serve` the chain by running the following command.

```
ignite chain serve
```

The `serve` command downloads dependencies, compiles the source code and start a local testnet with a running node.

Once the server is started you will see ports open up on your local machine. Please run `ctrl + c` to stop the server. You should get a notification stating the location of the exported genesis file:

```
Genesis state saved in ~/.ignite/local-chains/hello/exported_genesis.json
```

With the [Genesis file](https://hub.cosmos.network/main/resources/genesis.html) saved, let's move on to building a Go module with Ignite for our RollApp...
