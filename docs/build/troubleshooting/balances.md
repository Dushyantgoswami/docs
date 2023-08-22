---
title: "Balances"
slug: balances
---

Users that may be experiencing IBC issues should initially check the balances located at certain locations.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="guide">
<TabItem value="Froopyland" label="Froopyland">

Run the following command to check the balance of your RollApp token on the Dymension Hub's froopyland faucet [discord channel](https://discord.com/channels/956961633165529098/1143231362468434022):

```
$balance <ADDRESS>
```

</TabItem>

<TabItem value="Devnet" label="Devnet">

Run the following command to check the balance of your RollApp token on the Dymension Hub's devnet faucet [discord channel](https://discord.com/channels/956961633165529098/1125047988247593010):

```
$balance <ADDRESS>
```

</TabItem>
</Tabs>
````

To check the balance of the RollApp Sequencer on the DA network:

````mdx-code-block

<Tabs groupId="guide">
<TabItem value="Celestia" label="Celestia">

 Please visit Dymension's [discord](https://discord.gg/dymension) and input the following command in the [celestia-faucet channel](https://discord.com/channels/956961633165529098/1128048548999610451):

```
$balance <ADDRESS>
```

</TabItem>

<TabItem value="Avail" label="Avail">

Please visit the <b>dymension-faucet</b> channel on <a href="https://discord.gg/fzbbcKDuUb">Avail's discord</a> with the following command:

```
/balance <ADDRESS>
```

</TabItem>
</Tabs>
````

To check the balance of the IBC relayer on the RollApp, input the following command while the RollApp Sequencer node is running:

````mdx-code-block

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
