const sidebars = {
  sidebar: [
    {
      type: "doc",
      label: "Documentation Portal",
      id: "index",
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
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
      label: "Development Guide",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Node Runners",
          id: "guides/node-runners",
        },
      ],
    },
    {
      type: "doc",
      label: "Litepaper",
      id: "dymension-litepaper/index",
    },
    // {
    //   type: "link",
    //   href: "https://github.com/dymensionxyz/awesome",
    //   label: "Resources",
    // },
    {
      type: "doc",
      label: "Glossary",
      id: "reference/glossary",
    },
  ],
};

module.exports = sidebars;
