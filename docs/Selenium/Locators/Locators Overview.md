---
sidebar_position: 1
---

# Locators – Overview

Locators are the **most critical concept in Selenium**.
They define how Selenium finds and interacts with elements on a web page.

A strong understanding of locators is essential for:
- Stable automation
- Maintainable frameworks
- Flake-free execution

---

## What Is a Locator?

A locator is a way to **identify a web element** in the DOM so Selenium can:
- Click it
- Type into it
- Read its text
- Validate its state

Without a reliable locator, Selenium cannot interact with the UI.

---

## Why Locators Matter So Much

Poor locators cause:
- Flaky tests
- Frequent failures
- High maintenance cost

Good locators provide:
- Stability
- Readability
- Long-term maintainability

---

## Types of Locators in Selenium

Selenium supports the following locator strategies:

1. id  
2. name  
3. className  
4. tagName  
5. linkText  
6. partialLinkText  
7. xpath  
8. cssSelector  

Each locator has its **own use case and priority**.

---

## Locator Priority (Industry Practice)

Recommended priority order:

1️⃣ id  
2️⃣ name  
3️⃣ cssSelector  
4️⃣ xpath  
5️⃣ Others (only if required)

👉 Always choose the **most stable and unique** locator.

---

## Basic Locator Syntax

```java
driver.findElement(By.id("username"));
driver.findElement(By.name("password"));
driver.findElement(By.className("btn-login"));
```

---

## DOM Awareness (Very Important)

To create good locators, you must understand:
- HTML structure
- Attributes
- Parent–child relationships

Use browser DevTools:
- Inspect element
- Validate uniqueness
- Test XPath/CSS

---

## Common Locator Mistakes ❌

- Using absolute XPath
- Using dynamic attributes blindly
- Using index-based locators
- Copy-paste from DevTools without review

---

## Best Practices ✅

- Prefer unique and stable attributes
- Avoid brittle XPath
- Ask devs for test-friendly attributes
- Validate locators before automation

---

## Key Takeaways

- Locators are the backbone of Selenium
- Stability > simplicity
- Good locators reduce maintenance
- DOM knowledge is mandatory
