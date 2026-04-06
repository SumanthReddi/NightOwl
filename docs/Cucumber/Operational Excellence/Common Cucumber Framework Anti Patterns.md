---
sidebar_position: 5
title: Common Cucumber Framework Anti-Patterns
---

# Common Cucumber Framework Anti-Patterns

Anti-patterns are practices that appear to work initially but create long-term problems in automation frameworks. Understanding these mistakes helps teams design stable and maintainable Cucumber frameworks.

---

## Writing UI Steps in Gherkin

Problem:

Feature files contain UI instructions such as:

```
Click the login button
Enter username
```

This makes feature files technical and difficult for business stakeholders.

Fix:

Feature files should describe behavior.

Example:

```gherkin
Scenario: Successful login
 Given I am on the login page
 When I log in with valid credentials
 Then I should see the dashboard
```

---

## Fat Step Definitions

Problem:

Step definitions contain large workflows and automation logic.

Example of bad practice:

```java
@When("I complete the full login workflow")
public void loginWorkflow(){

 driver.findElement(...).sendKeys("user");
 driver.findElement(...).sendKeys("password");
 driver.findElement(...).click();

}
```

Fix:

Step definitions should call reusable classes such as Page Objects.

---

## Static Shared State

Problem:

Using static variables breaks scenario isolation and causes parallel execution failures.

Fix:

Use ThreadLocal or scenario scoped objects.

Example:

```java
private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();
```

---

## Overusing Background

Problem:

Large Background blocks hide important steps.

Example:

```
Background:
  Given user is logged in
  And user created 10 accounts
  And user configured system settings
```

Fix:

Use Background only for shared preconditions.

---

## Excessive Scenario Outlines

Problem:

Huge Examples tables reduce readability.

Example:

```
Examples:
| username | password | role | status |
| user1 | pass1 | admin | active |
| user2 | pass2 | guest | inactive |
| user3 | pass3 | admin | disabled |
```

Fix:

Use Scenario Outline only when the same behavior repeats with different inputs.

---

## Hardcoded Environment Data

Problem:

Hardcoding URLs or credentials.

Example:

```java
driver.get("https://qa.example.com");
```

Fix:

Use environment variables.

```java
String baseUrl = System.getenv("BASE_URL");
driver.get(baseUrl);
```

---

## Using Retries to Hide Failures

Problem:

Retries mask underlying issues.

Fix:

Identify root causes of failures instead of blindly retrying tests.

Retries should only handle transient issues.

---

## One Giant Runner

Problem:

Single runner executes all tests.

This causes:

- slow pipelines
- poor test control

Fix:

Create multiple runners.

Examples:

```
SmokeRunner
RegressionRunner
ApiRunner
UiRunner
```

---

## Ignoring Reporting

Problem:

Frameworks run tests but do not produce useful reports.

Fix:

Generate structured reports.

Example:

```java
plugin = {"pretty","html:target/report.html","json:target/report.json"}
```

---

## Mixing Responsibilities

Problem:

Steps, pages, and hooks contain mixed logic.

Fix:

Follow separation of concerns:

- Steps orchestrate actions
- Pages perform UI interactions
- Hooks manage setup and teardown

---

## Interview Questions

**What is a common Cucumber anti-pattern?**

Writing Selenium code directly inside step definitions.

---

**Why are static variables dangerous in Cucumber?**

They break scenario isolation and cause parallel execution problems.

---

**How do you avoid large step definitions?**

Move logic to Page Objects or service classes.

---

## Key Takeaways

- anti-patterns create maintenance issues
- behavior must remain readable
- frameworks should enforce clean architecture
- avoid shared state and hardcoded data
- maintain separation of concerns