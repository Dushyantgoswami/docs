---
title: "Install Roller"
slug: install
---

In this `Quick start` tutorial we will be deploying an EVM RollApp with `Roller`. Please visit the [advanced guide](/docs/build/adv-guide/roller-adv/install-adv.md) for instructions on how to build a RDK RollApp along with a breakdown of each component of `Roller`.

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
