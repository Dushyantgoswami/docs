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
                            label: "Application",
                            id: "learn/dymension-hub/application",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Build",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    label: "Roller",
                    id: "build/roller",
                },
                {
                    type: "category",
                    label: "Quick start",
                    collapsed: "true",
                    items: [
                        {
                            type: "doc",
                            label: "Install",
                            id: "build/quick-start/roller-quick/install",
                        },
                        {
                            type: "doc",
                            label: "Init",
                            id: "build/quick-start/roller-quick/initialize",
                        },
                        {
                            type: "doc",
                            label: "Register",
                            id: "build/quick-start/roller-quick/register",
                        },
                        {
                            type: "doc",
                            label: "Run",
                            id: "build/quick-start/roller-quick/run",
                        },
                        {
                            type: "category",
                            label: "Interact",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "IBC transfer",
                                    id: "build/quick-start/roller-quick/ibc-transfer",
                                },
                                {
                                    type: "doc",
                                    label: "Export keys",
                                    id: "build/quick-start/roller-quick/export-keys",
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Develop",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "Connect",
                                    id: "build/quick-start/evm/connect",
                                },
                                {
                                    type: "doc",
                                    label: "Create",
                                    id: "build/quick-start/evm/create",
                                },
                                {
                                    type: "doc",
                                    label: "Deploy",
                                    id: "build/quick-start/evm/deploy",
                                },
                                {
                                    type: "doc",
                                    label: "Play",
                                    id: "build/quick-start/evm/play",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Advanced guide",
                    collapsed: "true",
                    items: [
                        // {
                        //     type: "category",
                        //     label: "Develop",
                        //     collapsed: "true",
                        //     items: [
                        //         {
                        //             type: "category",
                        //             label: "Setup",
                        //             collapsed: "true",
                        //             items: [
                        //                 {
                        //                     type: "doc",
                        //                     label: "Overview",
                        //                     id: "build/adv-guide/rdk/setup/overview",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Get RDK",
                        //                     id: "build/adv-guide/rdk/setup/rdk-repo",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Folder setup",
                        //                     id: "build/adv-guide/rdk/setup/folder",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "category",
                        //             label: "Proto",
                        //             collapsed: "true",
                        //             items: [
                        //                 {
                        //                     type: "doc",
                        //                     label: "Message",
                        //                     id: "build/adv-guide/rdk/proto/message",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Query",
                        //                     id: "build/adv-guide/rdk/proto/query",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Genesis",
                        //                     id: "build/adv-guide/rdk/proto/genesis",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Protogen",
                        //                     id: "build/adv-guide/rdk/proto/protoc",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "category",
                        //             label: "Types",
                        //             collapsed: "true",
                        //             items: [
                        //                 {
                        //                     type: "doc",
                        //                     label: "Keys",
                        //                     id: "build/adv-guide/rdk/types/keys",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Encoding",
                        //                     id: "build/adv-guide/rdk/types/codec",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Genesis",
                        //                     id: "build/adv-guide/rdk/types/genesis",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Errors",
                        //                     id: "build/adv-guide/rdk/types/errors",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Expected keepers",
                        //                     id: "build/adv-guide/rdk/types/expected-keepers",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "category",
                        //             label: "Keeper",
                        //             collapsed: "true",
                        //             items: [
                        //                 {
                        //                     type: "doc",
                        //                     label: "Genesis",
                        //                     id: "build/adv-guide/rdk/keeper/genesis",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Keeper setup",
                        //                     id: "build/adv-guide/rdk/keeper/keeper-setup",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Keeper functionality",
                        //                     id: "build/adv-guide/rdk/keeper/keeper-func",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Msg Server",
                        //                     id: "build/adv-guide/rdk/keeper/msg_server",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Query Server",
                        //                     id: "build/adv-guide/rdk/keeper/query_server",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "category",
                        //             label: "CLI",
                        //             collapsed: "true",
                        //             items: [
                        //                 {
                        //                     type: "doc",
                        //                     label: "Transaction",
                        //                     id: "build/adv-guide/rdk/cli/tx",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Query",
                        //                     id: "build/adv-guide/rdk/cli/query",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "category",
                        //             label: "Root",
                        //             collapsed: "true",
                        //             items: [
                        //                 {
                        //                     type: "doc",
                        //                     label: "Module manager",
                        //                     id: "build/adv-guide/rdk/root/module-manager",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "App wiring",
                        //                     id: "build/adv-guide/rdk/root/app",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "doc",
                        //             label: "Build",
                        //             id: "build/adv-guide/rdk/setup/binary",
                        //         },
                        //     ],
                        // },
                        {
                            type: "doc",
                            label: "Install",
                            id: "build/adv-guide/roller-adv/install-adv",
                        },
                        {
                            type: "doc",
                            label: "Init",
                            id: "build/adv-guide/roller-adv/initialize-adv",
                        },
                        {
                            type: "doc",
                            label: "Register",
                            id: "build/adv-guide/roller-adv/register-adv",
                        },
                        {
                            type: "doc",
                            label: "DA light client",
                            id: "build/adv-guide/roller-adv/da-light-client",
                        },
                        {
                            type: "doc",
                            label: "Sequencer",
                            id: "build/adv-guide/roller-adv/sequencer",
                        },
                        {
                            type: "doc",
                            label: "Relayer",
                            id: "build/adv-guide/roller-adv/relayer",
                        },
                        {
                            type: "category",
                            label: "Interact",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "IBC transfer",
                                    id: "build/adv-guide/roller-adv/ibc-transfer-adv",
                                },
                                {
                                    type: "doc",
                                    label: "Export keys",
                                    id: "build/adv-guide/roller-adv/export-keys-adv",
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
