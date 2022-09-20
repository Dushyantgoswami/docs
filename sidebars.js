const sidebars = {
  sidebar: [
    "index",
    "get-started",
    {
      type: "category",
      label: "Learn",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "How dYmension Works",
          id: "learn/dymension",
        },
        {
          type: "doc",
          label: "How RollApps Work",
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
          id: "developers/checkers-rollapp/index",
        },
        {
          type: "doc",
          label: "Setup work environment",
          id: "developers/checkers-rollapp/setup",
        },
        {
          type: "doc",
          label: "Run a hub node",
          id: "developers/checkers-rollapp/run-a-node",
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
              label: "Scaffold a RollApp",
              id: "developers/checkers-rollapp/scaffold-rollapp",
            },
            {
              type: "doc",
              label: "Install RDK & dymint",
              id: "developers/checkers-rollapp/install-rdk-dymint",
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
            // {
            //   type: "doc",
            //   label: "Build a Module",
            //   id: "developers/checkers-rollapp/build-a-module",
            // },
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
              label: "Query state root",
              id: "developers/checkers-rollapp/query-rollapp",
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
              label: "Set Up Work Environment",
              id: "developers/cosmwasm-rollapp/setup",
            },
            {
              type: "doc",
              label: "Run a dYmension Wasm Node",
              id: "developers/cosmwasm-rollapp/dym-wasm-node",
            },
            {
              type: "doc",
              label: "Prepare Your Smart Contract",
              id: "developers/cosmwasm-rollapp/contract-preparation",
            },
            {
              type: "doc",
              label: "Run the Smart Contract",
              id: "developers/cosmwasm-rollapp/contract-interaction",
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
              id: "developers/cosmwasm-rollapp/index",
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
