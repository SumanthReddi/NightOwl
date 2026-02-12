---
sidebar_position: 1
---

# Browser Options & Capabilities

## Why This Matters (Real Project Context)
Browser options and capabilities control **how the browser is launched and behaves**. In real projects, they are critical for:
- Headless execution in CI/CD
- Disabling browser popups
- Handling insecure certificates
- Optimizing stability and performance

Poor configuration leads to flaky tests and CI failures.

---

## Options vs Capabilities (Clear Difference)

- **Options**: Browser-specific settings (ChromeOptions, EdgeOptions, FirefoxOptions)
- **Capabilities**: Generic WebDriver features (timeouts, platform, browser version)

In Selenium 4, **Options extend Capabilities** — they are used together.

---

## Chrome Options (Most Used)

```java
ChromeOptions options = new ChromeOptions();
options.addArguments("--start-maximized");
options.addArguments("--disable-notifications");
options.addArguments("--disable-infobars");
```

### Common Chrome Arguments
- `--headless=new` (CI execution)
- `--disable-notifications`
- `--disable-popup-blocking`
- `--incognito`

---

## Running Chrome in Headless Mode

```java
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless=new");
options.addArguments("--window-size=1920,1080");

WebDriver driver = new ChromeDriver(options);
```

Headless mode is mandatory for most CI pipelines.

---

## Handling Insecure Certificates

```java
ChromeOptions options = new ChromeOptions();
options.setAcceptInsecureCerts(true);
```

Useful for:
- QA / UAT environments
- Internal applications

---

## Firefox Options

```java
FirefoxOptions options = new FirefoxOptions();
options.addArguments("-private");
options.setAcceptInsecureCerts(true);
```

---

## Edge Options

```java
EdgeOptions options = new EdgeOptions();
options.addArguments("--start-maximized");
```

---

## Page Load Strategy (Important)

Controls how long Selenium waits for page load.

```java
options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
```

Values:
- `NORMAL` – waits for full load (default)
- `EAGER` – DOM ready, images may still load
- `NONE` – no waiting

---

## Using Capabilities (Selenium 4 Way)

```java
ChromeOptions options = new ChromeOptions();
options.setCapability("browserVersion", "latest");
```

Used heavily in **Grid and cloud execution**.

---

## Real CI/CD Configuration Example

```java
ChromeOptions options = new ChromeOptions();
options.addArguments("--headless=new");
options.addArguments("--disable-gpu");
options.addArguments("--no-sandbox");

WebDriver driver = new ChromeDriver(options);
```

---

## Common Mistakes ❌

1. Hardcoding options inside tests
2. Using deprecated DesiredCapabilities
3. Forgetting headless config in CI
4. Overloading with unnecessary arguments
5. Different configs for local vs CI

---

## Best Practices ✅

- Centralize browser configuration
- Use Selenium 4 Options API only
- Keep CI and local configs aligned
- Document every non-default argument
- Use headless in pipelines

---

## Interview Notes 🎯

**Q: Difference between Options and Capabilities?**  
A: Options are browser-specific; capabilities are generic.

**Q: How do you run Selenium tests in CI?**  
A: Using headless mode with browser options.

**Q: Are DesiredCapabilities still used?**  
A: No, they are deprecated in Selenium 4.

---

## Real-Project Tip 💡

Most CI failures are solved by fixing **browser options**, not test logic.

---

## Summary

- Options control browser behavior
- Selenium 4 unifies Options & Capabilities