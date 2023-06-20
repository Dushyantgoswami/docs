---
title: "Sequencer"
slug: sequencer
---

We will now run a Sequencer node. Sequencers operate like block proposer in a Proof-of-stake blockchain. Sequencers process data off-chain and publish transaction data and state updates on-chain so any peer can reconstruct the state.

```
roller sequencer start
```

Should return:

```
💈 The Rollapp sequencer is running on your local machine!
💈 EVM RPC: http://0.0.0.0:8545
💈 Node RPC: http://0.0.0.0:26657
💈 Rest API: http://0.0.0.0:1317
```

-   **EVM RPC** provides a RPC gateway for publishing EVM smart contracts
-   **Node RPC** provides a RPC gateway for requests to the node
-   **Rest API** provides a REST gateway for requests to the node
