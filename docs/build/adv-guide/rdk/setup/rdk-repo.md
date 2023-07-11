---
title: Get RDK
slug: rdk-repo
---

In this tutorial we will create a `Hello World` RollApp. We will create a `hello` module that responds with `Hello {name}`!

The core developer experience of developing and integrating a module is equivalent and developers may use the Cosmos SDK [documentation](https://docs.cosmos.network/) for further details that exceed the extent of this tutorial.

Let's begin our journey in building a custom `hello` module!

We will begin by making a directory that can contain the RollApp code that we will work with. Please open a new terminal from and publish the following command in a easily accessible location:

```
mkdir rollapp
```

Now we'll move into the newly created directory:

```
cd rollapp
```

Now that we're in the newly created directory we can get the `app` template from GitHub. This `app` template, inspiried by Julien Robert's [mini Cosmos SDK app template](https://github.com/julienrbrt/chain-minimal), is a clean template for working with the imported Dymension RDK.

```
git clone https://github.com/dymensionxyz/rollapp.git
cd rollapp
```

Now that we've installed the app in the appropriate location we can open it with your favorite code editor. Next let's start coding!
