---
title: Validator
slug: validator
---

This is a step-by-step guide for setting up a Dymension Hub validator. We recommend a production architecture to include sentry nodes described [here](https://docs.tendermint.com/v0.34/tendermint-core/validators.html) and Tendermint key management service described [here](https://github.com/iqlusioninc/tmkms).

To follow this tutorial you must have a full node synced to the current network. Please follow the previous instructions to build a Dymension Hub full node. A limited amount of validators are selected for the testnets. If you are among the validators selected please contact the team on Discord for a request of self-delegated tokens.

## 1. Retrieve your PubKey

The Consensus PubKey of your node is required to create a new validator. Run:

```bash
--pubkey=$(dymd tendermint show-validator)
```

## 2. Create a new validator

In order for `dymd` to recognize a wallet address it must contain tokens. If you've been selected as part

To create the validator and initialize it with a self-delegation, run the following command. `key-name` is the name of the Application Operator Key that is used to sign transactions.

```bash
dymd tx staking create-validator \
    --amount=500000000000udym \
    --pubkey=$(<your-consensus-PubKey>) \
    --moniker="<your-moniker>" \
    --chain-id=35-C \
    --from=<key-name> \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="1"
```

When you specify commission parameters, the `commission-max-change-rate` is measured as a percentage-point change of the `commission-rate`. For example, a change from 1% to 2% is a 100% rate increase, but the `commission-max-change-rate` is measured as 1%.

## 3. Confirm your validator is active

If running the following command returns something, your validator is active:

```bash
dymd query tendermint-validator-set | grep "$(terrad tendermint show-validator)"
```

You are looking for the `bech32` encoded `address` in the `~/.dymension/config/priv_validator.json` file.
