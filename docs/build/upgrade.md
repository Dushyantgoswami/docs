---

title: "Upgrade"
slug: "upgrade"
---

Roller presents the `migrate` command as a simple solution for upgrading your Roller and its associated services. This function does the intricate work on your behalf. To get a clear understanding of what changes will be implemented in your Roller and to identify any new configuration possibilities you might want to use, it is advised to check out the version's changelog before upgrading.

### Upgrade Steps

1. Install the most recent version of Roller:

```sh
curl -L https://dymensionxyz.github.io/roller/install.sh | bash
```

2. Stop the Roller services:

The method to halt Roller services depends on how you originally launched them.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="guide">
<TabItem value="roller run" label="roller run">

```
Use ctrl+c in the terminal where you started roller run
```
</TabItem>

<TabItem value="systemctl" label="systemctl">

```
sudo systemctl stop relayer
sudo systemctl stop sequencer
sudo systemctl stop da-light-client
```
</TabItem>
</Tabs>
````

3. Execute the `migrate` command:

:::info NOTE:
In case you are using a custom home directory, you will need to specify it using the `--home` flag.
:::
```sh
roller migrate
```

4. Restart the Roller services:

````mdx-code-block

<Tabs groupId="guide">
<TabItem value="roller run" label="roller run">

```
roller run
```
</TabItem>

<TabItem value="systemctl" label="systemctl">

```
sudo systemctl start da-light-client
sudo systemctl start sequencer
sudo systemctl start relayer
```
</TabItem>
</Tabs>
````

After completing these steps, you should now be operating a fully upgraded Roller with the latest versions of all services!