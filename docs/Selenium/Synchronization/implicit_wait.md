---
sidebar_position: 2
---

# Implicit Wait

## What Implicit Wait Does (Real Project View)
Implicit wait tells Selenium to **poll the DOM for a fixed duration** when trying to locate elements. If the element appears within the timeout, execution continues immediately.

It applies **globally** to all `findElement` / `findElements` calls.

---

## How Implicit Wait Works Internally

- Selenium keeps retrying element lookup
- Polls the DOM at regular intervals
- Stops as soon as the element is found
- Throws exception only after timeout

It does **NOT** wait for:
- Clickability
- Visibility
- Text change

Only for **element presence**.

---

## Setting Implicit Wait (Selenium 4+)

```java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
```

Once set, it remains active **for the entire WebDriver session**.

---

## Real-World Usage Scenario

Example:
- Page loads
- Element appears after API call
- `findElement()` waits up to 10 seconds

```java
WebElement username = driver.findElement(By.id("username"));
username.sendKeys("admin");
```

---

## What Implicit Wait Does NOT Solve

❌ Element is present but not clickable  
❌ Element is present but hidden  
❌ Waiting for text change  
❌ Waiting for page state changes

For these, **explicit waits are required**.

---

## Implicit Wait + Explicit Wait (Important Rule)

⚠️ **Do NOT mix implicit and explicit waits.**

Why:
- Combined waits cause unpredictable delays
- Explicit waits may wait **longer than expected**
- Debugging becomes difficult

---

## Performance Impact

- High implicit wait slows failures
- Every missing element waits full timeout
- Makes test execution less predictable

---

## When (and When NOT) to Use Implicit Wait

### Acceptable Use
- Very small projects
- Simple static pages
- Quick POCs

### Avoid In
- Enterprise frameworks
- Dynamic SPAs
- CI/CD pipelines

---

## Common Mistakes ❌

1. Setting very high implicit wait (30–60s)
2. Mixing implicit and explicit waits
3. Assuming it waits for clickability
4. Forgetting it is global
5. Using it as a quick fix for flaky tests

---

## Best Practices ✅

- Prefer explicit waits over implicit waits
- If used, keep it **very low (2–5s)**
- Set it once during driver initialization
- Never change it dynamically
- Document its usage clearly in framework

---

## Interview Notes 🎯

**Q: What is implicit wait?**  
A: A global wait applied to element lookup.

**Q: Does implicit wait wait for visibility?**  
A: No, only for element presence.

**Q: Can we mix implicit and explicit waits?**  
A: No, it causes unpredictable behavior.

---

## Real-Project Tip 💡

Most modern frameworks **avoid implicit waits completely** and rely only on explicit waits.

---

## Summary

- Implicit wait is global
- Waits only for presence
- Not suitable for dynamic apps
- Explicit waits are safer

Selenium 4 compliant • Enterprise-aware • Interview ready