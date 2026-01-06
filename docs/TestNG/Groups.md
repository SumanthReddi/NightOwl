---
sidebar_position: 7
---

# Groups

Groups in TestNG allow you to **categorize test cases** and execute only the required set of tests.  
They are one of the most important features for **real-world automation and CI/CD pipelines**.

---

## What Are Groups?

A **group** is a logical label assigned to test methods.

Instead of running tests by:
- Class name
- Method name

You run tests by:
- **Purpose**
- **Feature**
- **Execution type**

Examples:
- `smoke`
- `regression`
- `sanity`
- `login`
- `payment`

---

## Defining Groups in Test Code

```java
@Test(groups = "smoke")
public void smokeTest() {}

@Test(groups = {"regression", "login"})
public void loginTest() {}
```

✔️ A test can belong to **multiple groups**

---

## Running Groups Using `testng.xml`

```xml
<groups>
    <run>
        <include name="smoke"/>
    </run>
</groups>
```

➡️ Only `smoke` group tests will execute.

---

## Including Multiple Groups

```xml
<groups>
    <run>
        <include name="smoke"/>
        <include name="sanity"/>
    </run>
</groups>
```

### Execution Rule
- Uses **OR logic**
- Tests belonging to **any included group** will run

---

## Excluding Groups

```xml
<groups>
    <run>
        <exclude name="regression"/>
    </run>
</groups>
```

➡️ All tests run **except** regression tests.

---

## Include + Exclude Together

```xml
<groups>
    <run>
        <include name=".*"/>
        <exclude name="slow"/>
    </run>
</groups>
```

### Important Rule
- Include list built first
- Exclude removes from include list
- **Exclude always wins**

---

## Regex Support in Groups

TestNG supports **Java regex** for group names.

```xml
<include name="smoke|sanity"/>
<exclude name="legacy.*"/>
```

Examples:
- `smoke|sanity` → smoke OR sanity
- `legacy.*` → legacyLogin, legacyPayment

---

## Group Dependencies

```java
@Test(groups = "login")
public void loginTest() {}

@Test(groups = "payment", dependsOnGroups = "login")
public void paymentTest() {}
```

### Behavior
- All `login` group tests must pass
- Otherwise `payment` group tests are skipped

---

## Groups with Parallel Execution

Groups work seamlessly with parallel execution.

```xml
<suite parallel="tests" thread-count="2">
```

⚠️ Groups do **not guarantee execution order**  
⚠️ Dependencies still apply

---

## Groups vs XML Method Includes

| Groups | Method Includes |
|---|---|
| Logical categorization | Name-based filtering |
| Scales well | Hard to maintain |
| CI-friendly | Error-prone |
| Recommended | Avoid when possible |

---

## Common Grouping Strategy (Industry Standard)

| Group | Purpose |
|---|---|
| smoke | Critical path validation |
| sanity | Quick checks after fixes |
| regression | Full test suite |
| api | API-only tests |
| ui | UI-only tests |

---

## Common Mistakes

- Overloading too many groups on one test
- Using method includes instead of groups
- Expecting group execution order
- Mixing groups with heavy dependencies

---

## Best Practices

- Use groups for execution control
- Keep group names meaningful
- Prefer group dependencies
- Use regex for flexible execution
- Align groups with CI jobs

---

## Key Takeaways

- Groups enable selective execution
- OR logic for includes
- Exclude always wins
- Regex supported
- Essential for CI/CD pipelines