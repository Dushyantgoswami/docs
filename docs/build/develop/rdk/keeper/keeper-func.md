### TODO

```
-   GetPaymentScheduleId returns id
-   SetPaymentScheduleID returns id

-   GetPaymentSchedule(id) returns payment
-   SetPaymentSchedule(id) returns payment

//  Need to define payment proto

-  Transaction -> CLI/ABCI -> App -> MsgServer (CreatePayment implementation) -> Keeper (Store changes) -> EmitEvent
```

Typically, a getter method will have the following signature:

```Go
func (k Keeper) Get(ctx sdk.Context, key string) returnType
```

Similarly, a setter method will have the following signature:

```Go
func (k Keeper) Set(ctx sdk.Context, key string, value valueType)
```
