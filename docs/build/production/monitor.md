---
title: "Monitoring"
slug: "monitor"
---

The rollapp exposes an HTTP metric server on port 2112, with the `rollapp_height` and `rollapp_hub_height` metrics.
The metric server is enabled by default when using `roller`

### Setup Prometheus and Grafana

Before setting them up, we need to ensure that Docker and Docker Compose are installed on your system.

### Docker Installation

To check if Docker is installed, type the following command:

```bash
docker --version
```

If Docker is installed, it will display the version details. If Docker is not installed, use these commands to install it:

```bash
sudo apt-get update -y
sudo apt-get install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

### Docker Compose Installation

To check if Docker Compose is installed, type the following command:

```bash
docker-compose --version
```

If Docker Compose is installed, it will display the version details. If Docker Compose is not installed, use these commands to install it:

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Setting up Prometheus and Grafana

Now let's prepare for the monitoring setup. Firstly, create a new directory named 'monitoring':

```bash
mkdir monitoring
cd monitoring
```

Now, let's create two directories to persist data for Prometheus and Grafana:

```bash
mkdir prometheus_data grafana_data
```

Now update the ownership of these directories to the user we will use in the docker-compose file:

```bash
sudo chown nobody:nogroup prometheus_data grafana_data
```

Next, create a `prometheus.yml` file with the following content:

```yml
global:
    scrape_interval: 15s
    evaluation_interval: 15s
scrape_configs:
    - job_name: "prometheus"
      static_configs:
          - targets: ["172.17.0.1:2112"]
```

:::info NOTE:
We set the target to 172.17.0.1:2112 because Prometheus is running inside a Docker container, and 172.17.0.1 is the default gateway for Docker containers to access the host machine's network.
:::

Also create a `docker-compose.yml` file with the following content:

```yml
version: "3"
services:
  grafana:
    image: grafana/grafana
    user: "65534:65534"
    ports:
      - "3000:3000"
    volumes:
      - ./grafana_data:/var/lib/grafana
    networks:
      - monitor-net
  prometheus:
    image: prom/prometheus
    user: "65534:65534"
    ports:
      - "9092:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - ./prometheus_data:/prometheus
    networks:
      - monitor-net
networks:
  monitor-net:
```

:::info NOTE:
We map Prometheus's port to 9092 on the host machine (9092:9090). This is because port 9090 will be taken by default by the Rollapp gRPC endpoint. So to avoid a port clash and still be able to access Prometheus, we use port 9092 instead.
:::

You're all set. To start the monitoring services, run:

```bash
sudo docker-compose up -d
```

To verify that the services are running, run:

```bash
sudo docker-compose ps
```

### Adding Prometheus as a Grafana Data Source

After setting up Prometheus and Grafana, the next step is to add Prometheus as a data source in Grafana. Follow the steps below:

1. Access Grafana's web interface by navigating to `http://<Your_IP>:3000` in your web browser. Make sure the port is exposed in your firewall.

2. Log in using the default credentials (`admin` for both username and password). You'll be prompted to change the password on first login.

3. Click on the big `Add your first data source` button in the middle of the screen.

4. In the `Filter by name or type` field, type `Prometheus` and select it from the dropdown menu.

5. In the `URL` field, enter `http://prometheus:9090` as the Prometheus is running within the same Docker network as Grafana and is accessible via the service name as defined in the `docker-compose.yml` file.

6. Click the `Save & Test` button.

### Incorporating a Dashboard to Monitor RollApp

1. Initiate by clicking the prominent `Create your first dashboard` button positioned at the center of the Grafana home screen.

2. Proceed by clicking the `Add Visualization` button.

3. From the assortment of data sources, choose `Prometheus`.

4. In the `Query` segment located at the screen's lower section, pick the `rollapp_height` metric from the dropdown menu.

5. To introduce an additional query, click the `+ Query` button and select the `rollapp_hub_height` metric from the dropdown menu.

6. Execute the queries by clicking the `Run Queries` button and view the results. Assuming the rollapp is running as expected you should see the height of the rollapp and the height of the hub.

7. To retain the dashboard configuration, click the `Save` button located at the screen's top right corner.

## Congratulations! 🎉

You've successfully set up Prometheus and Grafana with your rollapp for production-level monitoring! You're now well-equipped to keep an eye on the critical metrics of your RollApp.

Remember, monitoring is a continuous process, and these tools are here to assist you in maintaining the best possible performance for your RollApp. Happy monitoring!

:::info NOTE:
Setting up alerts is out of the scope of this guide, but you can find more information on how to do so [here](https://prometheus.io/docs/alerting/latest/overview/).
:::

:::info NOTE:
A key metric to monitor is the `rollapp_height` metric. If the height of your RollApp is not increasing, it means that your RollApp is not producing blocks. This could be due to a number of reasons, such as a lack of balance for base layers, misconfiguration, bugs etc. For more info check our [troubleshooting guide](../troubleshooting/overview).
:::

In the next section, we'll learn how to list your RollApp on the [Dymension Portal](https://portal.dymension.xyz).
