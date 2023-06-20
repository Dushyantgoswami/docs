---
title: "Get started"
slug: "get-started"
---

## Roller introduction

Roller is an easy-to-use CLI tool for bootstrapping, building, and deploying an IBC-enabled RollApp. With Roller developers are able to deploy a RollApp within minutes. Roller abstracts away many of the complexties of running an inter-chain application specific blockchain into a few simple commands:

-   `Init`
-   `Register`
-   `da-light-client`
-   `Sequencer`
-   `Relayer`

## Supported OS

We have tested and support the following architectures:

-   `darwin/arm64`
-   `darwin/x86_64`
-   `linux/arm64`
-   `linux/x86_64`

Other architectures may be supported but have not been officially tested.

## Hardware prerequisites

-   Dual Core
-   At least 500GB of SSD disk storage
-   At least 16GB of memory (RAM)
-   At least 100mbps network bandwidth

These requirements will continually be revisted and tested by the core team and community.

## Go download

It is required to run a Go version of `1.19` whilst building modules please download the appropriate Go version [here](https://go.dev/dl/) or use a [Go version manager](https://github.com/moovweb/gvm). The following command should return the approriate Go version:

```Go
go version
```

## Roller installation

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.0.0/install.sh | bash
```
