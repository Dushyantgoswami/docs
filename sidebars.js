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
          id: "developers/rollapp/index",
        },
        {
          type: "doc",
          label: "Setup work environment",
          id: "developers/rollapp/setup",
        },
        {
          type: "doc",
          label: "Run a hub node",
          id: "developers/rollapp/run-a-node",
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
              id: "developers/rollapp/scaffold-rollapp",
            },
            {
              type: "doc",
              label: "Install RDK & dymint",
              id: "developers/rollapp/install-rdk-dymint",
            },
            {
              type: "doc",
              label: "Initialize the RollApp",
              id: "developers/rollapp/init-rollapp",
            },
            {
              type: "doc",
              label: "Register the RollApp",
              id: "developers/rollapp/register-rollapp",
            },
            // {
            //   type: "doc",
            //   label: "Build a Module",
            //   id: "developers/rollapp/build-a-module",
            // },
            {
              type: "doc",
              label: "Run the RollApp",
              id: "developers/rollapp/run-rollapp",
            },
            {
              type: "doc",
              label: "Interact with the RollApp",
              id: "developers/rollapp/interact",
            },
            {
              type: "doc",
              label: "Query state root",
              id: "developers/rollapp/query-rollapp",
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
              id: "developers/smart-contract/index",
            },
            {
              type: "doc",
              label: "Set Up Work Environment",
              id: "developers/smart-contract/setup",
            },
            {
              type: "doc",
              label: "Run a dYmension Wasm Node",
              id: "developers/smart-contract/dym-wasm-node",
            },
            {
              type: "doc",
              label: "Prepare Your Smart Contract",
              id: "developers/smart-contract/contract-preparation",
            },
            {
              type: "doc",
              label: "Run the Smart Contract",
              id: "developers/smart-contract/contract-interaction",
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
              id: "developers/smart-contract/index",
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
          id: "nodes/full-node/index",
        },
        {
          type: "doc",
          label: "Run a node",
          id: "nodes/full-node/run-a-node",
        },
        {
          type: "doc",
          label: "Reset and troubleshooting",
          id: "nodes/full-node/reset-node",
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
