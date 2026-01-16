---
sidebar_position: 8
---

# Selenium 4 Relative Locators

Selenium 4 introduced **Relative Locators**, which allow locating elements
based on their **position relative to other elements**.

These locators improve **readability** and are useful when attributes are weak
or unstable.

---

## What Are Relative Locators?

Relative locators find elements **in relation to a known element** instead of
using attributes like id or class.

They are also called **Friendly Locators**.

---

## Available Relative Locators (Selenium 4+)

Selenium provides the following relative locators:

- `above()`
- `below()`
- `toLeftOf()`
- `toRightOf()`
- `near()`

All are used via `RelativeLocator.with()`.

---

## Basic Syntax

```java
import static org.openqa.selenium.support.locators.RelativeLocator.with;

WebElement password =
driver.findElement(with(By.tagName("input"))
        .below(By.id("username")));
```

---

## above()

Locates an element **above** another element.

```java
WebElement email =
driver.findElement(with(By.tagName("input"))
        .above(By.id("password")));
```

---

## below()

Locates an element **below** another element.

```java
WebElement password =
driver.findElement(with(By.tagName("input"))
        .below(By.id("email")));
```

---

## toLeftOf() / toRightOf()

```java
WebElement rememberMe =
driver.findElement(with(By.tagName("input"))
        .toRightOf(By.xpath("//label[text()='Remember Me']")));
```

---

## near()

Finds elements within ~50 pixels of another element.

```java
WebElement helpIcon =
driver.findElement(with(By.tagName("img"))
        .near(By.id("username")));
```

⚠️ `near()` is **distance-based**, not structural.

---

## When to Use Relative Locators

Use when:
- Elements lack unique attributes
- UI layout is stable
- Forms and labels are aligned
- Readability is preferred

---

## When NOT to Use ❌

- Highly responsive layouts
- Dynamic UI rearrangements
- Precise element targeting required

---

## Relative Locators vs XPath/CSS

| Feature | Relative Locators | XPath / CSS |
|---|---|---|
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Precision | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Layout dependent | Yes | Less |
| Modern support | Selenium 4+ | All versions |

---

## Best Practices ✅

- Combine with stable base element
- Avoid chaining too many relations
- Prefer ID/CSS/XPath when available
- Use for readability, not complexity

---

## Common Mistakes ❌

- Using relative locators everywhere
- Assuming pixel-perfect layouts
- Using in highly dynamic pages

---

## Key Takeaways

- Relative locators are Selenium 4+ feature
- Useful for layout-based identification
- Improve readability
- Not a replacement for XPath/CSS

---

## Where This Fits in Your Structure

📂 **Folder:** `docs/selenium/Locators/`  
📄 **File:** `relative-locators.md`

---

## What’s Next?

👉 **WebElement Methods**
