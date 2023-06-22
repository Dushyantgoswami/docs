---
title: Module setup
slug: setup
---

We will begin by creating the `payment` folder within the `x` folder. The `x` folder contains the core custom logic for each module. This command creates a `payment` folder within the `x` folder and two sub-folders along with a Go file.

After running the following command you will have a folder to put:

-   `Keeper` related components TODO
-   `Types` related components TODO
-   `module.go` giving the required information for the main application to control the module.

```
cd x
mkdir -p payment/keeper
mkdir -p payment/types
touch payment/module.go
```

Now that we have a basic folder structure, we can continue and build the `module.go` file.
