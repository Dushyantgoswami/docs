---
title: "Initialize"
slug: initialize
---

### Initialization

Initializing the configuration files of the RollApp will create the necessary information to start a new RollApp. Initialize the RollApp with the following command:

```zsh
roller config init <rollapp-id> <denom>
```

-   RollApp-id: Should follow the format 'name_EIP155-version': e.g. froopy_9721-1
    -   Name: is made up of lowercase English letters
    -   EIP155: is a 1 to 5 digit number representing the EIP155 rollapp ID
    -   Version: is a 1 to 5 digit number representing the version.
-   Denom: Name of the native token of the RollApp

### Interactive guide

An interactive guide will ask the following questions:

1. What is the RollApp name?
   <br />
   (i.e. ROLLAPP_9000_1 please note the suffix of `_9000_1` is required for EVM RollApps)
2. What is the name of the RollApp currency?
   <br />
   (i.e. aphoton, udym)
3. What is the amount of tokens to be minted on Genesis?
   <br />
   (i.e. 1000000)
4. What is the location data will be published to?
   <br />
   (i.e. Celestia, Avail)
5. What is the application environment?
   <br />
   (i.e. EVM, Go modules)

After completing the interactive questions, the Roller will have intialized the appropriate config files and should return addresses to fund:

### Address funding

```
🔑 Addresses:

  Sequencer | Address used to publish state updates to the Dymension Hub
  Relayer   | Address that handles the relaying of IBC packets
  Celestia  | Address used to publish data on-chain to the DA network
```

In Dymension's [discord](discord.gg/dymension) please fund the addresses in the `froopyland-faucet` channel with the following command as an example:

```
$REQUEST dym15ad5y52e3zx784hl0b4uyw5huctktwty2dq2vn
$REQUEST dym1j968h4avztqmgeh3bn4p2tfh4ptxp055e056sy
$REQUEST celestia1wnqasu0vze3qn8jldv9hx4yhf5w59l080u5mg0
```

You can then check the balance of the address with:

```
$BALANCE dym15ad5y52e3zx784hl0b4uyw5huctktwty2dq2vn
```

Now that we've funded the wallets we can go ahead and register the RollApp!
