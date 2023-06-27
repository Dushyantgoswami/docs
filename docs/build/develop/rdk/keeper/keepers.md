---
title: Keepers
slug: keepers
---

A keeper can be considered quite literally to be the gatekeeper of a module's store(s). Each store defined within a module comes with a [storeKey](../types/keys.md), which grants unlimited access to it. Keepers primarily expose getter and setter methods for the store(s) managed by their module.

```Go
type Keeper struct {
    // External keepers, if any

    // Store key(s)

    // codec

    // authority
}
```

Typically, a getter method will have the following signature:

```Go
func (k Keeper) Get(ctx sdk.Context, key string) returnType
```

Similarly, a setter method will have the following signature:

```Go
func (k Keeper) Set(ctx sdk.Context, key string, value valueType)
```

-   NewKeeper
-   Logger
-   GetModuleAddress

-   GetPaymentScheduleId returns id
-   SetPaymentScheduleID returns id

-   GetPaymentSchedule(id) returns payment
-   SetPaymentSchedule(id) returns payment

// TODO
// Need to define payment proto

-   CLI/ABCI -> App -> MsgServer (CreatePayment implementation) -> Keeper (Store changes) -> EmitEvent
