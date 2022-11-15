---
title: "Interact with the RollApp"
order: 8
description: An easy way to build your application-specific rollup
tag: deep-dive
---

# Interact with the RollApp

:::info NOTE
In order to run some of the commands you will need to have [jq](https://stedolan.github.io/jq/download/) installed
:::

Before submitting a transaction, we will add a `--broadcast-mode block` to each transaction
so that we'll get the transaction result and not just an approval that it was received.<br/>

We are able to do so as our RollApp transaction latency is sub-second due to the lack of consensus constrains.

Let's start by fetching the accounts addresses:

```sh
export player1=$(checkersd keys show player1 -a)
export player2=$(checkersd keys show player2 -a)
```

Show the id of the next game that will be created:

```sh
checkersd query checkers show-next-game

# NextGame:
#   fifoHead: "-1"
#   fifoTail: "-1"
#   idValue: "1"
```

Create a new game:

```sh
checkersd tx checkers create-game $player1 $player2 1000000 --from $player1 --gas auto --broadcast-mode block
```

Confirm the wager:

```sh
checkersd query bank balances $player2

# balances:
# - amount: "99999000000" # <- 1,000,000 fewer
#   denom: stake
```

Show the created game (with the id that was received before):

```sh
checkersd query checkers show-stored-game 1

# storedGame:
#   afterId: "-1"
#   beforeId: "-1"
#   black: cosmos1g7vc6dvmf6ezzyj35yn9l3d5ezecrhe2yx2ak3
#   deadline: 2022-09-06 12:28:19.50797 +0000 UTC
#   game: '*b*b*b*b|b*b*b*b*|*b*b*b*b|********|********|r*r*r*r*|*r*r*r*r|r*r*r*r*'
#   index: "1"
#   moveCount: "0"
#   red: cosmos17x
#   turn: b
#   wager: "1000000"
#   winner: '*'
```

Showing the board in nice and cleaned up square view:

```sh
checkersd query checkers show-stored-game 1 --output json | jq ".storedGame.game" | sed 's/"//g' | sed 's/|/\n/g'

# *b*b*b*b
# b*b*b*b*
# *b*b*b*b
# ********
# ********
# r*r*r*r*
# *r*r*r*r
# r*r*r*r*
```

Play the first move:

```sh
checkersd tx checkers play-move 1 1 2 2 3 --from $player2 --broadcast-mode block
checkersd query checkers show-stored-game 1 --output json | jq ".storedGame.game" | sed 's/"//g' | sed 's/|/\n/g'

# *b*b*b*b
# b*b*b*b*
# ***b*b*b
# **b*****
# ********
# r*r*r*r*
# *r*r*r*r
# r*r*r*r*
```

Reject the game:

```sh
checkersd tx checkers reject-game 1 --from $player1 --broadcast-mode block
checkersd query checkers list-stored-game

# pagination:
#   next_key: null
#   total: "0"
# storedGame: []
```

Confirm wager returned:

```sh
checkersd query bank balances $player2

# balances:
# - amount: "100000000000" # <- 1,000,000 are back
#   denom: stake
```

Simulate winning:

```sh
checkersd tx checkers create-game $player1 $player2 1000000 --from $player1 --gas auto --broadcast-mode block
checkersd tx checkers play-move 2 1 2 2 3 --from $player2 --broadcast-mode block
checkersd tx checkers play-move 2 0 5 1 4 --from $player1 --broadcast-mode block
```

Wait 5 minutes for game expiration (you can also actually win the game but it difficult without UI-client):

```sh
checkersd query checkers show-stored-game 2

# We can se at the bottom that the red player (that made the last move) was win.

# storedGame:
# - afterId: "-1"
#   beforeId: "-1"
#   black: cosmos1erdhtzmmmfafuu77eus5wqceag4rkwcl8qy9x4
#   deadline: 2022-09-06 13:10:47.05588 +0000 UTC
#   game: '*b*b*b*b|b*b*b*b*|***b*b*b|**b*****|*r******|**r*r*r*|*r*r*r*r|r*r*r*r*'
#   index: "1"
#   moveCount: "2"
#   red: cosmos1a84u9zfyyghd0ks4tssuu4s656y5z77p06ad2p
#   turn: b
#   wager: "1000000"
#   winner: r
```

Confirm that both player1 and player2 paid their wagers:

```sh
checkersd query bank balances $player1
checkersd query bank balances $player2

# balances:
# - amount: "99901000000" # <- 1,000,000 more than at the beginning
#   denom: stake

# balances:
# - amount: "99999000000" # <- 1,000,000 are gone for good
#   denom: stake
```

While interacting with the RollApp, it kept updating the dymension hub with it's latest state.<br/>
In the next section we will query the dymenion hub for the RollApp state sent to it.
