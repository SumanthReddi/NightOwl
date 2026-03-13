---
sidebar_position: 10
---

# Helper Attributes

TestNG **helper attributes** are additional properties used inside `@Test` (and some configuration annotations) to control **execution behavior, flow, retries, timing, and documentation**.

These attributes are heavily used in **real automation frameworks** to fine-tune test behavior without writing extra code.

---

## Why Helper Attributes Matter

Helper attributes help you:
- Control execution without complex logic
- Handle retries, timeouts, ordering
- Improve reporting & readability
- Stabilize flaky tests
- Integrate better with CI/CD

---

## Core Helper Attributes in `@Test`

---

## 1️⃣ `priority`

```java
@Test(priority = 1)
```

- Controls execution order **within the same class**
- Lower number runs first
- Default priority = `0`

⚠️ Not reliable across classes  
⚠️ Dependencies are safer than priority

---

## 2️⃣ `enabled`

```java
@Test(enabled = false)
```

- Skips test execution
- Test is ignored completely

Use cases:
- Temporarily disable unstable tests
- Feature under development

⚠️ Prefer groups for long-term control

---

## 3️⃣ `description`

```java
@Test(description = "Validate login with valid credentials")
```

- Improves readability in reports
- Very useful in Extent / Allure reports

Best practice:
- Always add description for critical tests

---

## 4️⃣ `groups`

```java
@Test(groups = {"smoke", "login"})
```

- Categorizes tests
- Used with `testng.xml` or Maven

Groups are **one of the most powerful TestNG features**.

---

## 5️⃣ `dependsOnMethods`

```java
@Test(dependsOnMethods = "loginTest")
```

- Executes test only if dependency passes
- Skips test if dependency fails

Preferred over `priority` for flow control.

---

## 6️⃣ `dependsOnGroups`

```java
@Test(dependsOnGroups = "smoke")
```

- Test runs only after all tests in group pass
- Useful for layered test strategies

---

## 7️⃣ `alwaysRun`

```java
@Test(dependsOnMethods = "loginTest", alwaysRun = true)
```

- Forces execution even if dependency fails
- Commonly used for cleanup / logout

Also valid in:
- `@AfterMethod`
- `@AfterClass`

---

## 8️⃣ `invocationCount`

```java
@Test(invocationCount = 5)
```

- Runs the same test multiple times
- Used for:
  - Load checks
  - Stability testing
  - Idempotency validation

---

## 9️⃣ `threadPoolSize`

```java
@Test(invocationCount = 10, threadPoolSize = 3)
```

- Runs invocations in parallel
- Requires `invocationCount`

⚠️ Use carefully — thread safety required

---

## 🔟 `timeOut`

```java
@Test(timeOut = 5000)
```

- Fails test if execution exceeds time (ms)
- Prevents hanging tests

Very useful in CI pipelines.

---

## 1️⃣1️⃣ `expectedExceptions`

```java
@Test(expectedExceptions = ArithmeticException.class)
```

- Test passes only if exception is thrown
- Useful for negative test scenarios

---

## 1️⃣2️⃣ `expectedExceptionsMessageRegExp`

```java
@Test(
 expectedExceptions = IllegalArgumentException.class,
 expectedExceptionsMessageRegExp = "Invalid.*"
)
```

- Validates exception message using regex
- Adds precision to negative tests

---

## Helper Attributes for Configuration Annotations

Applicable to:
- `@BeforeMethod`
- `@AfterMethod`
- `@BeforeClass`
- `@AfterClass`

### `alwaysRun`

```java
@AfterMethod(alwaysRun = true)
```

Ensures cleanup runs even if test fails.

---

## Real-World Attribute Combinations

### Retry-like behavior (basic)

```java
@Test(invocationCount = 3)
```

### Stable cleanup

```java
@AfterMethod(alwaysRun = true)
```

### Layered execution

```java
@Test(groups = "regression", dependsOnGroups = "smoke")
```

---

## Attributes That Are Often Misused

| Attribute | Issue |
|--------|------|
| priority | Overused for flow control |
| enabled=false | Forgotten & committed |
| invocationCount | Used without thread safety |
| timeOut | Too aggressive values |

---

## Best Practices (Senior-Level)

- Use **dependencies > priority**
- Use **groups > method includes**
- Use `alwaysRun` for cleanup only
- Use `timeOut` for flaky areas
- Document tests using `description`

---

## Key Takeaways

- Helper attributes control execution behavior
- Reduce need for custom logic
- Essential for stable automation
- Frequently tested in interviews
- Must-know for TestNG mastery
