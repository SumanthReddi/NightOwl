---
sidebar_position: 3
title: Hooks - Before, After, and Best Practices
---

# Hooks - Before, After, and Best Practices

**Hooks** in Cucumber allow execution of code **before or after scenarios**. They are commonly used for **test setup and teardown**, such as launching browsers, initializing test data, and cleaning resources.

---

## What are Hooks?

Hooks are methods annotated with:

- `@Before` → runs before each scenario
- `@After` → runs after each scenario
- Conditional hooks → run only for specific tags

Example:

```java
import io.cucumber.java.Before;
import io.cucumber.java.After;

public class Hooks {

    @Before
    public void setUp() {
        System.out.println("Starting browser...");
    }

    @After
    public void tearDown() {
        System.out.println("Closing browser...");
    }

}
```

Hooks apply globally unless restricted using tags.

---

## Types of Hooks

### Before Hook

Runs **before every scenario**.

Typical uses:

- Launch browser
- Initialize test data
- Prepare environment

Example:

```java
@Before
public void initializeBrowser() {
    System.out.println("Initializing browser...");
}
```

---

### After Hook

Runs **after every scenario**.

Typical uses:

- Close browser
- Capture screenshots
- Clean test data

Example:

```java
@After
public void closeBrowser() {
    System.out.println("Closing browser...");
}
```

---

### Conditional Hooks

Hooks can run only for scenarios with certain tags.

Example:

```java
@Before("@ui")
public void setupUI() {
    System.out.println("Setting up UI tests...");
}

@After("@api")
public void cleanupAPI() {
    System.out.println("Cleaning API resources...");
}
```

---

## Hook Execution Order

Hooks can run in a specific order using `order`.

Example:

```java
@Before(order = 1)
public void globalSetup() {
    System.out.println("Global setup");
}

@Before(value="@ui", order = 2)
public void uiSetup() {
    System.out.println("UI setup");
}
```

Execution order:

```
Global setup
UI setup
```

Avoid overly complex hook ordering.

---

## Best Practices

### Keep Hooks Simple

Each hook should perform **one clear responsibility**.

Examples:

- Launch browser
- Initialize driver
- Capture screenshot

---

### Manage Shared State

Use shared context objects to store reusable data.

Example:

```java
public class ScenarioContext {

    private WebDriver driver;

    public WebDriver getDriver() {
        return driver;
    }

    public void setDriver(WebDriver driver) {
        this.driver = driver;
    }

}
```

Hook usage:

```java
@Before
public void setup(ScenarioContext context) {

    WebDriver driver = new ChromeDriver();
    context.setDriver(driver);

}
```

---

### Capture Screenshots on Failure

Example:

```java
@After
public void captureScreenshot(Scenario scenario) {

    if(scenario.isFailed()){
        System.out.println("Scenario failed. Capturing screenshot...");
    }

}
```

---

### Clean Resources

Always release resources.

Example:

```java
@After
public void quitDriver(){

    driver.quit();

}
```

---

## Real Example

### Hooks Class

```java
public class Hooks {

    private WebDriver driver;

    @Before("@ui")
    public void setupUI() {

        driver = new ChromeDriver();

    }

    @After("@ui")
    public void teardownUI(){

        if(driver != null){
            driver.quit();
        }

    }

}
```

---

### Feature File

```gherkin
@ui
Scenario: Add item to cart
  Given I am on the product page
  When I click Add to Cart
  Then the item should appear in my cart
```

---

## Common Mistakes

Avoid:

- Too much logic inside hooks
- Hardcoding configuration values
- Forgetting cleanup logic
- Mixing business logic with hooks

Hooks should focus on **environment setup and teardown only**.

---

## Interview Questions

**What are hooks in Cucumber?**

Hooks are methods that run before or after scenarios to manage setup and cleanup.

---

**Can hooks be tag specific?**

Yes. Hooks can run conditionally using tags.

Example:

```java
@Before("@ui")
```

---

## Key Takeaways

- Hooks manage **setup and teardown**
- `@Before` runs before scenarios
- `@After` runs after scenarios
- Hooks can be **conditional**
- Keep hooks simple and maintainable
