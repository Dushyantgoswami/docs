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
                    label: "ELI5",
                    id: "learn/eli5",
                },
                {
                    type: "category",
                    label: "RollApps",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Dymension RDK",
                            id: "learn/rollapps/dymension-rdk",
                        },
                        {
                            type: "doc",
                            label: "Dymint",
                            id: "learn/rollapps/dymint",
                        },
                        {
                            type: "doc",
                            label: "Bridging",
                            id: "learn/rollapps/bridging",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Dymension Hub",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            label: "Tech stack",
                            id: "learn/dymension-hub/tech-stack",
                        },
                        {
                            type: "doc",
                            label: "Application",
                            id: "learn/dymension-hub/application",
                        },
                    ],
                },
                {
                    type: "doc",
                    label: "Next steps",
                    id: "learn/next-steps",
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
                    label: "Get started",
                    collapsed: "true",
                    items: [
                        {
                            type: "doc",
                            label: "Setup environment",
                            id: "build/get-started/system-reqs",
                        },
                        {
                            type: "doc",
                            label: "Roller intro",
                            id: "build/get-started/roller",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Develop",
                    collapsed: "true",
                    items: [
                        {
                            type: "category",
                            label: "EVM",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "Overview",
                                    id: "build/develop/evm/overview",
                                },
                                {
                                    type: "doc",
                                    label: "Create",
                                    id: "build/develop/evm/create",
                                },
                                {
                                    type: "doc",
                                    label: "Deploy",
                                    id: "build/develop/evm/deploy",
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Go",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "Build a module",
                                    id: "build/develop/go/module",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Deploy",
                    collapsed: "true",
                    items: [
                        {
                            type: "doc",
                            label: "Init",
                            id: "build/deploy/initialize",
                        },
                        {
                            type: "doc",
                            label: "Register",
                            id: "build/deploy/register",
                        },
                        {
                            type: "doc",
                            label: "Run",
                            id: "build/deploy/run",
                        },

                        {
                            type: "doc",
                            label: "Interact",
                            id: "build/deploy/interact",
                        },
                        {
                            type: "category",
                            label: "Advanced guide",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "Init",
                                    id: "build/deploy/initialize-adv",
                                },
                                {
                                    type: "doc",
                                    label: "Register",
                                    id: "build/deploy/register-adv",
                                },
                                {
                                    type: "doc",
                                    label: "DA light client",
                                    id: "build/deploy/da-light-client",
                                },
                                {
                                    type: "doc",
                                    label: "Sequencer",
                                    id: "build/deploy/sequencer",
                                },
                                {
                                    type: "doc",
                                    label: "Relayer",
                                    id: "build/deploy/relayer",
                                },
                                {
                                    type: "doc",
                                    label: "Reset",
                                    id: "build/deploy/reset",
                                },
                            ],
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
