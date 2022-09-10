---
title: "Checkers RollApp"
slug: "scaffold-rollapp"
---

Scaffold chain

```sh
ignite scaffold chain github.com/anonymous/checkers
cd checkers
```

Setting up rdk and dymint

```sh
go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/dymensionxyz/rdk@fc570f8d50205d2833405367b12aedf18c658f51
git config --global url.git@github.com:.insteadOf https://github.com/
export GOPRIVATE=github.com/dymensionxyz/*
go mod tidy && go mod download
```
