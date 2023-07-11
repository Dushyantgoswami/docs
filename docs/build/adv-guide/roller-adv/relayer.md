---
title: "Relayer"
slug: relayer
---

RollApps are IBC-enabled giving immediate access to the global liquidity layer.

Now that we've funded the appropriate addresses, are running the DA light client, and Sequencer node we can initialize the IBC bridge. In a new termninal run the following command:

```
roller relayer start
```

This process takes a few minutes as there are TCP/IP-like handshakes. The process of creating an IBC bridge encompasses the following steps:

-   **Client** facilitates the verification of cross-chain communication (i.e. RollApp and Dymension Hub)

-   **Connection** facilitates the message passing between two blockchains

-   **Channel** facilitates application to application communication

-   **Relayers** are off-chain processes that read one blockchain and write to a different one. Relayers are the trust-less bridge operators between two different chains

Should return:

```
💈 The relayer is running successfully on you local machine on channel channel-0!
```
