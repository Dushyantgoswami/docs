const sidebars = {
  sidebar: [
    "index",
    "getting-started",
    "local-testnet",
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
          type: "category",
          label: "Run Your Own RollApp",
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Chess RollApp Overview",
              id: "tutorials/chess-rollapp-overview",
            },
            {
              type: "doc",
              label: "Set Up Work Environment",
              id: "tutorials/setup-environment",
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
          label: "Hub Validators",
          id: "nodes/validator-node/index",
        },
        {
          type: "doc",
          label: "RollApp Sequencers",
          id: "nodes/sequencer-node/index",
        },
        {
          type: "doc",
          label: "RollApp Light Clients",
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
