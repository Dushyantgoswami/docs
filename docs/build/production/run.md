---
title: "Run in Production"
slug: "run"
---

# Running in Production

This guide is designed to assist you in setting up the RollApp for production use. The focus will be on loading and starting the RollApp services individually using [systemd](https://en.wikipedia.org/wiki/Systemd#:~:text=Systemd%20is%20a%20software%20suite,space%20and%20manage%20user%20processes.).

:::warning NOTE
[systemd](https://en.wikipedia.org/wiki/Systemd#:~:text=Systemd%20is%20a%20software%20suite,space%20an`0manage%20user%20processes.) is only available on Linux systems.
You can verify that you have `systemd` installed by running:

```bash
systemctl --version
 ```

:::

This approach enables running the process in the background, independent logging and monitoring and giving you enhanced control and visibility over each component.

:::info NOTE
The guide assumes you've already registered your rollapp using [roller](../roller.md) by following the steps in the [quick start](../quick-start/roller-quick/install.md).
If you haven't, please do so now.
:::

In addition, we'll be setting up a monitoring system using the well-known tools, Prometheus and Grafana. This will allow us to capture key metrics from our RollApp, set up alerts and understand the performance of our application over time.

By the end of this guide, you will have a production-grade local RollApp setup. Let's dive in!

:::warning NOTE
For ease of use CORS is enabled by default for all origins. Please edit `~/.roller/rollapp/config/config.toml` and
set `cors_allowed_origins` to the desired origins if you wish to restrict CORS.
:::

## Starting the Rollapp

To load the rollapp services, use the following command:

```bash
roller services load
```

This command should return:

```
💈 Services 'sequencer', 'da-light-client' and 'relayer' been loaded successfully. To start them, use 'sudo systemctl start <service>'.
```

Now lets continue with starting the enabled the services.

Due to the present discrepancy where only the Celestia rollapp operates a light client, compared to Avail, we will divide the guidelines into two sections:

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="guide">

<TabItem value="Celestia" label="Celestia">

```bash
sudo systemctl enable da-light-client
sudo systemctl enable sequencer
sudo systemctl enable relayer
```

Next, start the services:

```bash
sudo systemctl start da-light-client
sudo systemctl start sequencer
sudo systemctl start relayer
```

Let's check the status of the services and ensure they are running:

:::info NOTE
It may take the relayer a few seconds to stabilize so please wait a few seconds before checking the status.
:::

```bash
sudo systemctl status da-light-client
sudo systemctl status sequencer
sudo systemctl status relayer
```
</TabItem>

<TabItem value="Avail" label="Avail">

```bash
sudo systemctl enable sequencer
sudo systemctl enable relayer
```

Next, start the services:

```bash
sudo systemctl start sequencer
sudo systemctl start relayer
```

Let's check the status of the services and ensure they are running:

```bash
sudo systemctl status sequencer
sudo systemctl status relayer
```
</TabItem>

</Tabs>
````

The status should be `active (running)` for all services.

:::warning NOTE
In case of any failed services, please try to run the relevant [services separately](../adv-guide/roller-adv/da-light-client.md) in order to get more information about the error.
:::

Let's continue with setting up the monitoring services.
