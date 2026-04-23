---
sidebar_position: 10
title: Locators Interview Questions
---

# Selenium Locators & Finding Elements – Interview Questions

---

## 🔹 1. What is the difference between `findElement()` and `findElements()`?

- `findElement()` returns a single WebElement (first match)
- `findElements()` returns a `List<WebElement>`

### Behavior when element is NOT found:
- `findElement()` → ❌ throws `NoSuchElementException`
- `findElements()` → ✅ returns empty list

---

## 🔹 2. When would `findElements()` fail?

`findElements()` does NOT fail when no elements are found.

However, it can fail in these cases:
- Invalid locator → `InvalidSelectorException`
- WebDriver/session issues → `WebDriverException`
- Using stored elements after DOM refresh → `StaleElementReferenceException`

---

## 🔹 3. When should you use `findElement()` vs `findElements()`?

- Use `findElement()` → when element MUST be present (fail fast)
- Use `findElements()` → when element MAY or MAY NOT exist (safe check)

---

## 🔹 4. What are different types of locators in Selenium?

- ID
- Name
- ClassName
- TagName
- LinkText / PartialLinkText
- XPath
- CSS Selector

---

## 🔹 5. Which locator is fastest?

👉 `By.id` is generally the fastest and most reliable  
👉 Followed by `Name` and `CSS Selector`

XPath is usually slower (especially complex ones)

---

## 🔹 6. Difference between XPath and CSS Selector?

| XPath | CSS Selector |
|------|-------------|
| Supports traversal both directions | Only forward traversal |
| Supports complex conditions | Simpler and faster |
| Slower | Faster |

---

## 🔹 7. Absolute XPath vs Relative XPath

- Absolute XPath → starts from root (`/html/body/...`) ❌ not recommended
- Relative XPath → starts anywhere (`//div[@id='x']`) ✅ preferred

---

## 🔹 8. What are dynamic locators?

Locators where attributes change dynamically.

Example:
```
//input[@id='user_123']
```

Solution:
- Use contains()
- Use starts-with()
- Use relative XPath

---

## 🔹 9. What is a stale element?

When the DOM updates and previously located element is no longer attached.

👉 Leads to: `StaleElementReferenceException`

---

## 🔹 10. Does `findElements()` wait?

- With implicit wait → YES (waits until timeout)
- Without wait → NO (returns immediately)

⚠️ Can slow tests if element is not present.

---

## 🔹 11. How do you check if an element is present?

```
List<WebElement> elements = driver.findElements(By.id("test"));
if (elements.size() > 0) {
    // element exists
}
```

---

## 🔹 12. Best practices for locators

- Prefer ID when available
- Avoid absolute XPath
- Use stable attributes
- Avoid indexes in XPath (`[1]`, `[2]`)
- Keep locators readable and maintainable

---

## 🔹 13. What are common mistakes in locators?

- Using dynamic IDs
- Writing long XPath chains
- Overusing indexes
- Not handling waits properly

---

## 🔹 14. Real-world trick question

👉 “Does `findElements()` ever fail?”

✔ Correct Answer:
It does NOT fail when elements are not found, but can fail due to:
- Invalid locator
- Driver/session issues
- Stale elements during usage
