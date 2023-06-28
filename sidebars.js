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
                            label: "Roller intro",
                            id: "build/get-started/roller",
                        },
                        {
                            type: "doc",
                            label: "Setup environment",
                            id: "build/get-started/system-reqs",
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
                            label: "Install",
                            id: "build/deploy/install",
                        },
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
                            type: "doc",
                            label: "Export keys",
                            id: "build/deploy/export-keys",
                        },
                        {
                            type: "category",
                            label: "Advanced guide",
                            collapsed: "true",
                            items: [
                                {
                                    type: "doc",
                                    label: "Install",
                                    id: "build/deploy/install-adv",
                                },
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
                            ],
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
                        // {
                        //     type: "category",
                        //     label: "RDK",
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
                        //                     id: "build/develop/rdk/setup/overview",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Get RDK",
                        //                     id: "build/develop/rdk/setup/rdk-repo",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Folder setup",
                        //                     id: "build/develop/rdk/setup/folder",
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
                        //                     id: "build/develop/rdk/proto/message",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Query",
                        //                     id: "build/develop/rdk/proto/query",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Genesis",
                        //                     id: "build/develop/rdk/proto/genesis",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Protogen",
                        //                     id: "build/develop/rdk/proto/protoc",
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
                        //                     id: "build/develop/rdk/types/keys",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Encoding",
                        //                     id: "build/develop/rdk/types/codec",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Genesis",
                        //                     id: "build/develop/rdk/types/genesis",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Errors",
                        //                     id: "build/develop/rdk/types/errors",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Expected keepers",
                        //                     id: "build/develop/rdk/types/expected-keepers",
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
                        //                     id: "build/develop/rdk/keeper/genesis",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Keeper setup",
                        //                     id: "build/develop/rdk/keeper/keeper-setup",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Keeper functionality",
                        //                     id: "build/develop/rdk/keeper/keeper-func",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Msg Server",
                        //                     id: "build/develop/rdk/keeper/msg_server",
                        //                 },
                        //                 {
                        //                      type: "doc",
                        //                      label: "Query Server",
                        //                      id: "build/develop/rdk/keeper/query_server",
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
                        //                     id: "build/develop/rdk/cli/tx",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "Query",
                        //                     id: "build/develop/rdk/cli/query",
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
                        //                     id: "build/develop/rdk/root/module-manager",
                        //                 },
                        //                 {
                        //                     type: "doc",
                        //                     label: "App wiring",
                        //                     id: "build/develop/rdk/root/app",
                        //                 },
                        //             ],
                        //         },
                        //         {
                        //             type: "doc",
                        //             label: "Build",
                        //             id: "build/develop/rdk/setup/binary",
                        //         },
                        //     ],
                        // },
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
