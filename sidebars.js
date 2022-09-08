const sidebars = {
  sidebar: [
    "index",
    "get-started",
    {
      type: "category",
      label: "Concepts",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "RollApp Architecture",
          id: "concepts/rollapps",
        },
        {
          type: "doc",
          label: "Modular Blockchain",
          id: "concepts/modular-blockchain",
        },
        {
          type: "doc",
          label: "Optimistic Rollups",
          id: "concepts/optimistic-rollups",
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
              label: "Run a Node",
              id: "tutorials/rollapp/run-a-node",
            },
            {
              type: "doc",
              label: "Initialize a RollApp",
              id: "tutorials/rollapp/init-rollapp",
            },
            {
              type: "doc",
              label: "Build a Module",
              id: "tutorials/rollapp/build-a-module",
            },
            {
              type: "doc",
              label: "Interact with the RollApp",
              id: "tutorials/rollapp/interact",
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
              label: "dYmension Wasm Node",
              id: "tutorials/smart-contract/dymension-wasm-node",
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
          label: "Validator Nodes",
          id: "nodes/validator-node/index",
        },
        {
          type: "doc",
          label: "Light Clients",
          id: "nodes/light-client/index",
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
