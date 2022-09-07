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
      label: "Build Your Own RollApp",
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Introduction",
          id: "tutorials/index",
        },
        {
          type: "doc",
          label: "Set Up Work Environment",
          id: "tutorials/setup",
        },
        {
          type: "doc",
          label: "Local dYmension",
          id: "tutorials/local-testnet",
        },
        {
          type: "doc",
          label: "Run a Node",
          id: "tutorials/run-a-node",
        },
        {
          type: "doc",
          label: "Initialize a RollApp",
          id: "tutorials/init-rollapp",
        },
        {
          type: "doc",
          label: "Build a Module",
          id: "tutorials/build-a-module",
        },
        {
          type: "doc",
          label: "Run the RollApp",
          id: "tutorials/init-and-run",
        },
        {
          type: "doc",
          label: "Interact with the RollApp",
          id: "tutorials/interact",
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
