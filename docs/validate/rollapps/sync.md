---
title: Sync node
slug: sync
---

## Fast-sync for testing

Sometimes you may want to sync faster by foregoing checks. You may do so by adding the following flag to the `rollappd start` command.

The following command should only be used by advanced users in non-production environments:

```bash
rollappd start --x-crisis-skip-assert-invariants
```

## Sync from snapshot

You can significantly accelerate the synchronization process by providing dymd with a recent snapshot of the network state. Snapshots are made publicly available by members of the Dymension community.

### Before using snapshots

Certain files will need to be absent or deleted before downloading a snapshot. A quicksync replaces blockchain data with a custom snapshot. For most use cases, a "pruned" version is adequate. Pruned versions will have certain transactions removed from the archive to improve node performance. If you are running a node for archival purposes, you will want an `archive` or `default` download.

After choosing the appropriate download type, examine your node and ensure that `.rollapp/data` is empty.

**Example**:

```bash
12:31PM INF Removed all blockchain history dir=/home/ubuntu/.rollapp/data
```

If you have an address book downloaded, you may keep it. Otherwise, you will need to download the appropriate addressbook.

With an address book downloaded, run the following:

```bash
rollappd start
rollappd status
# It will take a few seconds for rollappd to start.
```

## Monitor the sync

Your node is catching up with the network by replaying all the transactions from genesis and recreating the blockchain state locally. You can verify this process by checking the `latest_block_height` in the `SyncInfo` of the `rollappd status` response:

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

You can tell that your node is in sync with the network when `SyncInfo.catching_up` in the `rollappd status` response returns `false` and the `latest_block_height` corresponds to the public network block height.

```bash
rollappd status
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
