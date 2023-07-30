---
title: "External Access"
slug: external access
---

if you're having difficulties reaching your services from the outside, you could be experiencing a number of issues. This section is designed to help you troubleshoot and resolve common problems related to port accessibility.

### Checking Port Accessibility

Use a tool like nmap or an online port checker to verify whether the ports are accessible or not.

```
nmap -p PORT_NUMBER REMOTE_MACHINE_IP
```

If the ports are not open, it's likely the service isn't running or is not configured correctly.

### Verify Service Status

Check to see if the service is running on the expected port on the remote machine.

You can typically do this using the `netstat` command:

```
netstat -tuln | grep PORT_NUMBER
```

If the service isn't running, start it. If it's running but not on the expected port, check the service's configuration.

### Firewall Configuration

Ensure your firewall settings allow incoming connections to the required ports. How you do this depends on your specific firewall system. Here are some examples:

- For UFW (Uncomplicated Firewall), use:
```
sudo ufw allow PORT_NUMBER
```

- For iptables:
```
sudo iptables -A INPUT -p tcp --dport PORT_NUMBER -j ACCEPT
```

Remember to replace `PORT_NUMBER` with the actual port you're trying to access.

### Network Configuration

Check that the network is properly configured to allow incoming connections to the server. This includes verifying port forwarding rules if the server is behind a router or other type of network gateway.

- Router Port Forwarding: Ensure that your router has been configured to forward the required ports to the correct internal IP address.

- Cloud Providers: If you're using a cloud provider like AWS or Google Cloud, you need to ensure that the appropriate security groups or firewall rules are in place to allow traffic to the required ports.

Some common resources for configuring security groups and firewall rules in popular cloud providers:

1. [AWS Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)
2. [Google Cloud Firewall Rules](https://cloud.google.com/vpc/docs/firewalls)
3. [Azure Network Security Groups](https://docs.microsoft.com/en-us/azure/virtual-network/security-overview)

### Application Configuration

Ensure the service application itself is configured to listen on the correct ports and interfaces, and isn't limited to local interfaces. Check the service's configuration files or documentation for instructions.

### ISP Blocking Ports

Some ISPs may block certain ports for security or policy reasons. If you have confirmed that all the above settings are correct but are still unable to access your service, contact your ISP to check if they're blocking the required ports.

By following these steps, you should be able to identify and solve common problems related to inaccessible ports. If the problem persists, it may be necessary to consult with a network professional or the service's support resources. 