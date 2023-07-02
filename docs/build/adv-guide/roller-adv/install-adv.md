---
title: "Advanced guide installation"
slug: install-adv
---

This advanced tutorial of building and deploy a IBC-connected RollApp includes the deployment of seperate processes for [DA light client](./da-light-client.md), [Sequencer full node](./sequencer.md), and a [IBC relayer](./relayer.md). Please visit the [quick start](../../quick-start/roller-quick/install.md) for a simplified tutorial on how to deploy an EVM RollApp.

### Roller installation

Open a terminal and input the following command to install `Roller`:

```
curl -L https://roller.dymension.xyz/install | bash
```

### Verify Roller version

After installing the `Roller` CLI tool we will verify that the version we've installed is the latest stable version:

```
roller version
```

Should output:

```
💈 Roller version <version>
💈 Build time: <build-time>
💈 Git commit: <build-commit>
```

With `Roller` now installed we'll proceed to initializing the RollApp.
