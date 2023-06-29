---
title: "Overview"
slug: "system-reqs"
---

This advanced tutorial of building and deploy a IBC-connected RollApp includes the deployment of seperate processes for [DA light client](./da-light-client.md), [Sequencer full node](./sequencer.md), and a [IBC relayer](./relayer.md). Please visit the [quick start](../../quick-start/roller-quick/install.md) for a simplified tutorial on how to deploy an EVM RollApp.

This tutorial includes a demonstration for building a custom module, developers may [skip](../roller-adv/install-adv.md) this section by specifying the PATH to a binary which can be instantiated with `Roller`.

### Supported OS

-   TODO

### Hardware prerequisites

-   TODO

These requirements will continually be revisted and tested by the core team and community.

### Go download

`````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Go is required for developing with Dymension's RollApp Development Kit (RDK). We provide helpful commands below for downloading the relevant version of Go.
Developers may also choose to head over to the [Go download and install Go Version 1.19](https://go.dev/doc/install).

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

</TabItem>
<TabItem value="zsh" label="zsh">

```zsh
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc
source $HOME/.zshrc
```

</TabItem>
</Tabs>

To check if Go was installed correctly run:

```sh
go version
```

The output should be the version installed:

<Tabs groupId="operating-systems">
<TabItem value="amd" label="Ubuntu (AMD)">

```sh
go version go1.19.9 linux/amd64
```

</TabItem>
<TabItem value="arm" label="Ubuntu (ARM)">

```sh
go version go1.19.9 linux/arm64
```

</TabItem>
<TabItem value="apple" label="Mac (Apple)">

```sh
go version go1.19.9 darwin/arm64
```

</TabItem>
<TabItem value="mac" label="Mac (Intel)">

```sh
go version go1.19.9 darwin/amd64
```

</TabItem>
</Tabs>


</TabItem>
</Tabs>
`````
