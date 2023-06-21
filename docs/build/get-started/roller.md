---
title: "Roller"
slug: "roller"
---

Roller is an easy-to-use CLI tool for bootstrapping, building, and deploying an IBC-enabled RollApp. Roller abstracts away many of the complexties of running an inter-chain application-specific blockchain into a few simple commands:

-   [Install](#roller-installation)
-   [Init](../deploy/initialize)
-   [Register](../deploy/register)
-   [Run](../deploy/run)

With Roller developers are able to deploy a RollApp within minutes.

:::info NOTE:
`Roller Run` abstracts components of deploying a RollApp (i.e. DA light clients, Sequencer full nodes, and relayer nodes) for an in-depth guide including the stand-alone deployment of each process please visit the [advanced guide](../deploy/initialize-adv.md).
:::

### Roller installation

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.0.0/install.sh | bash
```

### Verify Roller version

After installing the `Roller CLI` tool in the [Get started](../get-started/roller) section, we will verify that the version we've installed is the latest stable version:

```
roller version
```

Should return:

```
💈 Roller version <version>
💈 Build time: <build-time>
💈 Git commit: <build-commit>
```
