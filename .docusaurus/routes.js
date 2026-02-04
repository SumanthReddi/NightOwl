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
    component: ComponentCreator('/docs', '5a5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3f8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c5b'),
            routes: [
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Phase_2_01_Workbook',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Phase_2_01_Workbook', 'beb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Phase_2_02_Sheet',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Phase_2_02_Sheet', '8fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Phase_2_03_Row',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Phase_2_03_Row', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Phase_2_04_Cell',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Phase_2_04_Cell', '8d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Phase_2_05_Object_Model_and_Indexing',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Phase_2_05_Object_Model_and_Indexing', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Core Apache POI Object Model/Phase_2_06_Null_Handling_Strategy',
                component: ComponentCreator('/docs/Apache POI/Core Apache POI Object Model/Phase_2_06_Null_Handling_Strategy', 'a61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_1_Apache_POI_Fundamentals_Consolidated',
                component: ComponentCreator('/docs/Apache POI/Phase_1_Apache_POI_Fundamentals_Consolidated', 'e61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_10_Performance_Large_Files_and_SXSSF',
                component: ComponentCreator('/docs/Apache POI/Phase_10_Performance_Large_Files_and_SXSSF', '1b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_3_Project_Setup_and_Maven_POI',
                component: ComponentCreator('/docs/Apache POI/Phase_3_Project_Setup_and_Maven_POI', 'd56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_4_Reading_Excel_for_Selenium',
                component: ComponentCreator('/docs/Apache POI/Phase_4_Reading_Excel_for_Selenium', '56b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_5_Cell_Types_and_Data_Stability',
                component: ComponentCreator('/docs/Apache POI/Phase_5_Cell_Types_and_Data_Stability', '63c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_6_Data_Driven_Automation_Patterns',
                component: ComponentCreator('/docs/Apache POI/Phase_6_Data_Driven_Automation_Patterns', '022'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_7_Writing_Results_Back_to_Excel',
                component: ComponentCreator('/docs/Apache POI/Phase_7_Writing_Results_Back_to_Excel', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_8_Updating_Existing_Excel_and_Execution_Control',
                component: ComponentCreator('/docs/Apache POI/Phase_8_Updating_Existing_Excel_and_Execution_Control', '324'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Apache POI/Phase_9_Excel_Based_Reporting_and_Formatting',
                component: ComponentCreator('/docs/Apache POI/Phase_9_Excel_Based_Reporting_and_Formatting', '03e'),
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
                path: '/docs/category/agents--scaling',
                component: ComponentCreator('/docs/category/agents--scaling', 'c63'),
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
                path: '/docs/category/collections-framework',
                component: ComponentCreator('/docs/category/collections-framework', 'ac7'),
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
                path: '/docs/category/core-java-concepts',
                component: ComponentCreator('/docs/category/core-java-concepts', 'ba5'),
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
                path: '/docs/category/exception-handling',
                component: ComponentCreator('/docs/category/exception-handling', '960'),
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
                path: '/docs/category/framework-design',
                component: ComponentCreator('/docs/category/framework-design', '170'),
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
                path: '/docs/category/installation--setup',
                component: ComponentCreator('/docs/category/installation--setup', '163'),
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
                path: '/docs/category/java-for-automation-testers',
                component: ComponentCreator('/docs/category/java-for-automation-testers', 'f92'),
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
                path: '/docs/category/maven',
                component: ComponentCreator('/docs/category/maven', '1cc'),
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
                path: '/docs/category/observability',
                component: ComponentCreator('/docs/category/observability', '567'),
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
                path: '/docs/category/realtime-practical-exercises',
                component: ComponentCreator('/docs/category/realtime-practical-exercises', 'aa2'),
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
                path: '/docs/congratulations',
                component: ComponentCreator('/docs/congratulations', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Background Keyword',
                component: ComponentCreator('/docs/Cucumber/Background Keyword', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Common Cucumber Framework Anti Patterns',
                component: ComponentCreator('/docs/Cucumber/Common Cucumber Framework Anti Patterns', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber 01 Introduction',
                component: ComponentCreator('/docs/Cucumber/Cucumber 01 Introduction', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber Architecture Overview',
                component: ComponentCreator('/docs/Cucumber/Cucumber Architecture Overview', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber Expressions vs Regular Expressions',
                component: ComponentCreator('/docs/Cucumber/Cucumber Expressions vs Regular Expressions', 'a9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber in CI CD Pipelines',
                component: ComponentCreator('/docs/Cucumber/Cucumber in CI CD Pipelines', 'd8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber Interview Questions and Scenarios',
                component: ComponentCreator('/docs/Cucumber/Cucumber Interview Questions and Scenarios', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber with API Automation Rest Assured Patterns',
                component: ComponentCreator('/docs/Cucumber/Cucumber with API Automation Rest Assured Patterns', 'bb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber with Selenium UI Automation Patterns',
                component: ComponentCreator('/docs/Cucumber/Cucumber with Selenium UI Automation Patterns', 'a57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Cucumber with TestNG Integration',
                component: ComponentCreator('/docs/Cucumber/Cucumber with TestNG Integration', '0de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Data Tables and Examples',
                component: ComponentCreator('/docs/Cucumber/Data Tables and Examples', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Dry Run and Undefined Steps',
                component: ComponentCreator('/docs/Cucumber/Dry Run and Undefined Steps', 'c3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Error Handling Retries and Flaky Test Control',
                component: ComponentCreator('/docs/Cucumber/Error Handling Retries and Flaky Test Control', '241'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Feature File Design from User Stories',
                component: ComponentCreator('/docs/Cucumber/Feature File Design from User Stories', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Gherkin Language Basics',
                component: ComponentCreator('/docs/Cucumber/Gherkin Language Basics', '9ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Glue Code and Package Structure',
                component: ComponentCreator('/docs/Cucumber/Glue Code and Package Structure', '0e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Hooks Before After and Best Practices',
                component: ComponentCreator('/docs/Cucumber/Hooks Before After and Best Practices', '560'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Parallel Execution in Cucumber',
                component: ComponentCreator('/docs/Cucumber/Parallel Execution in Cucumber', '1cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Parameterization and Data Mapping in Step Definitions',
                component: ComponentCreator('/docs/Cucumber/Parameterization and Data Mapping in Step Definitions', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Reporting and Plugins',
                component: ComponentCreator('/docs/Cucumber/Reporting and Plugins', '787'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Runner Class and Cucumber Options',
                component: ComponentCreator('/docs/Cucumber/Runner Class and Cucumber Options', '72a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Scenario vs Scenario Outline',
                component: ComponentCreator('/docs/Cucumber/Scenario vs Scenario Outline', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Shared State and Scenario Context',
                component: ComponentCreator('/docs/Cucumber/Shared State and Scenario Context', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Step Definition Basics',
                component: ComponentCreator('/docs/Cucumber/Step Definition Basics', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Tags and Tag Expressions',
                component: ComponentCreator('/docs/Cucumber/Tags and Tag Expressions', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/What is BDD',
                component: ComponentCreator('/docs/Cucumber/What is BDD', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Cucumber/Writing Good Gherkin Scenarios',
                component: ComponentCreator('/docs/Cucumber/Writing Good Gherkin Scenarios', '24c'),
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
                path: '/docs/Extent Report/extent_reports_advanced_configuration_and_customization',
                component: ComponentCreator('/docs/Extent Report/extent_reports_advanced_configuration_and_customization', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_ci_cd_integration',
                component: ComponentCreator('/docs/Extent Report/extent_reports_ci_cd_integration', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_common_mistakes_and_anti_patterns',
                component: ComponentCreator('/docs/Extent Report/extent_reports_common_mistakes_and_anti_patterns', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_cucumber_bdd_integration',
                component: ComponentCreator('/docs/Extent Report/extent_reports_cucumber_bdd_integration', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_framework_level_integration',
                component: ComponentCreator('/docs/Extent Report/extent_reports_framework_level_integration', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_fundamentals_and_architecture',
                component: ComponentCreator('/docs/Extent Report/extent_reports_fundamentals_and_architecture', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_logging_and_status_handling',
                component: ComponentCreator('/docs/Extent Report/extent_reports_logging_and_status_handling', '896'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_roadmap_overview',
                component: ComponentCreator('/docs/Extent Report/extent_reports_roadmap_overview', '812'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_screenshots_and_media_handling',
                component: ComponentCreator('/docs/Extent Report/extent_reports_screenshots_and_media_handling', '396'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_setup_and_basic_configuration',
                component: ComponentCreator('/docs/Extent Report/extent_reports_setup_and_basic_configuration', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_test_ng_listener_integration',
                component: ComponentCreator('/docs/Extent Report/extent_reports_test_ng_listener_integration', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Extent Report/extent_reports_thread_safety_and_parallel_execution',
                component: ComponentCreator('/docs/Extent Report/extent_reports_thread_safety_and_parallel_execution', '171'),
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
                path: '/docs/Manual Testing/Agile Testing Basics',
                component: ComponentCreator('/docs/Manual Testing/Agile Testing Basics', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Defect Life Cycle',
                component: ComponentCreator('/docs/Manual Testing/Defect Life Cycle', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Functional Testing Types',
                component: ComponentCreator('/docs/Manual Testing/Functional Testing Types', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Introduction to Software Testing',
                component: ComponentCreator('/docs/Manual Testing/Introduction to Software Testing', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Levels of Testing',
                component: ComponentCreator('/docs/Manual Testing/Levels of Testing', 'c23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Manual Testing in Real Projects',
                component: ComponentCreator('/docs/Manual Testing/Manual Testing in Real Projects', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Manual Testing Interview Questions',
                component: ComponentCreator('/docs/Manual Testing/Manual Testing Interview Questions', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Manual Testing vs Automation Testing',
                component: ComponentCreator('/docs/Manual Testing/Manual Testing vs Automation Testing', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Non Functional Testing',
                component: ComponentCreator('/docs/Manual Testing/Non Functional Testing', '946'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Requirement Analysis for Testers',
                component: ComponentCreator('/docs/Manual Testing/Requirement Analysis for Testers', 'd8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Risk Based Testing',
                component: ComponentCreator('/docs/Manual Testing/Risk Based Testing', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/SDLC Software Development Life Cycle',
                component: ComponentCreator('/docs/Manual Testing/SDLC Software Development Life Cycle', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Severity vs Priority',
                component: ComponentCreator('/docs/Manual Testing/Severity vs Priority', '5c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/STLC Software Testing Life Cycle',
                component: ComponentCreator('/docs/Manual Testing/STLC Software Testing Life Cycle', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Test Case Design Techniques',
                component: ComponentCreator('/docs/Manual Testing/Test Case Design Techniques', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Test Data and Test Environment',
                component: ComponentCreator('/docs/Manual Testing/Test Data and Test Environment', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Test Execution and Reporting',
                component: ComponentCreator('/docs/Manual Testing/Test Execution and Reporting', 'a3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Test Scenarios',
                component: ComponentCreator('/docs/Manual Testing/Test Scenarios', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Test Strategy vs Test Plan',
                component: ComponentCreator('/docs/Manual Testing/Test Strategy vs Test Plan', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/Types of Testing',
                component: ComponentCreator('/docs/Manual Testing/Types of Testing', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Manual Testing/UAT and Production Testing',
                component: ComponentCreator('/docs/Manual Testing/UAT and Production Testing', 'f69'),
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
                path: '/docs/Selenium/Locators/Relative Locators',
                component: ComponentCreator('/docs/Selenium/Locators/Relative Locators', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Selenium/Locators/Selenium 4 Relative Locators',
                component: ComponentCreator('/docs/Selenium/Locators/Selenium 4 Relative Locators', 'd5c'),
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
                path: '/docs/Standalone Java/Collections Framework/congratulations',
                component: ComponentCreator('/docs/Standalone Java/Collections Framework/congratulations', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Arrays',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Arrays', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Control-Flow',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Control-Flow', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Data-Types',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Data-Types', '8ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Features of Java',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Features of Java', '6b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Introduction',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Introduction', 'c38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Main-Method',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Main-Method', '169'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Object and Classes',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Object and Classes', 'c64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Operators',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Operators', '0f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Packages',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Packages', '3b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Strings',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Strings', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Type Casting',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Type Casting', '840'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Core Java Concepts/Variables',
                component: ComponentCreator('/docs/Standalone Java/Core Java Concepts/Variables', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Exception Handling/congratulations',
                component: ComponentCreator('/docs/Standalone Java/Exception Handling/congratulations', 'f95'),
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
                path: '/docs/Standalone Java/Foundations/control-flow',
                component: ComponentCreator('/docs/Standalone Java/Foundations/control-flow', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/data-types-and-memory',
                component: ComponentCreator('/docs/Standalone Java/Foundations/data-types-and-memory', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/methods-and-overloading',
                component: ComponentCreator('/docs/Standalone Java/Foundations/methods-and-overloading', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Foundations/operators',
                component: ComponentCreator('/docs/Standalone Java/Foundations/operators', 'c5b'),
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
                path: '/docs/Standalone Java/Foundations/variables-and-scope',
                component: ComponentCreator('/docs/Standalone Java/Foundations/variables-and-scope', 'c4e'),
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
                path: '/docs/Standalone Java/Introduction/java-what-and-why',
                component: ComponentCreator('/docs/Standalone Java/Introduction/java-what-and-why', '630'),
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
                path: '/docs/Standalone Java/Keywords/abstract',
                component: ComponentCreator('/docs/Standalone Java/Keywords/abstract', '85d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Keywords/congratulations',
                component: ComponentCreator('/docs/Standalone Java/Keywords/congratulations', '852'),
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
                path: '/docs/Standalone Java/Miscellaneous Concepts/congratulations',
                component: ComponentCreator('/docs/Standalone Java/Miscellaneous Concepts/congratulations', '3ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/Multithreading/congratulations',
                component: ComponentCreator('/docs/Standalone Java/Multithreading/congratulations', '41f'),
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
                path: '/docs/Standalone Java/OOPS/encapsulation copy',
                component: ComponentCreator('/docs/Standalone Java/OOPS/encapsulation copy', 'd76'),
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
                path: '/docs/Standalone Java/OOPS/Inheritance',
                component: ComponentCreator('/docs/Standalone Java/OOPS/Inheritance', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Standalone Java/OOPS/inheritance copy',
                component: ComponentCreator('/docs/Standalone Java/OOPS/inheritance copy', '85a'),
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
                path: '/docs/Standalone Java/OOPS/polymorphism copy',
                component: ComponentCreator('/docs/Standalone Java/OOPS/polymorphism copy', 'ecb'),
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
