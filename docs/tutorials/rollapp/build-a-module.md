---
title: "Build a Module"
order: 6
description: An easy way to build your application-specific rollup
tag: deep-dive
---

# Build the checkers module

More details from [here](https://tutorials.cosmos.network/academy/3-my-own-chain/stored-game.html)

Add checkers rules

```sh
mkdir x/checkers/rules
curl https://raw.githubusercontent.com/batkinson/checkers-go/a09daeb1548dd4cc0145d87c8da3ed2ea33a62e3/checkers/checkers.go | sed 's/package checkers/package rules/' > x/checkers/rules/checkers.go
```

Scaffold the following types:

```sh
ignite scaffold single nextGame idValue:uint fifoHead fifoTail --module checkers --no-message

ignite scaffold map storedGame game turn red black moveCount:uint beforeId afterId deadline winner wager:uint --module checkers --no-message

ignite scaffold message createGame red black wager:uint --module checkers --response idValue

ignite scaffold message playMove idValue fromX:uint fromY:uint toX:uint toY:uint --module checkers --response idValue,capturedX:int,capturedY:int,winner

ignite scaffold message rejectGame idValue --module checkers
```
