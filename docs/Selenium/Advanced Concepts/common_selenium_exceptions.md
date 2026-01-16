---
sidebar_position: 7
---

# Common Selenium Exceptions

## Why This Topic Is Critical (Real Project View)
Selenium exceptions are **signals**, not problems by themselves. Most automation failures come from **misunderstanding what an exception actually means** and applying the wrong fix.

This document focuses on **UI-related exceptions only** and how to fix them correctly in real projects.

---

## 1. NoSuchElementException

### What It Means
Selenium cannot find the element in the DOM **at the time of lookup**.

### Common Causes
- Element not yet loaded
- Wrong locator
- Element inside iframe or shadow DOM

### Correct Fix
```java
wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
```

❌ Do NOT fix with `Thread.sleep()`.

---

## 2. TimeoutException

### What It Means
A wait condition was **not satisfied within the given timeout**.

### Common Causes
- Wrong ExpectedCondition
- Condition never becomes true
- Application bug

### Correct Fix
- Verify condition logic
- Validate app behavior
- Adjust timeout only if justified

---

## 3. StaleElementReferenceException

### What It Means
The element reference is **no longer attached to the DOM**.

### Common Causes
- DOM re-render
- Page refresh
- Dynamic UI updates

### Correct Fix
```java
wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
```

---

## 4. ElementNotInteractableException

### What It Means
Element exists but is **not in an interactable state**.

### Common Causes
- Element hidden
- Disabled element
- Overlays blocking interaction

### Correct Fix
```java
wait.until(ExpectedConditions.elementToBeClickable(locator));
```

---

## 5. ElementClickInterceptedException

### What It Means
Another element (overlay, popup) is blocking the click.

### Common Causes
- Loaders
- Sticky headers
- Animations

### Correct Fix
```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(loader));
```

---

## 6. InvalidSelectorException

### What It Means
The locator syntax itself is invalid.

### Common Causes
- Malformed XPath
- Invalid CSS selector

### Correct Fix
- Validate selector in browser dev tools
- Simplify locator

---

## 7. WebDriverException

### What It Means
A **generic driver-level failure**.

### Common Causes
- Browser crash
- Driver-browser mismatch
- Environment instability

### Correct Fix
- Update browser & driver
- Restart session
- Check CI environment

---

## What NOT to Do ❌

- Catch `Exception` broadly
- Ignore exceptions
- Add sleep blindly
- Retry infinitely

Exceptions must be **understood**, not hidden.

---

## Best Practices for Exception Handling ✅

- Read exception message fully
- Fix root cause, not symptom
- Use correct waits
- Add logging around failures
- Fail fast when appropriate

---

## Interview Notes 🎯

**Q: What is the most common Selenium exception?**  
A: `NoSuchElementException`.

**Q: Does TimeoutException mean locator is wrong?**  
A: Not always; often the wait condition is wrong.

**Q: Best way to handle Selenium exceptions?**  
A: Use correct waits and stable locators.

---

## Real-Project Tip 💡

If your framework suppresses exceptions, you will never fix flaky tests.

---

## Summary

- Exceptions indicate synchronization or locator issues
- Each exception has a specific fix
- Sleeps and retries are not solutions
- Understanding exceptions improves stability

Selenium 4 compliant • Real-project focused • Interview ready

