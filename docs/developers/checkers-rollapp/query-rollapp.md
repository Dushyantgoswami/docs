---
title: "View RollApp state"
slug: "query-rollapp"
hidden: false
sidebar_position: 4
hide_table_of_contents: true
---

## View the RollApp state on dymension hub

While our sequencer is running, it keeps sending updates to the DA and Settlement layers. In the next section we will query the settlement layer 
in order to view our current RollApp state. 

First let's look at all of the different RollApps which were registered to the settlement layers. For now, it should be only our RollApp. 

```sh
dymd query rollapp list-rollapp
```

Next lets view our RollApp last update state index. Using this index we can later query the last state update sent to the settlement layer from our RollApp.

```sh
dymd query rollapp show-state-index checkers
```

Now we can take the value of the `index` field and use it for our next query to show the last RollApp state info.

```sh
dymd query rollapp show-rollapp-state-info checkers <index>
```

Congrats! You now have a functioning RollApp which uses the dymension hub as a settlement layer for security.<br/>

On our next tutorial we will show you how to build your own CosmWasm RollApp which can be used for deployment of smart contracts.
