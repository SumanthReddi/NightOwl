---
sidebar_position: 3
---

# Explicit Wait

## What Explicit Wait Solves (Real Project View)
Explicit waits allow Selenium to **wait for a specific condition** before proceeding. Unlike implicit waits, they are **targeted, condition-based, and predictable**.

Explicit waits are the **default choice in enterprise Selenium frameworks**.

---

## Core Concept

- Waits are applied **per element / per condition**
- Selenium polls the DOM until condition is met or timeout occurs
- Execution continues immediately once condition is satisfied

---

## Basic Syntax (Selenium 4+)

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
```

---

## Most Used ExpectedConditions (Real Projects)

### 1. Visibility of Element
```java
WebElement loginBtn = wait.until(
    ExpectedConditions.visibilityOfElementLocated(By.id("login"))
);
```

### 2. Element to Be Clickable
```java
WebElement submit = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submit"))
);
submit.click();
```

### 3. Presence of Element (DOM Only)
```java
wait.until(ExpectedConditions.presenceOfElementLocated(By.id("userId")));
```

### 4. Text to Be Present
```java
wait.until(ExpectedConditions.textToBePresentInElementLocated(
    By.id("status"), "Success"
));
```

---

## Waiting for Disappearance (Very Common)

### Loader / Spinner Disappear
```java
wait.until(ExpectedConditions.invisibilityOfElementLocated(
    By.id("loader")
));
```

---

## Waiting for Page State Changes

### URL Change
```java
wait.until(ExpectedConditions.urlContains("dashboard"));
```

### Title Change
```java
wait.until(ExpectedConditions.titleContains("Home"));
```

---

## Handling Stale Elements

```java
wait.until(ExpectedConditions.refreshed(
    ExpectedConditions.visibilityOfElementLocated(By.id("profile"))
));
```

---

## Custom Explicit Wait (Advanced but Practical)

Use when no built-in condition fits.

```java
wait.until(driver ->
    driver.findElement(By.id("count")).getText().equals("10")
);
```

---

## Timeout Strategy (Important)

- UI interactions: **5–10 seconds**
- API-driven UI: **10–20 seconds**
- File uploads / heavy ops: **20–30 seconds**

Avoid global over-waiting.

---

## What Explicit Wait Does NOT Do

❌ It does not sleep blindly  
❌ It does not fix bad locators  
❌ It does not replace proper UI state validation

---

## Common Mistakes ❌

1. Waiting for visibility when element should be clickable
2. Using wrong ExpectedCondition
3. Very high timeout everywhere
4. Nesting waits unnecessarily
5. Mixing with implicit wait

---

## Best Practices ✅

- Prefer explicit waits over implicit waits
- Choose the **correct condition**
- Keep waits inside Page Objects
- Centralize wait creation
- Log wait timeouts clearly

---

## Interview Notes 🎯

**Q: Why are explicit waits preferred?**  
A: They are condition-based and predictable.

**Q: Difference between presence and visibility?**  
A: Presence checks DOM, visibility checks UI.

**Q: Can explicit waits handle stale elements?**  
A: Yes, using `ExpectedConditions.refreshed()`.

---

## Real-Project Tip 💡

Most flaky tests stabilize immediately when the **correct explicit wait condition** is applied.

---

## Summary

- Explicit waits are targeted and reliable
- Use correct ExpectedCondition
- Avoid mixing with implicit waits
- Essential for stable automation
