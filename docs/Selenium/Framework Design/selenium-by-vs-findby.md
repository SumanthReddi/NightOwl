---
sidebar_position: 3
---

# By Locator vs @FindBy 

Both approaches locate the same web element, but they belong to
different design styles in Selenium automation.

------------------------------------------------------------------------

## 🔹 1) Using `By` Locator

This creates a locator object. You must use `driver.findElement()` to
interact with the element.

### ✅ Example

``` java
By username = By.id("username");

driver.findElement(username).sendKeys("admin");
```

### ✔ Characteristics

-   Uses direct WebDriver API
-   Element is searched every time `findElement()` is called
-   No PageFactory required
-   Simple and explicit
-   Preferred in modern Selenium frameworks

### ✔ When to Use

-   Dynamic web pages
-   Utility/helper methods
-   Custom frameworks
-   Debugging scenarios
-   Lightweight test scripts

------------------------------------------------------------------------

## 🔹 2) Using `@FindBy` Annotation

This belongs to PageFactory (Page Object Model pattern). Selenium
initializes the element automatically.

### ✅ Example

``` java
@FindBy(id = "username")
private WebElement username;

public void enterUsername(String name) {
    username.sendKeys(name);
}
```

### ⚠ Requires Initialization

``` java
PageFactory.initElements(driver, this);
```

### ✔ Characteristics

-   Uses Page Object Model with PageFactory
-   Cleaner page classes
-   Supports lazy loading via proxy
-   Less code in test methods

### ✔ When to Use

-   Structured POM frameworks
-   Large projects with dedicated page classes
-   Readable abstraction layers

------------------------------------------------------------------------

## 🔥 Key Differences

  Feature                 By Locator     @FindBy WebElement
  ----------------------- -------------- ------------------------
  Locator Type            Locator only   WebElement field
  Needs findElement()     Yes            No
  Requires PageFactory    No             Yes
  Re-locates element      Every call     On use (proxy)
  Dynamic UI handling     Strong         Can cause stale issues
  Code readability        Medium         High
  Modern recommendation   Preferred      Less favored

------------------------------------------------------------------------

## ⚠ Real-World Insight

Many modern Selenium engineers prefer **By locators inside Page
Objects** instead of PageFactory because:

-   More reliable for dynamic DOM changes
-   Easier debugging
-   Avoids stale element issues
-   No dependency on PageFactory
-   Aligns better with Selenium 4 practices

------------------------------------------------------------------------

## ✅ Recommended Modern Pattern

Use `By` locators inside Page Object methods.

``` java
private By username = By.id("username");

public void enterUsername(String name) {
    driver.findElement(username).sendKeys(name);
}
```

### ✔ Benefits

-   Clean Page Object Model
-   Reliable element lookup
-   Works well with waits
-   Handles page refreshes better

------------------------------------------------------------------------

## 🧠 Quick Decision Guide

-   Small scripts → Either approach works\
-   Enterprise framework → Prefer `By`\
-   Legacy POM framework → `@FindBy`\
-   Highly dynamic UI → Definitely `By`

------------------------------------------------------------------------

## 📌 Summary

Both approaches are valid, but modern automation frameworks generally
favor **By locators + explicit waits + clean Page Objects** for
reliability and maintainability.
