---
sidebar_position: 4
---

# Logging & Status Handling

This section explains **how to log correctly in Extent Reports** so reports remain readable, accurate, and trustworthy in real-time projects. Bad logging practices are one of the biggest reasons reports become noisy and useless.

---

## 1️⃣ Test Status Lifecycle

Every test in Extent Reports ends in **exactly one final state**:

- `PASS`
- `FAIL`
- `SKIP`

All logs added during execution must ultimately align with this final status.

---

## 2️⃣ Logging Levels (What to Use & When)

### `pass()`
- Use only when a validation succeeds
- Indicates a successful checkpoint

```java
ExtentTestManager.getTest().pass("Login page loaded successfully");
```

---

### `fail()`
- Use when a validation fails
- Automatically marks test as FAILED

```java
ExtentTestManager.getTest().fail("Invalid error message displayed");
```

---

### `skip()`
- Use when a test is skipped due to dependency or condition

```java
ExtentTestManager.getTest().skip("Test skipped due to environment issue");
```

---

### `info()`
- Most commonly used log level
- Use for steps, navigation, and actions

```java
ExtentTestManager.getTest().info("Entered username and password");
```

---

### `warning()` / `fatal()`
- Rarely used in real projects
- Suitable for framework-level issues

---

## 3️⃣ Exception Handling (Mandatory Practice)

### Logging Exceptions Correctly

```java
catch (Exception e) {
    ExtentTestManager.getTest().fail(e);
    throw e;
}
```

### Why This Matters
- Stack trace visible in report
- Test status remains accurate
- CI failures are debuggable

---

## 4️⃣ Rich Text & Readable Logs

### HTML Formatting (Use Sparingly)

```java
ExtentTestManager.getTest().info("<b>Step:</b> Submit login form");
```

### Multi-Line Logs

```java
ExtentTestManager.getTest().info("Step 1: Open browser<br>Step 2: Navigate to URL");
```

> ⚠️ Over-formatting reduces readability. Keep logs simple.

---

## 5️⃣ What NOT to Log (Very Important)

❌ Selenium internal calls (`findElement`, `click`, etc.)
❌ Framework method names
❌ Repeated pass logs for every step
❌ Sensitive data (passwords, tokens)

Good reports explain **what happened**, not **how Selenium works**.

---

## 6️⃣ Centralized Logging Rule

All logging should go through:
- Listener
- Utility methods
- Common helpers

❌ Logging directly inside test logic causes inconsistency.

---

## 7️⃣ Assertion Strategy & Reporting

### Recommended Approach
- Assertion decides test result
- Extent Reports reflects the result

```java
Assert.assertTrue(condition, "Validation failed");
```

Listener captures failure and logs it — not the assertion itself.

---

## 🧠 Key Takeaways

- One final status per test
- `info()` is your primary log level
- Fail fast, log clearly
- Keep reports readable for non-technical stakeholders
