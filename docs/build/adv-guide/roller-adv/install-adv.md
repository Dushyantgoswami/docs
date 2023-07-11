---
title: "Advanced guide installation"
slug: install-adv
---

This advanced tutorial of building and deploy a IBC-connected RollApp includes the deployment of seperate processes for [DA light client](./da-light-client.md), [Sequencer full node](./sequencer.md), and a [IBC relayer](./relayer.md). Please visit the [quick start](../../quick-start/roller-quick/install.md) for a simplified tutorial on how to deploy an EVM RollApp.

The advanced guide includes the ability to specify the binary path of a custom RollApp. As such, we recommend to begin this tutorial by learning [how to build with the RDK](/docs/build/adv-guide/rdk/setup/rdk-repo.md) and returning here to deploy the RollApp with `Roller`.

### Roller installation

Open a terminal and input the following command to install `Roller`:

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.1.2/install.sh | bash
```

### Verify Roller version

After installing the `Roller` CLI tool we will verify that the version we've installed is the latest stable version:

```
roller version
```

Should output:

```
💈 Roller version v0.1.2
💈 Build time: 2023-07-11T18:03:19+0300"
💈 Git commit: 2022644ad63ea1644b3e6698f05b203b4cb47516
```

With `Roller` now installed we'll proceed to initializing the RollApp.
