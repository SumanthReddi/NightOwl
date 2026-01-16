---
sidebar_position: 5
---

# Wait-Related Failure Fix

## Why This Exercise Exists (Real Project Context)
A large percentage of Selenium failures are **wait-related**, not locator-related. This exercise demonstrates how to **identify, diagnose, and fix** wait issues using correct synchronization patterns.

This mirrors real production incidents where tests fail intermittently in CI.

---

## Typical Failure Scenario

**Symptom:**
- Test fails randomly with `NoSuchElementException` or `TimeoutException`
- Passes locally, fails in CI

**Root Cause:**
- UI element appears after an async operation

---

## Failing Test Example ❌

```java
@Test
public void submitForm_Flaky() {
    driver.findElement(By.id("submit")).click();
    driver.findElement(By.id("successMsg")).isDisplayed();
}
```

Why it fails:
- `successMsg` appears after API call
- Selenium checks too early

---

## Step 1: Identify the Missing Condition

Ask:
- What UI change am I waiting for?
- Visibility? Clickability? Text change? Disappearance?

Here: **visibility of success message**.

---

## Step 2: Apply Correct Explicit Wait ✅

```java
@Test
public void submitForm_Stable() {
    driver.findElement(By.id("submit")).click();

    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("successMsg")));
}
```

Execution now waits **only as long as needed**.

---

## Step 3: Handle Click Interception

If click fails due to loader:

```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loader")));
wait.until(ExpectedConditions.elementToBeClickable(By.id("submit"))).click();
```

---

## Step 4: Handle Text-Based Transitions

```java
wait.until(ExpectedConditions.textToBePresentInElementLocated(
    By.id("status"), "Completed"
));
```

---

## Step 5: Fix Stale Element Failures

```java
wait.until(ExpectedConditions.refreshed(
    ExpectedConditions.visibilityOfElementLocated(By.id("result"))
));
```

---

## What NOT to Do ❌

```java
Thread.sleep(5000);
```

Why this is wrong:
- Static wait
- Slows tests
- Still flaky under load

---

## Real CI Debugging Checklist

- Is the condition correct?
- Is the timeout realistic?
- Is the element dynamic?
- Does failure happen only in headless mode?

---

## Common Mistakes ❌

1. Increasing timeouts blindly
2. Adding sleep after failures
3. Using presence instead of visibility
4. Mixing implicit and explicit waits
5. Ignoring loader elements

---

## Best Practices ✅

- Always wait for a **state change**
- Use explicit waits only
- Encapsulate waits in page methods
- Log wait-related failures
- Fix once, reuse everywhere

---

## Interview Notes 🎯

**Q: Why do wait-related failures occur?**  
A: Selenium executes faster than UI updates.

**Q: Best way to fix flaky waits?**  
A: Identify correct condition and apply explicit waits.

**Q: Is increasing timeout a solution?**  
A: No, condition correctness matters more.

---

## Real-Project Tip 💡

If a test needs a long wait, it usually means the **wrong condition** is being waited for.

---

## Summary

- Most Selenium failures are wait-related
- Identify the exact UI condition
- Use explicit waits correctly
- Never use Thread.sleep

Selenium 4 compliant • CI-safe • Interview