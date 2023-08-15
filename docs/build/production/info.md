---
title: "RollApp info"
slug: "info"
---

Users running RollApps in the background may need relevant information for listing their Rollapps and working with wallets.

`Roller` provides two commands for obtaining relevant information.

### Config

```
roller config show
```

Provides relevant configuration details about the RollApp. These data points were set on the initialization of the RollApp. Please see below for an example output:

```
DA = "celestia"
Decimals = 18
Denom = "uRAX"
Home = "/Users/username/.roller"
RollappBinary = "/usr/local/bin/rollapp_evm"
RollappID = "myrollapp_1234-19"
RollerVersion = "v0.1.4"
TokenSupply = "1000000000"
VMType = "evm"

[HubData]
  API_URL = "https://dymension-devnet.api.silknodes.io:443"
  GAS_PRICE = "0.25"
  ID = "devnet_304-1"
  RPC_URL = "https://dymension-devnet.rpc.silknodes.io:443"
```

### Relayer

Additionally, users may request the IBC channel there relayer is operating on:

```
roller relayer channel show
```

Will return the relevant channel the relayer is operating. Please see below for an example output:

:::info NOTE:
It can take around 15-30 minutes for the relayer to establish a channel.
:::

```
💈 Relayer Channels: src, channel-0 <-> channel-1, dst
```

-   `src-channel` is the IBC channel on the RollApp
-   `dst-channel` is the IBC channel on the Dymension Hub
