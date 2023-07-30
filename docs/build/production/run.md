---
title: "Run in Production"
slug: "run"
---

# Running in Production

This guide is designed to assist you in setting up the RollApp for production use. The focus will be on loading and starting the RollApp services individually. This approach enables independent logging and monitoring, giving you enhanced control and visibility over each component.

In addition, we'll be setting up a monitoring system using the well-known tools, Prometheus and Grafana. This will allow us to capture key metrics from our RollApp, set up alerts and understand the performance of our application over time.

By the end of this guide, you will have a production-grade local RollApp setup. Let's dive in!

## Configuring the RollApp 

### Cross-Origin Resource Sharing (CORS)


To permit different platforms such as the [Dymension portal](portal.dymension.xyz) or various wallets to access the RollApp, we must implement CORS for the necessary domains or, as another option, enable CORS for all origins.

1. Open the `~/.roller/rollapp/config/config.toml` file in your favorite text editor.
2. Under the `[rpc]` section you can see the `cors_allowed_origins` parameter. 
3. To allow CORS from all origins, set the value to `["*"]`, otherwise, set it to the desired origins.

## Starting the Rollapp

To load the rollapp services, use the following command:

```bash
$ roller services load
```

This command should return:

```
💈 Services 'sequencer', 'da-light-client' and 'relayer' been loaded successfully. To start them, use 'sudo systemctl start <service>'.
```

Next, start the services:

```bash
$ sudo systemctl start da-light-client
$ sudo systemctl start sequencer
$ sudo systemctl start relayer
```

Let's continue and set up the monitoring services...
