---
title: Overview
slug: overview
---

In this tutorial we will create a `payment` module that sends one coin from an account to a different account every 60 minutes. The following modules will be utilized to create the desired functionality:

-   Auth: providing the account addresses
-   Bank: providing the token transfer functionality
-   Epochs: providing the time-triggered actions

As a bried overview, Dymension RDK is a framework built on top of the Cosmos SDK and extended for building [RollApps](/docs/learn/rollapps/dymension-rdk.md). The core developer experience of developing and integrating a module is equivalent and developers may use the Cosmos SDK [documentation](https://docs.cosmos.network/) for further details that exceed the extent of this tutorial.

The following tutorial assumes a general understanding of the [Cosmos SDK](https://docs.cosmos.network/main/basics/app-anatomy) and accompanying ABCI interface. However, lets briefly walk-through the lifecycle of a RollApp using the Dymension RDK.

[Dymint](/docs/learn/rollapps/dymint.md) is a processing engine that receives requests (i.e. messages) from end-users via an exposed RPC end-point. The message then is validated for basic checks. The transaction is then stored in the local mempool of the Sequencer until processed and the state is updated.

<div class="image-container-third">
    <img class="image--primary" src={require('./images/rdk-transaction.png').default} alt="dymint-overview" />
</div>

BaseApp is fundamental to the Dymension RDK as it is the router of messages to the appropriate module (i.e. Staking module) for processing. Any state changes are made within the specified module.

Let's begin our journey in building a custom `payment` module!
