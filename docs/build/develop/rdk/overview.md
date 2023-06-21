---
title: Build a module
slug: overview
---

Dymension RDK is a framework built on top of the Cosmos SDK and extended for building [RollApps](/docs/learn/rollapps/dymension-rdk.md). The core developer experience of developing and integrating a module is equivalent and developers may use the Cosmos SDK [documentation](https://docs.cosmos.network/) for further details that exceed the extent of this tutorial.

The following tutorial assumes a general understanding of the [Cosmos SDK](https://docs.cosmos.network/main/basics/app-anatomy) and accompanying ABCI interface. However, lets briefly walk-through the lifecycle of a RollApp using the Dymension RDK.

[Dymint](/docs/learn/rollapps/dymint.md) is an ABCI-compatible processing engine that receives requests (i.e. messages) from end-users via an exposed RPC end-point. The message then is validated for basic checks via the CheckTx method. The transaction is then stored in the local mempool of the Sequencer until processed via the DeliverTx method.

<div class="image-container-third">
    <img class="image--primary" src={require('./images/rdk-transaction.png').default} alt="dymint-overview" />
</div>

BaseApp is fundamental to the Dymension RDK as it is the router of messages to the appropriate module (i.e. Staking module) for processing. Any state changes are made within the specified module.

Developers may compose different modules together into powerful state transition functions. Additionally, developers may extend the functionality of the EVM and other VMs by building [precompiles](https://www.evm.codes/precompiled?fork=shanghai) that enable smart contracts to compose with core RDK modules.

Let's begin our journey in building a custom RDK module!
