---
title: "Initialize RDK RollApp"
slug: initialize-adv
---

### Initialization

Initializing the configuration files of the RollApp will create the necessary information to start a new RollApp. This will create a folder `~/.roller` in the root directory of your computer with important files such as the `Genesis` file.

Developers have two options for initializing the configuration files, an interactive guide or by using CLI flags:

`````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

````mdx-code-block

<Tabs groupId="guide">
<TabItem value="Interactive guide" label="Interactive guide">

Input the following command to begin the interactive guide:

```
roller config init
```

Interactive guide breakdown:

- Select your network:
    - Local: Defined as a Dymension Hub node running on localhost. Please see the [validate Devnet chain](/validate/dymension-hub/build-dymd) section on how to run a local Hub node.
    When building the local Dymension Hub node please use Chain-ID Dymension_100-1
    - Devnet (default): non-incentivized devnet for building and testing
    - Froopyland: Soon
- Enter your RollApp ID:
    - Format: rollapp-name_EIP155-revision. e.g wagmi_420-1
- Specify your RollApp denom:
    - e.g BTC, PEPE, DYM
- How many tokens do you wish to mint for Genesis? (default: 1,000,000,000):
    - These are the amount of tokens in denom (e.g. ETH, BTC)
- Choose your data layer:
    - Defaults to Celestia Mocha network, with more DA added soon.
- Set your runtime binary:
    - Press `Enter` to use default EVM RollApp (e.g. /usr/local/bin/rollapp_evm)

</TabItem>
<TabItem value="Flags" label="Flags">

```zsh
roller config init <ROLLAPP-ID> <DENOM> --hub=<HUB-VERSION> --token-suppply=<TOKEN-SUPPLY>
```

Flags breakdown:
- RollApp-id: Should follow the format 'name_EIP155-version': e.g. brooklyn_69-420
    -   Name: is made up of lowercase English letters
    -   EIP155: is a 1 to 5 digit number representing the EIP155 rollapp ID
    -   Version: is a 1 to 5 digit number representing the version
- Denom: Name of the native token of the RollApp
- Hub-version: The ID of the Dymension hub. Acceptable values are 'devnet' or 'local' (default "devnet")
    - Devnet utilizes a public non-incentivized devnet run by Silk Nodes
    - Local requires running a localhost node of the Dymension Hub. Please see the [validate Devnet chain](/validate/dymension-hub/build-dymd) section on how to run a local Hub node.
    When building the local Dymension Hub node please use Chain-ID Dymension_100-1
- Token-supply: The total token supply of the RollApp (default "1000000000")

</TabItem>

</Tabs>
`````

### Address funding

After initializing the RollApp, addresses to fund should be returned to you:

```
🔑 Addresses:

Sequencer | Address used to publish state updates to the Dymension Hub
Relayer   | Address that handles the relaying of IBC packets
Celestia  | Address used to publish data on-chain to the DA network
```

In Dymension's [discord](https://discord.gg/dymension) please fund the addresses in the `faucet` channel with the following command as an example:

```
$REQUEST dym15ad5y52e3zx784hl0b4uyw5huctktwty2dq2vn devnet_304-1
$REQUEST dym1j968h4avztqmgeh3bn4p2tfh4ptxp055e056sy devnet_304-1
```

You can then check the balance of the address with:

```
$BALANCES dym15ad5y52e3zx784hl0b4uyw5huctktwty2dq2vn
```

Now that we've funded the Dymension wallets, let's fund the Celestia Mocha wallet for data publication. In Celestia's [discord](https://discord.com/invite/YsnTPcSfWQ)
please go to the `mocha-faucet` and request tokens with the following command as an example:

```
$request celestia1wnqasu0vze3qn8jldv9hx4yhf5w59l080u5mg0
```

Now that we've funded the wallets we can go ahead and register the RollApp!
