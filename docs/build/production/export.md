---
title: "Export config"
slug: "export"
---

`Roller` enables users to export the configuration of their RollApp. This is useful for finding information about the RollApp deployed and publicizing the RollApp on the Portal with the required fields.

To retrieve config information input the following command:

```
roller config export
```

This should return information related to the deployed RollApp instance.

An example output will be as such:

```JSON
{
    "da": "DA name",
    "chainName": "RollApp Name",
    "rpc": "https://froopyland.dymension.xyz/<RollApp-Name>/rpc",
    "rest": "https://froopyland.dymension.xyz/<RollApp-Name>/rest",
    "evm": {
      "chainId": "0x14db",
      "rpc": "https://froopyland.dymension.xyz/<RollApp-Name>/evmrpc"
    },
    "type": "RollApp",
    "coinType": 60,
    "ibc": {
      "timeout": 172800000,
      "channel": "channel-0",
      "hubChannel": "channel-1"
    },
    "logo": "/logos/<RollApp-Name>-1.png",
    "chainId": "<RollApp-Name>-1",
    "currencies": [
      {
        "baseDenom": "u<TOKEN>",
        "decimals": 18,
        "logo": "/logos/<RollApp-ID>.png",
        "displayDenom": "RollApp Name",
        "type": "main"
      }
    ],
    "bech32Prefix": "ethm",
  }
    "analytics": false
```

This information is useful for listing to the Portal by providing the information in JSON format.
