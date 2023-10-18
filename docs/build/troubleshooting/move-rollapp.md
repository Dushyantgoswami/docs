---
title: "Move Rollapp to a Different Machine"
slug: move rollapp
---

To move a running rollapp to a different virtual machine you will need to:

1. Stop the rollapp on the old machine.

2. [Install roller on the new machine.](https://docs.dymension.xyz/build/quick-start/roller-quick/install) 

3. Copy the roller config dir (default: `~/.roller`) to the new machine at `$HOME/.roller`.

4. Update the `HOME` entry in the `~/.roller/config.toml` file to point to the new roller config dir absolute path.

5. Update the `keyring_home_dir` entry in the `~/.roller/rollapp/config/dymint.toml` file to point to the new keyring
home directory absolute path - it should be the same relative path within the new roller config dir.

6. Run the rollapp on the new machine.