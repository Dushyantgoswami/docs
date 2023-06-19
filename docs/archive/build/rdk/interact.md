---
title: Interact with the RDK RollApp
slug: interact
---

After starting your blockchain, you can use its command-line interface (CLI) to interact with it and perform various actions such as querying the blockchain's state, sending transactions, and more.

You can use the `hellod` binary to run the `say-hello` query:

```
hellod q hello say-hello bob
```

Once you run this command, the `hellod` binary will send a `say-hello` query to your blockchain with the argument `bob`. The blockchain will process the query and return the result, which will be printed by the `hellod` binary. In this case, the expected result is a string containing the message `Hello, bob!`.

```
name: Hello, bob!
```

Congratulations! 🎉 You have successfully created a new Cosmos SDK module called `hello` with a custom query functionality. This allows users to query the blockchain and receive a response with a personalized greeting. This tutorial demonstrated how to use Ignite CLI to create a custom query in a blockchain.

With Ignite, developers can quickly and easily set up the basic structure of their project, allowing them to focus on the more complex and unique aspects of their work. To learn more about building your RollApp modules visit the [Ignite documentation](https://docs.ignite.com/), [Cosmos SDK documentation](https://docs.cosmos.network/main), and feel free to contact the Dymension team in the [Discord](http://discord.gg/dymension).
