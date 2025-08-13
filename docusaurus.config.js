// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitlayer',
  tagline: 'The first Bitcoin security-equivalent Layer 2 based on BitVM',
  url: 'https://docs.bitlayer.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/bitlayer.ico',
  organizationName: 'bitlayer-org', // Usually your GitHub org/user name.
  projectName: 'bitlayer-org.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
	      remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-R3DF3TS5JQ', // Replace with your GA4 measurement ID
        anonymizeIP: true, // Optional, anonymize the IP addresses
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/BitVMBridge/Concepts/overview',
            from: '/docs/BitVMBridge/overview',
          },
          {
            to: '/docs/BitVMBridge/BBN/joining-bbn',
            from: '/docs/BitVMBridge/join-network',
          },
          {
            to: '/docs/BitVMBridge/BBN/bbn-governance',
            from: '/docs/BitVMBridge/governance',
          },
          {
            to: '/docs/BitVMBridge/Multi-Chain/integrating-target-chain',
            from: '/docs/BitVMBridge/how-to-integrate',
          },
          {
            to: '/docs/BitVMBridge/Concepts/key-differentiators',
            from: '/docs/BitVMBridge/key-differentiators/',
          },
        ],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      initialColorMode: 'dark',
      navbar: {
        title: 'Bitlayer',
        logo: {
          alt: 'Bitlayer Logo',
          src: 'img/Bitlayer_docs.svg',
        },
        items: [
          {
            to: '/docs/Learn/Introduction', // Link to a document, not a top-level directory
            position: 'left',
            label: 'Learn@Bitlayer',
            activeBaseRegex: `/docs/Learn`,
          },
          {
            to: '/docs/Build/GettingStarted/QuickStart', // Link to a document, not a top-level directory
            position: 'left',
            label: 'Build@Bitlayer',
            activeBaseRegex: `/docs/Build`,
          },
          {
            to: '/docs/BitVMBridge/Concepts/overview', // Link to a document, not a top-level directory
            position: 'left',
            label: 'BitVM Bridge',
            activeBaseRegex: `/docs/BitVMBridge`,
          },
          {
            to: '/docs/YBTCFamily/bl_btc_overview', // Link to a document, not a top-level directory
            position: 'left',
            label: 'YBTC Family',
            activeBaseRegex: `/docs/YBTCFamily`,
          },
          {
            href: 'https://blog.bitlayer.org/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://www.bitlayer.org/',
            label: 'Bitlayer',
            position: 'right',
          },
          {
            href: 'https://github.com/bitlayer-org',
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
                label: 'Learn',
                to: '/docs/Learn/Introduction',
              },
              {
                label: 'Build',
                to: '/docs/Build/GettingStarted/QuickStart',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/bitlayerofficial',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/bitlayer',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/BitLayerLabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@Bitlayer',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bitlayer-org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitlayer`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
