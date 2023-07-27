---
title: "Status"
slug: status
---

The purpose of this section is to provide you with a way to check the status of your RollApp and its various components and by that pinpoint the source of the problem.


### RollApp Status

You can check the status of the RollApp RPC service by sending a request to its URL. Replace rollapp_rpc_url with the actual URL of your rollapp RPC service.

```
curl <rollapp_rpc_url>/status
```

You should receive a response from the server. If the service is running correctly, you should receive a response that indicates the status of the service. If the service is not running or there is an issue with your request, you may receive an error message.

### DA light client Status

Similarly, you can check the balance of a DA light client by sending a request to its balance endpoint.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="guide">
<TabItem value="Celestia" label="Celestia">

```
curl <celestia_rpc_url>/balance
```
</TabItem>

<TabItem value="Avail" label="Avail">

```
Currently not supported
```
</TabItem>
</Tabs>
````

You should receive a response containing the current balance on the DA incase it's configured correctly and running. 
If the node is not running or there is an issue with your request, you may receive an error message.

### Relayer Status

Currently the relayer doesn't expose a status endpoint, but you can check the status of the relayer by sending an ibc transfer.


You should receive a response indicating the status of the relayer. If the relayer is not running or there is an issue with your request, you may receive an error message.
