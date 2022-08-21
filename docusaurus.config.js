// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "dYmension Docs",
  tagline: "Home of the RollApps",
  url: "https://www.dymension.xyz/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dYmension", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dymensionxyz/docs",
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
      navbar: {
        title: "dYmension Docs",
        logo: {
          alt: "dYmension Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/portal/overview",
            position: "left",
            label: "Portal",
          },
          {
            to: "/docs/hub/overview",
            position: "left",
            label: "The Hub",
          },
          {
            to: "/docs/rollapps/overview",
            position: "left",
            label: "RollApps",
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
            title: "Connect",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/GbrsdPB6Ge",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/dYmensionXYZ",
              },
              {
                label: "Telegram",
                href: "https://t.me/dYmensionXYZ",
              },
            ],
          },
          {
            title: "Learn",
            items: [
              {
                label: "Website",
                href: "https://dymension.xyz",
              },
              {
                label: "Medium",
                href: "https://medium.com/@dymensionxyz",
              },
              {
                label: "GitHub",
                href: "https://github.com/dymensionxyz",
              },
            ],
          },
          {
            title: "Build",
            items: [
              {
                label: "Portal",
                to: "/docs/portal/overview",
              },
              {
                label: "The Hub",
                to: "/docs/hub/overview",
              },
              {
                label: "RollApps",
                to: "/docs/rollapps/overview",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dYmension. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
