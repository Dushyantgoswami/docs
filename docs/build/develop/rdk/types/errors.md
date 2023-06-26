---
title: Errors
slug: errors
---

Modules are encouraged to define and register their own errors to provide better context on failed message or handler execution. Typically, these errors should be common or general errors which can be further wrapped to provide additional specific execution context.

Typically, the code is monotonically increasing but does not necessarily have to be. The only restrictions on error codes are the following:

-   Must be greater than one, as a code value of one is reserved for internal errors.
-   Must be unique within the module.

```Go
package types

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/payment module sentinel errors
var (
	ErrInvalidAmount      = sdkerrors.Register(ModuleName, 2, "amount of tokens is invalid")
	ErrInvalidTime        = sdkerrors.Register(ModuleName, 3, "distribution period is invalid")
    )
```

We will use these errors later on when we define the state-transition functions. For now let's define which other modules we plan to use.
