---
sidebar_position: 4
---

# XPath – Basics

XPath is the **most powerful and flexible locator strategy** in Selenium.
It is widely used when simple locators (id, name, css) are not available.

Understanding XPath is **mandatory for real-world automation**.

---

## What is XPath?

XPath (XML Path Language) is a syntax for navigating through elements
in an HTML/XML document.

It allows locating elements based on:
- Tags
- Attributes
- Text
- Hierarchy

---

## Absolute XPath ❌

Absolute XPath starts from the root (`/html/body/...`).

```xpath
/html/body/div[2]/form/input[1]
```

### Why Not to Use
- Breaks easily
- Dependent on DOM structure
- High maintenance

👉 **Avoid absolute XPath in automation**

---

## Relative XPath ✅ (Recommended)

Relative XPath starts with `//` and is flexible.

```xpath
//input[@id='username']
```

### Advantages
- More stable
- Readable
- Maintainable

---

## XPath Syntax Basics

### Tag Only
```xpath
//input
```

### Attribute Based
```xpath
//input[@name='email']
```

### Multiple Attributes
```xpath
//input[@type='text' and @name='email']
```

---

## Using XPath in Selenium

```java
driver.findElement(By.xpath("//button[@type='submit']")).click();
```

---

## DOM Awareness (Critical)

Good XPath requires:
- Understanding parent-child relationships
- Knowing attributes
- Checking uniqueness

Use browser DevTools to:
- Inspect elements
- Test XPath
- Validate uniqueness

---

## Common XPath Mistakes ❌

- Writing long, fragile XPath
- Using indexes unnecessarily
- Copy-pasting from DevTools blindly

---

## Best Practices ✅

- Prefer relative XPath
- Use meaningful attributes
- Keep XPath short and readable
- Validate XPath before use

---

## Key Takeaways

- XPath is powerful but should be used wisely
- Avoid absolute XPath
- Relative XPath is preferred
- DOM understanding is essential

---

## What’s Next?

👉 **Advanced XPath**
