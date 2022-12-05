// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Dymension Docs",
    tagline: "Developer Documentation",
    url: "https://docs.dymension.xyz/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "dymension-labs",
    projectName: "docs",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/dymensionxyz/docs/tree/main",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            themes: ["@docusaurus/theme-search-algolia"],
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            navbar: {
                logo: {
                    alt: "dymension logo",
                    src: "img/logo.svg",
                    srcDark: "img/logo-light.svg",
                },
                items: [
                    {
                        type: "dropdown",
                        label: "Learn",
                        position: "right",
                        items: [
                            {
                                label: "Modular Architecture",
                                type: "doc",
                                docId: "learn/modular-intro",
                            },
                            {
                                label: "Dymension Hub",
                                type: "doc",
                                docId: "learn/dymension-hub",
                            },
                            {
                                label: "RollApps",
                                type: "doc",
                                docId: "learn/rollapps",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Developer",
                        position: "right",
                        items: [
                            {
                                type: "doc",
                                label: "Start",
                                docId: "developers/start/overview",
                            },
                            {
                                type: "doc",
                                label: "Build",
                                docId: "developers/build/overview",
                            },
                            {
                                type: "doc",
                                label: "Run",
                                docId: "developers/run/overview",
                            },
                        ],
                    },
                    {
                        type: "dropdown",
                        label: "Validator",
                        position: "right",
                        items: [
                            {
                                type: "doc",
                                label: "Overview",
                                docId: "full-node/index",
                            },
                            {
                                type: "doc",
                                label: "Run a node",
                                docId: "full-node/run-a-node",
                            },
                            {
                                type: "doc",
                                label: "Reset and troubleshooting",
                                docId: "full-node/reset-node",
                            },
                        ],
                    },
                    {
                        href: "https://github.com/dymensionxyz",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "light",
                links: [
                    {
                        title: null,
                        items: [
                            {
                                html: `
                <div class="logo-container">                  
                  <a href="https://www.dymension.xyz" target="_blank" rel="noopener noreferrer" title="logo">
                     <img class="logo" src="/img/full-logo.svg" alt="Dymension Logo" />    
                     <img class="logo-light" src="/img/full-logo-light.svg" alt="Dymension Logo" />                  
                  </a>
                  <p class="copyright">By Builders <span class="heart-icon">♥</span> For Builders</p>
                </p>             
                `,
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Twitter",
                                href: "https://twitter.com/dymensionXYZ",
                            },
                            {
                                label: "Discord",
                                href: "https://discord.gg/dymension",
                            },
                            {
                                label: "Telegram",
                                href: "https://t.me/dymensionXYZ",
                            },
                            {
                                label: "Medium",
                                href: "https://medium.com/@dymensionXYZ",
                            },
                        ],
                    },
                    {
                        title: "Developers",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/dymensionxyz",
                            },
                            {
                                label: "Docs",
                                href: "https://docs.dymension.xyz/",
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: "54MWJQI31O",
                apiKey: "6792e5baab9ec9c0e612c9edb1d7e735",
                indexName: "dymension_docs",
                contextualSearch: true,
                searchParameters: {},
                searchPagePath: "search",
            },
        }),
};

module.exports = config;
