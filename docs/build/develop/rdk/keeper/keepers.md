---
title: Keepers
slug: keepers
---

```Go
type Keeper struct {
    // External keepers, if any

    // Store key(s)

    // codec

    // authority
}
```

A keeper can be considered quite literally to be the gatekeeper of a module's store(s). Each store (typically an IAVL Store) defined within a module comes with a storeKey, which grants unlimited access to it. The module's keeper holds this storeKey (which should otherwise remain unexposed), and defines methods for reading and writing to the store(s).

Keepers primarily expose getter and setter methods for the store(s) managed by their module. These methods should remain as simple as possible and strictly be limited to getting or setting the requested value, as validity checks should have already been performed by the Msg server when keepers' methods are called.

Typically, a getter method will have the following signature:

```Go
func (k Keeper) Get(ctx sdk.Context, key string) returnType
```

Similarly, a setter method will have the following signature:

```Go
func (k Keeper) Set(ctx sdk.Context, key string, value valueType)
```
