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
                            label: "Setup Environment",
                            id: "develop/get-started/setup",
                        },
                        {
                            type: "doc",
                            label: "Dymension Hub Node",
                            id: "develop/get-started/run-a-hub-node",
                        },
                        {
                            type: "doc",
                            label: "Celestia Light Client",
                            id: "develop/get-started/celestia-light-client",
                        },
                        {
                            type: "doc",
                            label: "Register RollApp",
                            id: "develop/get-started/register-rollapp",
                        },
                        {
                            type: "doc",
                            label: "Initialize Sequencer",
                            id: "develop/get-started/init-sequencer",
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
                            label: "Setup",
                            id: "develop/build/rdk/setup",
                        },
                        {
                            type: "doc",
                            label: "Deploy",
                            id: "develop/build/rdk/deploy",
                        },
                        {
                            type: "doc",
                            label: "Interact",
                            id: "develop/build/rdk/interact",
                        },
                        {
                            type: "doc",
                            label: "Add Wallet",
                            id: "develop/build/rdk/add-wallet",
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
                            label: "Setup",
                            id: "develop/build/cosmwasm/setup",
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
                            label: "Setup",
                            id: "develop/build/evm/setup",
                        },
                        {
                            type: "doc",
                            label: "Create",
                            id: "develop/build/evm/create",
                        },
                        {
                            type: "doc",
                            label: "Deploy",
                            id: "develop/build/evm/deploy",
                        },
                        {
                            type: "doc",
                            label: "Add Wallet",
                            id: "develop/build/evm/add-metamask-wallet",
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
                    id: "validate/overview",
                },
                {
                    type: "category",
                    label: "Dymension Hub validator",
                    items: [
                        {
                            type: "doc",
                            label: "Testnet",
                            id: "validate/dymension-hub/testnet",
                        },
                        {
                            type: "doc",
                            label: "Localnet",
                            id: "validate/dymension-hub/localnet",
                        },
                        {
                            type: "doc",
                            label: "Upgrades",
                            id: "validate/dymension-hub/upgrades",
                        },
                        {
                            type: "doc",
                            label: "Rest and troubleshooting",
                            id: "validate/dymension-hub/reset-node",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "RollApp full node",
                    items: [
                        {
                            type: "doc",
                            label: "Overview",
                            id: "validate/rollapps/index",
                        },
                    ],
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
