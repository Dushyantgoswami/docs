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
      ],
    },
    {
      type: "category",
      label: "dYmension Protocol",
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
          label: "Tokenomics",
          id: "portal/tokenomics",
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
      ],
    },
  ],
  hub: [
    {
      type: "doc",
      label: "Overview",
      id: "hub/overview",
    },
    {
      type: "category",
      label: "Node Runners",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Validate",
          id: "hub/validate",
        },
        {
          type: "doc",
          label: "Full Node",
          id: "hub/validate",
        },
        {
          type: "doc",
          label: "Light Client",
          id: "hub/validate",
        },
      ],
    },
    {
      type: "category",
      label: "Participate",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Governance",
          id: "hub/governance",
        },
        {
          type: "doc",
          label: "Block Explorers",
          id: "hub/node-runner",
        },
        {
          type: "doc",
          label: "Wallet",
          id: "hub/interact",
        },
        {
          type: "doc",
          label: "Public endpoints",
          id: "hub/interact",
        },
        {
          type: "doc",
          label: "Faucet",
          id: "hub/interact",
        },
      ],
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
      type: "category",
      label: "Develop on dYmension",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Demo app",
          id: "rollapps/app",
        },
        {
          type: "doc",
          label: "CosmWasm",
          id: "rollapps/irc",
        },
        {
          type: "doc",
          label: "Celestia",
          id: "rollapps/interact",
        },
        {
          type: "doc",
          label: "Faucet",
          id: "rollapps/interact",
        },
        {
          type: "doc",
          label: "Block explorers",
          id: "rollapps/interact",
        },
      ],
    },
  ],
};

module.exports = sidebars;
