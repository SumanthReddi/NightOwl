---
sidebar_position: 8
---

# Dependencies

In real-world automation, some tests **cannot or should not run independently**.  
For example, a payment test should run only if login is successful.

TestNG provides **dependency management** to control such execution order safely and predictably.

---

## What Are Dependencies?

A dependency defines a **relationship between tests** where one test depends on the successful execution of another.

If the dependent test fails or is skipped:
- The dependent test is **automatically skipped**
- This prevents cascading failures

---

## Types of Dependencies in TestNG

TestNG supports two main types of dependencies:

| Type | Description |
|---|---|
| Method Dependency | One test method depends on another |
| Group Dependency | One group depends on another group |

---

## Method Dependency (`dependsOnMethods`)

```java
@Test
public void login() {
    // login logic
}

@Test(dependsOnMethods = "login")
public void payment() {
    // payment logic
}
```

### Execution Behavior
- `login()` runs first
- `payment()` runs only if `login()` passes
- If `login()` fails → `payment()` is skipped

---

## Multiple Method Dependencies

```java
@Test
public void createUser() {}

@Test
public void approveUser() {}

@Test(dependsOnMethods = {"createUser", "approveUser"})
public void deleteUser() {}
```

All dependent methods must pass for execution.

---

## Group Dependency (`dependsOnGroups`)

```java
@Test(groups = "login")
public void loginTest() {}

@Test(groups = "payment", dependsOnGroups = "login")
public void paymentTest() {}
```

### Why Group Dependencies?
- Cleaner for large suites
- Avoids long method dependency chains
- Easier maintenance

---

## Hard vs Soft Dependencies

### Hard Dependency (Default)

```java
@Test(dependsOnMethods = "login")
```

- Failure → dependent test skipped

---

### Soft Dependency (`alwaysRun = true`)

```java
@Test(dependsOnMethods = "login", alwaysRun = true)
public void cleanup() {}
```

- Runs even if dependency fails
- Useful for cleanup or reporting

---

## Dependency with Groups + Methods

```java
@Test(groups = "order")
public void placeOrder() {}

@Test(dependsOnMethods = "placeOrder", dependsOnGroups = "login")
public void cancelOrder() {}
```

Both conditions must be satisfied.

---

## Dependency and XML (IMPORTANT RULE)

```xml
<methods>
    <include name="payment"/>
</methods>
```

⚠️ **XML does NOT auto-include dependencies**

If `payment()` depends on `login()`:
- `login()` must be explicitly included
- Otherwise, `payment()` will fail or skip

---

## Dependency Failure vs Skip

| Dependency Result | Dependent Test |
|---|---|
| Dependency fails | Skipped |
| Dependency skipped | Skipped |
| Dependency passes | Runs |

---

## Common Mistakes

- Overusing dependencies instead of independent tests
- Creating long dependency chains
- Forgetting dependencies when using XML include
- Using dependencies with parallel execution incorrectly

---

## Best Practices

- Prefer group dependencies over method dependencies
- Keep dependency chains short
- Avoid dependencies in parallel-heavy suites
- Use `alwaysRun=true` only for cleanup
- Design tests to be independent where possible

---

## Key Takeaways

- Dependencies control execution order safely
- Failed dependencies skip dependent tests
- XML does not resolve dependencies automatically
- Group dependencies scale better than method dependencies
