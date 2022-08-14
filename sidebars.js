const sidebars = {
  overview: [
    {
      type: "doc",
      label: "Documentation Portal",
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
          id: "overview/DYM",
        },
        {
          type: "doc",
          label: "Cosmos",
          id: "overview/the-hub",
        },
      ]
    },  
    {
      type: "category",
      label: "dYmension Protocol",
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
          id: "overview/DYM",
        },
        {
          type: "doc",
          label: "The dYmension Hub",
          id: "overview/the-hub",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "overview/RollApps",
        },
        {
          type: "doc",
          label: "Glossary",
          id: "overview/Glossary",
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
          label: "Roadmap",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Run a Node",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Validator",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Setting up dependencies",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Joining the testnet",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "dYmension Core",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Contributions",
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
          label: "Roadmap",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Demo App",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Wallet",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Explorers",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Public Endpoints",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Local RollApp",
          id: "overview/dymension",
        },
        {
          type: "doc",
          label: "Joining a Testnet",
          id: "overview/dymension",
        },
      ]
    },   
  ],
};

module.exports = sidebars;
