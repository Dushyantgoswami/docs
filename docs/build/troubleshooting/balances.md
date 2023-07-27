---
title: "Balances"
slug: balances
---

Users that may be experiencing IBC issues should initially check the balances located at certain locations.

To check the balance of the RollApp Sequencer and IBC relayer on the Dymension Hub please visit Dymension's [discord](https://discord.gg/dymension) and input the following command in the [devnet-faucet channel](https://discord.com/channels/956961633165529098/1125047988247593010):

```
$balance <ADDRESS>
```

To check the balance of the RollApp Sequencer on the DA network please visit Dymension's [discord](https://discord.gg/dymension) and input the following command in the [celestia-faucet channel](https://discord.com/channels/956961633165529098/1128048548999610451):

```
$balance <ADDRESS>
```

To check the balance of the IBC relayer on the RollApp, input the following command while the RollApp Sequencer node is running:

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="guide">
<TabItem value="EVM RollApp" label="EVM RollApp">

```
rollapp_evm q bank balances <ADDRESS>
```
</TabItem>

<TabItem value="Custom RollApp" label="Custom RollApp">

```
rollapp q bank balances <ADDRESS>
```
</TabItem>
</Tabs>
````
