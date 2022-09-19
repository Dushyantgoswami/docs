---
title: "Install dYmension's RDK and dymint"
slug: "install-rdk-dymint"
---

# Setting Up the RDK

Before we continue we need to replace the Cosmos SDK with dYmension's RDK which includes dymint (dYmension's drop-in replacement for Tendermint):

## Installing and building the RDK

Run the following command inside the `checkers` directory.

```sh
cd "$WORKSPACE_PATH/checkers"
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@v0.1.0-sdk-v0.45.4-dymint-v0.1.0
go mod tidy
go mod download
ignite chain build
```
