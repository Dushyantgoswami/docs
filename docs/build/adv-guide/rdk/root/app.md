---
title: Building the App
slug: app
---

### Overview
Now that we've built the module we will need to integrate it into `app.go`. This is usually referred to as the application's main file or main entry point.

`app.go` is the file that defines what your application does, what transactions it can process, and other related information. In short, it describes your blockchain's application logic.

In the `app` folder of the root directory you will notice an `app.go` file. This comes pre-defined with the Dymension RDK.

Let's begin by opening the `app.go` file in your favorite code editor and adding the following snippets to the relevant parts in the file.

### Imports

To begin import the module into `app.go` by adding it to the end of the existing imports:

```Go
import (
// existing imports should remain

// custom hello module import
"github.com/dymensionxyz/rollapp/x/hello"
hellokeeper "github.com/dymensionxyz/rollapp/x/hello/keeper"
hellotypes "github.com/dymensionxyz/rollapp/x/hello/types"
)
```

### Variable

Let's find the place in the file where the `kvstorekeys` var is defined and add the `hello` store key to the end of the list:

```Go
kvstorekeys = []string{
    // ...
    hellotypes.StoreKey,
}
```

### App wiring

Previously we've defined the `AppModuleBasic` for setting up non-dependant module elements and genesis verification. Now we'll add it to the existing app-level manager. In `ModuleBasics`,add at `hello` the end the list:

```Go
ModuleBasics = module.NewBasicManager(
        // ...
        hello.AppModuleBasic{},
```


Next we'll adjust the `App` struct which defines the RollApp by adding the `hello` keeper to the end of the `App` struct:

```Go
type App struct {
    // ...
    HelloKeeper   hellokeeper.Keeper
}
```

`NewRollapp` creates and initializes a new `RollApp` instance. We'll need to pass a few pieces of information, firstly the `NewKeeper` arguments.
Let's add the following in the `NewRollapp` function where at the end of the other keepers definition:

```Go
app.HelloKeeper = hellokeeper.NewKeeper(
    appCodec,
    keys[hellotypes.StoreKey]
)

```

Next lets add the `hello` module to the instantiation of `AppModule` by adding the following to the end of the `modules` list:

```Go
modules := []module.AppModule{
    // ...
    hello.NewAppModule(appCodec, app.HelloKeeper),
}
```

The following adds the `hello` module to Begin blocker in case of Begin block logic (in this tutorial we did not add Begin block logic but may do so soon).
We'll add it at the end of the `beginBlockersList`:

```Go
beginBlockersList := []string{
        // ...
		hellotypes.ModuleName,
	}
```

The following adds the `hello` module to End blocker in case of End block logic (in this tutorial we did not add End block logic but may do so soon).
We'll add it at the end of the `endBlockersList`:

```Go
endBlockersList := []string{
        // ...
		hellotypes.ModuleName,
	)
```

The following adds the `hello` module to order of the `InitGenesis` called at the initialization of the application.
We'll add it at the end of the `initGenesisList`:

```Go
initGenesisList := []string{
        // ...
		hellotypes.ModuleName,
}
```

Now that we've wired up the app with the newly created module lets build the application!
