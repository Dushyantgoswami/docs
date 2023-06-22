const sidebars = {
    sidebar: [
        "index",
        {
            type: "category",
            label: "Learn",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    label: "Modular architecture",
                    id: "learn/modular-intro",
                },
                {
                    type: "doc",
                    label: "Dymension Hub",
                    id: "learn/dymension-hub",
                },
                {
                    type: "doc",
                    label: "RollApps",
                    id: "learn/rollapps",
                },
            ],
        },
        {
            type: "doc",
            label: "Develop",
            id: "develop/get-started/roller",
        },
        {
            type: "category",
            label: "Validate",
            items: [
                {
                    type: "doc",
                    label: "Node FAQs",
                    id: "validate/dymension-hub/overview",
                },
                {
                    type: "doc",
                    label: "Build Dymension Hub",
                    id: "validate/dymension-hub/build-dymd",
                },
                {
                    type: "doc",
                    label: "Node configuration",
                    id: "validate/dymension-hub/config",
                },
                {
                    type: "doc",
                    label: "Join a network",
                    id: "validate/dymension-hub/join-network",
                },
                {
                    type: "doc",
                    label: "Sync node",
                    id: "validate/dymension-hub/sync",
                },
                {
                    type: "doc",
                    label: "Create validator",
                    id: "validate/dymension-hub/validator",
                },
                {
                    type: "doc",
                    label: "Upgrade",
                    id: "validate/dymension-hub/upgrades",
                },
                {
                    type: "doc",
                    label: "Reset and troubleshooting",
                    id: "validate/dymension-hub/reset-node",
                },

                // {
                //     type: "category",
                //     label: "RollApps",
                //     items: [
                //         {
                //             type: "doc",
                //             label: "Node FAQs",
                //             id: "validate/rollapps/overview",
                //         },
                //         {
                //             type: "doc",
                //             label: "Build RollApp",
                //             id: "validate/rollapps/build-rollapp",
                //         },
                //         {
                //             type: "doc",
                //             label: "Join network",
                //             id: "validate/rollapps/join-network",
                //         },
                //         {
                //             type: "doc",
                //             label: "Sync node",
                //             id: "validate/rollapps/sync",
                //         },
                //         {
                //             type: "doc",
                //             label: "Upgrade",
                //             id: "validate/rollapps/upgrade",
                //         },
                //         {
                //             type: "doc",
                //             label: "Reset and troubleshooting",
                //             id: "validate/rollapps/reset-node",
                //         },
                //     ],
                // },
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
