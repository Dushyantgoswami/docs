---
title: "Initialize the RollApp"
slug: "init-rollapp"
---

We will initialize the RollApp with two players and a RollApp ID:

```sh
KEY_PLAYER_1="player1"
KEY_PLAYER_2="player2"
ROLLAPP_ID="checkers"
```

Next we will reset any configurations that we may have set up before:

```sh
checkersd tendermint unsafe-reset-all
```

```sh
checkersd init checkers-test --chain-id "$ROLLAPP_ID"
```

You'll need an account private and public key pair (a.k.a. sk, pk respectively) to be able to receive funds, send txs, bond tx, etc.

To generate a new secp256k1 key:

```sh
checkersd keys add "$KEY_PLAYER_1"
checkersd keys add "$KEY_PLAYER_2"
```

The output of the above command will contain a seed phrase. It is recommended to save the seed phrase in a safe place so that in case you forget the password of the operating system's credentials store, you could eventually regenerate the key from the seed phrase with the following command:

```sh
checkersd keys show <account_name>
```

Now that you have created a local account, go ahead and grant it some `stake` tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:

```sh
checkersd add-genesis-account "$(checkersd keys show "$KEY_PLAYER_1" -a)" 100000000000stake
checkersd add-genesis-account "$(checkersd keys show "$KEY_PLAYER_2" -a)" 100000000000stake
```

Next let's register the RollApp in the dymension hub.
