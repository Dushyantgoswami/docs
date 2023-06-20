---
title: "DA light client"
slug: da-light-client
---

The first process that we will start is the running of a DA light client. In this tutorial we will be using the [Celestia](https://celestia.org/) DA network. Running a DA light client enables a RollApp to publish data on-chain and provide users of the RollApp with blockchain security.

```
roller da-light-client start
```

Should return:

```
💈 The data availability light node is running on your local machine!
💈 Light node endpoint: http://0.0.0.0:26659
```

We can verify that the address was funded by running the following command:

```
http://0.0.0.0:26659/balance
```

Now that we have a DA light client running we can continue in a new terminal to start the Sequencer full node.
