---
sidebar_position: 11
---
# Parallel Execution

Parallel execution allows TestNG to run multiple tests **at the same time** instead of sequentially.  
This is one of the most powerful features of TestNG and is crucial for **reducing execution time** in large automation suites.

---

## What is Parallel Execution?

In parallel execution, TestNG uses **multiple threads** to execute tests concurrently.

This is especially useful for:
- Large regression suites
- Cross-browser testing
- CI/CD pipelines with time constraints

---

## Where Parallel Execution is Configured

Parallel execution is controlled mainly through **`testng.xml`**, not in test code.

```xml
<suite name="ParallelSuite" parallel="tests" thread-count="3">
```

---

## Parallel Execution Levels

TestNG supports parallel execution at four levels:

| Level | Description |
|---|---|
| `tests` | Runs each `<test>` block in parallel |
| `classes` | Runs test classes in parallel |
| `methods` | Runs test methods in parallel |
| `instances` | Runs class instances in parallel |

---

## Parallel = "tests" (Most Recommended)

```xml
<suite parallel="tests" thread-count="2">

    <test name="ChromeTests">
        <parameter name="browser" value="chrome"/>
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>

    <test name="EdgeTests">
        <parameter name="browser" value="edge"/>
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>

</suite>
```

### Execution Diagram

```
Thread 1 → ChromeTests
Thread 2 → EdgeTests
```

✔️ Safest  
✔️ Ideal for cross-browser execution  

---

## Parallel = "classes"

```xml
<suite parallel="classes" thread-count="2">
```

```
Thread 1 → LoginTest
Thread 2 → PaymentTest
```

⚠️ Shared resources must be handled carefully.

---

## Parallel = "methods" (Advanced)

```xml
<suite parallel="methods" thread-count="3">
```

```
Thread 1 → testLogin
Thread 2 → testLogout
Thread 3 → testPayment
```

⚠️ Order is ignored  
⚠️ High risk of race conditions  
⚠️ Avoid static/shared variables

---

## Parallel = "instances"

Used when the same class is instantiated multiple times (usually with `@Factory`).

```
Thread 1 → Instance 1
Thread 2 → Instance 2
```

Advanced use case, rarely needed for beginners.

---

## Thread Count Behavior

- `thread-count` is the **maximum number of threads**
- It is **global**, not per test or class
- TestNG schedules tasks dynamically within this limit

---

## Interaction with Annotations

- `@BeforeMethod` and `@AfterMethod` run per thread
- `@BeforeClass` runs once per class instance
- `@BeforeSuite` always runs once

Parallel execution **does not change annotation order**, only concurrency.

---

## Parallel DataProviders

```java
@DataProvider(parallel = true)
```

- Each dataset runs in parallel
- Combined with `parallel="methods"` increases speed
- Requires thread-safe test design

---

## Common Issues in Parallel Execution

- Using static WebDriver
- Sharing mutable data between tests
- Relying on execution order
- Improper cleanup in `@AfterMethod`

---

## Best Practices

- Prefer `parallel="tests"`
- Use ThreadLocal for WebDriver
- Avoid static/shared state
- Design tests to be independent
- Start with low thread count

---

## Key Takeaways

- Parallel execution improves speed
- XML controls parallel behavior
- `tests` level is safest
- Thread safety is critical

