---
title: "Ports"
slug: ports
---

### Overview

Each of process communicates through specific ports, which are virtual 'endpoints' used for data exchange. In the context of running a network node, it is important to ensure that all necessary ports are open to ensure effective and uninterrupted communication.

The objective of this guide is to outline the process of validating that all the relevant ports are open for your node. This is important because:

-   It ensures the node is able to communicate effectively with other nodes in the network.
-   It can help to troubleshoot connectivity problems.
-   It guarantees the security and reliability of the network by allowing only necessary ports to be open and closing potentially vulnerable ones.

### Steps

1. Identify the necessary ports: The first step in this process is identifying which ports need to be open for your specific use case. The following ports are required for running a RollApp:

-   **Port 8545:** EVM RPC provides a RPC gateway for publishing EVM smart contracts (if applicable)
-   **Port 26657:** Node RPC provides a RPC gateway for requests to the node
-   **Port 1317:** Rest end-point provides a REST gateway for requests to the node

2.  Check current open ports: The next step is to check which ports are currently open on your node. You can do this by running the following command:

```
TODO COMMAND
```

3.  Verify the necessary ports are open: Compare the list of open ports from the previous step to the list of necessary ports you identified in step 1. Make sure that all the necessary ports are open and are not being blocked by firewall rules.

4.  Open necessary ports: If you find that a necessary port is not open, you will need to open it. This is typically done by adjusting your firewall rules, but the exact process can vary depending on your operating system and network setup.

5.  Test the connection: Finally, you can test the connection to the necessary ports using a tool like telnet or nc (netcat). This will help to confirm whether the ports are open and can accept connections.
