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
                    // editUrl: "https://github.com/dymensionxyz/docs/tree/main",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: "G-QQDTDE3E8X",
                    anonymizeIP: true,
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
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: false,
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
                        label: "Learn",
                        position: "right",
                        to: "learn/eli5",
                    },
                    {
                        label: "Build",
                        position: "right",
                        to: "build/get-started/system-reqs",
                    },
                    {
                        label: "Validate",
                        position: "right",
                        to: "validate/dymension-hub/overview",
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
                  <p class="copyright"><span class='barber'>💈</span>Home of the RollApps<span class='barber'>💈</span></p>
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
                appId: "D6G0Y2R87E",
                apiKey: "2883600674f127c6c857beb001770d22",
                indexName: "dymension",
                contextualSearch: true,
                searchParameters: {},
                searchPagePath: "search",
            },
        }),
};

module.exports = config;
