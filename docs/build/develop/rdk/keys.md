---
title: Keys
slug: keys
---

Now that we've setup the folder structure of the `payment` module, let's create a file called `keys.go` in the `payment/types` folder. The following information will be used to access the `payment` module's KVstore.

Each module is a KVstore within the main multi-store. `StoreKeys` grant access to the store(s) of the multistore managed by the module.

```Go
package types

var (
	// ModuleName defines the module name.
	ModuleName = "payment"

	// StoreKey defines the primary module store key.
	StoreKey = ModuleName

	// RouterKey is the module's message route
	RouterKey = ModuleName

	// QuerierRoute is the module's querier route
	QuerierRoute = ModuleName
)
```

We will use these variables in the future for reading and writing to the `payment` module's KVstore.
