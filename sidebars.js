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
            type: "category",
            label: "Develop",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Get Started",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Setup environment",
                            id: "develop/get-started/setup",
                        },
                        {
                            type: "doc",
                            label: "Run base layers",
                            id: "develop/get-started/run-base-layers",
                        },
                        {
                            type: "category",
                            label: "Register RollApp",
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    label: "Create RollApp",
                                    id: "develop/get-started/create-rollapp-id",
                                },
                                {
                                    type: "doc",
                                    label: "Add Sequencer",
                                    id: "develop/get-started/add-sequencer",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "RDK RollApp",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Start",
                            id: "develop/build/rdk/start",
                        },
                        {
                            type: "doc",
                            label: "Scaffold",
                            id: "develop/build/rdk/scaffold",
                        },
                        {
                            type: "doc",
                            label: "Build",
                            id: "develop/build/rdk/build",
                        },
                        {
                            type: "doc",
                            label: "Run",
                            id: "develop/build/rdk/run",
                        },
                        {
                            type: "doc",
                            label: "Interact",
                            id: "develop/build/rdk/interact",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "CosmWasm RollApp",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Start",
                            id: "develop/build/cosmwasm/start",
                        },
                        {
                            type: "doc",
                            label: "Install",
                            id: "develop/build/cosmwasm/install",
                        },
                        {
                            type: "doc",
                            label: "Run",
                            id: "develop/build/cosmwasm/run",
                        },
                        {
                            type: "doc",
                            label: "Deploy",
                            id: "develop/build/cosmwasm/deploy",
                        },
                        {
                            type: "doc",
                            label: "Interact",
                            id: "develop/build/cosmwasm/interact",
                        },
                        {
                            type: "doc",
                            label: "Add Wallet",
                            id: "develop/build/cosmwasm/add-keplr-wallet",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "EVM RollApp",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Start",
                            id: "develop/build/evm/start",
                        },
                        {
                            type: "doc",
                            label: "Install",
                            id: "develop/build/evm/install",
                        },
                        {
                            type: "doc",
                            label: "Run",
                            id: "develop/build/evm/run",
                        },
                        {
                            type: "doc",
                            label: "Add Wallet",
                            id: "develop/build/evm/add-metamask-wallet",
                        },
                        {
                            type: "doc",
                            label: "Deploy",
                            id: "develop/build/evm/deploy",
                        },
                    ],
                },
            ],
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
