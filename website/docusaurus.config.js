// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const companyName = 'WKS Power Limited';
const appName = 'WKS Reports';
const gitHubOrganizationName = 'wkspower';
const githubConfig = {
  organizationName : 'wksPower',
  projectName: 'wks-reports'
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: appName,
  tagline: 'Whitelabel reporting components',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: githubConfig.organizationName, // Usually your GitHub org/user name.
  projectName: githubConfig.projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://url',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://url',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: this.title,
        logo: {
          alt: this.title + ' Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://url',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Report Viewer',
                to: '/docs/report-viewer',
              },
              {
                label: 'Report Designer',
                to: '/docs/report-designer',
              },
              {
                label: 'Report Engine',
                to: '/docs/report-viewer',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CI/CD',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Sonar',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://url',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ` + companyName,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
