const sidebars = {
  overview: [
    {
      type: "doc",
      label: "Documentation Portal",
      id: "overview/portal",
    },
    {
      type: "category",
      label: "dymension Concepts",
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "dYmension Overview",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "DYM token",
          id: "overview/dym",
        },
        {
          type: "doc",
          label: "The dYmension Hub",
          id: "overview/hub",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "overview/rollapps",
        },
      ]
    },
    {
      type: "category",
      label: "Blockchain Concepts",
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Blockchain",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Optimistic Rollups",
          id: "overview/dym",
        },
        {
          type: "doc",
          label: "Cosmos",
          id: "overview/hub",
        },
      ]
    }
  ],
};

module.exports = sidebars;
