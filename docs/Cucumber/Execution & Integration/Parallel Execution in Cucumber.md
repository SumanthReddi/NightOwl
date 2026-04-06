---
sidebar_position: 5
title: Parallel Execution in Cucumber
---

# Parallel Execution in Cucumber

Parallel execution is essential for **reducing execution time** in large automation suites. However, incorrect parallel configuration can introduce **flaky tests** if shared state and thread safety are not handled properly.

This guide explains how **parallel execution works in Cucumber**, how to configure it safely, and best practices for stable parallel test execution.

---

## Why Parallel Execution?

Parallel execution helps:

- Reduce total execution time
- Improve CI/CD pipeline efficiency
- Scale large regression suites
- Provide faster feedback to teams

> Parallelism improves speed, not test quality — design must be correct first.

---

## How Cucumber Supports Parallel Execution

Cucumber itself executes **scenarios independently**, but relies on test frameworks like:

- TestNG
- JUnit

to manage threading and parallel execution.

Parallel execution is typically controlled using:

- TestNG XML configuration
- Runner configuration
- Maven or CLI parameters

---

## Levels of Parallel Execution

### Scenario Level Parallelism (Recommended)

Each scenario runs in a separate thread.

Benefits:

- Best isolation
- Stable execution
- Suitable for UI and API tests

Example TestNG configuration:

```xml
<suite name="Cucumber Suite" parallel="methods" thread-count="5">
    <test name="Smoke Tests">
        <classes>
            <class name="runners.SmokeRunner"/>
        </classes>
    </test>
</suite>
```

---

### Feature Level Parallelism

Each feature file runs in parallel, while scenarios inside the feature run sequentially.

Use when:

- Feature requires heavy setup
- Shared context within feature

Example:

```xml
<suite name="Cucumber Suite" parallel="tests" thread-count="3">
    <test name="Feature A">
        <classes>
            <class name="runners.FeatureARunner"/>
        </classes>
    </test>
</suite>
```

---

### Step Level Parallelism

Running steps inside scenarios in parallel is not recommended.

Reasons:

- Breaks logical execution flow
- Causes unstable results

Avoid step-level parallelism.

---

## Thread Safety (Critical)

Parallel execution requires thread-safe resource management.

### ThreadLocal WebDriver Example

```java
public class DriverManager {

    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

    public static WebDriver getDriver() {
        return driver.get();
    }

    public static void setDriver(WebDriver webDriver) {
        driver.set(webDriver);
    }

    public static void closeDriver() {
        if (driver.get() != null) {
            driver.get().quit();
            driver.remove();
        }
    }
}
```

Each thread receives its own WebDriver instance.

---

## Scenario Context Isolation

Shared data should be scenario-scoped.

Example:

```java
public class ScenarioContext {

    private Response response;

    public Response getResponse() {
        return response;
    }

    public void setResponse(Response response) {
        this.response = response;
    }
}
```

Avoid global shared state.

---

## Common Parallel Execution Problems

### Static WebDriver

Using static WebDriver causes conflicts across threads.

Solution:

Use ThreadLocal WebDriver.

---

### Shared Test Data

Multiple threads using the same data may cause failures.

Solution:

Use unique or generated data per scenario.

---

### Scenario Dependencies

Scenarios should never depend on execution order.

Solution:

Ensure scenarios are independent.

---

## Conceptual Execution Flow

```
Thread 1 → Scenario A
Thread 2 → Scenario B
Thread 3 → Scenario C
```

Each scenario must be:

- Independent
- Isolated
- Self-cleaning

---

## Parallel Execution in CI/CD

Parallel execution significantly reduces CI pipeline duration.

Example Maven command:

```
mvn test -Dcucumber.execution.parallel.enabled=true
```

Example CI pipeline snippet:

```yaml
parallel_tests:
  script:
    - mvn test -Dcucumber.filter.tags="@regression"
```

Tune thread count based on machine resources.

---

## Best Practices

- Prefer scenario-level parallel execution
- Use ThreadLocal for shared resources
- Keep scenarios independent
- Validate parallel execution locally
- Increase threads gradually

---

## Interview Questions

**Can Cucumber scenarios run in parallel?**

Yes, using TestNG or JUnit configuration.

---

**What is the biggest risk in parallel execution?**

Shared state causing flaky tests.

---

**How do you ensure thread safety?**

Using ThreadLocal and scenario-scoped context.

---

## Key Takeaways

- Parallel execution reduces test runtime
- Scenario-level parallelism is recommended
- Thread safety is mandatory
- Avoid shared state between tests