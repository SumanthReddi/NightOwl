---
sidebar_position: 6
---

# CSS Selectors

CSS Selectors are a **fast and readable alternative to XPath**.
They are widely used in Selenium for locating elements when supported.

---

## What are CSS Selectors?

CSS selectors use the same syntax as CSS used for styling web pages.
Selenium can leverage this syntax to locate elements efficiently.

---

## Basic CSS Selector Syntax

### By ID
```css
#username
```

```java
driver.findElement(By.cssSelector("#username"));
```

---

### By Class
```css
.btn-login
```

```java
driver.findElement(By.cssSelector(".btn-login"));
```

---

### By Attribute
```css
input[name='email']
```

```java
driver.findElement(By.cssSelector("input[name='email']"));
```

---

## Advanced CSS Selectors

### Contains (Partial Match)
```css
input[name*='user']
```

---

### Starts With
```css
input[name^='user']
```

---

### Ends With
```css
input[name$='name']
```

---

## Parent–Child Relationship

### Direct Child
```css
div.form > input
```

---

### Descendant
```css
div.form input
```

---

## nth-child Selector

```css
ul li:nth-child(2)
```

⚠️ Use cautiously — index-based selectors are fragile.

---

## CSS vs XPath (Quick Comparison)

| Feature | CSS | XPath |
|---|---|---|
| Speed | Faster | Slightly slower |
| Text matching | ❌ | ✅ |
| Traversing up DOM | ❌ | ✅ |
| Readability | High | Medium |

---

## Limitations ❌

- Cannot locate by visible text
- Cannot traverse backward (parent)
- Limited flexibility compared to XPath

---

## Best Practices ✅

- Prefer CSS when simple
- Use XPath for complex DOM traversal
- Avoid index-based selectors
- Keep selectors readable

---

## Common Mistakes ❌

- Overusing nth-child
- Using long chained selectors
- Ignoring uniqueness

---

## Key Takeaways

- CSS selectors are fast and clean
- XPath is more powerful
- Choose based on use case
- Simpler locators are more stable
