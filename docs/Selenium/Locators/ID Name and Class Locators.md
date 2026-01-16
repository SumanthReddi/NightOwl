---
sidebar_position: 2
---

# ID, Name, and Class Locators

ID, Name, and Class locators are **basic but extremely powerful** when used correctly.
They are usually the **first choice** for stable Selenium automation.

---

## ID Locator (Best Choice)

The `id` attribute should be **unique** on a page.

```java
driver.findElement(By.id("username"));
```

### Why ID Is Preferred
- Fast lookup
- Highly stable
- Least maintenance

### When to Use
- Element has a unique, static id
- Login fields, buttons, key inputs

---

## Name Locator

The `name` attribute is commonly used in forms.

```java
driver.findElement(By.name("password"));
```

### When to Use
- id is not available
- name attribute is unique

⚠️ Ensure uniqueness — names are not always unique.

---

## ClassName Locator

Locates elements by CSS class.

```java
driver.findElement(By.className("btn-primary"));
```

### Limitations ❌
- Classes are often reused
- Multiple classes cannot be used together
- Fragile if styling changes

Use **only when the class is unique**.

---

## Comparison Table

| Locator | Stability | Speed | Recommendation |
|---|---|---|---|
| id | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Always prefer |
| name | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Use if unique |
| className | ⭐⭐ | ⭐⭐⭐ | Use cautiously |

---

## Common Mistakes ❌

- Using dynamic ids
- Assuming name is unique
- Using className for layout classes
- Not verifying uniqueness

---

## Best Practices ✅

- Validate uniqueness in DevTools
- Prefer id over all others
- Ask devs for test-friendly ids
- Avoid className unless necessary

---

## Key Takeaways

- ID is the most reliable locator
- Name is a good fallback
- ClassName should be used carefully
- Locator choice impacts stability

---

## What’s Next?

👉 **LinkText and PartialLinkText**
