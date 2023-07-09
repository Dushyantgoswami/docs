---
title: "Sequencer"
slug: sequencer
---

In a new terminal we will now run a Sequencer node. Sequencers operate like block proposer in a Proof-of-Stake blockchain. Sequencers process data off-chain and publish transaction data and state updates on-chain so any peer can reconstruct the state.

```
roller sequencer start
```

Should return:

```
💈 The Rollapp sequencer is running on your local machine!
💈 Default endpoints:
💈 EVM RPC: http://0.0.0.0:8545
💈 Node RPC: http://0.0.0.0:26657
💈 Rest API: http://0.0.0.0:1317
💈 Log file path:  /Users/barrykuts/.roller/rollapp/rollapp.log
💈 Rollapp root dir:  /Users/barrykuts/.roller/rollapp
```

-   **EVM RPC** provides a RPC gateway for publishing EVM smart contracts
-   **Node RPC** provides a RPC gateway for requests to the node
-   **Rest API** provides a REST gateway for requests to the node
-   **Log file path** is the PATH to the RollApp logs see [trouble-shooting](./troubleshooting) for more information
-   **Rollapp root dir** is the root directory of the deployed RollApp

With state updates being published to the Dymension Hub users are able to utilize [IBC](https://tutorials.cosmos.network/academy/3-ibc/1-what-is-ibc.html) for safely bridging. Let's continue and run a IBC relayer.
