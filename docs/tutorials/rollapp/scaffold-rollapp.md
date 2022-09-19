---
title: "Checkers RollApp"
slug: "scaffold-rollapp"
---

It's time to build a RollApp! We will use the [Local dYmension](https://github.com/dymensionxyz/local-dymension/) repository to build the Checkers RollApp.

While the dymension node is running open a new tab in the terminal. Change the current directory to a new one where you will set up the RollApp. Run the following commands

```sh
git clone git@github.com:dymensionxyz/local-dymension.git && cd local-dymension

export WORKSPACE_PATH=$HOME/workspace

cd checkers/build_chain_script && sh build.sh
```

Alternatively you can build it manually with [these instructions](https://github.com/dymensionxyz/local-dymension/blob/main/checkers/build_chain.md). The Checkers RollApp is built upon the fantastic Cosmos Academy [checkers blockchain tutorial](https://tutorials.cosmos.network/academy/3-my-own-chain/stored-game.html).
