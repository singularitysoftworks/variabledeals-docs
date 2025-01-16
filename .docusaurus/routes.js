import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '8ca'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'eeb'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a18'),
            routes: [
              {
                path: '/faqs',
                component: ComponentCreator('/faqs', '402'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/features',
                component: ComponentCreator('/features', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pricing',
                component: ComponentCreator('/pricing', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/product-management',
                component: ComponentCreator('/product-management', '0c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
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
