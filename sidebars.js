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
      label: "Build Your Own RollApp",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "tutorials/chess-rollapp-overview",
        },
        {
          type: "doc",
          label: "Set Up Work Environment",
          id: "tutorials/setup-environment",
        },
        {
          type: "doc",
          label: "Local dYmension",
          id: "tutorials/local-testnet",
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
