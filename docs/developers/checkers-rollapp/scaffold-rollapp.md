---
title: "Scaffold checkers RollApp"
slug: "scaffold-rollapp"
---

It's time to build a RollApp! We will use the [Local dYmension](https://github.com/dymensionxyz/local-dymension/) repository to build the Checkers RollApp.

While the [dymension hub node](../getting-started/run-a-hub-node.md) is running, open a new terminal window. Change the current directory to a new one where you will build the RollApp.<br/>
Once inside the new directory, Run the following commands:

```sh
git clone https://github.com/dymensionxyz/local-dymension.git && cd local-dymension

export WORKSPACE_PATH=$HOME/workspace

cd checkers/build_chain_script && sh build.sh
```

Alternatively you can build it manually with [these instructions](https://github.com/dymensionxyz/local-dymension/blob/main/checkers/build_chain.md).<br/> The Checkers RollApp is built upon the Cosmos Academy [checkers blockchain tutorial](https://developers.cosmos.network/academy/3-my-own-chain/stored-game.html).
