---
title: "Light Clients"
slug: "index"
---

# dymint light client

## Run dymint application

For example, run the **wordle** app using the instructions in [this repository](https://github.com/dymensionxyz/dymint-playground).

```sh
DYMINT_APP_RPC=127.0.0.1:26657
DYMINT_APP_NAMESPACE_ID=000000000000FFFF
```

## Run light client by script

Init, setup and run:

```sh
./scripts/install_and_run.sh && export LIGHT_CLIENT_RPC=localhost:8888
```

## Run light client manually

Install the light client binary

```sh
make install
```

Fetch the latest trusted height from the running dymint application:

```sh
TRUSTED_HEIGHT_HASH=$(curl "$DYMINT_APP_RPC"/commit | jq "{height: .result.signed_header.header.height, hash: .result.signed_header.commit.block_id.hash}")

TRUSTED_HEIGHT=$(echo "$TRUSTED_HEIGHT_HASH" | jq -r ".height")

TRUSTED_HASH=$(echo "$TRUSTED_HEIGHT_HASH" | jq -r ".hash")
```

Start the light client with the latest trusted height:

```sh
tendermint light "$DYMINT_APP_NAMESPACE_ID" -p tcp://"$DYMINT_APP_RPC" --height "$TRUSTED_HEIGHT" --hash "$TRUSTED_HASH"

export LIGHT_CLIENT_RPC=localhost:8888
```
