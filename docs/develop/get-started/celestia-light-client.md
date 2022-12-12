---
title: Run a Celestia light client
slug: celestia-light-client
---

In this section we'll integrate Celestia's testnet for publishing data. You can read more about Celestia's data layer [here](https://docs.celestia.org/concepts/how-celestia-works/data-availability-layer).

:::info Note
The following tutorial utilizes [Docker](https://docs.docker.com/engine/install/) to quickly bootstrap a Celestia light client. Developers may head over to Celestia's light client [tutorial](https://docs.celestia.org/nodes/light-node) for step-by-step instructions that do not involve Docker.

:::

In order to write our RollApp batches to Celestia, we will need to run a funded Celestia light client.

In a new terminal make a directory for our Celestia light client:

```bash
mkdir dockerbuild
cd dockerbuild
touch Dockerfile
```

Save the following information in the `Dockerfile` we've created:

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

From within the dockerbuild directory run the following command:

```Dockerfile
docker build -t celestia-light-client .
```

Once the build is complete, issue the following command to see the Docker image:

```Dockerfile
docker images
```

Run the Docker container:

```Dockerfile
docker run -d -p 26659:26659 --name celestia-light-client celestia-light-client
```

Upon completion of the build, take the returned container id and replace `<docker-id>` in the following command. Run the following command to get your Celestia wallet address:

```Dockerfile
docker exec -i <docker-id> sh -c "cel-key show dymension-test --keyring-backend test --node.type light" | grep "address"
```

Take the address and post it in the Celestia arabica-faucet channel on Discord to request faucet tokens:

```bash
$request <CELESTIA_ADDRESS>
```

Check the running Celestia light node:

```Dockerfile
docker ps
```

You can see the logs by replacing `<container-id>` with the Container-ID from the `docker ps` command and running the following command:

```bash
docker logs -f <container-id>
```

Next let's interact with the Dymension Hub and register our RollApp!
