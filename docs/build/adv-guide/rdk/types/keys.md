---
title: Keys
slug: keys
---

Now that we've setup the `proto` folder for the `blog` module, let's create a file called `keys.go` in the `blog/types` folder. The following information will be used to access the `blog` module's KVstore.

Each module is a KVstore within the main application multi-store. `StoreKeys` grant access to the store(s) of the multistore managed by the module.

```Go
package types

var (
	// ModuleName defines the module name.
	ModuleName = "blog"

	// StoreKey defines the primary module store key.
	StoreKey = ModuleName

	// RouterKey is the module's message route
	RouterKey = ModuleName

	// QuerierRoute is the module's querier route
	QuerierRoute = ModuleName
)
```

We will use these variables in the future for reading and writing to the `blog` module's KVstore.
