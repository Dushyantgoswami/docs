---
title: Genesis
slug: genesis
---

For the sake of brevity in the tutorial, we've opted to include an empty `GenesisState` in the [protobuf defintion](../proto/genesis.md). As such we will create a file with defaults and no validity checks. Firstly, we will create the `genesis.go` file in the `types` folder:

```bash
touch x/hello/types/genesis.go
```

Now let's add the following code to the `genesis.go` file:

```Go
package types

// DefaultGenesisState returns the module's default genesis state.
func DefaultGenesisState() *GenesisState {
	return &GenesisState{}
}

// Validate validates the given instance of the module's genesis state.
func (gs GenesisState) Validate() error {
	return nil
}
```

`DefaultGenesisState()` method is a simple method that calls the constructor function for GenesisState with the default value for each parameter.

`Validate()` method is called to verify that the provided genesisState is correct. It should perform validity checks on each of the parameters listed in GenesisState.

We will call these methods further along in this tutorial from the [module manager](../root/module-manager.md). For now, let's continue and define errors that may be shown in case of a transaction going awry.
