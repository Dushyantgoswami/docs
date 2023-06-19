---
title: "Initialize"
slug: initialize
---

```
roller version
```

```
💈 Roller version <version>
💈 Build time: <build-time>
💈 Git commit: <build-commit>
```

-   hub string The ID of the Dymension hub. Acceptable values are '35-C', 'internal-devnet' or 'local' (default "35-C")
-   rollapp-binary string The rollapp binary. Should be passed only if you built a custom rollapp

```
roller config init <chain-id> <denom>
```

```
💈 RollApp 'name' configuration files have been
   successfully generated on your local machine. Congratulations!

🔑 Addresses:

  Celestia         | celestia<ADDRESS>
  Sequencer        | dym<ADDRESS>
  Relayer, Hub     | dym<ADDRESS>
  Relayer, RollApp | ethm<ADDRESS>

🔔 Please fund these addresses to register and run the rollapp.
```
