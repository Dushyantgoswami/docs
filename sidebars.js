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
          label: "Modular Blockchain",
          id: "portal/modular-blockchain",
        },
        {
          type: "doc",
          label: "Optimistic Rollups",
          id: "portal/optimistic-rollups",
        },
        {
          type: "doc",
          label: "Cosmos Network",
          id: "portal/cosmos",
        },
        {
          type: "doc",
          label: "Glossary",
          id: "portal/glossary",
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
          label: "DYM token",
          id: "portal/dym-token",
        },
        {
          type: "link",
          label: "dYmension Hub",
          href: "/hub/overview",
        },
        {
          type: "link",
          label: "RollApps",
          href: "/rollapps/overview",
        },
        {
          type: "link",
          label: "Resources",
          href: "https://github.com/dymensionxyz/awesome",
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
          label: "Validators",
          id: "hub/interact",
        },
        {
          type: "doc",
          label: "Full Node",
          id: "hub/interact",
        },
        {
          type: "doc",
          label: "Light Client",
          id: "hub/interact",
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
          label: "Local dYmension",
          id: "hub/node-runner",
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
