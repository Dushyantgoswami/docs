const sidebars = {
  sidebar: [
    "index",
    "getting-started",
    {
      type: "category",
      label: "Concepts",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "RollApps Overview",
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
        {
          type: "doc",
          label: "Cosmos Network",
          id: "concepts/cosmos",
        },
      ],
    },
    {
      type: "category",
      label: "Developer Tutorials",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Deploy a RollApp",
          id: "tutorials/deploy-rollapp",
        },
        {
          type: "doc",
          label: "Develop a dApp",
          id: "tutorials/deploy-dapp",
        },
      ],
    },
    {
      type: "category",
      label: "Node Runners",
      items: [
        {
          type: "doc",
          label: "Local Testnet",
          id: "nodes/local-testnet/index",
        },
        {
          type: "doc",
          label: "Validator Node",
          id: "nodes/validator-node/index",
        },
        {
          type: "doc",
          label: "Full Node",
          id: "nodes/full-node/index",
        },
        {
          type: "doc",
          label: "Light Client",
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
