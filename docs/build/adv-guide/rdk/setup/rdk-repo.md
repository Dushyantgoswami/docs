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

Now that we're in the newly created directory we can get the Dymension RDK from GitHub. Please make sure to have [Git downloaded](https://git-scm.com/downloads) and installed on your computer.

```
git clone https://github.com/dymensionxyz/dymension-rdk.git
```

Now that we've installed the RDK in the appropriate location we can open it with your favorite code editor (i.e. [Visual Studio Code](https://code.visualstudio.com/)). Next let's get started coding!
