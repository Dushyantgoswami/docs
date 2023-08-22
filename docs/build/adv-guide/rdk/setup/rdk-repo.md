---
title: Get RDK
slug: rdk-repo
---

### Overview

In this tutorial we will create a `Hello World` RollApp. We will create a `hello` module that responds with `Hello {name}`!

The core developer experience of developing and integrating a module is equivalent and developers may use the Cosmos SDK [documentation](https://docs.cosmos.network/) for further details that exceed the extent of this tutorial.

### Prerequisites

In order to follow this tutorial, you will need to have the following installed:

1. [Go](https://golang.org/doc/install)
2. [Docker](https://docs.docker.com/get-docker/)
3. [Make](https://www.gnu.org/software/make/)


In the next section will only touch on the Go installation. For the rest of the prerequisites, please follow the official installation instructions.

### Go Installation

`````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Go is required for developing with Dymension's RollApp Development Kit (RDK). We provide helpful commands below for downloading the relevant version of Go.
Developers may also choose to head over to the official Go installation page and [install Go Version 1.19](https://go.dev/doc/install).

````mdx-code-block
<Tabs groupId="network">
<TabItem value="go" label="Install Go">

<Tabs groupId="operating-systems">
<TabItem value="amd" label="Ubuntu (AMD)">

```sh
ver="1.19.9"
cd $HOME
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
```

</TabItem>
<TabItem value="arm" label="Ubuntu (ARM)">

```sh
ver="1.19.9"
cd $HOME
wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"
rm "go$ver.linux-arm64.tar.gz"
```

</TabItem>
<TabItem value="apple" label="Mac (Apple)">

```sh
ver="1.19.9"
cd $HOME
wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"
rm "go$ver.darwin-arm64.tar.gz"
```

</TabItem>
<TabItem value="mac" label="Mac (Intel)">

```sh
ver="1.19.9"
cd $HOME
wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"
rm "go$ver.darwin-amd64.tar.gz"
```

</TabItem>
</Tabs>

Now we need to add the `/usr/local/go/bin` directory to `$PATH`:

<Tabs groupId="shell">
<TabItem value="bash" label="bash">

```bash
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

Validate the installation by checking the Go version:

```bash
go version
```

</TabItem>
<TabItem value="zsh" label="zsh">

```zsh
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc
source $HOME/.zshrc
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>
`````

### App installation

Let's begin our journey in building a custom `hello` module!

We will begin by getting the RollApp template from GitHub. This `app` template, inspiried by the [mini Cosmos SDK app template](https://github.com/julienrbrt/chain-minimal), is a clean template for working with the imported Dymension RDK.

```
git clone https://github.com/dymensionxyz/rollapp.git --branch v0.1.0-rc1
cd rollapp
```

Now that we've installed the app in the appropriate location we can open it with your favorite code editor. Next let's start coding!
