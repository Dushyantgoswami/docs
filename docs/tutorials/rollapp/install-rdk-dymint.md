---
title: "Installing dYmension's RDK and dymint"
slug: "install-rdk-dymint"
---

# Setting Up the RDK

Before we continue we need to replace the Cosmos SDK with dYmension's RDK which includes dymint (dYmension's drop-in replacement for Tendermint)

## Installing the RDK

Run the following command inside the `checkers` directory.

```sh
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@ffe24a21eca363c3b33266aaadda079c5f15d244
go mod tidy
go mod download
```

## Let's build!
