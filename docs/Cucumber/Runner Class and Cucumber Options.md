---
sidebar_position: 15
title: Runner Class & Cucumber Options
---

# Runner Class & Cucumber Options

The **Runner Class** is the control center for executing Cucumber tests.  
It tells Cucumber **what to run, where to find it, and how to report results**.

Understanding the runner properly prevents **undefined steps, wrong executions, and CI failures**.

---

## What is a Runner Class?

A runner class:
- Triggers Cucumber execution.
- Connects Cucumber with TestNG or JUnit.
- Configures features, glue, tags, plugins, and dry run.

Cucumber itself does not start execution — the runner does.  
Without a properly configured runner, your automation framework will fail to execute tests as expected.

### Example of a Runner Class:

```java
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features", // Path to feature files
    glue = {"stepdefinitions", "hooks"},     // Packages containing step definitions and hooks
    tags = "@smoke",                        // Run only scenarios tagged with @smoke
    plugin = {"pretty", "html:target/cucumber-reports.html"}, // Reporting plugins
    dryRun = false                          // Set to true to validate step definitions without execution
)
public class TestRunner {
}
```

---

## Runner Responsibilities

The runner controls:
- **Feature file location**: Where are the `.feature` files stored?
- **Step definition (glue) location**: Which packages contain the step definitions and hooks?
- **Tags for selective execution**: Which scenarios should be executed based on tags?
- **Reporting plugins**: How should the test results be reported?
- **Dry run behavior**: Should the framework validate step definitions without executing them?

Think of the runner as the **execution configuration file**. It acts as the bridge between your feature files, step definitions, and reporting tools.

---

## Common Runner Integrations

- **Cucumber + TestNG** (most common in automation frameworks)
- **Cucumber + JUnit**

### Choice Depends On:
- **Existing framework**: If your team already uses TestNG, it makes sense to integrate Cucumber with TestNG.
- **Parallel execution needs**: TestNG provides better support for parallel execution compared to JUnit.
- **Reporting preferences**: Some teams prefer JUnit for its simplicity, while others use TestNG for advanced reporting capabilities.

---

## Key Cucumber Options (Detailed Explanation)

### `features`
- **Description**: Specifies the path to `.feature` files.
- **Best Practice**: Point to a folder rather than individual files. This ensures scalability as your project grows.

```java
features = "src/test/resources/features"
```

---

### `glue`
- **Description**: Defines the package(s) containing step definitions and hooks.
- **Critical Note**: Incorrect glue configuration leads to undefined steps. Always ensure that the glue points to the correct package(s).

```java
glue = {"stepdefinitions", "hooks"}
```

---

### `tags`
- **Description**: Controls which scenarios are executed based on tags.
- **Usage**: Tags enable selective execution, such as running smoke tests, regression tests, or sanity checks.

```java
tags = "@smoke" // Runs only scenarios tagged with @smoke
tags = "not @wip" // Excludes scenarios tagged with @wip
tags = "@smoke and @regression" // Runs scenarios tagged with both @smoke and @regression
```

---

### `plugin`
- **Description**: Configures reporting plugins. Plugins do not affect execution logic but determine how results are reported.
- **Common Plugins**:
  - `pretty`: Prints detailed logs to the console.
  - `html`: Generates an HTML report.
  - `json`: Generates a JSON report for integration with CI/CD tools.

```java
plugin = {"pretty", "html:target/cucumber-reports.html", "json:target/cucumber-reports.json"}
```

---

### `dryRun`
- **Description**: Validates step definitions without executing the automation code.
- **Use Case**: Use `dryRun = true` during setup to detect undefined steps or misconfigurations in the glue.

```java
dryRun = true // Validates step definitions without executing tests
```

---

## Typical Execution Flow

```
Runner Starts
   ↓
Features Located
   ↓
Glue Loaded
   ↓
Scenarios Filtered by Tags
   ↓
Steps Matched
   ↓
Execution Happens
   ↓
Reports Generated
```

---

## Multiple Runners Strategy

In large projects, using multiple runners is a best practice. Each runner serves a specific purpose:
- **Smoke Runner**: Executes only smoke tests.
- **Regression Runner**: Executes comprehensive regression tests.
- **API Runner**: Focuses on API-related tests.

### Example of Multiple Runners:

#### Smoke Runner:
```java
@CucumberOptions(
    features = "src/test/resources/features",
    glue = {"stepdefinitions", "hooks"},
    tags = "@smoke",
    plugin = {"pretty", "html:target/smoke-reports.html"}
)
public class SmokeRunner {
}
```

#### Regression Runner:
```java
@CucumberOptions(
    features = "src/test/resources/features",
    glue = {"stepdefinitions", "hooks"},
    tags = "@regression",
    plugin = {"pretty", "html:target/regression-reports.html"}
)
public class RegressionRunner {
}
```

Avoid creating one massive runner for everything. Instead, divide responsibilities among multiple runners for better maintainability.

---

## Common Runner Mistakes ❌

- **Wrong feature path**: Ensure the `features` option points to the correct directory.
- **Incorrect glue package**: Double-check that the `glue` option includes all necessary packages.
- **Hardcoding tags**: Avoid hardcoding tags in the runner. Use environment variables or CI configurations instead.
- **Mixing JUnit and TestNG configs**: Stick to one framework to avoid conflicts.
- **Forgetting dry run during setup**: Always perform a dry run to validate step definitions before full execution.

---

## CI/CD Awareness

In CI/CD pipelines:
- The runner controls the execution scope.
- Tags drive pipeline stages (e.g., smoke tests in the build stage, regression tests in the deployment stage).
- Reports are generated via plugins and integrated into dashboards.

Runner configuration should be **environment-agnostic**. Avoid hardcoding paths or tags that are specific to local environments.

---

## Interview-Ready Questions

**Q: What is the purpose of a runner class?**  
A: The runner class configures and triggers Cucumber execution. It specifies the feature files, step definitions, tags, and reporting plugins.

**Q: What does `dryRun` do?**  
A: `dryRun` validates step definitions without executing the automation code. It helps detect undefined steps or misconfigurations during setup.

**Q: Why use multiple runners in a project?**  
A: Multiple runners allow you to organize tests by type (e.g., smoke, regression, API) for better maintainability and scalability.

---

## Key Takeaways

- The runner class controls the entire execution flow.
- `CucumberOptions` define the behavior of the test execution.
- Correct `glue` configuration is critical to avoid undefined steps.
- Tags enable selective execution, making your framework flexible.
- `dryRun` saves time during setup by validating step definitions without executing tests.
- Use multiple runners for large projects to improve maintainability and scalability.