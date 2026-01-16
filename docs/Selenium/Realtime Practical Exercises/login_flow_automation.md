---
sidebar_position: 3
---

# Login Flow Automation

## Why This Exercise Matters (Real Project Context)
Login is the **most automated UI flow** in real projects. It validates:
- Page navigation
- Form interactions
- Authentication handling
- Post-login landing verification

A poorly designed login automation becomes a **single point of failure** for the entire test suite.

---

## Scope of This Exercise

This exercise focuses on:
- UI-level login automation
- Positive and negative scenarios
- Stable waits and locators
- Page Object Model usage

❌ No API, DB, or backend shortcuts

---

## Application Assumptions

- Username and password fields
- Login button
- Error message for invalid login
- Dashboard page on success

These assumptions match **most enterprise web apps**.

---

## Step 1: Identify Stable Locators

Preferred locators:
- `id` for username & password
- `id` or `data-test` for login button

```java
private By username = By.id("username");
private By password = By.id("password");
private By loginBtn = By.id("login");
```

---

## Step 2: Create Login Page (POM)

```java
public class LoginPage {

    private WebDriver driver;
    private WebDriverWait wait;

    private By username = By.id("username");
    private By password = By.id("password");
    private By loginBtn = By.id("login");
    private By errorMsg = By.id("loginError");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public void login(String user, String pass) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(username)).sendKeys(user);
        driver.findElement(password).sendKeys(pass);
        driver.findElement(loginBtn).click();
    }

    public String getErrorMessage() {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(errorMsg)).getText();
    }
}
```

---

## Step 3: Positive Login Test

```java
@Test
public void validLogin() {
    LoginPage login = new LoginPage(driver);
    login.login("validUser", "validPass");

    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    wait.until(ExpectedConditions.urlContains("dashboard"));

    Assert.assertTrue(driver.getTitle().contains("Dashboard"));
}
```

---

## Step 4: Negative Login Test

```java
@Test
public void invalidLogin() {
    LoginPage login = new LoginPage(driver);
    login.login("invalidUser", "invalidPass");

    Assert.assertEquals(login.getErrorMessage(), "Invalid credentials");
}
```

---

## Synchronization Strategy (Critical)

- Wait for fields before typing
- Wait for navigation or error message
- Never use `Thread.sleep`

Login flows are **highly timing-sensitive**.

---

## Common Login Automation Failures ❌

1. Reusing login state across tests
2. Not handling login failures explicitly
3. Using sleep after clicking login
4. Hardcoding credentials
5. Assuming login is always successful

---

## Best Practices ✅

- Automate login once, reuse everywhere
- Keep login logic inside page class
- Externalize credentials
- Validate both success and failure paths
- Use login only where required

---

## Interview Notes 🎯

**Q: Why is login automation critical?**  
A: It is a gateway for most test scenarios.

**Q: Where should login logic live?**  
A: Inside a page class, not test classes.

**Q: How do you handle login failures?**  
A: By validating error messages explicitly.

---

## Real-Project Tip 💡

If login fails, fail fast — do not let downstream tests run.

---

## Summary

- Login is a foundational UI flow
- Requires strong waits and locators
- POM design is mandatory
- Both success and failure paths must be tested

Selenium 4 compliant • Real-project ready • Interview safe

