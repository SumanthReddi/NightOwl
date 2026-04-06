---
sidebar_position: 1
title: Runner Class and Cucumber Options
---

# Runner Class and Cucumber Options

The **Runner Class** is responsible for triggering Cucumber test execution. It defines **what to run, where to find it, and how results should be reported**.

Without a properly configured runner class, Cucumber tests will not execute correctly.

---

## What is a Runner Class?

The runner class:

- Starts Cucumber execution
- Connects Cucumber with JUnit or TestNG
- Defines feature paths, glue code, tags, and plugins

Example runner:

```java
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features",
    glue = {"stepdefinitions", "hooks"},
    tags = "@smoke",
    plugin = {"pretty","html:target/cucumber-report.html"},
    dryRun = false
)
public class TestRunner {
}
```

---

## Runner Responsibilities

The runner controls:

- Feature file locations
- Step definition packages
- Scenario execution using tags
- Report generation
- Dry run validation

Think of the runner as the **execution configuration** for Cucumber tests.

---

## Cucumber Runner Integrations

Cucumber can integrate with:

- **JUnit**
- **TestNG**

Choice depends on:

- Existing framework setup
- Parallel execution requirements
- Reporting needs

---

## Important Cucumber Options

### features

Specifies the path to feature files.

```java
features = "src/test/resources/features"
```

Best practice: point to a **folder instead of individual files**.

---

### glue

Defines packages containing step definitions and hooks.

```java
glue = {"stepdefinitions","hooks"}
```

Incorrect glue paths lead to **undefined steps**.

---

### tags

Used to control which scenarios should execute.

```java
tags = "@smoke"
tags = "not @wip"
tags = "@smoke and @regression"
```

Tags allow selective execution.

---

### plugin

Defines reporting plugins.

Common plugins:

- `pretty`
- `html`
- `json`
- `junit`

Example:

```java
plugin = {
"pretty",
"html:target/cucumber-report.html",
"json:target/cucumber.json"
}
```

---

### dryRun

Validates step definitions without executing tests.

```java
dryRun = true
```

Use during framework setup to detect **undefined steps**.

---

## Execution Flow

```
Runner Starts
     ↓
Features Located
     ↓
Glue Packages Loaded
     ↓
Scenarios Filtered by Tags
     ↓
Steps Matched
     ↓
Tests Executed
     ↓
Reports Generated
```

---

## Multiple Runner Strategy

Large projects often use multiple runners.

Examples:

- Smoke tests runner
- Regression runner
- API runner

### Smoke Runner Example

```java
@CucumberOptions(
 features="src/test/resources/features",
 glue={"stepdefinitions"},
 tags="@smoke"
)
public class SmokeRunner {
}
```

### Regression Runner Example

```java
@CucumberOptions(
 features="src/test/resources/features",
 glue={"stepdefinitions"},
 tags="@regression"
)
public class RegressionRunner {
}
```

Avoid using a single runner for all tests.

---

## Best Practices

- Use folder paths for features
- Ensure correct glue packages
- Avoid hardcoding tags
- Generate reports for CI pipelines
- Use dryRun during development

---

## Common Runner Mistakes

Avoid:

- Wrong feature path
- Incorrect glue configuration
- Mixing JUnit and TestNG configs
- Hardcoded execution tags
- Skipping dry run validation

---

## CI/CD Considerations

In CI pipelines:

- Tags control which tests run
- Reports are generated using plugins
- Runners define execution scope

Keep runners **environment independent**.

---

## Real Example

### Smoke Runner

```java
@CucumberOptions(
 features="src/test/resources/features",
 glue={"stepdefinitions","hooks"},
 tags="@smoke",
 plugin={"pretty","html:target/smoke-report.html"}
)
public class SmokeRunner {
}
```

### Regression Runner

```java
@CucumberOptions(
 features="src/test/resources/features",
 glue={"stepdefinitions","hooks"},
 tags="@regression",
 plugin={"pretty","html:target/regression-report.html"}
)
public class RegressionRunner {
}
```

---

## Interview Questions

**What is the runner class in Cucumber?**

The runner class configures and triggers execution of Cucumber tests.

---

**What does dryRun do?**

It validates step definitions without executing the tests.

---

**Why use multiple runners?**

To separate test suites like smoke, regression, and API tests.

---

## Key Takeaways

- Runner class triggers Cucumber execution
- `CucumberOptions` configure test behavior
- `glue` links feature steps to code
- `tags` enable selective execution
- `dryRun` validates step mappings