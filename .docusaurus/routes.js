import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '569'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b17'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c50'),
            routes: [
              {
                path: '/docs/category/collections-framework',
                component: ComponentCreator('/docs/category/collections-framework', 'ac7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-java-concepts',
                component: ComponentCreator('/docs/category/core-java-concepts', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/docusaurus',
                component: ComponentCreator('/docs/category/docusaurus', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/exception-handling',
                component: ComponentCreator('/docs/category/exception-handling', '960'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/git',
                component: ComponentCreator('/docs/category/git', 'f78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/java',
                component: ComponentCreator('/docs/category/java', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/miscellaneous-concepts',
                component: ComponentCreator('/docs/category/miscellaneous-concepts', '1fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/multithreading',
                component: ComponentCreator('/docs/category/multithreading', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/oops',
                component: ComponentCreator('/docs/category/oops', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/python',
                component: ComponentCreator('/docs/category/python', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/selenium',
                component: ComponentCreator('/docs/category/selenium', '321'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/selenium-grid',
                component: ComponentCreator('/docs/category/selenium-grid', 'ca5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/testng',
                component: ComponentCreator('/docs/category/testng', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/congratulations',
                component: ComponentCreator('/docs/Docusaurus/congratulations', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/create-a-blog-post',
                component: ComponentCreator('/docs/Docusaurus/create-a-blog-post', '76a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/create-a-document',
                component: ComponentCreator('/docs/Docusaurus/create-a-document', 'ad7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/create-a-page',
                component: ComponentCreator('/docs/Docusaurus/create-a-page', '9d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/create-oops',
                component: ComponentCreator('/docs/Docusaurus/create-oops', '068'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/deploy-your-site',
                component: ComponentCreator('/docs/Docusaurus/deploy-your-site', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docusaurus/markdown-features',
                component: ComponentCreator('/docs/Docusaurus/markdown-features', 'ef3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git/congratulations',
                component: ComponentCreator('/docs/Git/congratulations', '2f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Collections Framework/congratulations',
                component: ComponentCreator('/docs/Java/Collections Framework/congratulations', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Arrays',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Arrays', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Control-Flow',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Control-Flow', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Data-Types',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Data-Types', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Features of Java',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Features of Java', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Introduction',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Introduction', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Main-Method',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Main-Method', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Operators',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Operators', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Packages',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Packages', '3a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Strings',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Strings', '04f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Type Casting',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Type Casting', '60e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Core Java Concepts/Variables',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Variables', 'c09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Exception Handling/congratulations',
                component: ComponentCreator('/docs/Java/Exception Handling/congratulations', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Miscellaneous Concepts/congratulations',
                component: ComponentCreator('/docs/Java/Miscellaneous Concepts/congratulations', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Multithreading/congratulations',
                component: ComponentCreator('/docs/Java/Multithreading/congratulations', '99e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/Abstract',
                component: ComponentCreator('/docs/Java/OOPS/Abstract', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/congratulations',
                component: ComponentCreator('/docs/Java/OOPS/congratulations', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/Interface',
                component: ComponentCreator('/docs/Java/OOPS/Interface', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Control Flow',
                component: ComponentCreator('/docs/Python/Control Flow', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Data Structures',
                component: ComponentCreator('/docs/Python/Data Structures', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Error Handling',
                component: ComponentCreator('/docs/Python/Error Handling', '4da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/File Handling',
                component: ComponentCreator('/docs/Python/File Handling', '4f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Functions and Scopes',
                component: ComponentCreator('/docs/Python/Functions and Scopes', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Intermediate Python Concepts',
                component: ComponentCreator('/docs/Python/Intermediate Python Concepts', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Modules and Packages',
                component: ComponentCreator('/docs/Python/Modules and Packages', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Object-Oriented Programming',
                component: ComponentCreator('/docs/Python/Object-Oriented Programming', '982'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Operators and Expressions',
                component: ComponentCreator('/docs/Python/Operators and Expressions', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Python Basics',
                component: ComponentCreator('/docs/Python/Python Basics', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Pythonic Features and Best Practices',
                component: ComponentCreator('/docs/Python/Pythonic Features and Best Practices', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Python/Web & API Basics',
                component: ComponentCreator('/docs/Python/Web & API Basics', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium Grid/congratulations',
                component: ComponentCreator('/docs/Selenium Grid/congratulations', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/manage-docs-versions',
                component: ComponentCreator('/docs/Selenium/manage-docs-versions', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/translate-your-site',
                component: ComponentCreator('/docs/Selenium/translate-your-site', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/congratulations',
                component: ComponentCreator('/docs/TestNG/congratulations', '6f3'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
