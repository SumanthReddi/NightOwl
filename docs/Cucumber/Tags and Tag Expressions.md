---
sidebar_position: 16
---

# Tags & Tag Expressions

Tags in Cucumber allow you to **control which scenarios are executed** without changing feature files.
They are essential for **selective execution, CI/CD pipelines, and large test suites**.

---

## What are Tags?

Tags are labels added to:
- Scenarios
- Scenario Outlines
- Feature files

Example:
```
@smoke
Scenario: Successful login
```

Tags do not affect behavior — they only control execution.

---

## Why Tags Are Important

Tags help you:
- Run only required tests
- Separate smoke, regression, sanity suites
- Control CI pipeline stages
- Reduce execution time

Rule:
> Tags control *what runs*, not *how tests run*.

---

## Where Tags Can Be Applied

### Scenario Level
```
@smoke
Scenario: Login
```

### Scenario Outline Level
```
@regression
Scenario Outline: Login variations
```

### Feature Level
```
@auth
Feature: Login functionality
```

Feature-level tags apply to **all scenarios** inside the feature.

---

## Basic Tag Usage

Common tags:
- `@smoke`
- `@regression`
- `@sanity`
- `@api`
- `@ui`

Use meaningful, standardized tag names.

---

## Tag Expressions (Advanced)

Cucumber supports logical expressions:

### AND
Run scenarios that have **both tags**:
```
@smoke and @ui
```

### OR
Run scenarios that have **either tag**:
```
@smoke or @regression
```

### NOT
Exclude scenarios with a tag:
```
not @wip
```

### Combined Expression
```
(@smoke or @sanity) and not @wip
```

---

## Tags in Runner Configuration (Concept)

Tags are configured in the runner to:
- Control execution dynamically
- Avoid changing feature files per run

Avoid hardcoding tags inside code.

---

## Tagging Strategy for Real Projects

Recommended approach:
- Feature-level tags for domain (`@login`, `@payment`)
- Scenario-level tags for execution type (`@smoke`, `@regression`)
- Environment-agnostic tags

---

## Common Tagging Mistakes ❌

- Too many tags per scenario
- Inconsistent tag naming
- Using tags to describe steps
- Hardcoding execution logic into tags

---

## Tags in CI/CD Pipelines

In CI:
- Tags define pipeline stages
- Smoke runs on every commit
- Regression runs nightly

Tag strategy = faster pipelines.

---

## Interview-Ready Questions

**Q: What are tags used for in Cucumber?**  
A: To control which scenarios are executed.

**Q: Can tags be combined?**  
A: Yes, using AND / OR / NOT expressions.

---

## Key Takeaways

- Tags control execution scope
- Use clear, consistent naming
- Tag expressions enable flexibility
- Essential for CI/CD
- Do not misuse tags for logic
