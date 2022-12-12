---
title: Scaffold RDK RollApp
slug: scaffols
---


Next we will scaffold and start the `Hello` RollApp with Ignite CLI. 

```bash
ignite scaffold chain hello
cd hello
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@v0.1.2-alpha
go mod tidy
go mod download
ignite chain serve
```

Once the server is started you will see ports open up on your local machine. We can stop the process by running `ctrl + c`, this will save the created genesis file.

Please run `ctrl + c` to stop the server. You should get a notification stating the location of the exported genesis file:

```
Genesis state saved in ~/.ignite/local-chains/hello/exported_genesis.json
```

Let's move on to building a Go module with Ignite for our RollApp...
