---
title: Run the RDK RollApp
slug: run
---

Now that you have added a query to your RollApp and modified it to return the value you want, you can start your RollApp.

The following build command compiles the source code of the project into a binary and installs the binary in the `$(go env GOPATH)/bin` directory:

```
ignite chain build
```

In the RDK repository, we have included a helpful bash script that allows you to instantiate and start your RollApp.

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following script from within the `Hello` directory:

```bash
bash init.sh
```

If you would like to run the RDK RollApp with a mock base layer please run the following script from within the `Hello` directory:

```bash
bash simulation-init.sh
```

Once you're ready move on [next](/docs/develop/build/rdk/run.md) to interacting with your running RDK RollApp!
