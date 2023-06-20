---
title: "Roller"
slug: "roller"
---

Roller is an easy-to-use CLI tool for bootstrapping, building, and deploying an IBC-enabled RollApp. With Roller developers are able to deploy a RollApp within minutes. Roller abstracts away many of the complexties of running an inter-chain application specific blockchain into a few simple commands:

-   `Init`
-   `Register`
-   `da-light-client`
-   `Sequencer`
-   `Relayer`

### Roller installation

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.0.0/install.sh | bash
```

### Verify Roller version

After installing the `Roller CLI` tool in the [Get started](../get-started.md) section, we will verify that the version we've installed is the latest stable version:

```
roller version
```

Should return:

```
💈 Roller version <version>
💈 Build time: <build-time>
💈 Git commit: <build-commit>
```
