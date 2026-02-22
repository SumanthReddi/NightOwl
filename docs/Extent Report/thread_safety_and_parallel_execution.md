---
sidebar_position: 6
---

# Thread Safety & Parallel Execution

This section is **the most critical part of Extent Reports in real-time projects**. Without proper thread safety, reports become unreliable under parallel execution—even if tests themselves pass.

---

## 1️⃣ Why Thread Safety Is Non-Negotiable

Modern automation frameworks run tests in parallel to:
- Reduce execution time
- Support CI/CD pipelines
- Scale large test suites

Without thread safety, Extent Reports will:
- Mix logs between tests
- Attach wrong screenshots
- Mark incorrect test status

A report that lies is worse than no report.

---

## 2️⃣ Root Cause of Parallel Issues

### The Real Problem
`ExtentTest` is **NOT thread-safe** by default.

If multiple threads share the same `ExtentTest` object:
- Logs overwrite each other
- Failures appear under wrong tests

---

## 3️⃣ The ONLY Correct Solution: `ThreadLocal`

### What `ThreadLocal` Does
- Creates one `ExtentTest` instance **per thread**
- Isolates logs completely
- Prevents data collision

```java
private static ThreadLocal<ExtentTest> extentTest = new ThreadLocal<>();
```

This is not optional. This is mandatory.

---

## 4️⃣ Correct Thread-Safe Lifecycle

### Test Start
```java
ExtentTest test = extent.createTest(testName);
extentTest.set(test);
```

### During Test Execution
```java
ExtentTestManager.getTest().info("Executing test step");
```

### Test End (Very Important)
```java
extentTest.remove();
```

Failing to call `remove()` causes memory leaks and unstable behavior.

---

## 5️⃣ Thread Safety with TestNG Parallel Modes

Supported safely:
- `parallel="methods"`
- `parallel="classes"`
- `parallel="tests"`

Unsupported / risky:
- Shared static `ExtentTest`
- Manual synchronization blocks

---

## 6️⃣ Listener-Driven Thread Control

### Why Listeners Are Mandatory

Listeners guarantee:
- Test creation happens once
- Thread binding is correct
- Cleanup happens reliably

Thread safety without listeners is fragile and error-prone.

---

## 7️⃣ Common Anti-Patterns (DO NOT DO THIS)

❌ `public static ExtentTest test;`
❌ Creating tests inside `@Test` methods
❌ Using synchronized blocks instead of ThreadLocal
❌ Flushing reports per test

These patterns **will fail under CI load**.

---

## 8️⃣ CI/CD + Parallel Execution Reality

In Jenkins / GitLab:
- Threads are reused aggressively
- Execution order is unpredictable

Thread safety must be deterministic, not timing-based.

---

## 🧠 Key Takeaways

- `ThreadLocal<ExtentTest>` is mandatory
- One test = one thread = one ExtentTest
- Cleanup is as important as creation
- No shortcuts exist for parallel safety
