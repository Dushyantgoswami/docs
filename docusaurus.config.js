// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "dYmension Docs",
  tagline: "Home of the RollApps",
  url: "https://docs.dymension.xyz/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dYmensionXYZ",
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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/dymensionxyz/docs/tree/main",
          routeBasePath: "/",
        },
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
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: true,
        },
      },
      navbar: {
        title: "dYmension Docs",
        logo: {
          alt: "dYmension Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "portal",
            position: "left",
            label: "Portal",
          },
          {
            to: "dymension-hub",
            position: "left",
            label: "Overview",
          },
          {
            to: "node-runners",
            position: "left",
            label: "Guide",
          },
          {
            to: "litepaper",
            position: "left",
            label: "Litepaper",
          },
          {
            href: "https://github.com/dymensionxyz/docs",
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
                  <a class="social-link" href="https://dYmension.xyz" target="_blank" rel="noopener noreferrer" title="logo">
                     <img class="logo" src="/img/logo.svg" alt="dYmension Logo" />
                  </a>
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
          {
            title: null,
            items: [
              {
                html: `
                  <p class="right">
                    <nav class="social-links">
                        <a class="social-link" href="https://github.com/dymensionxyz" target="_blank" rel="noopener noreferrer" title="Git">
                         <img class="icon" src="/img/github.svg" alt="GitHub Icon" />
                        </a>
                        <a class="social-link" href="http://discord.gg/mvnh3YVa2W" target="_blank" rel="noopener noreferrer" title="Discord">
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
