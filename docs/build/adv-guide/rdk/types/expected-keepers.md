---
title: Expected keepers
slug: expected-keepers
---

If a module needs to access the subset of state defined by another module, a reference to the second module's internal keeper needs to be passed to the first one.

These are referred to as `expected_keepers`. We will build an interface and define which methods and external keepers we expect to use in the `payment` module. Interfaces are used to reduce the number of dependencies, as well as to facilitate the maintenance of the module itself.

In the `types` folder we will create a new file with the expected keepers:

```
touch expected_keepers.go
```

In the `expected_keepers` file we will define an interface for the `bank` and `epochs` modules:

```Go
// TODO
```

-   Bank:
-   Epochs:

We will later on refer to these external keepers in `app.go` during the instantiation of module keepers. Let's move on and build the state-transition functinoality of the `payment` module.
