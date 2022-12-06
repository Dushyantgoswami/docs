---
title: Run your RollApp
slug: celestia
---

## Celestia DA

So far we've run the RollApp with a mock data availablity (DA) layer. In this section we'll see how to replace the mock with Celestia's DA layer.<br/>

Celestia is a DA layer that provides a scalable solution for block space using light clients and data availability sampling. You can read more about Celestia's DA layer [here](https://docs.celestia.org/concepts/how-celestia-works/data-availability-layer). In the following sections we'll see how to run a Celestia light client in order to send data from the RollApp to Celestia's DA Layer.

### Step 1: Run the celestia light client

In order to write our RollApp batches to Celestia, we will need to run a Celestia light node and fund it.<br/>
Head over to Celestia's light node [tutorial](https://docs.celestia.org/nodes/light-node) for a step-by-step instructions.<br/>
Make sure that by the end of the tutorial you can view your account balance and that it's positive.

We've included a Dockerfile for those who are looking to build quickly:

```Dockerfile
FROM golang:1.19.2-alpine3.16 as go-builder

WORKDIR /app

# Install required celestia node packages
ENV PACKAGES curl tar wget clang jq git ncdu make libc-dev bash gcc linux-headers eudev-dev python3

RUN apk add --no-cache $PACKAGES

# Install celestia node and cel-key commands
RUN git clone https://github.com/celestiaorg/celestia-node.git

WORKDIR /app/celestia-node

RUN git checkout tags/v0.5.0-rc5

RUN make build && make cel-key

FROM alpine:3.16.1

COPY --from=go-builder /app/celestia-node/build/celestia /usr/local/bin/
COPY --from=go-builder /app/celestia-node/cel-key /usr/local/bin/

ENV CELESTIA_BRIDGE_NODE_ENDPOINT=https://limani.celestia-devops.dev
ENV CELESTIA_BRIDGE_NODE_PORT=9090
ENV WALLET_KEY_NAME=dymension-test

# Init the node
RUN celestia light init

# Fetch the key for celestia light node and sleep for a few seconds
RUN cel-key add $WALLET_KEY_NAME  --keyring-backend test --node.type light

EXPOSE 26659 9090

# Run the light node with the dymension-test key
CMD celestia light start --core.ip $CELESTIA_BRIDGE_NODE_ENDPOINT --core.grpc.port $CELESTIA_BRIDGE_NODE_PORT --gateway --gateway.port 26659 --keyring.accname $WALLET_KEY_NAME

```

From within the Docker directory:

```Dockerfile
docker build -t celestia-light-client .
```

Once the build(s) are complete, issue the command:

```Dockerfile
docker images
```

Run the container:

```Dockerfile
docker run -d -p 26659:26659 --name celestia-light-client celestia-light-client
```

Upon build completed run to get the wallet address:

```Dockerfile
docker exec -i <docker id> sh -c "cel-key show dymension-test --keyring-backend test --node.type light" | grep "address"
```

Get the address and post it in the celestia arabica-fauct channel on discord:

```bash
$request celestia12les8l8gzsacjjxwum9wdy7pe8x9kdjqch4gyw
```

Check the running Celestia light node:

```Dockerfile
docker ps
```

### Step 2: Reset the Hub node

Once you've got the Celestia's light node up and running, we'll start by stopping the current process of the hub node and running it again.<br/>

1. Stop the Dymension Hub node by killing the relevant process.
2. Reset and run the Dymension Hub node by following [steps 2, 3 and 4](/docs/developers/start/run-a-hub-node.md) then come back here to continue the tutorial.

### Step 3: Reset the RollApp State

In order to run the RollApp with celestia as the DA we'll start by:

1. Stopping the current RollApp process.
2. Reseting the RollApp state by deleting it's data:

```bash
rm -rf ~/.wasmd/data
```

```bash
rm -rf ~/.ethermintd/data
```

### Step 4: Run the RollApp with Celestia as the DA

:::warning Note
The tutorial assumes a default Celestia namespace id `000000000000FFFF` and a default Celestia light node port `26659`.
:::

Choose the environmental variable based on the virtual machine chosen:

```bash
export VM_VERSION="wasm"
```

```bash
export VM_VERSION="ethermint"
```

Setup the relevant env vars:

```bash
export KEY_NAME="local-user"
export ROLLAPP_ID="local-rollapp"
export SETTLEMENT_RPC="0.0.0.0:36657"
export SETTLEMENT_CONFIG="{\"node_address\": \"http:\/\/$SETTLEMENT_RPC\", \"rollapp_id\": \"$ROLLAPP_ID\", \"dym_account_name\": \"$KEY_NAME\", \"keyring_home_dir\": \"$HOME/.dymension/\", \"keyring_backend\":\"test\"}"
export NAMESPACE_ID=000000000000FFFF

export CELESTIA_LIGHT_CLIENT_ENDPOINT="127.0.0.1:26659"
export DA_CONFIG="{\"base_url\": \"http:\/\/$CELESTIA_LIGHT_CLIENT_ENDPOINT\", \"timeout\": 60000000000, \"gas_limit\": 6000000, \"namespace_id\": [0,0,0,0,0,0,255,255]}"
```

Run the RollApp:

```bash
"$VM_VERSION"d start --dymint.aggregator true \
  --dymint.settlement_layer dymension \
  --dymint.settlement_config "$SETTLEMENT_CONFIG" \
  --dymint.block_batch_size 500 \
  --dymint.namespace_id "$NAMESPACE_ID" \
  --dymint.da_layer "celestia" \
  --dymint.da_config="$DA_CONFIG" \
  --dymint.block_time 0.2s
```

Walla! At this point you should have a running RollApp which writes it's data to Celestia and it's state to the Dymension Hub!<br/>

:::warning Note
For local development purposes we recommend working with a mock DA layer to prevent unexpected behaviors.<br/>
:::

Next let's interact with the RollApp!
