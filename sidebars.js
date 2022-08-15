const sidebars = {
  overview: [
    {
      type: "doc",
      label: "Development Portal",
      id: "overview/portal",
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
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Cosmos Network",
          id: "overview/dymension",
        },
      ]
    },  
    {
      type: "category",
      label: "dYmension Concepts",
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Roadmap",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "DYM token",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "dYmension Hub",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Glossary",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Resources",
          id: "overview/dymension",
        },
      ]
    }, 
    {
      type: "category",
      label: "The dYmension Hub",
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Node Runners",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Interact with The Hub",
          id: "overview/dymension",
        },
      ]
    },  
    {
      type: "category",
      label: "RollApps",
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "RollApp Development Kit",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Inter-RollApp Communication",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Deploying an app",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Interact with RollApps",
          id: "overview/dymension",
        },
      ]
    },   
  ],
};

module.exports = sidebars;
