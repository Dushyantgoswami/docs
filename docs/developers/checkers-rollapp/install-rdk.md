---
title: "Install RDK"
slug: "install-rdk-dymint"
---

# Setting Up the RDK

In order to convert the cosmos-sdk app chain to a RollApp, we need to replace the Cosmos SDK with dYmension's RDK which includes dymint (dYmension's drop-in replacement for Tendermint)

## Installing and building the RDK

Run the following command from within the same terminal window you've previously [scaffolded the RollApp](./scaffold-rollapp):

```sh
cd "$WORKSPACE_PATH/checkers"
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@v0.1.0-alpha
go mod tidy
go mod download
ignite chain build
```

At this point you should have a fully functioning checkers RollApp. In the next section we'll go over how to initialize it.
