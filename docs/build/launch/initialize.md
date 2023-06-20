---
title: "Initialize"
slug: initialize
---

### Verify Roller version

After installing the `Roller CLI` tool in the [Get started](../get-started.md) section, we will verify that the version we've installed is the latest stable version:

```
roller version
```

Should return:

```
💈 Roller version <version>
💈 Build time: <build-time>
💈 Git commit: <build-commit>
```

### Initialize config files

`````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

````mdx-code-block
<Tabs groupId="network">
<TabItem value="Roller" label="Initialize">

<Tabs groupId="shell">
<TabItem value="bash" label="EVM">

```bash
roller config init <NAME>_9000_1 <denom>
```

</TabItem>
<TabItem value="zsh" label="Go">

```zsh
roller config init <NAME>_9000_1 <denom>
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>
`````

Should return:

```
💈 RollApp 'name' configuration files have been
   successfully generated on your local machine. Congratulations!

🔑 Addresses:

  Celestia         | celestia<ADDRESS>
  Sequencer        | dym<ADDRESS>
  Relayer, Hub     | dym<ADDRESS>
  Relayer, RollApp | ethm<ADDRESS>

🔔 Please fund these addresses to register and run the rollapp.
```

The following addresses must be funded prior to the following steps in this tutorial. Please fund the addresses at the following locations:

-   Celestia: Celestia discord channel for the Mocha network
-   Sequencer: Dymension discord channel for the Froopyland network
-   Relayer, Hub: Dymension discord channel for the Froopyland network
-   Relayer, RollApp: Requires the following command to transfer tokens from the initialized Sequencer address to the Relayer:

```
rollapp_evm tx bank send rollapp_sequencer <relayer-rollapp-address> 3500000<denom> --keyring-backend test --keyring-dir ~/.roller/rollapp --chain-id <rollapp-id> --broadcast-mode block
```

Now that we've funded the wallets we can go ahead and register the RollApp!
