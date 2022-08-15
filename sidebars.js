const sidebars = {
  portal: [
    {
      type: "doc",
      label: "Development Portal",
      id: "portal/overview",
    },
    {
      type: "category",
      label: "Blockchain Concepts",
      collapsed: false,  
      items: [
        {
          type: "doc",
          label: "Blockchain",
          id: "portal/blockchain",
        },
        {
          type: "doc",
          label: "Optimistic Rollups",
          id: "portal/rollups",
        },
        {
          type: "doc",
          label: "Cosmos Network",
          id: "portal/cosmos",
        },
      ]
    },  
    {
      type: "category",
      label: "dYmension Concepts",
      collapsed: false,  
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "portal/dymension-overview",
        },
        {
          type: "doc",
          label: "Roadmap",
          id: "portal/roadmap",
        },
        {
          type: "doc",
          label: "DYM token",
          id: "portal/dym-token",
        },
        {
          type: "doc",
          label: "dYmension Hub",
          id: "portal/dymension-hub",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "portal/rollapps",
        },
        {
          type: "doc",
          label: "Glossary",
          id: "portal/glossary",
        },
        {
          type: "doc",
          label: "Resources",
          id: "portal/resources",
        },
      ]
    }, 
  ],
  hub:[
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
    ],
  rollapps: [
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
        } 
  ],
};

module.exports = sidebars;
