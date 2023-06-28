---
title: "Install Roller"
slug: install
---

In this `Quick start` tutorial we will be deploying an EVM RollApp with `Roller`. Please visit the [advanced guide](/docs/build/adv-guide/roller-adv/overview-adv.md) for instructions on how to build a RDK RollApp.

### Roller installation

Open a terminal and input the following command to install `Roller`:

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.0.0/install.sh | bash
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
