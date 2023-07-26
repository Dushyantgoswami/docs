---
title: "Run In Production"
slug: "production"
---

# Running in Production

## Starting the Rollapp Services

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

## Monitoring

The rollapp exposes an HTTP metric server on port 2112, with the rollapp_height and rollapp_hub_height metrics. To monitor these metrics, we will use Prometheus and Grafana.

Before setting them up, we need to ensure that Docker and Docker Compose are installed on your system.

### Docker and Docker Compose Installation

#### Docker

To check if Docker is installed, type the following command:

```bash
docker --version
```

If Docker is installed, it will display the version details. If Docker is not installed, use these commands to install it:

```bash
sudo apt-get update
sudo apt-get install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

#### Docker Compose

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
ow let's prepare for the monitoring setup. Firstly, create a new directory named 'monitoring':

```bash
$ mkdir monitoring
$ cd monitoring
```

Next, create a `prometheus.yml` file with the following content:

```yml
global:
  scrape_interval:     15s 
  evaluation_interval: 15s
scrape_configs:
  - job_name: 'prometheus'
    static_configs:
    - targets: ['172.17.0.1:2112']
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
    ports:
      - "3000:3000"
    networks:
      - monitor-net
  prometheus:
    image: prom/prometheus
    ports:
      - "9092:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
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
$ docker-compose up -d
```

## Adding Prometheus as a Data Source in Grafana

After setting up Prometheus and Grafana, the next step is to add Prometheus as a data source in Grafana. Follow the steps below:

1. Access Grafana's web interface by navigating to `http://<Your_IP>:3000` in your web browser.

2. Log in using the default credentials (`admin` for both username and password). You'll be prompted to change the password on first login.

3. Click on the big "Add your first data source" button in the middle of the screen.
4. 
5. In the "Filter by name or type" field, type "Prometheus" and select it from the dropdown menu.

6. In the "URL" field, enter `http://prometheus:9090` as the Prometheus is running within the same Docker network as Grafana and is accessible via the service name as defined in the `docker-compose.yml` file.

7. Click on the "Save & Test" button.

## Congratulations! 🎉

You've successfully set up Prometheus and Grafana with your rollapp for production-level monitoring! You're now well-equipped to keep an eye on the critical metrics of your application, ensuring optimal performance and quick detection of any potential issues.

Remember, monitoring is a continuous process, and these tools are here to assist you in maintaining the best possible performance for your rollapp. Happy monitoring! 
