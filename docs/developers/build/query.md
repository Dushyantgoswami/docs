---
title: "View RollApp state"
slug: "query-rollapp"
---

While our sequencer is running, it keeps sending updates to the Dymension Hub. In this section we will query the Dymension Hub
in order to view the current state of our RollApp.

First let's look at all of the different RollApps which we've registered to the Dymension Hub. For now, it should be only our RollApp.

```sh
dymd query rollapp list-rollapp
```

Next, lets view our RollApp's latest update state index. Using this index we can later query the latest state update sent to the Dymension Hub from our RollApp.

```sh
export ROLLAPP_ID=checkers
dymd query rollapp show-state-index "$ROLLAPP_ID"
```

Now we can take the value of the `index` field and use it for our next query to show the latest RollApp state info.

```sh
dymd query rollapp show-rollapp-state-info "$ROLLAPP_ID" <index>
```

Congrats! You now have a fully functioning RollApp!<br/>
