---
title: Sync node
slug: sync
---

## Fast-sync for testing

Sometimes you may want to sync faster by foregoing checks. You may do so by adding the following flag to the `dymd start` command.

The following command should only be used by advanced users in non-production environments:

```bash
dymd start --x-crisis-skip-assert-invariants
```

## Sync from snapshot

You can significantly accelerate the synchronization process by providing dymd with a recent snapshot of the network state. Snapshots are made publicly available by members of the Dymension community.

### Before using snapshots

Certain files will need to be absent or deleted before downloading a snapshot. A quicksync replaces blockchain data with a custom snapshot. For most use cases, a "pruned" version is adequate. Pruned versions will have certain transactions removed from the archive to improve node performance. If you are running a node for archival purposes, you will want an `archive` or `default` download.

After choosing the appropriate download type, examine your node and ensure that `.dymension/data` is empty.

**Example**:

```bash
12:31PM INF Removed all blockchain history dir=/home/ubuntu/.dymension/data
```

If you are a validator, ensure that you do not remove your private key.

Example of a removed private key:

```bash
6:22PM INF Reset private validator file to genesis state keyFile=/home/ubuntu/.dymension/config/priv_validator_key.json stateFile=/home/ubuntu/.dymension/data/priv_validator_state.json
```

If you have an address book downloaded, you may keep it. Otherwise, you will need to download the appropriate addressbook.

With an address book downloaded, run the following:

```bash
dymd start
dymd status
# It will take a few seconds for dymd to start.
```

## Monitor the sync

Your node is catching up with the network by replaying all the transactions from genesis and recreating the blockchain state locally. You can verify this process by checking the `latest_block_height` in the `SyncInfo` of the `dymd status` response:

```json
  {
    "SyncInfo": {
        "latest_block_height": "42", <-----
        "catching_up"        : true
    },
  ...
  }
```

### Sync complete

You can tell that your node is in sync with the network when `SyncInfo.catching_up` in the `dymd status` response returns `false` and the `latest_block_height` corresponds to the public network block height.

```bash
dymd status
```

**Example**:

```json
  {
    "SyncInfo": {
        "latest_block_height": "7356350",
        "catching_up"        : false
    },
  ...
  }
```

## Congratulations!

You've successfully joined a network as a full node operator.
