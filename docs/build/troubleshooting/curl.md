---
title: "Curl"
slug: curl
---

Curl rollapp rpc for status and see you get a response
Curl light node (in case of celestia) for balance and see you get response
Curl relayer status (in case such endpoint exist) and see if you get a response

### Overview

The `cURL` command-line tool is used to transfer data to or from a server using various protocols. It is a valuable tool for testing and debugging network services. This guide will provide instructions on how to use cURL to check the status of various components in your network, such as the RollApp RPC service, a DA light client, and a relayer.

### Objectives

-   Use cURL to send requests to different services
-   Validate the response from each service
-   These checks are important as they can help you to ensure that your services are running and responding as expected.

### Steps

1. Check the Rollapp RPC Status

You can check the status of the RollApp RPC service by sending a request to its URL. Replace rollapp_rpc_url with the actual URL of your rollapp RPC service.

```
TODO COMMAND
```

You should receive a response from the server. If the service is running correctly, you should receive a response that indicates the status of the service. If the service is not running or there is an issue with your request, you may receive an error message.

2. Check DA light client Balance

Similarly, you can check the balance of a DA light client by sending a request to its balance endpoint.

```
TODO COMMAND
```

You should receive a response containing the current balance of the node. If the node is not running or there is an issue with your request, you may receive an error message.

3. Check Relayer Status

If your network setup includes a relayer and it provides a status endpoint, you can check its status in a similar way.

```
TODO COMMAND
```

You should receive a response indicating the status of the relayer. If the relayer is not running or there is an issue with your request, you may receive an error message.
