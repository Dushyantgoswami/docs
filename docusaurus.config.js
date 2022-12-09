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
                        to: "learn/modular-intro",
                    },
                    {
                        label: "Develop",
                        position: "right",
                        to: "develop/get-started/setup",
                    },
                    {
                        label: "Validate",
                        position: "right",
                        to: "validate/overview",
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
