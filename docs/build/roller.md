---
title: "Roller"
slug: "roller"
---

Roller is an easy-to-use CLI tool for bootstrapping, building, and deploying an IBC-enabled RollApp. Roller abstracts away many of the complexties of running an inter-chain application-specific blockchain into a few simple commands:

-   [Install](/docs/build/quick-start/roller-quick/install.md)
-   [Init](/docs/build/quick-start/roller-quick/initialize.mdx)
-   [Register](/docs/build/quick-start/roller-quick/register.md)
-   [Run](/docs/build/quick-start/roller-quick/run.md)

With `Roller` developers are able to deploy a RollApp within minutes.

:::info NOTE:
`Roller Run` abstracts components of deploying a RollApp (i.e. DA light clients, Sequencer full nodes, and relayer nodes) for an in-depth guide including the stand-alone deployment of each process please visit the [advanced guide](/docs/build/adv-guide/roller-adv/install-adv.md).
:::

`Roller` is the engine that brings the Dymension RDK to life. With `Roller` we will deploy a RollApp connected to the entire inter-chain!

### Supported OS

-   Roller has only been officially tested with MacOS. More officially supported operating systems will be provided soon.

### Recommended hardware

-   Dual Core
-   At least 500GB of SSD disk storage
-   At least 16GB of memory (RAM)
-   At least 100mbps network bandwidth

These requirements will continually be revisted and tested by the core team and community.

### Go download

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
