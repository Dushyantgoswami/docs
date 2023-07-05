---
title: Building the App
slug: app
---

### Overview

Now that we've built the module we will need to integrate it into `app.go`. This is usually referred to as the application's main file or main entry point.

`app.go` is the file that defines what your application does, what transactions it can process, and other related information. In short, it describes your blockchain's application logic.

In the `app` folder of the root directory you will notice an `app.go` file. This comes pre-defined with the Dymension RDK.

### Imports

To begin import the module into `app.go`:

```Go
import (
// existing imports should remain

// custom payment module import
"github.com/rollapp/x/payment"
paymentkeeper "github.com/rollapp/payment/keeper"
paymenttypes "github.com/rollapp/payment/types"
)
```

### App wiring

Previously we've defined the `AppModuleBasic` for setting up non-dependant module elements and genesis verification. Now we'll add it to the existing app-level manager in `ModuleBasics` add at the end the `payment` AppModuleBasic:

```Go
ModuleBasics = module.NewBasicManager(
        // ...
        payment.AppModuleBasic{},
```

Module accounts are special types of accounts used by modules to hold and control tokens. They are identified by their name and have additional permissions over normal accounts. There are three kinds of permissions that can be granted to module accounts:

1. **Minter**: Allows the module account to mint tokens.
2. **Burner**: Allows the module account to burn tokens.
3. **Staking**: Allows the module account to delegate tokens.

In our tutorial the `payment` module does not utilize this functionality so we'll add `nil` to `maccPerms` (module account permissions):

```Go
maccPerms = map[string][]string{
    // ...
    paymenttypes.ModuleName:     nil,
}
```
