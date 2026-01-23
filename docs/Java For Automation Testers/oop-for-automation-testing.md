---
sidebar_position: 2
---

# OOP for Automation Testing (Why Selenium Needs Structure)

<!-- ## Priority
AUTOMATION_CORE -->

---

## Context (Why this comes after Java Basics)
After writing a few working tests, a common problem appears:
- Same Selenium code repeated everywhere
- Locators copied into every test
- Tests are hard to read and harder to maintain

Selenium can interact with elements, but it **does not understand pages, flows, or structure**.
OOP exists to give Selenium **structure and discipline**.

---

## What Selenium Cannot Do (The Gap)
Selenium can:
- click elements
- type values
- read text

Selenium cannot:
- group elements into a page
- hide locators
- reuse flows cleanly
- separate test logic from UI logic

As a result, tests become long and fragile.

---

## What Java OOP Adds (The Fix)
OOP allows you to:
- represent a page as a class
- hide locators behind methods
- reuse flows like login, search, checkout
- keep tests readable and business-focused

In simple terms:
> Selenium touches the UI.  
> OOP organizes how we touch the UI.

---

## Core OOP Concepts Used in Automation

---

## 1. Class & Object (Page Modeling)

### Automation Problem
Tests directly interact with elements, making them noisy.

### Java Fix
Model each page as a class.

```java
public class LoginPage {

    private WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void login(String user, String password) {
        // enter username
        // enter password
        // click login
    }
}
```

Tests create objects of pages, not elements.

---

## 2. Encapsulation (MOST IMPORTANT)

### Automation Problem
Locators are exposed everywhere.
A small UI change breaks many tests.

### Java Fix
Hide locators and expose actions.

Bad approach:
```java
driver.findElement(By.id("login")).click();
```

Correct approach:
```java
loginPage.clickLogin();
```

Encapsulation ensures:
- one place to update locators
- cleaner test code

---

## 3. Constructors (Dependency Passing)

### Automation Problem
Multiple WebDriver instances are created accidentally.

### Java Fix
Pass dependencies using constructors.

```java
public LoginPage(WebDriver driver) {
    this.driver = driver;
}
```

Rule:
- Pages should NEVER create WebDriver
- Pages should RECEIVE WebDriver

---

## 4. Inheritance (Use Carefully)

### Automation Problem
Setup and teardown code is duplicated.

### Java Fix
Use a base test class.

```java
public class BaseTest {
    protected WebDriver driver;
}
```

Tests extend BaseTest.

Warning:
- Avoid deep inheritance chains
- Prefer composition for page relationships

---

## 5. Abstraction (Cleaner Test Flow)

### Automation Problem
Tests depend too much on implementation details.

### Java Fix
Expose only required behavior.

```java
public interface LoginActions {
    void login(String user, String password);
}
```

Abstraction helps:
- replace implementations easily
- keep tests focused on behavior

---

## 6. Polymorphism (Flexibility)

### Automation Problem
Supporting multiple browsers becomes messy.

### Java Fix
Use polymorphism for driver creation.

```java
WebDriver driver = DriverFactory.getDriver(browser);
```

This enables:
- cross-browser execution
- cloud providers (Grid, Sauce, BrowserStack)

---

## Automation Example (Clean Test Code)

```java
public class LoginTest extends BaseTest {

    @Test
    public void validLoginTest() {
        LoginPage loginPage = new LoginPage(driver);
        HomePage homePage = loginPage.login("user", "password");

        Assert.assertTrue(homePage.isDashboardVisible());
    }
}
```

Notice:
- No locators in test
- No Selenium calls in test
- Test reads like a business flow

---

## Common Mistakes (Real Projects)

- Writing Selenium code directly in test methods
- Making locators public
- Creating WebDriver inside page classes
- Overusing inheritance
- One massive page class (god class)

---

## Best Practices

- One page = one class
- Hide locators, expose actions
- Pass WebDriver via constructor
- Prefer composition over inheritance
- Keep tests readable and short

---

## Interview Notes

- What is Page Object Model?
- Why is encapsulation critical in automation?
- Inheritance vs composition
- How do you manage WebDriver lifecycle?
- How polymorphism helps in cross-browser testing?

---

## Summary (Human View)
Selenium knows how to act.
OOP teaches Selenium **how to behave properly**.

Good OOP = maintainable framework  
Bad OOP = fragile automation
