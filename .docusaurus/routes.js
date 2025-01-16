import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '550'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '6b4'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '16b'),
            routes: [
              {
                path: '/docs/faqs',
                component: ComponentCreator('/docs/faqs', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features',
                component: ComponentCreator('/docs/features', '480'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pricing',
                component: ComponentCreator('/docs/pricing', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product-management',
                component: ComponentCreator('/docs/product-management', '41d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
