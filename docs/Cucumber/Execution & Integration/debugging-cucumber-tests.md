---
sidebar_position: 6
title: Debugging Cucumber Tests
---

# Debugging Cucumber Tests

Debugging is an essential skill when working with Cucumber frameworks. Tests may fail due to incorrect step definitions, misconfigured runners, flaky UI interactions, or shared state issues.

This guide explains **how to identify, troubleshoot, and fix common Cucumber test failures**.

---

## Why Debugging Matters

Cucumber failures often come from:

- Undefined or mismatched steps
- Incorrect runner configuration
- Flaky UI tests
- Shared state conflicts in parallel execution
- Incorrect assertions

Effective debugging helps:

- Identify root causes faster
- Improve test stability
- Reduce maintenance time

> Always debug the **root cause**, not just the symptom.

---

## Common Issues in Cucumber Tests

### Undefined Steps

Cause:
- Step definition missing
- Step text mismatch

Example error:
```
Step is undefined
```

Solution:

Use **dryRun** to verify step definitions.

```java
@CucumberOptions(
 features = "src/test/resources/features",
 glue = {"steps","hooks"},
 dryRun = true
)
public class TestRunner {
}
```

---

### Incorrect Runner Configuration

Symptoms:

- Scenarios not executing
- Wrong scenarios executing

Check:

- feature path
- glue packages
- tags

Example:

```java
@CucumberOptions(
 features = "src/test/resources/features",
 glue = {"steps","hooks"},
 tags = "@smoke"
)
```

---

### Flaky Tests

Common causes:

- UI timing issues
- unstable environment
- shared state

Solution: use explicit waits.

```java
WebDriverWait wait = new WebDriverWait(driver,10);
wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
```

Avoid:

```
Thread.sleep()
```

---

### Shared State Conflicts

Occurs during **parallel execution**.

Cause:

- static variables
- shared WebDriver instance

Solution:

Use **ThreadLocal**.

```java
public class DriverManager {

 private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

 public static WebDriver getDriver(){
     return driver.get();
 }

 public static void setDriver(WebDriver webDriver){
     driver.set(webDriver);
 }

}
```

---

### Assertion Failures

Cause:

- incorrect expected value
- incorrect locator
- API response mismatch

Example:

```java
Assert.assertEquals(response.getStatusCode(),200);
```

Always log **actual vs expected values**.

---

## Debugging Techniques

### Logging

Add logs in steps.

```java
System.out.println("Creating order with product: " + product);
```

Logs help track execution flow.

---

### IDE Breakpoints

Steps:

1. Open step definition in IDE
2. Add breakpoint
3. Run test in debug mode
4. Inspect variables

Works well in IntelliJ / Eclipse / VS Code.

---

### Dry Run Mode

Use dryRun to validate step mappings.

```java
dryRun = true
```

Benefits:

- Detect undefined steps
- Validate glue configuration

---

### Reporting Plugins

Plugins provide detailed execution insights.

Example:

```java
plugin = {
 "pretty",
 "html:target/cucumber-report.html",
 "json:target/cucumber.json"
}
```

Reports show:

- failed steps
- stack traces
- execution time

---

## Useful Debugging Tools

### IDE Debuggers

- IntelliJ IDEA
- Eclipse
- VS Code

Used for stepping through code and inspecting variables.

---

### Browser Developer Tools

Useful for UI automation debugging.

Inspect:

- DOM
- network requests
- console errors

---

### API Tools

Use tools like:

- Postman
- Insomnia

to validate API requests outside the framework.

---

## Debugging Flaky UI Tests (Example)

Problem:

Login test fails intermittently.

Debug steps:

1. Add logging

```java
System.out.println("Entering username");
```

2. Add explicit wait

```java
wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
```

3. Check CI environment logs

4. Run tests in headless mode locally

---

## Best Practices

- Debug small scenarios first
- Isolate failing scenarios
- Always check logs
- Avoid shared state
- Fix root causes instead of adding sleeps

---

## Interview Questions

**How do you debug undefined steps?**

Use dryRun to detect missing step definitions.

---

**What causes flaky UI tests?**

Timing issues, shared state, unstable environments.

---

**How do you debug API tests?**

Log responses and validate endpoints using Postman.

---

## Key Takeaways

- Debugging ensures framework stability
- Use dryRun to validate step mappings
- Logs and breakpoints help trace issues
- Thread safety is critical for parallel tests
- Always investigate root causes