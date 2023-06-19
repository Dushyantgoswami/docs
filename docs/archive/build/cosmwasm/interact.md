---
title: "Interact with the contract"
slug: interact
---

## Contract Interaction

Let's first query the contract that we deployed. The following command queries for the list of members in our contract:

```bash
wasmd query wasm contract-state smart \
  $CONTRACT_ADDRESS \
  '{ "list_members": {} }'
```

Next we will add a member to the contract's state. We will add our deployer address by replacing `ADDRESS_HERE`. We will add this member by executing the contract address with the provided arguments.

```
wasmd tx wasm execute \
  $CONTRACT_ADDRESS \
  '{ "update_members": { "add": [{ "addr": "ADDRESS_HERE", "weight": 1 }], "remove": [] } }' \
  --from $KEY_NAME $(echo $TX_FLAGS)
```

Finally, we will query that same contract to see the updated members list.

```bash
wasmd query wasm contract-state smart \
  $CONTRACT_ADDRESS \
  '{ "list_members": {} }'
```

The contract should return the list of members including our inputted address:

```
data:
  members:
  - addr: "ADDRESS"
    weight: 1
```

That's all for our tutorial for deploying a CosmWasm RollApp and a smart contract to the RollApp.
