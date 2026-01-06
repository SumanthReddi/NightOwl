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
    component: ComponentCreator('/docs', '95a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c4d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '076'),
            routes: [
              {
                path: '/docs/Apache POI/congratulations',
                component: ComponentCreator('/docs/Apache POI/congratulations', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Architecture Basics',
                component: ComponentCreator('/docs/API/API Architecture Basics', '0fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Authentication and Authorization',
                component: ComponentCreator('/docs/API/API Authentication and Authorization', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Automation Using RestAssured',
                component: ComponentCreator('/docs/API/API Automation Using RestAssured', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Database Validation',
                component: ComponentCreator('/docs/API/API Database Validation', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Interview Questions and Scenarios',
                component: ComponentCreator('/docs/API/API Interview Questions and Scenarios', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Introduction',
                component: ComponentCreator('/docs/API/API Introduction', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Request Components',
                component: ComponentCreator('/docs/API/API Request Components', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Testing in CI CD Pipelines',
                component: ComponentCreator('/docs/API/API Testing in CI CD Pipelines', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/API Testing With Postman',
                component: ComponentCreator('/docs/API/API Testing With Postman', 'b75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Common API Automation Mistakes and Anti Patterns',
                component: ComponentCreator('/docs/API/Common API Automation Mistakes and Anti Patterns', 'ae2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/HTTP Methods GET POST',
                component: ComponentCreator('/docs/API/HTTP Methods GET POST', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/HTTP Methods HEAD OPTIONS',
                component: ComponentCreator('/docs/API/HTTP Methods HEAD OPTIONS', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/HTTP Methods PUT PATCH DELETE',
                component: ComponentCreator('/docs/API/HTTP Methods PUT PATCH DELETE', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/HTTP Status Codes',
                component: ComponentCreator('/docs/API/HTTP Status Codes', 'f26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/JSON_Fundamentals_For_API_Testing',
                component: ComponentCreator('/docs/API/JSON_Fundamentals_For_API_Testing', 'e1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/REST API Fundamentals',
                component: ComponentCreator('/docs/API/REST API Fundamentals', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/advanced-concepts',
                component: ComponentCreator('/docs/category/advanced-concepts', 'be2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/apache-poi-️',
                component: ComponentCreator('/docs/category/apache-poi-️', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api-',
                component: ComponentCreator('/docs/category/api-', '167'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/docs/category/cucumber-️',
                component: ComponentCreator('/docs/category/cucumber-️', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/database-',
                component: ComponentCreator('/docs/category/database-', 'a91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/docusaurus-',
                component: ComponentCreator('/docs/category/docusaurus-', '99a'),
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
                path: '/docs/category/git-',
                component: ComponentCreator('/docs/category/git-', 'aa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction',
                component: ComponentCreator('/docs/category/introduction', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/java-',
                component: ComponentCreator('/docs/category/java-', 'dca'),
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
                path: '/docs/category/manual-testing-️',
                component: ComponentCreator('/docs/category/manual-testing-️', 'cc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/maven-',
                component: ComponentCreator('/docs/category/maven-', '770'),
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
                path: '/docs/category/python-',
                component: ComponentCreator('/docs/category/python-', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/realtime-practical-exercises',
                component: ComponentCreator('/docs/category/realtime-practical-exercises', 'aa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/robot-framework-️',
                component: ComponentCreator('/docs/category/robot-framework-️', '20b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/selenium-',
                component: ComponentCreator('/docs/category/selenium-', 'f2d'),
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
                path: '/docs/category/testng-',
                component: ComponentCreator('/docs/category/testng-', '732'),
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
                path: '/docs/congratulations',
                component: ComponentCreator('/docs/congratulations', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/congratulations',
                component: ComponentCreator('/docs/Cucumber/congratulations', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Aggregations',
                component: ComponentCreator('/docs/Database/Aggregations', 'bbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Database Constraints',
                component: ComponentCreator('/docs/Database/Database Constraints', '611'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Database Normalization',
                component: ComponentCreator('/docs/Database/Database Normalization', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Database Schemas',
                component: ComponentCreator('/docs/Database/Database Schemas', '5c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Database Stored Procedures',
                component: ComponentCreator('/docs/Database/Database Stored Procedures', '45a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Database Views',
                component: ComponentCreator('/docs/Database/Database Views', 'eb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Database vs DBMS',
                component: ComponentCreator('/docs/Database/Database vs DBMS', '32a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Date and Timestamp',
                component: ComponentCreator('/docs/Database/Date and Timestamp', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Db Common Errors and Debugging',
                component: ComponentCreator('/docs/Database/Db Common Errors and Debugging', '097'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Interview Readiness',
                component: ComponentCreator('/docs/Database/Interview Readiness', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Introduction',
                component: ComponentCreator('/docs/Database/Introduction', '1c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Joins',
                component: ComponentCreator('/docs/Database/Joins', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Locks and Concurrency',
                component: ComponentCreator('/docs/Database/Locks and Concurrency', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/NULL Handling',
                component: ComponentCreator('/docs/Database/NULL Handling', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Primary and Foreign Key',
                component: ComponentCreator('/docs/Database/Primary and Foreign Key', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SELECT Basics',
                component: ComponentCreator('/docs/Database/SELECT Basics', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SQL Command Types',
                component: ComponentCreator('/docs/Database/SQL Command Types', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SQL DML',
                component: ComponentCreator('/docs/Database/SQL DML', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SQL Indexes and Performance',
                component: ComponentCreator('/docs/Database/SQL Indexes and Performance', 'a88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SQL Introduction',
                component: ComponentCreator('/docs/Database/SQL Introduction', 'a84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SQL Subqueries',
                component: ComponentCreator('/docs/Database/SQL Subqueries', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/SQL Transactions',
                component: ComponentCreator('/docs/Database/SQL Transactions', 'd68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Tables Rows Columns',
                component: ComponentCreator('/docs/Database/Tables Rows Columns', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Types of Databases',
                component: ComponentCreator('/docs/Database/Types of Databases', '7c8'),
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
                path: '/docs/Git/',
                component: ComponentCreator('/docs/Git/', '865'),
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
                path: '/docs/Manual Testing/congratulations',
                component: ComponentCreator('/docs/Manual Testing/congratulations', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Cheat Sheet',
                component: ComponentCreator('/docs/Maven/Cheat Sheet', 'cd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Common Errors & Fixes',
                component: ComponentCreator('/docs/Maven/Common Errors & Fixes', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Dependencies Management',
                component: ComponentCreator('/docs/Maven/Dependencies Management', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Introduction to Maven',
                component: ComponentCreator('/docs/Maven/Introduction to Maven', 'eac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Maven + CICD',
                component: ComponentCreator('/docs/Maven/Maven + CICD', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Maven Lifecycle & Phases',
                component: ComponentCreator('/docs/Maven/Maven Lifecycle & Phases', '5d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Maven Project Structure',
                component: ComponentCreator('/docs/Maven/Maven Project Structure', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Plugins',
                component: ComponentCreator('/docs/Maven/Plugins', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/pom.xml',
                component: ComponentCreator('/docs/Maven/pom.xml', 'fd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Profiles',
                component: ComponentCreator('/docs/Maven/Profiles', '6e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Running TestNG with Maven',
                component: ComponentCreator('/docs/Maven/Running TestNG with Maven', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Maven/Why Maven',
                component: ComponentCreator('/docs/Maven/Why Maven', 'a7b'),
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
                path: '/docs/Robot Framework/congratulations',
                component: ComponentCreator('/docs/Robot Framework/congratulations', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Action Class',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Action Class', '042'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Cookies',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Cookies', 'f01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Driver Options',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Driver Options', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Fetch Dimensions of WebElement',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Fetch Dimensions of WebElement', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Frames',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Frames', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Java Script Executor',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Java Script Executor', '44b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Multiple Window Handles',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Multiple Window Handles', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Screenshots',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Screenshots', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/Window Handle',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/Window Handle', 'bbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Introduction/',
                component: ComponentCreator('/docs/Selenium/Introduction/', '06d'),
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
                path: '/docs/Selenium/Locators/Relative Locators',
                component: ComponentCreator('/docs/Selenium/Locators/Relative Locators', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Realtime Practical Exercises/Broken Links',
                component: ComponentCreator('/docs/Selenium/Realtime Practical Exercises/Broken Links', '0fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Realtime Practical Exercises/Links',
                component: ComponentCreator('/docs/Selenium/Realtime Practical Exercises/Links', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/Grid in CICD',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/Grid in CICD', '52d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/Grid with Docker',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/Grid with Docker', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/Introduction',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/Introduction', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/Setup Guide',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/Setup Guide', '6d8'),
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
                path: '/docs/TestNG/Annotations & Execution Flow',
                component: ComponentCreator('/docs/TestNG/Annotations & Execution Flow', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Data Provider',
                component: ComponentCreator('/docs/TestNG/Data Provider', '94a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Dependencies',
                component: ComponentCreator('/docs/TestNG/Dependencies', '5e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Groups',
                component: ComponentCreator('/docs/TestNG/Groups', '9e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Helper Attributes',
                component: ComponentCreator('/docs/TestNG/Helper Attributes', 'bb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Introduction',
                component: ComponentCreator('/docs/TestNG/Introduction', 'c13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Listeners and RetryAnalyzer',
                component: ComponentCreator('/docs/TestNG/Listeners and RetryAnalyzer', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Parallel Exection',
                component: ComponentCreator('/docs/TestNG/Parallel Exection', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Priority',
                component: ComponentCreator('/docs/TestNG/Priority', '23f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/TestNG Assertions',
                component: ComponentCreator('/docs/TestNG/TestNG Assertions', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/TestNG Factory',
                component: ComponentCreator('/docs/TestNG/TestNG Factory', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/TestNG Parameters',
                component: ComponentCreator('/docs/TestNG/TestNG Parameters', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/TestNG XML',
                component: ComponentCreator('/docs/TestNG/TestNG XML', 'f10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/TestNG/Why TestNG',
                component: ComponentCreator('/docs/TestNG/Why TestNG', '1d1'),
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
