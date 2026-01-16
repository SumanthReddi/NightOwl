---
sidebar_position: 3
---

# LinkText and PartialLinkText Locators

LinkText and PartialLinkText locators are used to locate **anchor (`<a>`) elements**
based on their visible text. They are useful but should be used **selectively**.

---

## LinkText Locator

Locates a link using its **exact visible text**.

```java
driver.findElement(By.linkText("Forgot Password"));
```

### When to Use
- Link text is stable
- Text is unique
- Navigation links or menus

### Advantages
- Very readable
- Easy to understand

---

## PartialLinkText Locator

Locates a link using **partial visible text**.

```java
driver.findElement(By.partialLinkText("Forgot"));
```

### When to Use
- Full text is dynamic
- Partial text is stable

⚠️ Use carefully — partial matches can be risky.

---

## Limitations ❌

- Works only for `<a>` tags
- Breaks if UI text changes
- Localization can cause failures
- Not suitable for buttons styled as links

---

## Comparison Table

| Locator | Precision | Stability | Recommendation |
|---|---|---|---|
| linkText | High | Medium | Use if text is stable |
| partialLinkText | Low | Low | Use sparingly |

---

## Common Mistakes ❌

- Using partialLinkText broadly
- Ignoring localization
- Using for non-link elements

---

## Best Practices ✅

- Prefer ID or CSS when possible
- Use linkText only for stable navigation
- Avoid partialLinkText in large pages

---

## Key Takeaways

- Text-based locators are readable
- Fragile if UI text changes
- Use sparingly in real projects

---

## What’s Next?

👉 **XPath – Basics**
