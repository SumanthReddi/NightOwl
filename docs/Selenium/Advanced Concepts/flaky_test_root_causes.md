---
sidebar_position: 9
---

# Flaky Test Root Causes

## Why Flaky Tests Are Dangerous (Real Project Context)
Flaky tests are tests that **pass and fail without any code changes**. They erode trust in automation, slow CI/CD, and cause teams to ignore real failures.

Most flaky tests are caused by **design and synchronization issues**, not Selenium itself.

---

## Primary Root Causes (Ordered by Frequency)

### 1. Synchronization Issues (Most Common)

**Symptoms**:
- Passes locally, fails in CI
- Random `TimeoutException`

**Root Cause**:
- Missing or incorrect waits

**Correct Fix**:
```java
wait.until(ExpectedConditions.elementToBeClickable(locator));
```

---

### 2. Dynamic UI / DOM Re-rendering

**Symptoms**:
- `StaleElementReferenceException`
- Failures after filters, sort, pagination

**Root Cause**:
- Storing old WebElement references

**Correct Fix**:
- Re-locate elements after DOM changes
- Use `ExpectedConditions.refreshed()`

---

### 3. Unstable or Weak Locators

**Symptoms**:
- Tests break after minor UI changes

**Root Cause**:
- Index-based XPath
- Auto-generated attributes

**Correct Fix**:
- Prefer `id`, `name`, stable CSS
- Use relative XPath only when needed

---

### 4. Thread.sleep Usage

**Symptoms**:
- Slow test execution
- Random failures under load

**Root Cause**:
- Fixed delays instead of conditions

**Correct Fix**:
- Replace with explicit or fluent waits

---

### 5. Environment Differences (Local vs CI)

**Symptoms**:
- Works locally, fails in pipeline

**Root Cause**:
- Headless execution
- Slower machines
- Parallel execution

**Correct Fix**:
- Align local and CI configs
- Add condition-based waits

---

### 6. Test Data Dependencies

**Symptoms**:
- Fails when data already exists
- Order-dependent failures

**Root Cause**:
- Shared or hardcoded data

**Correct Fix**:
- Create isolated test data
- Clean up after tests

---

### 7. Shared State Between Tests

**Symptoms**:
- Tests fail when run together

**Root Cause**:
- Reusing sessions
- Not resetting application state

**Correct Fix**:
- Independent tests
- Proper setup/teardown

---

## What Flaky Tests Are NOT Caused By ❌

- Selenium bugs (rare)
- Slow internet alone
- Browser version updates alone

Almost always a **framework or test design issue**.

---

## How to Systematically Eliminate Flakiness

1. Identify failure pattern
2. Categorize root cause
3. Apply correct wait/locator fix
4. Validate in CI
5. Remove temporary hacks

---

## Common Anti-Patterns ❌

- Increasing timeouts globally
- Adding sleeps everywhere
- Ignoring flaky failures
- Retrying tests blindly

---

## Best Practices ✅

- Zero tolerance for sleeps
- Strong locator strategy
- Explicit waits everywhere
- Isolated, independent tests
- CI-first mindset

---

## Interview Notes 🎯

**Q: What is a flaky test?**  
A: A test that fails intermittently without code changes.

**Q: Main cause of flakiness?**  
A: Synchronization issues.

**Q: How do you fix flaky tests?**  
A: Identify root cause and apply correct waits or locator fixes.

---

## Real-Project Tip 💡

If a flaky test is ignored long enough, it becomes a **permanent blind spot** in CI.

---

## Summary

- Flaky tests destroy confidence
- Most causes are preventable
- Fix design, not symptoms
- Stable tests come from disciplined practices
