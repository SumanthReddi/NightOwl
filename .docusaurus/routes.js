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
    component: ComponentCreator('/docs', '59c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '78a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f7e'),
            routes: [
              {
                path: '/docs/Agile/',
                component: ComponentCreator('/docs/Agile/', 'fc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Agile/Agile Process',
                component: ComponentCreator('/docs/Agile/Agile Process', 'bd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Agile/Agile Team Roles',
                component: ComponentCreator('/docs/Agile/Agile Team Roles', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Apache POI Fundamentals',
                component: ComponentCreator('/docs/Apache POI/Apache POI Fundamentals', '343'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Cell Types and Data Stability',
                component: ComponentCreator('/docs/Apache POI/Cell Types and Data Stability', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Cell',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Cell', 'ec8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Null Handling Strategy',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Null Handling Strategy', '0db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Object Model and Indexing',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Object Model and Indexing', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Row',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Row', '537'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Sheet',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Sheet', '896'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Workbook',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Workbook', 'c1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Data Driven Automation Patterns',
                component: ComponentCreator('/docs/Apache POI/Data Driven Automation Patterns', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Excel Based Reporting and Formatting',
                component: ComponentCreator('/docs/Apache POI/Excel Based Reporting and Formatting', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Performance Large Files and SXSSF',
                component: ComponentCreator('/docs/Apache POI/Performance Large Files and SXSSF', '21d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Project Setup and Maven POI',
                component: ComponentCreator('/docs/Apache POI/Project Setup and Maven POI', '8d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Reading Excel for Selenium',
                component: ComponentCreator('/docs/Apache POI/Reading Excel for Selenium', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Updating Existing Excel and Execution Control',
                component: ComponentCreator('/docs/Apache POI/Updating Existing Excel and Execution Control', 'eca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Writing Results Back to Excel',
                component: ComponentCreator('/docs/Apache POI/Writing Results Back to Excel', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/async-event-driven/async-api-testing',
                component: ComponentCreator('/docs/API/Advanced/async-event-driven/async-api-testing', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/Contract Schema/contract-testing',
                component: ComponentCreator('/docs/API/Advanced/Contract Schema/contract-testing', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/Contract Schema/schema-evolution',
                component: ComponentCreator('/docs/API/Advanced/Contract Schema/schema-evolution', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/environment-data/test-data-management',
                component: ComponentCreator('/docs/API/Advanced/environment-data/test-data-management', '53a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/environment-data/test-environment-strategy',
                component: ComponentCreator('/docs/API/Advanced/environment-data/test-environment-strategy', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/flakiness-maintainability/flakiness-framework',
                component: ComponentCreator('/docs/API/Advanced/flakiness-maintainability/flakiness-framework', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/Observability Reliability/idempotency-api-testing',
                component: ComponentCreator('/docs/API/Advanced/Observability Reliability/idempotency-api-testing', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Advanced/Observability Reliability/observability-api-testing',
                component: ComponentCreator('/docs/API/Advanced/Observability Reliability/observability-api-testing', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Basics/API Architecture Basics',
                component: ComponentCreator('/docs/API/Fundamentals/Basics/API Architecture Basics', '7cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Basics/API Introduction',
                component: ComponentCreator('/docs/API/Fundamentals/Basics/API Introduction', '6bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Best Practices/API Interview Questions and Scenarios',
                component: ComponentCreator('/docs/API/Fundamentals/Best Practices/API Interview Questions and Scenarios', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Best Practices/Common API Automation Mistakes and Anti Patterns',
                component: ComponentCreator('/docs/API/Fundamentals/Best Practices/Common API Automation Mistakes and Anti Patterns', '6f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/HTTP Essentials/HTTP Methods GET POST',
                component: ComponentCreator('/docs/API/Fundamentals/HTTP Essentials/HTTP Methods GET POST', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/HTTP Essentials/HTTP Methods HEAD OPTIONS',
                component: ComponentCreator('/docs/API/Fundamentals/HTTP Essentials/HTTP Methods HEAD OPTIONS', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/HTTP Essentials/HTTP Methods PUT PATCH DELETE',
                component: ComponentCreator('/docs/API/Fundamentals/HTTP Essentials/HTTP Methods PUT PATCH DELETE', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/HTTP Essentials/HTTP Status Codes',
                component: ComponentCreator('/docs/API/Fundamentals/HTTP Essentials/HTTP Status Codes', 'cc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/HTTP Essentials/REST API Fundamentals',
                component: ComponentCreator('/docs/API/Fundamentals/HTTP Essentials/REST API Fundamentals', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Integration Validation/API Database Validation',
                component: ComponentCreator('/docs/API/Fundamentals/Integration Validation/API Database Validation', 'ad7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Integration Validation/API Testing in CI CD Pipelines',
                component: ComponentCreator('/docs/API/Fundamentals/Integration Validation/API Testing in CI CD Pipelines', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Request Response/API Request Components',
                component: ComponentCreator('/docs/API/Fundamentals/Request Response/API Request Components', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Request Response/JSON_Fundamentals_For_API_Testing',
                component: ComponentCreator('/docs/API/Fundamentals/Request Response/JSON_Fundamentals_For_API_Testing', '7c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Security Auth/API Authentication and Authorization',
                component: ComponentCreator('/docs/API/Fundamentals/Security Auth/API Authentication and Authorization', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Tools & Frameworks/API Automation Using RestAssured',
                component: ComponentCreator('/docs/API/Fundamentals/Tools & Frameworks/API Automation Using RestAssured', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/API/Fundamentals/Tools & Frameworks/API Testing With Postman',
                component: ComponentCreator('/docs/API/Fundamentals/Tools & Frameworks/API Testing With Postman', '663'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/advanced',
                component: ComponentCreator('/docs/category/advanced', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/advanced-1',
                component: ComponentCreator('/docs/category/advanced-1', 'b98'),
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
                path: '/docs/category/advanced-topics',
                component: ComponentCreator('/docs/category/advanced-topics', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/advanced-topics-1',
                component: ComponentCreator('/docs/category/advanced-topics-1', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/agents--scaling',
                component: ComponentCreator('/docs/category/agents--scaling', 'c63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/agile',
                component: ComponentCreator('/docs/category/agile', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/apache-poi',
                component: ComponentCreator('/docs/category/apache-poi', '312'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api',
                component: ComponentCreator('/docs/category/api', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/architecture',
                component: ComponentCreator('/docs/category/architecture', '6d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/artifacts--workspace',
                component: ComponentCreator('/docs/category/artifacts--workspace', '365'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/async--event-driven',
                component: ComponentCreator('/docs/category/async--event-driven', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/authentication-and-validation',
                component: ComponentCreator('/docs/category/authentication-and-validation', 'e9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/basics',
                component: ComponentCreator('/docs/category/basics', '31a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/best-practices',
                component: ComponentCreator('/docs/category/best-practices', '1ba'),
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
                path: '/docs/category/contract-schema',
                component: ComponentCreator('/docs/category/contract-schema', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/controller-operations--maintenance',
                component: ComponentCreator('/docs/category/controller-operations--maintenance', '9e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-apache-poi-object-model',
                component: ComponentCreator('/docs/category/core-apache-poi-object-model', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-interfaces',
                component: ComponentCreator('/docs/category/core-interfaces', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-mechanics',
                component: ComponentCreator('/docs/category/core-mechanics', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-sql',
                component: ComponentCreator('/docs/category/core-sql', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/credentials--secrets-management',
                component: ComponentCreator('/docs/category/credentials--secrets-management', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/cucumber',
                component: ComponentCreator('/docs/category/cucumber', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/data-integration',
                component: ComponentCreator('/docs/category/data-integration', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/database',
                component: ComponentCreator('/docs/category/database', 'dd4'),
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
                path: '/docs/category/environment-data',
                component: ComponentCreator('/docs/category/environment-data', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/essentials',
                component: ComponentCreator('/docs/category/essentials', 'bbd'),
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
                path: '/docs/category/execution',
                component: ComponentCreator('/docs/category/execution', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/execution--integration',
                component: ComponentCreator('/docs/category/execution--integration', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/execution-and-advanced-concepts',
                component: ComponentCreator('/docs/category/execution-and-advanced-concepts', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/extent-report',
                component: ComponentCreator('/docs/category/extent-report', 'a5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/file-handling',
                component: ComponentCreator('/docs/category/file-handling', 'c53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/flakiness--maintainability',
                component: ComponentCreator('/docs/category/flakiness--maintainability', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/flow-control',
                component: ComponentCreator('/docs/category/flow-control', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/foundational-advanced-concepts',
                component: ComponentCreator('/docs/category/foundational-advanced-concepts', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/foundations',
                component: ComponentCreator('/docs/category/foundations', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/foundations-1',
                component: ComponentCreator('/docs/category/foundations-1', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/framework-design',
                component: ComponentCreator('/docs/category/framework-design', '170'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/framework-design-1',
                component: ComponentCreator('/docs/category/framework-design-1', 'c7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fundamentals',
                component: ComponentCreator('/docs/category/fundamentals', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fundamentals-1',
                component: ComponentCreator('/docs/category/fundamentals-1', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fundamentals-2',
                component: ComponentCreator('/docs/category/fundamentals-2', '7b3'),
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
                path: '/docs/category/http-essentials',
                component: ComponentCreator('/docs/category/http-essentials', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/installation--setup',
                component: ComponentCreator('/docs/category/installation--setup', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/integration-validation',
                component: ComponentCreator('/docs/category/integration-validation', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/intermediate',
                component: ComponentCreator('/docs/category/intermediate', 'd33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/interview--real-world-scenarios',
                component: ComponentCreator('/docs/category/interview--real-world-scenarios', 'e4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/interview-questions',
                component: ComponentCreator('/docs/category/interview-questions', 'abe'),
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
                path: '/docs/category/introduction-1',
                component: ComponentCreator('/docs/category/introduction-1', 'd27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction-2',
                component: ComponentCreator('/docs/category/introduction-2', 'a98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/java-for-automation-testers',
                component: ComponentCreator('/docs/category/java-for-automation-testers', 'f92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/java8-features',
                component: ComponentCreator('/docs/category/java8-features', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jenkins',
                component: ComponentCreator('/docs/category/jenkins', '294'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jenkins-at-enterprise-scale',
                component: ComponentCreator('/docs/category/jenkins-at-enterprise-scale', '890'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jenkins-security-hardening',
                component: ComponentCreator('/docs/category/jenkins-security-hardening', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jobs--pipelines',
                component: ComponentCreator('/docs/category/jobs--pipelines', '920'),
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
                path: '/docs/category/list-implementations',
                component: ComponentCreator('/docs/category/list-implementations', 'd1f'),
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
                path: '/docs/category/manual-testing',
                component: ComponentCreator('/docs/category/manual-testing', 'b24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/map-implementations',
                component: ComponentCreator('/docs/category/map-implementations', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/maven',
                component: ComponentCreator('/docs/category/maven', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/miscellaneous-topics',
                component: ComponentCreator('/docs/category/miscellaneous-topics', '83b'),
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
                path: '/docs/category/observability',
                component: ComponentCreator('/docs/category/observability', '567'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/observability--reliability',
                component: ComponentCreator('/docs/category/observability--reliability', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/observability-and-reporting',
                component: ComponentCreator('/docs/category/observability-and-reporting', '5b4'),
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
                path: '/docs/category/operational-excellence',
                component: ComponentCreator('/docs/category/operational-excellence', '05b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/pipeline-internals',
                component: ComponentCreator('/docs/category/pipeline-internals', 'd72'),
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
                path: '/docs/category/queue-implementations',
                component: ComponentCreator('/docs/category/queue-implementations', '87e'),
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
                path: '/docs/category/reliability',
                component: ComponentCreator('/docs/category/reliability', '7f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/request-and-response-handling',
                component: ComponentCreator('/docs/category/request-and-response-handling', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/rest-assured',
                component: ComponentCreator('/docs/category/rest-assured', '939'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/rest-assured-basics',
                component: ComponentCreator('/docs/category/rest-assured-basics', '426'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/robot-framework',
                component: ComponentCreator('/docs/category/robot-framework', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/scm-integration',
                component: ComponentCreator('/docs/category/scm-integration', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/security--auth',
                component: ComponentCreator('/docs/category/security--auth', '540'),
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
                path: '/docs/category/selenium-java',
                component: ComponentCreator('/docs/category/selenium-java', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/set-implementations',
                component: ComponentCreator('/docs/category/set-implementations', '037'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/shared-libraries',
                component: ComponentCreator('/docs/category/shared-libraries', '13b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/standalone-java',
                component: ComponentCreator('/docs/category/standalone-java', '175'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/strings',
                component: ComponentCreator('/docs/category/strings', '7a6'),
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
                path: '/docs/category/system',
                component: ComponentCreator('/docs/category/system', '29b'),
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
                path: '/docs/category/tools--frameworks',
                component: ComponentCreator('/docs/category/tools--frameworks', '308'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/troubleshooting',
                component: ComponentCreator('/docs/category/troubleshooting', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/utilities',
                component: ComponentCreator('/docs/category/utilities', '4fb'),
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
                path: '/docs/Cucumber/Core Mechanics/Data Tables and Examples',
                component: ComponentCreator('/docs/Cucumber/Core Mechanics/Data Tables and Examples', '93e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Core Mechanics/Hooks Before After and Best Practices',
                component: ComponentCreator('/docs/Cucumber/Core Mechanics/Hooks Before After and Best Practices', '149'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Core Mechanics/Parameterization and Data Mapping in Step Definitions',
                component: ComponentCreator('/docs/Cucumber/Core Mechanics/Parameterization and Data Mapping in Step Definitions', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Core Mechanics/Shared State and Scenario Context',
                component: ComponentCreator('/docs/Cucumber/Core Mechanics/Shared State and Scenario Context', '6f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Core Mechanics/Step Definition Basics',
                component: ComponentCreator('/docs/Cucumber/Core Mechanics/Step Definition Basics', '6e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Core Mechanics/Tags and Tag Expressions',
                component: ComponentCreator('/docs/Cucumber/Core Mechanics/Tags and Tag Expressions', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/Cucumber with API Automation Rest Assured Patterns',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/Cucumber with API Automation Rest Assured Patterns', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/Cucumber with Selenium UI Automation Patterns',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/Cucumber with Selenium UI Automation Patterns', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/Cucumber with TestNG Integration',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/Cucumber with TestNG Integration', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/cucumber-across-languages',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/cucumber-across-languages', '6a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/debugging-cucumber-tests',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/debugging-cucumber-tests', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/Parallel Execution in Cucumber',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/Parallel Execution in Cucumber', '95d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Execution & Integration/Runner Class and Cucumber Options',
                component: ComponentCreator('/docs/Cucumber/Execution & Integration/Runner Class and Cucumber Options', 'afc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Foundations/from-user-stories-to-feature-files',
                component: ComponentCreator('/docs/Cucumber/Foundations/from-user-stories-to-feature-files', '82f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Foundations/Gherkin Language Basics',
                component: ComponentCreator('/docs/Cucumber/Foundations/Gherkin Language Basics', '4bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Foundations/Introduction',
                component: ComponentCreator('/docs/Cucumber/Foundations/Introduction', '832'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Foundations/What is BDD',
                component: ComponentCreator('/docs/Cucumber/Foundations/What is BDD', '2b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Foundations/Writing Good Gherkin Scenarios',
                component: ComponentCreator('/docs/Cucumber/Foundations/Writing Good Gherkin Scenarios', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Operational Excellence/Common Cucumber Framework Anti Patterns',
                component: ComponentCreator('/docs/Cucumber/Operational Excellence/Common Cucumber Framework Anti Patterns', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Operational Excellence/Cucumber Architecture Overview',
                component: ComponentCreator('/docs/Cucumber/Operational Excellence/Cucumber Architecture Overview', '719'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Operational Excellence/Cucumber in CI CD Pipelines',
                component: ComponentCreator('/docs/Cucumber/Operational Excellence/Cucumber in CI CD Pipelines', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Operational Excellence/Error Handling Retries and Flaky Test Control',
                component: ComponentCreator('/docs/Cucumber/Operational Excellence/Error Handling Retries and Flaky Test Control', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Operational Excellence/handling-secrets-sensitive-data',
                component: ComponentCreator('/docs/Cucumber/Operational Excellence/handling-secrets-sensitive-data', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Operational Excellence/Reporting and Plugins',
                component: ComponentCreator('/docs/Cucumber/Operational Excellence/Reporting and Plugins', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Core SQL/Aggregations & Dates',
                component: ComponentCreator('/docs/Database/Core SQL/Aggregations & Dates', '6ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Core SQL/Joins',
                component: ComponentCreator('/docs/Database/Core SQL/Joins', '82e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Core SQL/SELECT & NULL',
                component: ComponentCreator('/docs/Database/Core SQL/SELECT & NULL', 'c7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Core SQL/SQL Basics',
                component: ComponentCreator('/docs/Database/Core SQL/SQL Basics', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Core SQL/SQL DML',
                component: ComponentCreator('/docs/Database/Core SQL/SQL DML', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Core SQL/SQL Subqueries',
                component: ComponentCreator('/docs/Database/Core SQL/SQL Subqueries', 'eed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Fundamentals/Database Normalization',
                component: ComponentCreator('/docs/Database/Fundamentals/Database Normalization', '8da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Fundamentals/Introduction',
                component: ComponentCreator('/docs/Database/Fundamentals/Introduction', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Fundamentals/Keys & Constraints',
                component: ComponentCreator('/docs/Database/Fundamentals/Keys & Constraints', '388'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Fundamentals/Tables & Schema',
                component: ComponentCreator('/docs/Database/Fundamentals/Tables & Schema', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/System/Locks and Concurrency',
                component: ComponentCreator('/docs/Database/System/Locks and Concurrency', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/System/SQL Indexes and Performance',
                component: ComponentCreator('/docs/Database/System/SQL Indexes and Performance', 'f1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/System/SQL Transactions',
                component: ComponentCreator('/docs/Database/System/SQL Transactions', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/System/Views & Procedures.md',
                component: ComponentCreator('/docs/Database/System/Views & Procedures.md', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Troubleshooting/Db Common Errors and Debugging',
                component: ComponentCreator('/docs/Database/Troubleshooting/Db Common Errors and Debugging', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Database/Troubleshooting/Interview Readiness',
                component: ComponentCreator('/docs/Database/Troubleshooting/Interview Readiness', 'e84'),
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
                path: '/docs/Extent Report/advanced_configuration_and_customization',
                component: ComponentCreator('/docs/Extent Report/advanced_configuration_and_customization', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/ci_cd_integration',
                component: ComponentCreator('/docs/Extent Report/ci_cd_integration', '001'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/common_mistakes_and_anti_patterns',
                component: ComponentCreator('/docs/Extent Report/common_mistakes_and_anti_patterns', 'b5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/creenshots_and_media_handling',
                component: ComponentCreator('/docs/Extent Report/creenshots_and_media_handling', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/cucumber_bdd_integration',
                component: ComponentCreator('/docs/Extent Report/cucumber_bdd_integration', '61c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/framework_level_integration',
                component: ComponentCreator('/docs/Extent Report/framework_level_integration', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/fundamentals_and_architecture',
                component: ComponentCreator('/docs/Extent Report/fundamentals_and_architecture', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/logging_and_status_handling',
                component: ComponentCreator('/docs/Extent Report/logging_and_status_handling', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/roadmap_overview',
                component: ComponentCreator('/docs/Extent Report/roadmap_overview', 'bc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/setup_and_basic_configuration',
                component: ComponentCreator('/docs/Extent Report/setup_and_basic_configuration', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/test_ng_listener_integration',
                component: ComponentCreator('/docs/Extent Report/test_ng_listener_integration', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/thread_safety_and_parallel_execution',
                component: ComponentCreator('/docs/Extent Report/thread_safety_and_parallel_execution', 'a01'),
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
                path: '/docs/Java For Automation Testers/build-tools-and-logging-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/build-tools-and-logging-for-automation', 'fde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/collections-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/collections-for-automation', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/concurrency-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/concurrency-for-automation', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/core-apis-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/core-apis-for-automation', '5aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/design-patterns-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/design-patterns-for-automation', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/exception-handling-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/exception-handling-for-automation', 'b45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/file-io-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/file-io-for-automation', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/generics-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/generics-for-automation', '330'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/java-basics-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/java-basics-for-automation', 'd51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/java8-features-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/java8-features-for-automation', 'cc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/jdbc-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/jdbc-for-automation', 'a0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/jvm-basics-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/jvm-basics-for-automation', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/oop-for-automation-testing',
                component: ComponentCreator('/docs/Java For Automation Testers/oop-for-automation-testing', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/reflection-and-annotations-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/reflection-and-annotations-for-automation', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Java For Automation Testers/testing-framework-internals-for-automation',
                component: ComponentCreator('/docs/Java For Automation Testers/testing-framework-internals-for-automation', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/agents-scaling-overview',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/agents-scaling-overview', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/docker-agents',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/docker-agents', 'dcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/ephemeral-cloud-agents',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/ephemeral-cloud-agents', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/executors-deep-dive',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/executors-deep-dive', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/kubernetes-agents',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/kubernetes-agents', 'cf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/scaling-strategies-cost-control',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/scaling-strategies-cost-control', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Agents & Scaling/static-agents-and-labels',
                component: ComponentCreator('/docs/Jenkins/Agents & Scaling/static-agents-and-labels', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/agent',
                component: ComponentCreator('/docs/Jenkins/Architecture/agent', 'fc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/controller',
                component: ComponentCreator('/docs/Jenkins/Architecture/controller', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/execution-flow',
                component: ComponentCreator('/docs/Jenkins/Architecture/execution-flow', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/executors',
                component: ComponentCreator('/docs/Jenkins/Architecture/executors', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/master-slave-architecture',
                component: ComponentCreator('/docs/Jenkins/Architecture/master-slave-architecture', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/overview',
                component: ComponentCreator('/docs/Jenkins/Architecture/overview', '38e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Architecture/workspace-and-queue',
                component: ComponentCreator('/docs/Jenkins/Architecture/workspace-and-queue', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Artifacts & Workspace/archive-artifacts',
                component: ComponentCreator('/docs/Jenkins/Artifacts & Workspace/archive-artifacts', 'a29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Artifacts & Workspace/artifacts-overview',
                component: ComponentCreator('/docs/Jenkins/Artifacts & Workspace/artifacts-overview', '899'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Artifacts & Workspace/copy-artifacts',
                component: ComponentCreator('/docs/Jenkins/Artifacts & Workspace/copy-artifacts', 'ece'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Artifacts & Workspace/fingerprints',
                component: ComponentCreator('/docs/Jenkins/Artifacts & Workspace/fingerprints', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Artifacts & Workspace/stash-unstash',
                component: ComponentCreator('/docs/Jenkins/Artifacts & Workspace/stash-unstash', '055'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/backup-strategy',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/backup-strategy', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/controller-ops-overview',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/controller-ops-overview', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/controller-performance-tuning',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/controller-performance-tuning', 'd67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/controller-upgrade-strategy',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/controller-upgrade-strategy', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/disaster-recovery',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/disaster-recovery', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/plugin-upgrade-management',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/plugin-upgrade-management', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/restore-procedures',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/restore-procedures', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Controller Operations & Maintenance/stability-capacity-planning',
                component: ComponentCreator('/docs/Jenkins/Controller Operations & Maintenance/stability-capacity-planning', '183'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Credentials & Secrets Management/common-mistakes',
                component: ComponentCreator('/docs/Jenkins/Credentials & Secrets Management/common-mistakes', '2dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Credentials & Secrets Management/credentials-binding',
                component: ComponentCreator('/docs/Jenkins/Credentials & Secrets Management/credentials-binding', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Credentials & Secrets Management/credentials-overview',
                component: ComponentCreator('/docs/Jenkins/Credentials & Secrets Management/credentials-overview', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Credentials & Secrets Management/credentials-types',
                component: ComponentCreator('/docs/Jenkins/Credentials & Secrets Management/credentials-types', 'b11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Credentials & Secrets Management/withcredentials',
                component: ComponentCreator('/docs/Jenkins/Credentials & Secrets Management/withcredentials', '746'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Installation & Setup/docker-installation',
                component: ComponentCreator('/docs/Jenkins/Installation & Setup/docker-installation', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Installation & Setup/initial-setup',
                component: ComponentCreator('/docs/Jenkins/Installation & Setup/initial-setup', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Installation & Setup/installation-overview',
                component: ComponentCreator('/docs/Jenkins/Installation & Setup/installation-overview', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Installation & Setup/local-installation',
                component: ComponentCreator('/docs/Jenkins/Installation & Setup/local-installation', '5d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Installation & Setup/plugin-strategy',
                component: ComponentCreator('/docs/Jenkins/Installation & Setup/plugin-strategy', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/architecture-decision-discussions',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/architecture-decision-discussions', 'd7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/interview-overview',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/interview-overview', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/jenkins-outage-scenarios',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/jenkins-outage-scenarios', '6ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/migration-case-studies',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/migration-case-studies', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/scaling-failure-scenarios',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/scaling-failure-scenarios', 'b08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/security-incident-scenarios',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/security-incident-scenarios', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Interview & Real-World Scenarios/upgrade-failure-scenarios',
                component: ComponentCreator('/docs/Jenkins/Interview & Real-World Scenarios/upgrade-failure-scenarios', 'c49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/ci-cd-standardization',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/ci-cd-standardization', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/common-enterprise-anti-patterns',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/common-enterprise-anti-patterns', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/enterprise-overview',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/enterprise-overview', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/governance-models',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/governance-models', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/multi-controller-architecture',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/multi-controller-architecture', 'a2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/shared-vs-dedicated-controllers',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/shared-vs-dedicated-controllers', '8ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins at Enterprise Scale/team-isolation-strategies',
                component: ComponentCreator('/docs/Jenkins/Jenkins at Enterprise Scale/team-isolation-strategies', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/agent-security-isolation',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/agent-security-isolation', 'be2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/auditing-monitoring',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/auditing-monitoring', '23a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/authentication-authorization',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/authentication-authorization', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/controller-hardening',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/controller-hardening', 'e27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/network-ingress-security',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/network-ingress-security', '73c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/plugin-security',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/plugin-security', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/rbac',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/rbac', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jenkins Security Hardening/security-hardening-overview',
                component: ComponentCreator('/docs/Jenkins/Jenkins Security Hardening/security-hardening-overview', '899'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jobs & Pipelines/configuration-layers',
                component: ComponentCreator('/docs/Jenkins/Jobs & Pipelines/configuration-layers', 'da5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jobs & Pipelines/freestyle-job',
                component: ComponentCreator('/docs/Jenkins/Jobs & Pipelines/freestyle-job', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jobs & Pipelines/jobs-overview',
                component: ComponentCreator('/docs/Jenkins/Jobs & Pipelines/jobs-overview', '75d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jobs & Pipelines/multibranch-pipeline',
                component: ComponentCreator('/docs/Jenkins/Jobs & Pipelines/multibranch-pipeline', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Jobs & Pipelines/pipeline-job',
                component: ComponentCreator('/docs/Jenkins/Jobs & Pipelines/pipeline-job', '9f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Observability/alerts-thresholds',
                component: ComponentCreator('/docs/Jenkins/Observability/alerts-thresholds', '5bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Observability/build-performance-analysis',
                component: ComponentCreator('/docs/Jenkins/Observability/build-performance-analysis', '7c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Observability/capacity-planning-with-metrics',
                component: ComponentCreator('/docs/Jenkins/Observability/capacity-planning-with-metrics', 'e9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Observability/logging-strategy',
                component: ComponentCreator('/docs/Jenkins/Observability/logging-strategy', '6d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Observability/metrics-monitoring',
                component: ComponentCreator('/docs/Jenkins/Observability/metrics-monitoring', '32e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Observability/observability-overview',
                component: ComponentCreator('/docs/Jenkins/Observability/observability-overview', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/agent-directive',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/agent-directive', 'fc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/declarative-vs-scripted',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/declarative-vs-scripted', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/environment-and-tools',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/environment-and-tools', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/Flow Control/flow-control-overview',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/Flow Control/flow-control-overview', 'fbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/Flow Control/input-step',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/Flow Control/input-step', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/Flow Control/options-directive',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/Flow Control/options-directive', 'a1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/Flow Control/parameters',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/Flow Control/parameters', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/Flow Control/timeouts-and-retries',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/Flow Control/timeouts-and-retries', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/Flow Control/when-conditions',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/Flow Control/when-conditions', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/jenkinsfile-structure',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/jenkinsfile-structure', 'cb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/pipeline-overview',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/pipeline-overview', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Pipeline Internals/stages-and-steps',
                component: ComponentCreator('/docs/Jenkins/Pipeline Internals/stages-and-steps', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/SCM Integration/branch-filtering-pr-discovery',
                component: ComponentCreator('/docs/Jenkins/SCM Integration/branch-filtering-pr-discovery', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/SCM Integration/git-credentials',
                component: ComponentCreator('/docs/Jenkins/SCM Integration/git-credentials', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/SCM Integration/multibranch-scm-behavior',
                component: ComponentCreator('/docs/Jenkins/SCM Integration/multibranch-scm-behavior', 'c53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/SCM Integration/polling-and-scan-schedules',
                component: ComponentCreator('/docs/Jenkins/SCM Integration/polling-and-scan-schedules', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/SCM Integration/scm-overview',
                component: ComponentCreator('/docs/Jenkins/SCM Integration/scm-overview', 'e8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/SCM Integration/webhooks-and-triggers',
                component: ComponentCreator('/docs/Jenkins/SCM Integration/webhooks-and-triggers', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Shared Libraries/shared-libraries-overview',
                component: ComponentCreator('/docs/Jenkins/Shared Libraries/shared-libraries-overview', '5b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Shared Libraries/shared-library-structure',
                component: ComponentCreator('/docs/Jenkins/Shared Libraries/shared-library-structure', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Shared Libraries/shared-library-versioning-governance',
                component: ComponentCreator('/docs/Jenkins/Shared Libraries/shared-library-versioning-governance', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Shared Libraries/src-groovy-classes',
                component: ComponentCreator('/docs/Jenkins/Shared Libraries/src-groovy-classes', '63f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Jenkins/Shared Libraries/vars-reusable-steps',
                component: ComponentCreator('/docs/Jenkins/Shared Libraries/vars-reusable-steps', '5bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Advanced/Advanced Testing Techniques',
                component: ComponentCreator('/docs/Manual Testing/Advanced/Advanced Testing Techniques', '243'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Advanced/Best Practices',
                component: ComponentCreator('/docs/Manual Testing/Advanced/Best Practices', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Advanced/Manual Testing Interview Questions',
                component: ComponentCreator('/docs/Manual Testing/Advanced/Manual Testing Interview Questions', '02c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Advanced/Tools for Manual Testing',
                component: ComponentCreator('/docs/Manual Testing/Advanced/Tools for Manual Testing', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Advanced/Transition to Automation Testing',
                component: ComponentCreator('/docs/Manual Testing/Advanced/Transition to Automation Testing', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/defect-management',
                component: ComponentCreator('/docs/Manual Testing/Essentials/defect-management', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/Introduction to Software Testing',
                component: ComponentCreator('/docs/Manual Testing/Essentials/Introduction to Software Testing', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/Manual Testing Types',
                component: ComponentCreator('/docs/Manual Testing/Essentials/Manual Testing Types', '731'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/SDLC Software Development Life Cycle',
                component: ComponentCreator('/docs/Manual Testing/Essentials/SDLC Software Development Life Cycle', 'efe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/Severity vs Priority',
                component: ComponentCreator('/docs/Manual Testing/Essentials/Severity vs Priority', '837'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/STLC Software Testing Life Cycle',
                component: ComponentCreator('/docs/Manual Testing/Essentials/STLC Software Testing Life Cycle', '00f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Essentials/test-case-design',
                component: ComponentCreator('/docs/Manual Testing/Essentials/test-case-design', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Intermediate/Cross Browser Testing',
                component: ComponentCreator('/docs/Manual Testing/Intermediate/Cross Browser Testing', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Intermediate/Exploratory Testing',
                component: ComponentCreator('/docs/Manual Testing/Intermediate/Exploratory Testing', '42e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Intermediate/regression-testing',
                component: ComponentCreator('/docs/Manual Testing/Intermediate/regression-testing', 'f3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Intermediate/testing-techniques',
                component: ComponentCreator('/docs/Manual Testing/Intermediate/testing-techniques', 'a23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Intermediate/usability-and-user-experience-testing',
                component: ComponentCreator('/docs/Manual Testing/Intermediate/usability-and-user-experience-testing', 'cd0'),
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
                path: '/docs/Maven/profiles',
                component: ComponentCreator('/docs/Maven/profiles', 'e8b'),
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
                path: '/docs/Python/Additional Python Data Structures',
                component: ComponentCreator('/docs/Python/Additional Python Data Structures', 'b86'),
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
                path: '/docs/RestAssured/authentication-validation/authentication-types',
                component: ComponentCreator('/docs/RestAssured/authentication-validation/authentication-types', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/authentication-validation/dynamic-data-handling',
                component: ComponentCreator('/docs/RestAssured/authentication-validation/dynamic-data-handling', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/authentication-validation/json-schema-validation',
                component: ComponentCreator('/docs/RestAssured/authentication-validation/json-schema-validation', 'eb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/authentication-validation/nested-array-assertions',
                component: ComponentCreator('/docs/RestAssured/authentication-validation/nested-array-assertions', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/data-integration/api-chaining',
                component: ComponentCreator('/docs/RestAssured/data-integration/api-chaining', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/data-integration/data-cleanup-fixed',
                component: ComponentCreator('/docs/RestAssured/data-integration/data-cleanup-fixed', '2c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/data-integration/data-driven-testing',
                component: ComponentCreator('/docs/RestAssured/data-integration/data-driven-testing', 'e8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/data-integration/database-validation-fixed',
                component: ComponentCreator('/docs/RestAssured/data-integration/database-validation-fixed', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/data-integration/mock-apis-fixed',
                component: ComponentCreator('/docs/RestAssured/data-integration/mock-apis-fixed', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/data-integration/testng-dataprovider-usage',
                component: ComponentCreator('/docs/RestAssured/data-integration/testng-dataprovider-usage', '033'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/advanced-topics/contract-testing-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/advanced-topics/contract-testing-final', 'e5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/advanced-topics/performance-testing-basics-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/advanced-topics/performance-testing-basics-final', 'a1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/execution/ci-cd-integration-fixed',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/execution/ci-cd-integration-fixed', '536'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/execution/environment-handling-clean',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/execution/environment-handling-clean', 'cfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/observability-reporting/logs-for-failed-tests-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/observability-reporting/logs-for-failed-tests-final', 'f97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/observability-reporting/reporting-tools-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/observability-reporting/reporting-tools-final', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/observability-reporting/tracking-key-metrics-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/observability-reporting/tracking-key-metrics-final', 'dc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/reliability/error-handling-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/reliability/error-handling-final', '137'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/reliability/negative-testing-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/reliability/negative-testing-final', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/execution-advanced/reliability/retry-mechanisms-final',
                component: ComponentCreator('/docs/RestAssured/execution-advanced/reliability/retry-mechanisms-final', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/framework-design/base-test-setup',
                component: ComponentCreator('/docs/RestAssured/framework-design/base-test-setup', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/framework-design/centralized-configuration',
                component: ComponentCreator('/docs/RestAssured/framework-design/centralized-configuration', '665'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/framework-design/folder-structure-overview',
                component: ComponentCreator('/docs/RestAssured/framework-design/folder-structure-overview', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/framework-design/pojo-models',
                component: ComponentCreator('/docs/RestAssured/framework-design/pojo-models', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/framework-design/reusable-request-response-handling',
                component: ComponentCreator('/docs/RestAssured/framework-design/reusable-request-response-handling', '2d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/Fundamentals/api-documentation-tools',
                component: ComponentCreator('/docs/RestAssured/Fundamentals/api-documentation-tools', 'ad5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/Fundamentals/error-handling-edge-cases',
                component: ComponentCreator('/docs/RestAssured/Fundamentals/error-handling-edge-cases', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/Fundamentals/headers-and-json-basics',
                component: ComponentCreator('/docs/RestAssured/Fundamentals/headers-and-json-basics', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/Fundamentals/http-methods-status-codes',
                component: ComponentCreator('/docs/RestAssured/Fundamentals/http-methods-status-codes', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/next-steps/practical-experience-tips-final',
                component: ComponentCreator('/docs/RestAssured/next-steps/practical-experience-tips-final', 'e74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/next-steps/small-real-world-implementation-correct',
                component: ComponentCreator('/docs/RestAssured/next-steps/small-real-world-implementation-correct', 'aa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/request-response-handling/headers-and-request-body',
                component: ComponentCreator('/docs/RestAssured/request-response-handling/headers-and-request-body', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/request-response-handling/json-path-extraction',
                component: ComponentCreator('/docs/RestAssured/request-response-handling/json-path-extraction', '298'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/request-response-handling/logging-and-debugging',
                component: ComponentCreator('/docs/RestAssured/request-response-handling/logging-and-debugging', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/request-response-handling/query-path-parameters',
                component: ComponentCreator('/docs/RestAssured/request-response-handling/query-path-parameters', 'e09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/request-response-handling/troubleshooting-common-issues',
                component: ComponentCreator('/docs/RestAssured/request-response-handling/troubleshooting-common-issues', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/restassured-basics/given-when-then-structure',
                component: ComponentCreator('/docs/RestAssured/restassured-basics/given-when-then-structure', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/restassured-basics/project-setup-maven-gradle',
                component: ComponentCreator('/docs/RestAssured/restassured-basics/project-setup-maven-gradle', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RestAssured/restassured-basics/writing-first-api-test',
                component: ComponentCreator('/docs/RestAssured/restassured-basics/writing-first-api-test', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/API Automation with RequestsLibrary',
                component: ComponentCreator('/docs/Robot Framework/API Automation with RequestsLibrary', 'a9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Architecture',
                component: ComponentCreator('/docs/Robot Framework/Architecture', '629'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Assertions and Validation',
                component: ComponentCreator('/docs/Robot Framework/Assertions and Validation', '880'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Built-in Libraries',
                component: ComponentCreator('/docs/Robot Framework/Built-in Libraries', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Control Flow and Error Handling',
                component: ComponentCreator('/docs/Robot Framework/Control Flow and Error Handling', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Data Driven Testing',
                component: ComponentCreator('/docs/Robot Framework/Data Driven Testing', '0dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Database Testing',
                component: ComponentCreator('/docs/Robot Framework/Database Testing', '08e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Debugging and Best Practices',
                component: ComponentCreator('/docs/Robot Framework/Debugging and Best Practices', 'fe1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Execution Reports and CI CD',
                component: ComponentCreator('/docs/Robot Framework/Execution Reports and CI CD', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Installation and Setup',
                component: ComponentCreator('/docs/Robot Framework/Installation and Setup', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Introduction',
                component: ComponentCreator('/docs/Robot Framework/Introduction', '593'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Keywords Concept',
                component: ComponentCreator('/docs/Robot Framework/Keywords Concept', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Parallel Execution with Pabot',
                component: ComponentCreator('/docs/Robot Framework/Parallel Execution with Pabot', '73a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Resource Files and Custom Libraries',
                component: ComponentCreator('/docs/Robot Framework/Resource Files and Custom Libraries', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Robot Framework Interview Questions',
                component: ComponentCreator('/docs/Robot Framework/Robot Framework Interview Questions', 'f1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/SeleniumLibrary UI Automation',
                component: ComponentCreator('/docs/Robot Framework/SeleniumLibrary UI Automation', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Settings Section',
                component: ComponentCreator('/docs/Robot Framework/Settings Section', '21a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Tags Setup and Teardown',
                component: ComponentCreator('/docs/Robot Framework/Tags Setup and Teardown', '91c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Test Suite and Test Case Structure',
                component: ComponentCreator('/docs/Robot Framework/Test Suite and Test Case Structure', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Robot Framework/Variables in Robot Framework',
                component: ComponentCreator('/docs/Robot Framework/Variables in Robot Framework', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/authentication_popups',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/authentication_popups', 'c3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/browser_options_capabilities',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/browser_options_capabilities', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/common_selenium_exceptions',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/common_selenium_exceptions', '1bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/debugging_selenium_tests',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/debugging_selenium_tests', '1d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/flaky_test_root_causes',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/flaky_test_root_causes', '449'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/handling_dynamic_elements',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/handling_dynamic_elements', 'e1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/JDBC_Connectivity',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/JDBC_Connectivity', '49d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/JSON_Wire_vs_W3C',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/JSON_Wire_vs_W3C', 'f99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/selenium_4_new_features',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/selenium_4_new_features', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/shadow_dom',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/shadow_dom', '882'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Advanced Concepts/stale_element_reference_exception',
                component: ComponentCreator('/docs/Selenium/Advanced Concepts/stale_element_reference_exception', 'fbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Action Class',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Action Class', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Cookies',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Cookies', '56b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Driver Options',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Driver Options', '531'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Fetch Dimensions of WebElement',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Fetch Dimensions of WebElement', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Frames',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Frames', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Java Script Executor',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Java Script Executor', '449'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Multiple Window Handles',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Multiple Window Handles', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Screenshots',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Screenshots', '4e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Foundational Advanced Concepts/Window Handle',
                component: ComponentCreator('/docs/Selenium/Foundational Advanced Concepts/Window Handle', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Framework Design/framework_best_practices',
                component: ComponentCreator('/docs/Selenium/Framework Design/framework_best_practices', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Framework Design/page_factory',
                component: ComponentCreator('/docs/Selenium/Framework Design/page_factory', '763'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Framework Design/page_object_model_pom',
                component: ComponentCreator('/docs/Selenium/Framework Design/page_object_model_pom', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Framework Design/page_vs_test_responsibility',
                component: ComponentCreator('/docs/Selenium/Framework Design/page_vs_test_responsibility', 'bf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Framework Design/selenium-by-vs-findby',
                component: ComponentCreator('/docs/Selenium/Framework Design/selenium-by-vs-findby', 'ef2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Interview Questions/framework_ci_cd_questions',
                component: ComponentCreator('/docs/Selenium/Interview Questions/framework_ci_cd_questions', 'a2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Interview Questions/real_project_scenarios',
                component: ComponentCreator('/docs/Selenium/Interview Questions/real_project_scenarios', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Interview Questions/selenium_interview_questions',
                component: ComponentCreator('/docs/Selenium/Interview Questions/selenium_interview_questions', '802'),
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
                path: '/docs/Selenium/Introduction/Launching Browsers in Selenium',
                component: ComponentCreator('/docs/Selenium/Introduction/Launching Browsers in Selenium', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Introduction/Navigation Commands',
                component: ComponentCreator('/docs/Selenium/Introduction/Navigation Commands', '1f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Introduction/Selenium Architecture',
                component: ComponentCreator('/docs/Selenium/Introduction/Selenium Architecture', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Introduction/Selenium Components',
                component: ComponentCreator('/docs/Selenium/Introduction/Selenium Components', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Introduction/Setting Up Selenium Project',
                component: ComponentCreator('/docs/Selenium/Introduction/Setting Up Selenium Project', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/Advanced XPath',
                component: ComponentCreator('/docs/Selenium/Locators/Advanced XPath', '242'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/CSS Selectors',
                component: ComponentCreator('/docs/Selenium/Locators/CSS Selectors', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/Finding Elements',
                component: ComponentCreator('/docs/Selenium/Locators/Finding Elements', '473'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/ID Name and Class Locators',
                component: ComponentCreator('/docs/Selenium/Locators/ID Name and Class Locators', '897'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/LinkText and PartialLinkText Locators',
                component: ComponentCreator('/docs/Selenium/Locators/LinkText and PartialLinkText Locators', 'a25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/Locators Overview',
                component: ComponentCreator('/docs/Selenium/Locators/Locators Overview', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/locators_interview_questions',
                component: ComponentCreator('/docs/Selenium/Locators/locators_interview_questions', '6e4'),
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
                path: '/docs/Selenium/Locators/XPath Basics',
                component: ComponentCreator('/docs/Selenium/Locators/XPath Basics', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/XPath vs CSS Selectors',
                component: ComponentCreator('/docs/Selenium/Locators/XPath vs CSS Selectors', '7e0'),
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
                path: '/docs/Selenium/Realtime Practical Exercises/end_to_end_checkout_flow',
                component: ComponentCreator('/docs/Selenium/Realtime Practical Exercises/end_to_end_checkout_flow', 'e8b'),
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
                path: '/docs/Selenium/Realtime Practical Exercises/login_flow_automation',
                component: ComponentCreator('/docs/Selenium/Realtime Practical Exercises/login_flow_automation', 'c44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Realtime Practical Exercises/real_interview_ui_scenarios',
                component: ComponentCreator('/docs/Selenium/Realtime Practical Exercises/real_interview_ui_scenarios', '3e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Realtime Practical Exercises/wait_related_failure_fix',
                component: ComponentCreator('/docs/Selenium/Realtime Practical Exercises/wait_related_failure_fix', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/grid_architecture',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/grid_architecture', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/grid_vs_cloud',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/grid_vs_cloud', '428'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/grid_with_docker_awareness',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/grid_with_docker_awareness', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/hub_and_node',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/hub_and_node', '2e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Selenium Grid/selenium_grid_introduction',
                component: ComponentCreator('/docs/Selenium/Selenium Grid/selenium_grid_introduction', '21f'),
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
                path: '/docs/Selenium/Synchronization/explicit_wait',
                component: ComponentCreator('/docs/Selenium/Synchronization/explicit_wait', 'c0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/fluent_wait',
                component: ComponentCreator('/docs/Selenium/Synchronization/fluent_wait', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/implicit_wait',
                component: ComponentCreator('/docs/Selenium/Synchronization/implicit_wait', 'eab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/thread',
                component: ComponentCreator('/docs/Selenium/Synchronization/thread', 'd6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Synchronization/why_waits_are_needed',
                component: ComponentCreator('/docs/Selenium/Synchronization/why_waits_are_needed', '926'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/alerts_and_popups',
                component: ComponentCreator('/docs/Selenium/Web Elements/alerts_and_popups', 'cca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/auto_it_awareness_only',
                component: ComponentCreator('/docs/Selenium/Web Elements/auto_it_awareness_only', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/button copy',
                component: ComponentCreator('/docs/Selenium/Web Elements/button copy', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/checkboxes',
                component: ComponentCreator('/docs/Selenium/Web Elements/checkboxes', '224'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/file_upload',
                component: ComponentCreator('/docs/Selenium/Web Elements/file_upload', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/iframes copy',
                component: ComponentCreator('/docs/Selenium/Web Elements/iframes copy', '038'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/images copy',
                component: ComponentCreator('/docs/Selenium/Web Elements/images copy', '747'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/links copy',
                component: ComponentCreator('/docs/Selenium/Web Elements/links copy', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/multi_select_dropdown',
                component: ComponentCreator('/docs/Selenium/Web Elements/multi_select_dropdown', '078'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/progress_bar',
                component: ComponentCreator('/docs/Selenium/Web Elements/progress_bar', '28a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/radio_button',
                component: ComponentCreator('/docs/Selenium/Web Elements/radio_button', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/sliders copy',
                component: ComponentCreator('/docs/Selenium/Web Elements/sliders copy', 'e33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/static_dropdown',
                component: ComponentCreator('/docs/Selenium/Web Elements/static_dropdown', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/suggestive_auto_suggest_dropdown',
                component: ComponentCreator('/docs/Selenium/Web Elements/suggestive_auto_suggest_dropdown', '515'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/tables copy',
                component: ComponentCreator('/docs/Selenium/Web Elements/tables copy', '6c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/text-boxes',
                component: ComponentCreator('/docs/Selenium/Web Elements/text-boxes', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/toggle_switch',
                component: ComponentCreator('/docs/Selenium/Web Elements/toggle_switch', '160'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/tool_tips',
                component: ComponentCreator('/docs/Selenium/Web Elements/tool_tips', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Web Elements/WebElement Methods',
                component: ComponentCreator('/docs/Selenium/Web Elements/WebElement Methods', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Advanced Topics/custom-collections',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Advanced Topics/custom-collections', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Advanced Topics/functional-programming-with-collections',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Advanced Topics/functional-programming-with-collections', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Advanced Topics/memory-management',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Advanced Topics/memory-management', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Advanced Topics/third-party-libraries',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Advanced Topics/third-party-libraries', '235'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Core Interfaces/deque-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Core Interfaces/deque-interface', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Core Interfaces/list-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Core Interfaces/list-interface', 'dd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Core Interfaces/map-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Core Interfaces/map-interface', 'd56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Core Interfaces/queue-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Core Interfaces/queue-interface', '699'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Core Interfaces/set-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Core Interfaces/set-interface', 'aa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Introduction/collection-hierarchy',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Introduction/collection-hierarchy', 'e07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Introduction/collection-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Introduction/collection-interface', 'f8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Introduction/fail-fast-vs-fail-safe',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Introduction/fail-fast-vs-fail-safe', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Introduction/Iterable-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Introduction/Iterable-interface', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/List/arraylist-internal',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/List/arraylist-internal', '54b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/List/inkedlist-internal',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/List/inkedlist-internal', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/List/list-best-practices',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/List/list-best-practices', '44a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/List/stack-class',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/List/stack-class', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/List/Vector',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/List/Vector', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Map/concurrenthashmap',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Map/concurrenthashmap', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Map/hashmap-internal',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Map/hashmap-internal', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Map/hashtable',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Map/hashtable', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Map/linkedhashmap',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Map/linkedhashmap', 'a55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Map/map-best-practices',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Map/map-best-practices', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Map/treemap',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Map/treemap', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Miscellaneous Topics/concurrent-collections',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Miscellaneous Topics/concurrent-collections', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Miscellaneous Topics/immutable-collections',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Miscellaneous Topics/immutable-collections', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Miscellaneous Topics/streams-and-collections',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Miscellaneous Topics/streams-and-collections', 'e3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Queue/arraydeque-internal',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Queue/arraydeque-internal', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Queue/deque-interface',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Queue/deque-interface', 'd75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Queue/priorityqueue-internal',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Queue/priorityqueue-internal', '911'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Queue/queue-best-practices',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Queue/queue-best-practices', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Set/hashset-internal',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Set/hashset-internal', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Set/linkedhashset',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Set/linkedhashset', '2c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Set/set-best-practices',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Set/set-best-practices', 'fa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Set/treeset',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Set/treeset', 'bb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Utilities/arrays-utility-class',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Utilities/arrays-utility-class', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Utilities/cheatsheet',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Utilities/cheatsheet', '350'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Utilities/collections-utility-class',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Utilities/collections-utility-class', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Utilities/comparable-vs-comparator',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Utilities/comparable-vs-comparator', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Utilities/faq',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Utilities/faq', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Collections Framework/Utilities/immutable-collections-java9',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/Utilities/immutable-collections-java9', '1de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/advanced-topics-in-exception-handling-original',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/advanced-topics-in-exception-handling-original', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/automation-testing-use-cases-for-exception-handling',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/automation-testing-use-cases-for-exception-handling', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/best-practices-for-exception-handling',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/best-practices-for-exception-handling', '4fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/custom-exceptions',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/custom-exceptions', '143'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/exception_handling_introduction',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/exception_handling_introduction', 'ad6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/finally-block',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/finally-block', '9c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/frequently-asked-questions-exception-handling',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/frequently-asked-questions-exception-handling', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/java-exception-hierarchy',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/java-exception-hierarchy', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/real-world-examples-of-exception-handling',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/real-world-examples-of-exception-handling', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/throw-and-throws',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/throw-and-throws', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/try-catch-block',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/try-catch-block', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/types-of-exceptions-in-java',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/types-of-exceptions-in-java', '2a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Fastrack/OOP1',
                component: ComponentCreator('/docs/Standalone Java/Fastrack/OOP1', 'c0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Fastrack/OOP2',
                component: ComponentCreator('/docs/Standalone Java/Fastrack/OOP2', 'cb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Fastrack/OOP3',
                component: ComponentCreator('/docs/Standalone Java/Fastrack/OOP3', '24b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/advanced-techniques',
                component: ComponentCreator('/docs/Standalone Java/File Handling/advanced-techniques', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/exception-handling-in-file-handling',
                component: ComponentCreator('/docs/Standalone Java/File Handling/exception-handling-in-file-handling', '1d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/file-handling-faqs',
                component: ComponentCreator('/docs/Standalone Java/File Handling/file-handling-faqs', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/file-operations',
                component: ComponentCreator('/docs/Standalone Java/File Handling/file-operations', '54a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/introduction-to-file-handling',
                component: ComponentCreator('/docs/Standalone Java/File Handling/introduction-to-file-handling', 'a2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/java-io-basics',
                component: ComponentCreator('/docs/Standalone Java/File Handling/java-io-basics', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/reading-and-writing-files',
                component: ComponentCreator('/docs/Standalone Java/File Handling/reading-and-writing-files', '0dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/real-world-examples-of-file-handling',
                component: ComponentCreator('/docs/Standalone Java/File Handling/real-world-examples-of-file-handling', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/File Handling/working-with-different-file-formats',
                component: ComponentCreator('/docs/Standalone Java/File Handling/working-with-different-file-formats', '4ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Arrays',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Arrays', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Control-Flow',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Control-Flow', '028'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Data-Types',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Data-Types', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Main-Method',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Main-Method', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Object and Classes',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Object and Classes', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Operators',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Operators', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Packages',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Packages', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/pass-by-value',
                component: ComponentCreator('/docs/Standalone Java/Foundations/pass-by-value', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Strings',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Strings', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Type Casting',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Type Casting', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/Variables',
                component: ComponentCreator('/docs/Standalone Java/Foundations/Variables', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Introduction/',
                component: ComponentCreator('/docs/Standalone Java/Introduction/', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Introduction/Features of Java',
                component: ComponentCreator('/docs/Standalone Java/Introduction/Features of Java', '32e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Introduction/java-program-execution-flow',
                component: ComponentCreator('/docs/Standalone Java/Introduction/java-program-execution-flow', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Introduction/jdk-jre-jvm',
                component: ComponentCreator('/docs/Standalone Java/Introduction/jdk-jre-jvm', '796'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Introduction/platform-independence',
                component: ComponentCreator('/docs/Standalone Java/Introduction/platform-independence', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/default-and-static-methods-in-interfaces-styled',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/default-and-static-methods-in-interfaces-styled', 'b93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/introduction-to-java-8-exact',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/introduction-to-java-8-exact', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/java-8-faqs',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/java-8-faqs', '2d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/lambda-expressions',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/lambda-expressions', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/new-date-and-time-api',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/new-date-and-time-api', '5fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/optional-class',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/optional-class', 'c16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/real-world-examples-java-8',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/real-world-examples-java-8', '2e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Java 8 Features/streams-api',
                component: ComponentCreator('/docs/Standalone Java/Java 8 Features/streams-api', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Keywords/Static',
                component: ComponentCreator('/docs/Standalone Java/Keywords/Static', '8a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/advanced-topics-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/advanced-topics-exact', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/concurrent-collections-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/concurrent-collections-exact', 'd81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/creating-threads-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/creating-threads-exact', '851'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/inter-thread-communication-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/inter-thread-communication-exact', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/introduction-to-multithreading',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/introduction-to-multithreading', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/multithreading-faqs-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/multithreading-faqs-exact', 'cff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/real-world-examples-of-multithreading-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/real-world-examples-of-multithreading-exact', '8d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/thread-lifecycle-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/thread-lifecycle-exact', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/thread-pools-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/thread-pools-exact', '271'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/thread-synchronization-exact',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/thread-synchronization-exact', '71a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Abstraction',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Abstraction', '281'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/abstraction-and-interfaces',
                component: ComponentCreator('/docs/Standalone Java/OOPS/abstraction-and-interfaces', '9ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/classes-and-objects',
                component: ComponentCreator('/docs/Standalone Java/OOPS/classes-and-objects', '40a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/composition-vs-inheritance',
                component: ComponentCreator('/docs/Standalone Java/OOPS/composition-vs-inheritance', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Constructor',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Constructor', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Encapsulation',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Encapsulation', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Final , Static Usage',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Final , Static Usage', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Inheritance + Super',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Inheritance + Super', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Interface',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Interface', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/Polymorphism',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Polymorphism', 'dc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/solid-principles',
                component: ComponentCreator('/docs/Standalone Java/OOPS/solid-principles', 'ce9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/compile-vs-runtime-concatenation',
                component: ComponentCreator('/docs/Standalone Java/Strings/compile-vs-runtime-concatenation', 'ca7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/equals-vs-double-equals',
                component: ComponentCreator('/docs/Standalone Java/Strings/equals-vs-double-equals', '9cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/string-immutability',
                component: ComponentCreator('/docs/Standalone Java/Strings/string-immutability', 'df8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/string-methods',
                component: ComponentCreator('/docs/Standalone Java/Strings/string-methods', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/string-overview-creation',
                component: ComponentCreator('/docs/Standalone Java/Strings/string-overview-creation', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/string-pool',
                component: ComponentCreator('/docs/Standalone Java/Strings/string-pool', '6ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/string-programs-part1',
                component: ComponentCreator('/docs/Standalone Java/Strings/string-programs-part1', 'ee5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/string-programs-part2',
                component: ComponentCreator('/docs/Standalone Java/Strings/string-programs-part2', '33d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/stringbuffer',
                component: ComponentCreator('/docs/Standalone Java/Strings/stringbuffer', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/Stringbuilder',
                component: ComponentCreator('/docs/Standalone Java/Strings/Stringbuilder', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Strings/Stringbuilder-vs-stringbuffer',
                component: ComponentCreator('/docs/Standalone Java/Strings/Stringbuilder-vs-stringbuffer', '0a8'),
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
