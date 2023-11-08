---
title: "Import/Export Rollapp"
slug: import/export rollapp
---

To move a running rollapp to a different workspace:

1. Stop the rollapp.

2. Verify that [roller](https://docs.dymension.xyz/build/quick-start/roller-quick/install) is installed on the new environment.

3. Copy the roller config dir (default: `~/.roller`) to the new environment at `$HOME/.roller`.

4. Update the `HOME` entry in the `~/.roller/config.toml` file to point to the new roller config dir absolute path.

5. Update the `keyring_home_dir` entry in the `~/.roller/rollapp/config/dymint.toml` file to point to the new keyring
home directory absolute path - it should be the same relative path within the new roller config dir.

6. Run the rollapp.
