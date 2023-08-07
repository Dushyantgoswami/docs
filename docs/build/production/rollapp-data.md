---
title: "RollApp data"
slug: "rollapp-data"
---

Users may want to monitor and retrieve relevant details of their RollApps running in the background. These details are critical for users who want to list their RollApps on the Portal and for wallet interactions.

### Relayer

The following command provides information about the Inter-Blockchain Communication (IBC) relayer running in the background:

```
sudo systemctl status relayer
```

Should return the following information:

```
ubuntu@ip-171-33-84-85:~/code$ sudo systemctl status relayer
● relayer.service - Roller relayer service
     Loaded: loaded (/etc/systemd/system/relayer.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2023-08-01 11:45:49 UTC; 12min ago
   Main PID: 4769 (roller)
      Tasks: 7 (limit: 37665)
     Memory: 2.8M
        CPU: 1.187s
     CGroup: /system.slice/relayer.service
             └─4769 /usr/local/bin/roller relayer start

Aug 01 11:45:50 ip-172-31-84-85 roller[4769]: 💈 IBC transfer channel is already established!
Aug 01 11:46:21 ip-172-31-84-85 roller[4769]: 💈 The relayer is running successfully on you local machine! Channels: src, channel-0 <-> channel-754, dstperiodic command /usr/local/bin/roller_bins/rly tx update-cli>
```

The `sudo systemctl status relayer` command displays the current status of the IBC relayer service. It includes data like the active state, the PID of the running service, the start time of the service, and the output logs which contain useful information such as the IBC channels and network ID etc.

### Sequencer

The following command provides information about the RollApp sequencer running in the background:

```
sudo systemctl status sequencer
```

```
ubuntu@ip-173-32-84-85:~/code$ sudo systemctl status sequencer
● sequencer.service - Roller sequencer service
     Loaded: loaded (/etc/systemd/system/sequencer.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2023-08-01 11:05:29 UTC; 53min ago
   Main PID: 3525 (roller)
      Tasks: 17 (limit: 37665)
     Memory: 132.2M
        CPU: 31.472s
     CGroup: /system.slice/sequencer.service
             ├─3525 /usr/local/bin/roller sequencer start
             └─3549 /usr/local/bin/rollapp_evm start --home /home/ubuntu/.roller/rollapp --log-file /home/ubuntu/.roller/rollapp/rollapp.log --log_level debug --max-log-size 2000

Aug 01 11:05:29 ip-172-31-84-85 systemd[1]: Started Roller sequencer service.
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 The Rollapp sequencer is running on your local machine!
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 Default endpoints:
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 EVM RPC: http://0.0.0.0:8545
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 Node RPC: http://0.0.0.0:26657
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 Rest API: http://0.0.0.0:1317
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 Log file path:  /home/ubuntu/.roller/rollapp/rollapp.log
Aug 01 11:05:30 ip-172-31-84-85 roller[3525]: 💈 Rollapp root dir:  /home/ubuntu/.roller/rollapp
```

The `sudo systemctl status sequencer` command displays the current status of the RollApp sequencer service. This includes details such as the active state, the PID of the running service, the start time of the service, and the output logs which may contain important information regarding the sequencer operation.

### Note

Ensure you have the required system permissions to run these commands, typically requiring sudo or superuser access.
If the services are not running, consider starting them using the sudo systemctl start relayer and sudo systemctl start sequencer commands.
