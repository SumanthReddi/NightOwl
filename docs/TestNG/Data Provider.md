---
sidebar_position: 5
---
## What is Data-Driven Testing?

Data-driven testing allows the **same test logic** to run multiple times with **different input data**.  

In TestNG, data-driven testing is implemented using **DataProviders**. It helps to increase coverage while keeping test code clean and reusable.

---

## What is a DataProvider?

A **DataProvider** is a method that supplies test data to a `@Test` method.

- Each dataset returned by the DataProvider results in **one independent test execution**
- TestNG automatically injects the data into the test method

---

## Basic DataProvider Example

```java
@DataProvider(name = "loginData")
public Object[][] loginData() {
    return new Object[][] {
        {"user1", "pass1"},
        {"user2", "pass2"}
    };
}

@Test(dataProvider = "loginData")
public void loginTest(String username, String password) {
    // test logic
}
```

### How It Works

- DataProvider returns a **2D Object array**
- Each **row = one test execution**
- Each **column = one parameter** in the test method

### Execution Flow

```
loginTest("user1", "pass1")
loginTest("user2", "pass2")
```

Each dataset is treated as a **separate test case**.

---

## Core DataProvider Rules

- Must return `Object[][]`
- Parameter count must match test method parameters
- Can exist in the same class or a separate class
- Can serve **multiple test methods**
- Must be `public`

---

## Naming DataProviders (Best Practice)

```java
@DataProvider(name = "validLoginData")
```

Why this matters:
- Improves readability
- Easier debugging
- Prevents confusion in large frameworks

---

## DataProvider in a Separate Class ⭐ (Industry Standard)

### Data Provider Class

```java
public class TestDataProvider {

    @DataProvider(name = "loginData")
    public static Object[][] loginData() {
        return new Object[][] {
            {"user1", "pass1"},
            {"user2", "pass2"}
        };
    }
}
```

### Test Class

```java
@Test(
    dataProvider = "loginData",
    dataProviderClass = TestDataProvider.class
)
public void loginTest(String user, String pass) {
}
```

### Why This is Recommended

- Clean separation of test logic and test data
- Reusable across multiple test classes
- Scales well in CI/CD pipelines

---

## DataProvider with `ITestContext`

```java
@DataProvider
public Object[][] data(ITestContext context) {
    String env = context.getCurrentXmlTest().getParameter("env");
    return new Object[][] {
        {env, "user1"}
    };
}
```

### Use Cases

- Environment-based testing
- Browser-based variations
- XML-driven configurations

---

## DataProvider with `Method` Parameter ⭐ (Advanced)

```java
@DataProvider
public Object[][] getData(Method method) {

    if (method.getName().equals("adminLoginTest")) {
        return new Object[][] {
            {"admin", "adminPass"}
        };
    }

    return new Object[][] {
        {"user", "userPass"}
    };
}
```

### When to Use

- One DataProvider for many tests
- Conditional data selection
- Cleaner framework design

---

## Parallel DataProviders ⭐ (Critical for Speed)

```java
@DataProvider(name = "parallelData", parallel = true)
public Object[][] parallelData() {
    return new Object[][] {
        {"A"}, {"B"}, {"C"}
    };
}
```

```java
@Test(dataProvider = "parallelData")
public void testParallel(String value) {
}
```

### Important Notes ⚠️

- Each dataset runs in parallel
- **Thread safety is mandatory**
- For Selenium, always use `ThreadLocal<WebDriver>`
- Avoid shared mutable data

---

## Combining DataProvider with XML Parameters

```java
@Parameters("env")
@Test(dataProvider = "loginData")
public void loginTest(String env, String user, String pass) {
}
```

### Why This is Powerful

- Environment from XML
- Test data from DataProvider
- Ideal for enterprise test suites

---

## DataProvider vs `@Factory`

| DataProvider | Factory |
|-------------|---------|
| Supplies test data | Creates test instances |
| Method-level | Class-level |
| Easy & common | Advanced & rare |
| Used in 90% cases | Special scenarios |

➡️ Prefer **DataProvider** unless object creation is required.

---

## Common Real-World Mistakes ❌

- Returning incorrect `Object[][]` dimensions
- Parameter mismatch between data and test method
- Heavy logic or DB calls inside DataProvider
- Parallel execution without thread safety
- Using `@Factory` unnecessarily

---

## Senior-Level Best Practices ✅

- Keep DataProviders **stateless**
- Store DataProviders in **dedicated classes**
- Keep datasets **small & meaningful**
- Avoid I/O-heavy operations inside DataProviders
- Enable parallel execution only when safe
- Log test data for easier debugging

---

## Key Takeaways 🎯

- DataProviders enable scalable data-driven testing
- Each dataset = one independent execution
- Parallel DataProviders improve speed but need safety
- Separate DataProvider classes are industry standard
- Mandatory knowledge for TestNG mastery