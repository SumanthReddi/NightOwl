---
sidebar_position: 2
title: Cucumber in CI/CD Pipelines
---

# Cucumber in CI/CD Pipelines

Integrating Cucumber tests into CI/CD pipelines provides **fast feedback, continuous validation, and release confidence**.

Automation that runs only locally has limited value. Running tests automatically in CI ensures quality is validated on every change.

---

## Why Run Cucumber in CI/CD

CI/CD execution helps:

- Catch defects early
- Validate features continuously
- Prevent broken builds from reaching production
- Provide visibility to the entire team

Rule:

Automation becomes truly valuable when it runs **automatically in pipelines**.

---

## Typical CI/CD Pipeline Flow

```
Code Commit
     ↓
Build
     ↓
Smoke Tests
     ↓
API Tests
     ↓
UI Tests
     ↓
Reports & Artifacts
```

Execution order usually follows:

1. Smoke tests first
2. API tests second
3. UI tests last

This keeps pipelines efficient.

---

## Tag Based Execution

Tags control which tests run in CI.

Example strategy:

| Tag | Purpose |
|-----|--------|
| @smoke | Runs on every commit |
| @api | API validation |
| @ui | UI automation |
| @regression | Full regression |

Example execution command:

```
mvn test -Dcucumber.filter.tags="@smoke"
```

Example pipeline configuration:

```yaml
stages:
  - smoke
  - api
  - ui

smoke_tests:
 script:
  - mvn test -Dcucumber.filter.tags="@smoke"

api_tests:
 script:
  - mvn test -Dcucumber.filter.tags="@api"

ui_tests:
 script:
  - mvn test -Dcucumber.filter.tags="@ui"
```

---

## Environment Configuration

Tests should support multiple environments.

Examples:

- QA
- UAT
- Staging
- Production

Never hardcode environment URLs.

Example:

```java
String baseUrl = System.getenv("BASE_URL");
driver.get(baseUrl);
```

Environment variables make pipelines flexible.

---

## Parallel Execution in CI

Parallel execution reduces pipeline duration.

Requirements:

- Scenario isolation
- Thread safe resources
- Independent test data

Example Maven configuration:

```xml
<plugin>
 <groupId>org.apache.maven.plugins</groupId>
 <artifactId>maven-surefire-plugin</artifactId>
 <configuration>
   <parallel>methods</parallel>
   <threadCount>5</threadCount>
 </configuration>
</plugin>
```

Avoid excessive parallel threads.

---

## Reports and Artifacts

CI pipelines should store reports.

Typical flow:

```
Test Execution
      ↓
Reports Generated
      ↓
Reports Stored as Artifacts
      ↓
Team Reviews Results
```

Example pipeline snippet:

```yaml
artifacts:
 paths:
  - target/
```

Reports help debugging and auditing.

---

## Fail Fast Strategy

Fail fast pipelines stop early if critical tests fail.

Example:

```
smoke tests fail → pipeline stops
```

This prevents unnecessary stages.

Example:

```yaml
smoke_tests:
 script:
  - mvn test -Dcucumber.filter.tags="@smoke"
 allow_failure: false
```

---

## Handling Flaky Tests

Flaky tests reduce trust in automation.

Best practices:

- Tag flaky tests
- Quarantine unstable tests
- Fix root causes quickly

Example:

```
@flaky
Scenario: unstable test
```

---

## Security and Secrets

Never store credentials in code.

Use:

- CI secret variables
- vault systems
- environment variables

Example:

```yaml
variables:
 BASE_URL: https://example.com
 USERNAME: ${{ secrets.USERNAME }}
 PASSWORD: ${{ secrets.PASSWORD }}
```

---

## Common CI Mistakes

Avoid:

- running full regression on every commit
- hardcoding environment values
- ignoring flaky tests
- skipping report storage
- excessive parallel execution

---

## Interview Questions

**How do you run Cucumber tests in CI?**

Using runners triggered by pipeline scripts and controlled by tags.

---

**Why are tags important in CI?**

They control which tests run in different pipeline stages.

---

**How do you handle flaky tests?**

Identify, isolate, and fix them quickly.

---

## Key Takeaways

- CI/CD integration is essential
- Tags control pipeline execution
- Separate smoke, API, and UI tests
- Store reports as artifacts
- Maintain stable and reliable tests