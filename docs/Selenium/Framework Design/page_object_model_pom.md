---
sidebar_position: 1
---

# Page Object Model (POM)

## Why POM Exists (Real Project Problem)
Without POM, Selenium tests quickly become:
- Hard to maintain
- Highly duplicated
- Fragile to UI changes

POM **separates page behavior from test logic**, making automation scalable and maintainable.

---

## Core Principle

> **One page = one class**

- Page classes contain **locators + actions**
- Test classes contain **only test flow and assertions**

---

## What Goes Into a Page Class

✔ Locators (By / WebElement)  
✔ Page-level actions (click, type, select)  
✔ Business-relevant methods  
❌ Assertions  
❌ Test logic

---

## What Goes Into a Test Class

✔ Test flow  
✔ Assertions  
✔ Data variation  
❌ Element locators  
❌ Low-level UI operations

---

## Real Project Example

### Login Page (Page Object)
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

---

### Test Class
```java
@Test
public void validLogin() {
    LoginPage login = new LoginPage(driver);
    login.login("admin", "password");

    Assert.assertTrue(driver.getTitle().contains("Dashboard"));
}
```

---

## Why This Design Works

- UI changes affect **only page classes**
- Tests stay clean and readable
- Reusability across test cases
- Easier onboarding for new team members

---

## Common Anti-Patterns ❌

1. Locators inside test classes
2. Assertions inside page classes
3. One giant page class for entire app
4. Returning `WebElement` instead of behavior
5. Copy-pasting locators across pages

---

## Best Practices ✅

- Pages expose **behavior**, not elements
- Keep methods business-focused
- One responsibility per page
- Avoid static WebDriver usage
- Combine with explicit waits inside page methods

---

## POM + Waits (Important)

Wait logic should live **inside page actions**, not tests.

```java
public void clickLogin() {
    wait.until(ExpectedConditions.elementToBeClickable(loginBtn)).click();
}
```

---

## Interview Notes 🎯

**Q: What problem does POM solve?**  
A: Code duplication and poor maintainability.

**Q: Where should assertions live?**  
A: In test classes, not page classes.

**Q: Can one page have multiple classes?**  
A: Yes, for large or complex pages.

---

## Real-Project Tip 💡

If UI changes break **many tests**, your POM is likely not implemented correctly.

---

## Summary

- POM separates UI logic from tests
- Improves maintainability and scalability
- Mandatory for enterprise frameworks
- Interview-critical concept

Selenium 4 compliant • Enterprise standard • Interview ready

