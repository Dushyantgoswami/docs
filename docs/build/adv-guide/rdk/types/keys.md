---
title: Keys
slug: keys
---

Now that we've setup the `proto` folder for the `hello` module, let's create a file called `keys.go` in the `hello/types` folder. The following information will be used to access the `hello` module's KVstore.

Create the `keys.go` file:

```bash
touch x/hello/types/keys.go
```

Each module is a KVstore within the main application multi-store. `StoreKeys` grant access to the store(s) of the multistore managed by the module.

Now let's add the following code to the `keys.go` file:

```Go
package types

var (
	// ModuleName defines the module name.
	ModuleName = "hello"

	// StoreKey defines the primary module store key.
	StoreKey = ModuleName

	// RouterKey is the module's message route
	RouterKey = ModuleName

	// QuerierRoute is the module's querier route
	QuerierRoute = ModuleName
)
```

We will use these variables in the future for reading and writing to the `hello` module's KVstore.
