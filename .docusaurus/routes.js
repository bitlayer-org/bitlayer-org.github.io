
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','651'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/Bitlayer: Amplifying Bitcoin',
    component: ComponentCreator('/blog/Bitlayer: Amplifying Bitcoin','6b2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/hello-bitlayer',
    component: ComponentCreator('/blog/tags/hello-bitlayer','73d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','991'),
    routes: [
      {
        path: '/docs/AboutBitlayer/BitlayerVsEth',
        component: ComponentCreator('/docs/AboutBitlayer/BitlayerVsEth','ffd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/AboutBitlayer/BitVM',
        component: ComponentCreator('/docs/AboutBitlayer/BitVM','0a6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/AboutBitlayer/intro',
        component: ComponentCreator('/docs/AboutBitlayer/intro','322'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/AboutBitlayer/Roadmap',
        component: ComponentCreator('/docs/AboutBitlayer/Roadmap','f7f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/AboutBitlayer/TechnicalArchitecture',
        component: ComponentCreator('/docs/AboutBitlayer/TechnicalArchitecture','bb3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/AboutBitlayer/Use Case',
        component: ComponentCreator('/docs/AboutBitlayer/Use Case','f14'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Bridges',
        component: ComponentCreator('/docs/Build/Bridges','c24'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Compile and Run',
        component: ComponentCreator('/docs/Build/Compile and Run','2f1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Contracts',
        component: ComponentCreator('/docs/Build/Contracts','f97'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Deployment',
        component: ComponentCreator('/docs/Build/Deployment','a85'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Json-RPC',
        component: ComponentCreator('/docs/Build/Json-RPC','564'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Mainnet',
        component: ComponentCreator('/docs/Build/Mainnet','81f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/QuickStart',
        component: ComponentCreator('/docs/Build/QuickStart','e0a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/Testnet',
        component: ComponentCreator('/docs/Build/Testnet','96c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Build/TestnetUserGuide',
        component: ComponentCreator('/docs/Build/TestnetUserGuide','d9e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/category/about-bitlayer',
        component: ComponentCreator('/docs/category/about-bitlayer','8bd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/category/build',
        component: ComponentCreator('/docs/category/build','7cd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/category/faqs',
        component: ComponentCreator('/docs/category/faqs','203'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/category/join-us',
        component: ComponentCreator('/docs/category/join-us','ca4'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/category/overview',
        component: ComponentCreator('/docs/category/overview','9f0'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/category/tools',
        component: ComponentCreator('/docs/category/tools','672'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/FAQs/Frequently asked questions',
        component: ComponentCreator('/docs/FAQs/Frequently asked questions','f1a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Join Us/Contact Details',
        component: ComponentCreator('/docs/Join Us/Contact Details','b88'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Overview/Introduction',
        component: ComponentCreator('/docs/Overview/Introduction','37d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Tools/Block Explorers',
        component: ComponentCreator('/docs/Tools/Block Explorers','6de'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Tools/Faucets',
        component: ComponentCreator('/docs/Tools/Faucets','816'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Tools/TheGraph',
        component: ComponentCreator('/docs/Tools/TheGraph','197'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/Tools/Wallets',
        component: ComponentCreator('/docs/Tools/Wallets','9ce'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
