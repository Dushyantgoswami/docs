---
title: "Install Roller"
slug: install
---

In this `Quick start` tutorial we will be deploying an EVM RollApp with `Roller`. Please visit the [advanced guide](/docs/build/adv-guide/roller-adv/install-adv.md) for instructions on how to build a RDK RollApp along with a breakdown of each component of `Roller`.

### Roller installation

Open a terminal and input the following command to install `Roller`:

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.1.0/install.sh | bash
```

### Verify Roller version

After installing the `Roller` CLI tool we will verify that the version we've installed is the latest stable version:

```
roller version
```

Should output:

```
💈 Roller version v0.1.0
💈 Build time: 2023-07-10T19:23:43+0300"
💈 Git commit: b0145537a94a9df9265dda6be94599504c6f5cac
```

With `Roller` now installed we'll proceed to initializing the RollApp.
