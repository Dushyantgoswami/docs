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
          label: "Build a RollApp",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "tutorials/rollapp/index",
            },
            {
              type: "doc",
              label: "Set Up Work Environment",
              id: "tutorials/rollapp/setup",
            },
            {
              type: "doc",
              label: "Local dYmension",
              id: "tutorials/rollapp/local-testnet",
            },
            {
              type: "doc",
              label: "Initialize a RollApp",
              id: "tutorials/rollapp/initialize-rollapp",
            },
            {
              type: "doc",
              label: "Scaffold a RollApp",
              id: "tutorials/rollapp/scaffold-rollapp",
            },
            {
              type: "doc",
              label: "Build a Module",
              id: "tutorials/rollapp/build-a-module",
            },
            {
              type: "doc",
              label: "Deploy the RollApp",
              id: "tutorials/rollapp/deploy-rollapp",
            },
            {
              type: "doc",
              label: "Interact with the RollApp",
              id: "tutorials/rollapp/interact",
            },
            {
              type: "doc",
              label: "Update base layers",
              id: "tutorials/rollapp/update-rollapp",
            },
          ],
        },
        {
          type: "category",
          label: "Deploy a Smart Contract",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Introduction",
              id: "tutorials/smart-contract/index",
            },
            {
              type: "doc",
              label: "Set Up Work Environment",
              id: "tutorials/smart-contract/setup",
            },
            {
              type: "doc",
              label: "Run a dYmension Wasm Node",
              id: "tutorials/smart-contract/dym-wasm-node",
            },
            {
              type: "doc",
              label: "Prepare Your Smart Contract",
              id: "tutorials/smart-contract/contract-preparation",
            },
            {
              type: "doc",
              label: "Run the Smart Contract",
              id: "tutorials/smart-contract/contract-interaction",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Node Runners",
      items: [
        {
          type: "doc",
          label: "Full Nodes",
          id: "nodes/full-node/index",
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
