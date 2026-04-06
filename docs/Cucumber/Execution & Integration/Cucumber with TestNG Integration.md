---
sidebar_position: 2
title: Cucumber with TestNG Integration
---

# Cucumber with TestNG Integration

Cucumber focuses on **Behavior Driven Development (BDD)** and scenario execution, but it relies on test frameworks like **TestNG** to manage execution control, lifecycle handling, and parallel execution.

Integrating Cucumber with TestNG is common in large automation frameworks.

---

## Why Integrate Cucumber with TestNG

TestNG provides features that Cucumber alone does not handle effectively:

- Parallel test execution
- Suite-level execution control
- Flexible configuration using XML
- Integration with CI/CD pipelines
- Rich reporting integrations

Rule:

> Cucumber defines **what to test**, TestNG defines **how tests run**.

---

## Execution Architecture

Typical execution flow:

```
TestNG
   ↓
Cucumber Runner
   ↓
Feature Files
   ↓
Step Definitions
   ↓
Automation Code
```

TestNG orchestrates execution while Cucumber handles BDD logic.

---

## Runner Class with TestNG

To integrate with TestNG, the runner class must extend:

```
AbstractTestNGCucumberTests
```

### Example Runner

```java
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
 features="src/test/resources/features",
 glue={"stepdefinitions","hooks"},
 tags="@smoke",
 plugin={"pretty","html:target/cucumber-report.html"}
)
public class TestNGRunner extends AbstractTestNGCucumberTests {
}
```

The runner connects TestNG with Cucumber execution.

---

## Assertions with TestNG

Assertions validate expected results inside step definitions.

Example:

```java
import org.testng.Assert;

@Then("I should see the dashboard")
public void verifyDashboard(){

    String title = driver.getTitle();

    Assert.assertTrue(title.contains("Dashboard"));

}
```

Assertions should remain inside **step definitions or helper classes**.

---

## Parallel Execution Awareness

TestNG supports parallel execution using:

- TestNG XML configuration
- Thread management

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

## Thread Safety

Parallel execution requires thread-safe resources.

Example WebDriver manager:

```java
public class DriverManager {

 private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

 public static WebDriver getDriver(){
     return driver.get();
 }

 public static void setDriver(WebDriver webDriver){
     driver.set(webDriver);
 }

 public static void closeDriver(){

     if(driver.get()!=null){
         driver.get().quit();
         driver.remove();
     }

 }

}
```

Each thread receives its own WebDriver instance.

---

## Tag-Based Execution

Tags control which scenarios execute.

Example runner:

```java
@CucumberOptions(
 features="src/test/resources/features",
 glue={"stepdefinitions"},
 tags="@smoke"
)
public class SmokeRunner extends AbstractTestNGCucumberTests {
}
```

Tags allow running:

- Smoke tests
- Regression tests
- API tests

---

## Cucumber vs TestNG Responsibilities

| Responsibility | Cucumber | TestNG |
|---------------|----------|--------|
| Feature files | Yes | No |
| Step definitions | Yes | No |
| Scenario execution | Yes | No |
| Parallel execution | No | Yes |
| Suite control | No | Yes |
| Assertions | No | Yes |

---

## Common Mistakes

Avoid:

- Treating Cucumber as a replacement for TestNG
- Placing assertions inside hooks
- Ignoring thread safety
- Writing complex logic in runners

Keep responsibilities clearly separated.

---

## CI/CD Integration

In CI/CD pipelines:

- TestNG executes runners
- Tags determine execution scope
- Plugins generate reports
- Failures control pipeline status

Example pipeline command:

```
mvn test -Dcucumber.filter.tags="@smoke"
```

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
public class SmokeRunner extends AbstractTestNGCucumberTests {
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
public class RegressionRunner extends AbstractTestNGCucumberTests {
}
```

---

## Interview Questions

**Why use TestNG with Cucumber?**

TestNG provides execution control, parallel execution, and CI/CD integration.

---

**Can Cucumber run without TestNG?**

Yes, but large frameworks benefit from TestNG features.

---

**How do you handle parallel execution safely?**

Use ThreadLocal for shared objects and ensure scenario isolation.

---

## Key Takeaways

- TestNG manages execution while Cucumber manages BDD logic
- Runner class connects TestNG and Cucumber
- Parallel execution requires thread safety
- Tags enable flexible test execution
- Integration improves framework scalability