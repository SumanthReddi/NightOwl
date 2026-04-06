---
sidebar_position: 2
title: Tags & Tag Expressions
---

# Tags & Tag Expressions

**Tags** in Cucumber allow you to **control which scenarios are executed** without modifying feature files. They are essential for **selective execution**, managing large test suites, and integrating with CI/CD pipelines.

---

## What are Tags?

Tags are labels that can be applied to:

- Feature files
- Scenarios
- Scenario Outlines

Example:

```gherkin
@smoke
Scenario: Successful login
  Given I am on the login page
  When I enter "admin" as username and "password123" as password
  Then I should see the dashboard
```

Tags **do not affect test logic** — they only control **which tests run**.

---

## Why Tags Are Important

Tags help you:

- Run specific tests like **smoke tests**
- Separate **regression**, **sanity**, and **smoke suites**
- Reduce execution time
- Control CI/CD pipelines

Rule:

> Tags control **what runs**, not **how tests run**.

---

## Where Tags Can Be Applied

### Scenario Level

```gherkin
@smoke
Scenario: Successful login
  Given I am on the login page
  When I login with valid credentials
  Then I should see the dashboard
```

---

### Scenario Outline Level

```gherkin
@regression
Scenario Outline: Login variations
  Given I am on the login page
  When I enter "<username>" and "<password>"
  Then I should see "<result>"

Examples:
  | username | password | result |
  | admin | password123 | dashboard |
  | guest | wrongpass | error message |
```

---

### Feature Level

```gherkin
@api
Feature: Payment API
```

All scenarios inside inherit the tag.

---

## Common Tag Types

Typical tags used in projects:

- `@smoke`
- `@regression`
- `@sanity`
- `@api`
- `@ui`

Best practice:

Use **simple, meaningful names**.

---

## Tag Expressions

Tag expressions allow combining tags for flexible execution.

### AND

Run scenarios containing **both tags**.

```
@smoke and @ui
```

---

### OR

Run scenarios with **either tag**.

```
@smoke or @regression
```

---

### NOT

Exclude scenarios.

```
not @wip
```

Example:

```gherkin
@wip
Scenario: Work in progress
```

---

### Combined Expression

```
(@smoke or @sanity) and not @wip
```

---

## Using Tags in Runner Class

Example runner configuration:

```java
@CucumberOptions(
 features = "src/test/resources/features",
 glue = {"stepdefinitions"},
 tags = "@smoke"
)
public class TestRunner {
}
```

---

## Running with Command Line

Example:

```
mvn test -Dcucumber.filter.tags="@smoke"
```

---

## Tagging Strategy

Good tagging strategies:

### Feature Tags

```
@login
@payment
@checkout
```

### Execution Tags

```
@smoke
@regression
@sanity
```

Example:

```gherkin
@login @smoke
Scenario: Successful login
```

---

## Common Tag Mistakes

Avoid:

- Too many tags per scenario
- Inconsistent naming (`@Smoke` vs `@smoke`)
- Tags describing implementation
- Tags tied to environments

Bad example:

```
@clickLoginButton
```

---

## Tags in CI/CD

Example pipeline:

```yaml
stages:
 - smoke
 - regression

smoke_tests:
 script:
  - mvn test -Dcucumber.filter.tags="@smoke"

regression_tests:
 script:
  - mvn test -Dcucumber.filter.tags="@regression"
```

---

## Example

```gherkin
@ui @smoke
Scenario: Add item to cart
  Given I am on the product page
  When I click Add to Cart
  Then the item should appear in cart
```

---

## Interview Questions

**What are tags in Cucumber?**

Tags allow selective execution of scenarios.

---

**Can tags be combined?**

Yes using logical expressions like:

- AND
- OR
- NOT

---

## Key Takeaways

- Tags control **test execution**
- Use **simple naming conventions**
- Combine tags using **expressions**
- Important for **large test suites and CI/CD**