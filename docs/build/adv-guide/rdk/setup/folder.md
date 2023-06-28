---
title: Folder setup
slug: folder
---

We will begin by creating the `payment` folders.

The `x` folder contains the core custom logic for each module. The following command creates a `payment` folder within the `x` folder and two sub-folders (i.e. `Keeper` and `Types`).

-   `Keeper` is the folder housing the implementation for the state transition.
-   `Types` is the folder that houses code that help organize and validate the state-transitions.

```
cd x
mkdir -p payment/keeper
mkdir -p payment/types
```

The following commands move us to the root directory and creates a `payment` folder in the `proto` directory.

-   [Protobufs](https://protobuf.dev/) are the recommended way for defining messages.

```
cd ..
cd proto
mkdir -p rollapp/payment
cd rollapp/payment
```

Now that we have a basic folder structure, we can continue and build the structure of the module.
