---
sidebar_position: 2
---

# PageFactory

## Why PageFactory Exists (Real Project Context)
PageFactory is a Selenium support mechanism that **simplifies element initialization** in Page Object Model (POM). It reduces boilerplate `findElement` calls and improves readability.

It is **optional**, not mandatory. Many enterprise teams still use classic POM.

---

## What PageFactory Actually Does

- Uses `@FindBy` annotations to declare elements
- Lazily initializes elements when accessed
- Wraps elements with dynamic proxies

It **does NOT**:
- Add waits automatically
- Fix synchronization issues
- Improve locator stability

---

## Basic PageFactory Syntax (Selenium 4+)

```java
public class LoginPage {

    private WebDriver driver;

    @FindBy(id = "username")
    private WebElement username;

    @FindBy(id = "password")
    private WebElement password;

    @FindBy(id = "login")
    private WebElement loginBtn;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void login(String user, String pass) {
        username.sendKeys(user);
        password.sendKeys(pass);
        loginBtn.click();
    }
}
```

---

## Supported @FindBy Strategies

```java
@FindBy(id = "id")
@FindBy(name = "name")
@FindBy(className = "class")
@FindBy(css = ".css")
@FindBy(xpath = "//xpath")
```

---

## @FindBys vs @FindAll (Important)

### @FindBys (AND condition)
```java
@FindBys({
    @FindBy(tagName = "div"),
    @FindBy(className = "active")
})
WebElement element;
```

### @FindAll (OR condition)
```java
@FindAll({
    @FindBy(id = "submit"),
    @FindBy(name = "submit")
})
WebElement submitBtn;
```

---

## PageFactory + Waits (Critical Rule)

PageFactory **does not wait** for elements.
You must explicitly apply waits before interaction.

```java
wait.until(ExpectedConditions.visibilityOf(username)).sendKeys("admin");
```

---

## Pros and Cons (Real Projects)

### Pros ✅
- Cleaner page classes
- Less boilerplate code
- Easy to read

### Cons ❌
- Hidden element lookup
- Harder debugging
- StaleElement issues in dynamic pages

---

## When to Use PageFactory

✅ Small to medium applications  
✅ Stable UI  
✅ Teams comfortable with it

❌ Highly dynamic SPAs  
❌ Pages with frequent DOM refresh

---

## Common Mistakes ❌

1. Assuming PageFactory waits automatically
2. Overusing @CacheLookup
3. Using PageFactory in highly dynamic pages
4. Mixing By locators and @FindBy randomly
5. Putting assertions inside page classes

---

## Best Practices ✅

- Use PageFactory consistently or not at all
- Combine with explicit waits
- Avoid `@CacheLookup` in dynamic pages
- Keep page actions business-focused
- Prefer classic POM for complex UIs

---

## Interview Notes 🎯

**Q: What is PageFactory?**  
A: A Selenium support class for initializing WebElements using annotations.

**Q: Does PageFactory improve performance?**  
A: No, it mainly improves readability.

**Q: Should PageFactory be used everywhere?**  
A: No, it depends on application stability.

---

## Real-Project Tip 💡

Many mature frameworks **start with PageFactory and later migrate back to classic POM** for better control.

---

## Summary

- PageFactory simplifies element declaration
- Does not handle waits
- Optional in modern frameworks
- Use based on project needs
