---
title: "Initialize"
slug: initialize
---

### Installation

Firstly, if you have not installed `Roller` please do so now:

```
curl -L https://github.com/dymensionxyz/roller/releases/download/v0.0.0/install.sh | bash
```

### Initialization

We will begin by initializing the configuration files of the RollApp. This will provide Roller the necessary information to start a new RollApp.

An interactive guide will ask the following questions:

1. What is the RollApp name? (i.e. ROLLAPP_9000_1 please note the suffix of `_9000_1` is required for EVM RollApps)
2. What is the name of the RollApp currency? (i.e. aphoton, udym)
3. What is the amount of tokens to be minted on Genesis? (i.e. 1000000)
4. What is the location data will be published to? (i.e. Celestia, Avail)
5. What is the application environment? (i.e. EVM, Go modules)

Initialize the RollApp with the following command:

```zsh
roller config init
```

After completing the interactive questions, the Roller will have intialized the appropriate config files and should return addresses to fund:

```
💈 RollApp 'name' configuration files have been
   successfully generated on your local machine. Congratulations!

🔑 Addresses:

  Celestia         | celestia<ADDRESS>
  Dymension        | dym<ADDRESS>

🔔 Please fund these addresses to register and run the rollapp.
```

The following addresses must be funded prior to the following steps in this tutorial. Please fund the addresses at the following locations:

-   Celestia: Celestia discord channel for the Mocha network
-   Dymension: Dymension discord channel for the Froopyland network

Now that we've funded the wallets we can go ahead and register the RollApp!
