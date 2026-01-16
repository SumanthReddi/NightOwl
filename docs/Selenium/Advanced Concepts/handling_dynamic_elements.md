---
sidebar_position: 5
---

# Handling Dynamic Elements

## Why Dynamic Elements Are a Real Problem
Dynamic elements change **after page load** due to:
- AJAX / API calls
- JavaScript re-rendering
- Conditional UI logic
- SPA frameworks (React, Angular, Vue)

Most flaky Selenium tests fail **here**, not because of bad locators.

---

## Common Dynamic Behaviors

- Element appears/disappears
- Element becomes clickable later
- Text/value changes dynamically
- Element is replaced in DOM
- List size changes

Each behavior needs a **different handling strategy**.

---

## 1. Element Appears After Delay

### ❌ Wrong
```java
driver.findElement(By.id("msg")).click();
```

### ✅ Correct
```java
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("msg"))).click();
```

---

## 2. Element Becomes Clickable Later

```java
wait.until(ExpectedConditions.elementToBeClickable(By.id("submit"))).click();
```

Use this when overlays/loaders block clicks.

---

## 3. Waiting for Text or Value Change

```java
wait.until(ExpectedConditions.textToBePresentInElement(
    driver.findElement(By.id("status")), "Completed"
));
```

---

## 4. Handling Elements That Disappear

### Loader / Spinner
```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("loader")));
```

Always wait for disappearance **before next action**.

---

## 5. Re-Locating Replaced Elements

Dynamic frameworks often **replace DOM nodes**.

```java
wait.until(ExpectedConditions.refreshed(
    ExpectedConditions.visibilityOfElementLocated(By.id("profile"))
));
```

---

## 6. Handling Dynamic Lists / Tables

```java
wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(
    By.cssSelector(".result-row"), 0
));
```

Validate count **after** wait.

---

## 7. Avoiding Stale Element Issues

❌ Store WebElement too early
```java
WebElement btn = driver.findElement(By.id("save"));
```

✅ Locate after wait
```java
wait.until(ExpectedConditions.elementToBeClickable(By.id("save"))).click();
```

---

## What NOT to Do ❌

- Thread.sleep
- Fixed waits
- Blind retries
- Index-based XPath
- Assuming UI timing

---

## Common Mistakes ❌

1. Waiting for presence instead of visibility
2. Ignoring element replacement
3. Using implicit wait as a fix
4. Hardcoding delays
5. Debugging without logs

---

## Best Practices ✅

- Always identify the **dynamic behavior type**
- Use the **correct ExpectedCondition**
- Re-locate elements after DOM changes
- Encapsulate waits inside page methods
- Log waits for debugging

---

## Interview Notes 🎯

**Q: What causes dynamic element issues?**  
A: Asynchronous UI updates.

**Q: How do you handle elements replaced in DOM?**  
A: Re-locate elements using refreshed conditions.

**Q: Best solution for dynamic UI?**  
A: Explicit waits with correct conditions.

---

## Real-Project Tip 💡

If a test fails only in CI and not locally, it’s almost always a **dynamic timing issue**.

---

## Summary

- Dynamic elements are unavoidable
- Correct waits solve most issues
- Element re-location is critical
- Avoid static waits

Selenium 4 compliant • Real-project focused • Interview ready

