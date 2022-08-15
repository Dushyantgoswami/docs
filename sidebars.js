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
      collapsible: true,
      collapsed: false,  
      items: [
        {
          type: "doc",
          label: "Blockchain",
          id: "overview/blockchain",
        },
        {
          type: "doc",
          label: "Optimistic Rollups",
          id: "overview/rollups",
        },
        {
          type: "doc",
          label: "Cosmos Network",
          id: "overview/cosmos",
        },
      ]
    },  
    {
      type: "category",
      label: "dYmension Concepts",
      collapsible: true,
      collapsed: false,  
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "overview/dymension-overview",
        },
        {
          type: "doc",
          label: "Roadmap",
          id: "overview/roadmap",
        },
        {
          type: "doc",
          label: "DYM token",
          id: "overview/dym-token",
        },
        {
          type: "doc",
          label: "dYmension Hub",
          id: "overview/dymension-hub",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "overview/rollapps",
        },
        {
          type: "doc",
          label: "Glossary",
          id: "overview/glossary",
        },
        {
          type: "doc",
          label: "Resources",
          id: "overview/resources",
        },
      ]
    }, 
    {
      type: "category",
      label: "The dYmension Hub",
      collapsible: true,
      collapsed: false,     
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "hub/overview",
        },
        {
          type: "doc",
          label: "Node Runners",
          id: "hub/node-runner",
        },
        {
          type: "doc",
          label: "Interact with The Hub",
          id: "hub/interact",
        },
      ]
    },  
    {
      type: "category",
      label: "RollApps",
      collapsible: true,
      collapsed: false,  
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "rollapps/overview",
        },
        {
          type: "doc",
          label: "RollApp Development Kit",
          id: "rollapps/rdk",
        },
        {
          type: "doc",
          label: "Inter-RollApp Communication",
          id: "rollapps/irc",
        },
        {
          type: "doc",
          label: "Deploying an app",
          id: "rollapps/app",
        },
        {
          type: "doc",
          label: "Interact with RollApps",
          id: "rollapps/interact",
        },
      ]
    },   
  ],
};

module.exports = sidebars;
