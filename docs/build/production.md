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

You're all set. To start the monitoring services, run:

```bash
$ docker-compose up -d
```
