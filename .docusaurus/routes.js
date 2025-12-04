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
    component: ComponentCreator('/docs', 'ec7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4b4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e1a'),
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
                path: '/docs/category/keywords',
                component: ComponentCreator('/docs/category/keywords', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/locators',
                component: ComponentCreator('/docs/category/locators', '68e'),
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
                path: '/docs/category/synchronization',
                component: ComponentCreator('/docs/category/synchronization', 'e07'),
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
                path: '/docs/category/web-elements',
                component: ComponentCreator('/docs/category/web-elements', '4a8'),
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
                path: '/docs/Java/Core Java Concepts/Object and Classes',
                component: ComponentCreator('/docs/Java/Core Java Concepts/Object and Classes', 'dff'),
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
                path: '/docs/Java/Fastrack/OOP1',
                component: ComponentCreator('/docs/Java/Fastrack/OOP1', '946'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Fastrack/OOP2',
                component: ComponentCreator('/docs/Java/Fastrack/OOP2', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Fastrack/OOP3',
                component: ComponentCreator('/docs/Java/Fastrack/OOP3', '557'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Keywords/abstract',
                component: ComponentCreator('/docs/Java/Keywords/abstract', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Keywords/congratulations',
                component: ComponentCreator('/docs/Java/Keywords/congratulations', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/Keywords/Static',
                component: ComponentCreator('/docs/Java/Keywords/Static', 'a51'),
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
                path: '/docs/Java/OOPS/Abstraction',
                component: ComponentCreator('/docs/Java/OOPS/Abstraction', '44c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/Constructor',
                component: ComponentCreator('/docs/Java/OOPS/Constructor', '2a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/Encapsulation',
                component: ComponentCreator('/docs/Java/OOPS/Encapsulation', '321'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/Final , Static Usage',
                component: ComponentCreator('/docs/Java/OOPS/Final , Static Usage', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java/OOPS/Inheritance',
                component: ComponentCreator('/docs/Java/OOPS/Inheritance', 'e20'),
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
                path: '/docs/Java/OOPS/Polymorphism',
                component: ComponentCreator('/docs/Java/OOPS/Polymorphism', '56d'),
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
                path: '/docs/Selenium/Locators/Advanced Locators',
                component: ComponentCreator('/docs/Selenium/Locators/Advanced Locators', '0dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/Common Locators',
                component: ComponentCreator('/docs/Selenium/Locators/Common Locators', '21f'),
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
                path: '/docs/Selenium/Selenium Grid/congratulations',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/congratulations', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/Explicit Wait',
                component: ComponentCreator('/docs/Selenium/Synchronization/Explicit Wait', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/Fluent Wait',
                component: ComponentCreator('/docs/Selenium/Synchronization/Fluent Wait', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/Implicit Wait',
                component: ComponentCreator('/docs/Selenium/Synchronization/Implicit Wait', '469'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/Intoduction',
                component: ComponentCreator('/docs/Selenium/Synchronization/Intoduction', 'bd3'),
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
                path: '/docs/Selenium/Web Elements/Alerts and Popups',
                component: ComponentCreator('/docs/Selenium/Web Elements/Alerts and Popups', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Auto Suggestive Drop Down',
                component: ComponentCreator('/docs/Selenium/Web Elements/Auto Suggestive Drop Down', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Button',
                component: ComponentCreator('/docs/Selenium/Web Elements/Button', 'f9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Check Boxes',
                component: ComponentCreator('/docs/Selenium/Web Elements/Check Boxes', '3d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/File Upload',
                component: ComponentCreator('/docs/Selenium/Web Elements/File Upload', 'fc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/File Upload using Auto IT',
                component: ComponentCreator('/docs/Selenium/Web Elements/File Upload using Auto IT', '50b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/iFrames',
                component: ComponentCreator('/docs/Selenium/Web Elements/iFrames', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Images',
                component: ComponentCreator('/docs/Selenium/Web Elements/Images', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Links',
                component: ComponentCreator('/docs/Selenium/Web Elements/Links', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Multi Select Drop Down',
                component: ComponentCreator('/docs/Selenium/Web Elements/Multi Select Drop Down', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Progress Bar',
                component: ComponentCreator('/docs/Selenium/Web Elements/Progress Bar', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Radio Button',
                component: ComponentCreator('/docs/Selenium/Web Elements/Radio Button', 'fea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Sliders',
                component: ComponentCreator('/docs/Selenium/Web Elements/Sliders', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Static DropDown',
                component: ComponentCreator('/docs/Selenium/Web Elements/Static DropDown', 'f3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Tables',
                component: ComponentCreator('/docs/Selenium/Web Elements/Tables', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Text Box',
                component: ComponentCreator('/docs/Selenium/Web Elements/Text Box', 'e58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Toggle Switch',
                component: ComponentCreator('/docs/Selenium/Web Elements/Toggle Switch', 'bec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/Tool Tips',
                component: ComponentCreator('/docs/Selenium/Web Elements/Tool Tips', 'eb1'),
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
