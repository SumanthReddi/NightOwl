---
sidebar_position: 3
title: Error Handling, Retries & Flaky Test Control
---

# Error Handling, Retries & Flaky Test Control

Flaky tests reduce trust in automation frameworks and disrupt CI/CD pipelines. This section explains how to **handle failures properly, apply retries carefully, and design stable Cucumber frameworks**.

---

## What is a Flaky Test

A flaky test:

- passes sometimes
- fails intermittently
- fails without code changes

Example causes:

- timing issues
- shared state conflicts
- unstable environments

Rule:

Retries hide problems. Fixes solve them.

---

## Common Causes of Flakiness

### Timing Issues

Tests fail when UI elements are not ready.

Solution: use explicit waits.

```java
WebDriverWait wait = new WebDriverWait(driver,10);
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("elementId")));
```

Avoid using:

```
Thread.sleep()
```

---

### Shared State

Static objects cause issues in parallel execution.

Solution: use ThreadLocal.

```java
private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();
```

---

### Test Data Collisions

Multiple tests modifying the same data.

Solution:

- generate unique data
- isolate test environments

---

### Environment Instability

External systems may fail intermittently.

Solution:

- retry transient failures
- mock unstable dependencies

---

### Over Parallelization

Too many threads can overload systems.

Solution:

- limit thread count
- monitor CI stability

---

## Error Handling Strategy

### Fail Fast

Validate conditions early.

```java
if(!driver.getCurrentUrl().contains("login")){
 throw new IllegalStateException("Not on login page");
}
```

Failing early saves pipeline time.

---

### Clear Assertions

Assertions should show meaningful failures.

```java
Assert.assertEquals(actualStatusCode,200,"Unexpected response status");
```

Clear messages simplify debugging.

---

## Retry Strategy

Retries should be:

- limited
- transparent
- applied at framework level

Retries should NOT be used for:

- assertion failures
- business logic defects
- deterministic failures

---

## Retry Implementation Example (TestNG)

```java
public class RetryAnalyzer implements IRetryAnalyzer {

 private int retryCount = 0;
 private static final int MAX_RETRY = 2;

 public boolean retry(ITestResult result){

  if(retryCount < MAX_RETRY){
   retryCount++;
   return true;
  }

  return false;

 }
}
```

Apply retry analyzer in tests.

---

## Designing Stable Tests

Stable frameworks follow these principles:

### Scenario Isolation

Each scenario must be independent.

---

### Controlled Test Data

Use unique test data per scenario.

---

### Explicit Waits

Prefer dynamic waits over static waits.

---

### Mock External Dependencies

Use tools like:

- WireMock
- Mockito

---

## Flaky Test Triage Process

```
Detect
   ↓
Classify (timing / data / environment)
   ↓
Fix root cause
   ↓
Validate stability
```

Retries should be removed after fixing the issue.

---

## CI/CD Considerations

In CI pipelines:

- tag flaky tests
- quarantine unstable scenarios
- fail fast for smoke tests
- monitor test stability metrics

Example:

```
@flaky
Scenario: unstable scenario
```

---

## Common Anti Patterns

Avoid:

- retrying every failure
- retry logic inside step definitions
- ignoring flaky tests
- increasing wait times blindly

---

## Interview Questions

**What is a flaky test?**

A test that fails intermittently without code changes.

---

**When should retries be used?**

Only for transient failures like temporary network issues.

---

**How do you control flaky tests in CI?**

Tag them, isolate them, and fix root causes quickly.

---

## Key Takeaways

- flaky tests damage automation credibility
- retries must be used carefully
- tests must be deterministic and isolated
- CI pipelines must track flaky scenarios
- stable automation builds team trust