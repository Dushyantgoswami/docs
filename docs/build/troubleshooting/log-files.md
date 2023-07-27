---
title: "Log files"
slug: log-files
---

This guide explain how to show the logs for both the deployed [Sequencer](/docs/build/adv-guide/roller-adv/sequencer.md) and [Relayer](/docs/build/adv-guide/roller-adv/relayer.md). This is helpful to understand the exact actions being taken behind the scenes of your running processes.

The log paths are located in the `~/.roller` folder with the respective folders for the RollApp Sequencer and the relayer.

To review the logs of the RollApp Sequencer, type the following command:

```
tail -f ~/.roller/rollapp/rollapp.log
```

The Sequencer logs will show items such as block height and number of transactions in the previous block.

To review the logs of the IBC Relayer, type the following command:

```
tail -f ~/.roller/relayer/relayer.log
```

The relayer logs will show the latest state of the relayer and accompanying packet information.

If you are having any difficulty please visit the Dymension [Discord](https://discord.gg/dymension) and share with us the log files and what you're working on in the `dev-discussion` channel!
