---
sidebar_position: 6
---

# Real Interview UI Scenarios

## Why This Section Matters
Interviewers rarely ask syntax. They ask **how you handle real UI problems** under pressure. This document covers **common interview UI scenarios** with the *expected thought process and solution approach*.

All scenarios are Selenium **4+**, UI-only, and framework-agnostic.

---

## Scenario 1: Button Is Visible but Not Clickable

**Problem**: `ElementClickInterceptedException`

**Root Causes**:
- Loader overlay
- Sticky header
- Animation in progress

**Correct Fix**:
```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loader")));
wait.until(ExpectedConditions.elementToBeClickable(By.id("submit"))).click();
```

**What Interviewer Expects**:
- You wait for the blocking element
- You don’t use JavaScript click immediately

---

## Scenario 2: Element Exists but Test Fails Randomly

**Problem**: `NoSuchElementException` in CI only

**Root Causes**:
- Dynamic rendering
- Timing difference in headless mode

**Correct Fix**:
```java
wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
```

**Interview Expectation**:
- You identify it as a synchronization issue

---

## Scenario 3: StaleElementReferenceException After Page Update

**Problem**: Element worked earlier, fails after filter/sort

**Correct Fix**:
```java
wait.until(ExpectedConditions.refreshed(
    ExpectedConditions.elementToBeClickable(locator)
)).click();
```

**Interview Expectation**:
- You explain DOM re-rendering
- You re-locate elements

---

## Scenario 4: Dropdown Options Load Dynamically

**Problem**: Options not present immediately

**Correct Fix**:
```java
wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(
    By.cssSelector(".dropdown-option"), 0
));
```

**Interview Expectation**:
- You wait for list population

---

## Scenario 5: Element Inside iFrame Not Found

**Problem**: `NoSuchElementException`

**Correct Fix**:
```java
driver.switchTo().frame("paymentFrame");
```

**Interview Expectation**:
- You mention frame context explicitly

---

## Scenario 6: Shadow DOM Element Not Accessible

**Problem**: Locator never works

**Correct Fix (Selenium 4)**:
```java
SearchContext shadow = host.getShadowRoot();
shadow.findElement(By.cssSelector("input"));
```

**Interview Expectation**:
- You differentiate open vs closed Shadow DOM

---

## Scenario 7: Test Passes Locally but Fails in CI

**Root Causes**:
- Headless mode
- Slower execution
- Resolution differences

**Fix Strategy**:
- Use condition-based waits
- Set window size explicitly

---

## What NOT to Say in Interviews ❌

- “I increase sleep time”
- “It works on my machine”
- “Selenium is unstable”

---

## What Interviewers Look For ✅

- Root-cause thinking
- Correct wait usage
- Awareness of modern UI behavior
- Framework discipline

---

## Quick Interview One-Liners 🎯

- “Most Selenium failures are synchronization issues.”
- “Stale elements happen due to DOM re-rendering.”
- “Grid exposes test design issues, not Selenium issues.”

---

## Summary

- Interview UI questions are scenario-based
- Correct diagnosis matters more than code
- Explicit waits solve most problems
- Confidence comes from real-project experience

Selenium 4 compliant • Interview-focused • Real-world ready