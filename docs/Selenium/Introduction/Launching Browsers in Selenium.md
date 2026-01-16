---
sidebar_position: 5
---

# Launching Browsers in Selenium

Launching browsers correctly is the first real interaction with Selenium WebDriver.
This section focuses on **clean, flexible, and framework-ready browser initialization**.

---

## WebDriver Interface vs Browser Driver Classes

In Selenium, we always code to the **WebDriver interface**:

```java
WebDriver driver = new ChromeDriver();
```

### Why This Matters
- Supports polymorphism
- Allows easy browser switching
- Improves framework flexibility

❌ Avoid coding directly to driver classes everywhere.

---

## Launching Chrome Browser

```java
WebDriverManager.chromedriver().setup();
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
```

---

## Launching Firefox Browser

```java
WebDriverManager.firefoxdriver().setup();
WebDriver driver = new FirefoxDriver();
```

---

## Launching Edge Browser

```java
WebDriverManager.edgedriver().setup();
WebDriver driver = new EdgeDriver();
```

---

## Headless Browser Execution

Headless mode runs browsers without UI, commonly used in CI.

```java
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless");

WebDriver driver = new ChromeDriver(options);
```

---

## Browser Options (Introduction)

Browser options allow:
- Disabling notifications
- Running headless
- Setting download paths
- Accepting insecure certificates

(Options will be covered in detail in a later section.)

---

## Best Practices ✅

- Always use WebDriverManager
- Use WebDriver interface
- Centralize browser creation
- Support headless execution for CI

---

## Common Mistakes ❌

- Hardcoding driver paths
- Mixing browser logic in tests
- Creating multiple drivers unnecessarily
- Ignoring headless execution needs

---

## Key Takeaways

- WebDriver is the core interface
- Browser drivers are interchangeable
- Headless mode is CI-friendly
- Clean browser setup improves stability

---

## What’s Next?

👉 **Navigation Commands**
