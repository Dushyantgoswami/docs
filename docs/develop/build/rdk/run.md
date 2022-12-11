---
title: Run the RDK RollApp
slug: run
---

## Step 3: Starting the RDK environment

Now that you have added a query your blockchain and modified it return the value
you want, you can start your blockchain with Ignite:

```
ignite chain build
```

In the RDK repository, we have a helpful bash script that allows you to instantiate and start your RollApp.

If you followed the [Get Started](/docs/develop/get-started/setup.mdx) tutorial please run the following script from within the `Hello` directory:

```bash
bash init.sh
```

If you would like to run the RDK RollApp with a mock base layer please run the following script from within the `Hello` directory:

```bash
bash simulation-init.sh
```
