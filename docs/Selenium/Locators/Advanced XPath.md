---
sidebar_position: 5
---

# Advanced XPath

Advanced XPath techniques are used when basic locators are insufficient.
They are extremely common in **dynamic, modern web applications**.

Mastering these patterns greatly reduces locator failures.

---

## contains()

Used when attribute values are dynamic.

```xpath
//input[contains(@id,'user')]
```

### When to Use
- Dynamic IDs
- Partial attribute matches

---

## starts-with()

Matches attributes that start with a specific value.

```xpath
//div[starts-with(@class,'menu-')]
```

Useful when prefixes are stable.

---

## text()

Used to locate elements based on visible text.

```xpath
//button[text()='Login']
```

⚠️ Sensitive to UI text changes.

---

## AND / OR Conditions

### AND
```xpath
//input[@type='text' and @name='email']
```

### OR
```xpath
//input[@id='email' or @name='email']
```

Use AND for precision, OR for flexibility.

---

## XPath Axes (Very Important)

### Parent
```xpath
//input[@id='email']/parent::div
```

### Child
```xpath
//div[@id='form']/child::input
```

### Following-Sibling
```xpath
//label[text()='Username']/following-sibling::input
```

### Preceding-Sibling
```xpath
//input[@id='password']/preceding-sibling::label
```

Axes are powerful for complex DOMs.

---

## Index Usage (Use Carefully)

```xpath
(//input[@type='text'])[1]
```

⚠️ Avoid unless no other option exists.

---

## Common Mistakes ❌

- Overusing contains()
- Relying on indexes
- Writing overly complex XPath
- Ignoring DOM structure

---

## Best Practices ✅

- Prefer attributes over text
- Use axes for stability
- Keep XPath readable
- Validate uniqueness

---

## Key Takeaways

- Advanced XPath handles dynamic elements
- Axes improve locator stability
- Simpler XPath is better XPath

---

## What’s Next?

👉 **CSS Selectors**
