---
sidebar_position: 4
---
# OOPS Concepts in Automation Framework

## Overview

In my automation framework, I follow Object-Oriented Programming (OOP) principles to make test automation:

- Reusable
- Maintainable
- Scalable
- Easy to extend

These principles help reduce code duplication, improve readability, and simplify framework maintenance.

---

# 1. Encapsulation

## Definition
Encapsulation is the process of wrapping data and methods into a single unit (class) while hiding internal implementation details from external classes.

## Framework Example

In a Page Object Model (POM) framework:

- Web elements (locators) are declared as private.
- Public methods expose actions that can be performed on those elements.

### Example

```java
public class LoginPage {

    private WebElement loginBtn;

    public void clickLoginButton() {
        loginBtn.click();
    }
}
```

### Benefit

- Protects internal implementation details.
- Prevents direct access to page elements.
- Reduces impact when locator changes occur.

---

# 2. Inheritance

## Definition

Inheritance allows a class to acquire properties and behaviors from another class.

## Framework Example

Most automation frameworks use a `BaseTest` class containing common functionalities such as:

- Driver initialization
- Browser configuration
- Setup methods
- Teardown methods
- Reporting utilities

Other test classes extend this base class.

### Example

```java
public class BaseTest {

    public void setup() {
        // Driver initialization
    }

    public void teardown() {
        // Close browser
    }
}

public class LoginTest extends BaseTest {

    public void verifyLogin() {
        // Test logic
    }
}
```

### Benefit

- Promotes code reuse.
- Reduces duplication.
- Simplifies maintenance.

---

# 3. Polymorphism

## Definition

Polymorphism means "one interface, multiple implementations."

## Framework Example

Using the WebDriver interface:

```java
WebDriver driver;
```

At runtime, different browser implementations can be assigned.

### Example

```java
WebDriver driver = new ChromeDriver();
```

or

```java
WebDriver driver = new EdgeDriver();
```

or

```java
WebDriver driver = new FirefoxDriver();
```

### Benefit

- Browser-independent automation.
- Easy switching between browsers.
- No change required in test logic.

---

# 4. Abstraction

## Definition

Abstraction exposes only essential functionality while hiding implementation details.

## Framework Example

In Page Object Model:

Test cases call high-level business methods without knowing how locators are identified.

### Example

```java
loginPage.login(username, password);
```

The test script does not need to know:

- XPath
- CSS selectors
- Element identification logic

These details remain inside the page class.

### Benefit

- Cleaner test scripts.
- Better readability.
- Focuses on business functionality rather than technical implementation.

---

# 5. Association

## Definition

Association represents a relationship where one class uses another class.

## Framework Example

A test class uses page object classes to perform actions.

### Example

```java
LoginPage loginPage = new LoginPage(driver);

loginPage.login(username, password);
```

Here:

- `LoginTest` is associated with `LoginPage`.
- `LoginTest` uses `LoginPage` methods to perform actions.

### Benefit

- Improves modularity.
- Establishes clear relationships between classes.
- Makes framework structure organized and maintainable.

---

# OOPS Mapping in Selenium Automation Framework

| OOPS Concept | Framework Usage | Example |
|-------------|----------------|----------|
| Encapsulation | Hide locators and expose actions | `clickLoginButton()` |
| Inheritance | Reuse setup/teardown methods | `LoginTest extends BaseTest` |
| Polymorphism | Use WebDriver interface | `WebDriver driver = new ChromeDriver()` |
| Abstraction | Hide locator implementation | `loginPage.login()` |
| Association | Test class uses page classes | `new LoginPage(driver)` |

---

# Key Takeaways

Applying OOPS principles makes an automation framework:

✅ Reusable

✅ Maintainable

✅ Scalable

✅ Modular

✅ Easy to Extend

✅ Less Error-Prone

---

## Best Practice

A good automation framework is not about writing more code; it's about writing better, reusable, and maintainable code.

![alt img](../../Images/Oops%20in%20Automation.jpg)
![alt img](../../Images/OOPS%20in%20Framework.jpeg)