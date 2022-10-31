const sidebars = {
  sidebar: [
    "index",
    {
      type: "category",
      label: "Learn",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Modular architecture",
          id: "learn/modular-intro",
        },
        {
          type: "doc",
          label: "The dYmension hub",
          id: "learn/dymension-hub",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "learn/rollapps",
        },
      ],
    },
    {
      type: "category",
      label: "Developers",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Getting started",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "developers/getting-started/intro",
            },
            {
              type: "doc",
              label: "Setup work environment",
              id: "developers/getting-started/setup",
            },
            {
              type: "doc",
              label: "Run a hub node",
              id: "developers/getting-started/run-a-hub-node",
            },
          ],
        },
        {
          type: "category",
          label: "Checkers RollApp",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Scaffold the RollApp",
              id: "developers/checkers-rollapp/scaffold-rollapp",
            },
            {
              type: "doc",
              label: "Install the RDK",
              id: "developers/checkers-rollapp/install-rdk",
            },
            {
              type: "doc",
              label: "Initialize the RollApp",
              id: "developers/checkers-rollapp/init-rollapp",
            },
            {
              type: "doc",
              label: "Register the RollApp",
              id: "developers/checkers-rollapp/register-rollapp",
            },
            {
              type: "doc",
              label: "Run the RollApp",
              id: "developers/checkers-rollapp/run-rollapp",
            },
            {
              type: "doc",
              label: "Interact with the RollApp",
              id: "developers/checkers-rollapp/interact",
            },
            {
              type: "doc",
              label: "View RollApp state",
              id: "developers/checkers-rollapp/query-rollapp",
            },
            {
              type: "category",
              label: "Connect a DA layer",
              collapsed: true,
              items: [
                {
                  type: "doc",
                  label: "Celestia",
                  id: "developers/checkers-rollapp/connect-da-layer/celestia",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "CosmWasm RollApp",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "developers/cosmwasm-rollapp/index",
            },
            {
              type: "doc",
              label: "Setup work environment",
              id: "developers/cosmwasm-rollapp/setup",
            },
            {
              type: "doc",
              label: "Run the RollApp",
              id: "developers/cosmwasm-rollapp/run-the-rollapp",
            },
            {
              type: "doc",
              label: "Deploy a smart contract",
              id: "developers/cosmwasm-rollapp/deploy-contract",
            },
            {
              type: "doc",
              label: "Interact with the Contract",
              id: "developers/cosmwasm-rollapp/contract-interaction",
            },
            {
              type: "doc",
              label: "Integrate Keplr",
              id: "developers/cosmwasm-rollapp/integrate-keplr",
            },
          ],
        },
        {
          type: "category",
          label: "EVM RollApp",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "developers/evm-rollapp/intro",
            },
            {
              type: "doc",
              label: "Setup work environment",
              id: "developers/evm-rollapp/setup",
            },
            {
              type: "doc",
              label: "Run the RollApp",
              id: "developers/evm-rollapp/run-the-rollapp",
            },
            {
              type: "doc",
              label: "Create a smart contract",
              id: "developers/evm-rollapp/create-contract",
            },
            {
              type: "doc",
              label: "Deploy and test the contract",
              id: "developers/evm-rollapp/deploy-and-test-contract",
            },
            {
              type: "doc",
              label: "Integrate Metamask",
              id: "developers/evm-rollapp/integrate-metamask",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Validators",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "validators/full-node/index",
        },
        {
          type: "doc",
          label: "Run a node",
          id: "validators/full-node/run-a-node",
        },
        {
          type: "doc",
          label: "Reset and troubleshooting",
          id: "validators/full-node/reset-node",
        },
      ],
    },
    {
      type: "doc",
      label: "Litepaper",
      id: "dymension-litepaper/index",
    },
    {
      type: "doc",
      label: "Glossary",
      id: "reference/glossary",
    },
    {
      type: "link",
      href: "https://github.com/dymensionxyz/awesome",
      label: "Resources",
    },
  ],
};

module.exports = sidebars;
