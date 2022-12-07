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
                    label: "Modular Architecture",
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
            label: "Developer",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Start",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Setup Environment",
                            id: "developers/start/setup",
                        },
                        {
                            type: "doc",
                            label: "Dymension Hub Node",
                            id: "developers/start/run-a-hub-node",
                        },
                        {
                            type: "doc",
                            label: "Celestia Light Client",
                            id: "developers/start/celestia-light-client",
                        },
                        {
                            type: "doc",
                            label: "Register RollApp",
                            id: "developers/start/register-rollapp",
                        },
                        {
                            type: "doc",
                            label: "Initialize Sequencer",
                            id: "developers/start/init-sequencer",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Build",
                    collapsed: true,
                    items: [
                        {
                            type: "category",
                            label: "RDK Modules",
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    label: "RDK",
                                    id: "developers/build/rdk/setup",
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "CosmWasm",
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    label: "Setup",
                                    id: "developers/build/cosmwasm/setup",
                                },
                                {
                                    type: "doc",
                                    label: "Deploy",
                                    id: "developers/build/cosmwasm/deploy",
                                },
                                {
                                    type: "doc",
                                    label: "Interact",
                                    id: "developers/build/cosmwasm/interact",
                                },
                                {
                                    type: "doc",
                                    label: "Add Wallet",
                                    id: "developers/build/cosmwasm/add-keplr-wallet",
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "EVM",
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    label: "Setup",
                                    id: "developers/build/evm/setup",
                                },
                                {
                                    type: "doc",
                                    label: "Create",
                                    id: "developers/build/evm/create",
                                },
                                {
                                    type: "doc",
                                    label: "Deploy",
                                    id: "developers/build/evm/deploy",
                                },
                                {
                                    type: "doc",
                                    label: "Add Wallet",
                                    id: "developers/build/evm/add-metamask-wallet",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Play",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Query Dymension Hub",
                            id: "developers/play/query-hub",
                        },
                        {
                            type: "doc",
                            label: "Query Celestia",
                            id: "developers/play/query-celestia",
                        },
                        {
                            type: "doc",
                            label: "Global fees",
                            id: "developers/play/global-fees",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Validator",
            items: [
                {
                    type: "doc",
                    label: "Overview",
                    id: "full-node/index",
                },
                {
                    type: "doc",
                    label: "Run a node",
                    id: "full-node/run-a-node",
                },
                {
                    type: "doc",
                    label: "Reset and troubleshooting",
                    id: "full-node/reset-node",
                },
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
