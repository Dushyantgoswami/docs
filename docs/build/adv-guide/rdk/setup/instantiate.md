---
title: Instantiate
slug: instantiate
---

We will now install the application to the GOPATH.

```
make install
```

Now that we've installed the application on the local machine we can test by running the following command:

```
rollappd query hello
```

Should return:

```sh
Querying commands for the hello module

Usage:
  rollappd query hello [flags]
  rollappd query hello [command]

Available Commands:
  say-hello   Query say-hello

Flags:
  -h, --help   help for hello

Global Flags:
      --chain-id string     The network chain ID
      --home string         directory for config and data (default "/Users/mtsitrin/.rollapp")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "rollappd query hello [command] --help" for more information about a command.
```

### Using the custom binary

In order to actually use this custom binary we will need to pass it to [Roller](/docs/build/quick-start/roller-quick/install.md) on init.

First,  Let's check where the file installed:

```bash
which rollappd
```

Now we can then move to deploying the application with [Roller](/docs/build/quick-start/roller-quick/install.md), by providing our custom binary path.
