---
sidebar_position: 13
---

## TestNG @Factory – Complete Guide

`@Factory` is an **advanced TestNG feature** used to create **multiple instances of a test class dynamically**.
It is powerful, but **often misunderstood and misused**.

This guide explains **what @Factory really does**, when to use it, when **NOT** to use it, and how it compares to **DataProviders**.

---

## What is `@Factory`?

`@Factory` is used to:
- Create multiple instances of a **test class**
- Pass data via **constructors**
- Control object creation before tests run

In simple terms:

> **DataProvider feeds methods**  
> **Factory creates test class objects**

---

## Basic Example of `@Factory`

### Test Class

```java
public class LoginTest {

    private String username;
    private String password;

    public LoginTest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    @Test
    public void loginTest() {
        // use username & password
    }
}
```

### Factory Class

```java
public class LoginFactory {

    @Factory
    public Object[] factoryMethod() {
        return new Object[] {
            new LoginTest("user1", "pass1"),
            new LoginTest("user2", "pass2")
        };
    }
}
```

Each object becomes a **separate test instance**.

---

## Execution Flow of `@Factory`

```
@Factory
   ↓
Create Test Class Instances
   ↓
@BeforeClass
   ↓
@Test
   ↓
@AfterClass
```

Each instance has its **own lifecycle**.

---

## Factory vs DataProvider (CRITICAL COMPARISON)

| Aspect | DataProvider | Factory |
|----|----|----|
| Supplies data to | Test methods | Test class instances |
| Complexity | Simple | Advanced |
| Usage frequency | Very high | Low |
| Constructor usage | ❌ | ✅ |
| Parallel-friendly | Yes | Risky |
| Recommended | ✅ | Only when needed |

➡️ **Use DataProvider in ~90% cases**

---

## When to Use `@Factory` ✅

Use Factory when:
- Test setup depends on constructor arguments
- You need **stateful test instances**
- Complex object initialization is required
- Each test instance must have isolated state

Example:
- API client per user
- Role-based test instances
- Stateful workflows

---

## When NOT to Use `@Factory` ❌

Avoid Factory when:
- Only test data varies
- Stateless tests are sufficient
- Parallel execution is required
- DataProvider can do the job

---

## `@Factory` + DataProvider (Advanced)

You can combine both:

```java
@Factory(dataProvider = "userData")
public Object[] factoryMethod(String user, String pass) {
    return new Object[] {
        new LoginTest(user, pass)
    };
}
```

⚠️ Increases complexity — use sparingly.

---

## Parallel Execution Considerations ⚠️

- Factory creates instances **before parallelism**
- Parallel execution depends on TestNG XML
- Stateful objects + parallel = risk

Best practice:
- Avoid Factory with `parallel="methods"`
- Prefer `parallel="tests"` only

---

## Common Mistakes ❌

- Using Factory instead of DataProvider
- Putting test logic inside constructor
- Overusing Factory for simple tests
- Mixing Factory + parallel methods
- Difficult debugging due to instance explosion

---

## Best Practices (Senior-Level)

- Prefer DataProvider over Factory
- Keep constructors lightweight
- Use Factory only when object state matters
- Document Factory usage clearly
- Avoid Factory unless absolutely necessary

---

## Interview-Level Questions

**Q: Difference between DataProvider and Factory?**  
A: DataProvider feeds methods, Factory creates test instances.

**Q: Is Factory commonly used?**  
A: No. It’s advanced and used only in special cases.

---

## Key Takeaways 🎯

- `@Factory` creates test class instances
- Powerful but easy to misuse
- DataProvider is preferred in most cases
- Factory is for stateful, constructor-based tests
- Senior engineers use it sparingly