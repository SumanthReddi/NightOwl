---
sidebar_position: 3
---

# Page vs Test Responsibility

## Why This Separation Matters (Real Project View)
One of the most common causes of **unmaintainable Selenium frameworks** is unclear responsibility between **Page classes** and **Test classes**.

When responsibilities are mixed:
- Small UI changes break many tests
- Code duplication increases
- Debugging becomes slow

---

## Clear Responsibility Split

### Page Class Responsibility

Page classes represent **UI behavior**.

They should contain:
- Element locators
- UI interactions (click, type, select)
- Business-level actions (login, search, submit)
- Synchronization logic (explicit waits)

They should NOT contain:
- Assertions
- Test data variations
- Test flow logic

---

### Test Class Responsibility

Test classes represent **verification logic**.

They should contain:
- Test scenarios / flows
- Assertions and validations
- Test data combinations
- Pre-conditions and post-conditions

They should NOT contain:
- Locators
- Low-level UI actions
- Explicit waits

---

## Real Project Example

### ❌ Bad Design (Mixed Responsibility)
```java
@Test
public void loginTest() {
    driver.findElement(By.id("username")).sendKeys("admin");
    driver.findElement(By.id("password")).sendKeys("pass");
    driver.findElement(By.id("login")).click();

    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    wait.until(ExpectedConditions.titleContains("Dashboard"));

    Assert.assertTrue(driver.getTitle().contains("Dashboard"));
}
```

---

### ✅ Good Design (Clear Separation)

#### Page Class
```java
public class LoginPage {

    private WebDriver driver;

    private By username = By.id("username");
    private By password = By.id("password");
    private By loginBtn = By.id("login");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void login(String user, String pass) {
        driver.findElement(username).sendKeys(user);
        driver.findElement(password).sendKeys(pass);
        driver.findElement(loginBtn).click();
    }
}
```

#### Test Class
```java
@Test
public void validLogin() {
    LoginPage login = new LoginPage(driver);
    login.login("admin", "password");

    Assert.assertTrue(driver.getTitle().contains("Dashboard"));
}
```

---

## Why This Design Scales

- UI changes affect only page classes
- Test cases remain readable
- New tests reuse existing page actions
- Faster maintenance during releases

---

## Synchronization Responsibility (Important)

✔ Waits belong in **Page classes**  
❌ Waits do NOT belong in test classes

Reason:
- UI readiness is a page concern
- Tests should assume page methods are stable

---

## Common Anti-Patterns ❌

1. Assertions inside page classes
2. Locators inside test classes
3. Returning WebElements from pages
4. Page methods doing verification
5. Tests handling waits

---

## Best Practices ✅

- Pages expose **behavior**, not elements
- Tests focus only on validation
- Keep page methods reusable
- One assertion concern per test
- Review PRs for responsibility violations

---

## Interview Notes 🎯

**Q: Where should assertions be written?**  
A: In test classes.

**Q: Where should waits be handled?**  
A: Inside page classes.

**Q: What happens if responsibilities are mixed?**  
A: Tests become brittle and hard to maintain.

---

## Real-Project Tip 💡

If your test classes are long and complex, responsibilities are likely not separated correctly.

---

## Summary

- Pages handle UI behavior
- Tests handle validation
- Clear separation improves scalability
- Mandatory for enterprise frameworks
