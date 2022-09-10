// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "dYmension Docs",
  tagline: "Developer Documentation",
  url: "https://docs.dymension.xyz/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "yolo-labs",
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
          alt: "dYmension Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Developers",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Build a RollApp",
                docId: "tutorials/rollapp/index",
              },
              {
                type: "doc",
                label: "Deploy a Smart Contract",
                docId: "tutorials/smart-contract/index",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Node Runners",
            position: "left",
            items: [
              {
                label: "Full Nodes",
                type: "doc",
                docId: "nodes/full-node/index",
              },
              {
                label: "Light Clients",
                type: "doc",
                docId: "nodes/light-client/index",
              },
            ],
          },
          {
            to: "dymension-litepaper/dymension-litepaper-index",
            position: "left",
            label: "dYmension Litepaper",
          },
          {
            href: "https://github.com/dymensionxyz",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: null,
            items: [
              {
                html: `
                <p class="footer-logo">                  
                  <a class="logo" href="https://dYmension.xyz" target="_blank" rel="noopener noreferrer" title="logo">
                     <img class="logo" src="/img/logo.svg" alt="dYmension Logo" />                     
                  </a>     
                </p>             
                `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                    <nav class="social-links">
                        <a class="social-link" href="https://github.com/dymensionxyz" target="_blank" rel="noopener noreferrer" title="Git">
                         <img class="icon" src="/img/github.svg" alt="GitHub Icon" />
                        </a>
                        <a class="social-link" href="http://discord.gg/dymension" target="_blank" rel="noopener noreferrer" title="Discord">
                          <img class="icon" src="/img/discord.svg" alt="Discord Icon" />
                        </a>
                        <a class="social-link" href="https://twitter.com/dymensionXYZ/" target="_blank" rel="noopener noreferrer" title="Twitter">
                          <img class="icon" src="/img/twitter.svg" alt="Twitter Icon" />
                        </a>
                        <a class="social-link" href="https://t.me/dYmensionXYZ" target="_blank" rel="noopener noreferrer" title="Telegram">
                          <img class="icon" src="/img/telegram.svg" alt="Telegram Icon" />
                        </a>
                        <a class="social-link" href="https://medium.com/@dymensionxyz" target="_blank" rel="noopener noreferrer" title="Medium">
                          <img class="icon" src="/img/medium.svg" alt="Medium Icon" />
                        </a>                        
                    </nav>
              `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                <p class="emails">                  
                  <a href="mailto:hello@dymension.xyz" target="_blank" rel="noreferrer noopener">
                    hello@dYmension.xyz
                  </a>                  
                </p>
              `,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
