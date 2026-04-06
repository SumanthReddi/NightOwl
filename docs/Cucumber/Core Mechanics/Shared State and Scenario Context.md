---
sidebar_position: 4
title: Shared State and Scenario Context
---

# Shared State and Scenario Context

In real Cucumber frameworks, steps often need to **share data**.
If this is done incorrectly, it leads to **flaky tests, parallel execution failures, and hard-to-debug issues**.
Managing shared state properly is important for building **maintainable, scalable, and thread-safe Cucumber frameworks**.

---

## What is Shared State?

Shared state may include:

- WebDriver instances
- API clients
- Test data (usernames, tokens, IDs)
- Scenario runtime information (responses, messages)

Example context object:

```java
public class ScenarioContext {

    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
```

This object allows steps to **store and retrieve data during scenario execution**.

---

## Why Shared State is Important

Without shared state:

- Steps cannot exchange data
- Test logic becomes duplicated
- Parallel execution can cause conflicts

Proper shared state management:

- Improves maintainability
- Enables step reusability
- Supports parallel test execution

---

## Dependency Injection for Shared State

Cucumber supports **dependency injection (DI)** frameworks to manage shared objects.

Common DI frameworks:

- PicoContainer (default for Cucumber JVM)
- Spring

---

## PicoContainer Example

PicoContainer automatically injects shared objects using constructor injection.

### Step Definition

```java
public class LoginSteps {

    private final ScenarioContext context;

    public LoginSteps(ScenarioContext context) {
        this.context = context;
    }

    @When("I enter my credentials")
    public void enterCredentials(){

        context.setUsername("admin");
        context.setPassword("password123");

    }

}
```

Each scenario receives its **own instance of ScenarioContext**.

---

## Spring Dependency Injection

Spring can also manage shared objects.

Example:

```java
@Component
public class LoginSteps {

    @Autowired
    private ScenarioContext context;

}
```

Spring is useful for **large enterprise frameworks** with configuration management.

---

## Thread Safety in Parallel Execution

When running tests in parallel, shared resources must be **thread safe**.

Use `ThreadLocal` to isolate objects per thread.

Example:

```java
public class DriverManager {

    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

    public static WebDriver getDriver(){
        return driver.get();
    }

    public static void setDriver(WebDriver webDriver){
        driver.set(webDriver);
    }

    public static void closeDriver(){

        if(driver.get() != null){
            driver.get().quit();
            driver.remove();
        }

    }

}
```

Usage in hooks:

```java
@Before
public void setup(){

    WebDriver driver = new ChromeDriver();
    DriverManager.setDriver(driver);

}
```

This ensures **each thread gets its own driver instance**.

---

## Best Practices

### Use Dependency Injection

Avoid manually creating shared objects.

Prefer constructor injection or Spring injection.

---

### Keep Context Lightweight

Store only **essential scenario data**.

Avoid large objects or unnecessary data.

---

### Avoid Static Variables

Static variables are shared across threads and cause flaky tests.

---

### Clean Resources

Release resources after execution.

Example:

```java
@After
public void teardown(){

    DriverManager.closeDriver();

}
```

---

## Real Example

### Scenario Context

```java
public class ScenarioContext {

    private String productName;
    private int price;

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

}
```

### Step Definitions

```java
public class CartSteps {

    private ScenarioContext context;

    public CartSteps(ScenarioContext context){
        this.context = context;
    }

    @Given("I add a product to cart")
    public void addProduct(){

        context.setProductName("Headphones");
        context.setPrice(100);

    }

}
```

---

## Common Mistakes

Avoid:

- Static shared variables
- Overloaded context objects
- Hardcoded values
- Not cleaning resources

---

## Interview Questions

**What is shared state in Cucumber?**

Shared state is data shared across steps within a scenario.

---

**How do you manage shared state?**

Using dependency injection frameworks like PicoContainer or Spring.

---

## Key Takeaways

- Shared state allows steps to exchange data
- Use dependency injection for context objects
- Ensure thread safety using ThreadLocal
- Avoid static variables
- Clean up resources properly