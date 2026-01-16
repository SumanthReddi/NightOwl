---
sidebar_position: 6
---

# Navigation Commands in Selenium

Navigation commands allow Selenium to **control browser navigation**
just like a real user. These commands are fundamental for
end-to-end UI automation flows.

---

## Why Navigation Commands Matter

In real applications, users:
- Navigate between pages
- Use back/forward buttons
- Refresh pages

Selenium must replicate this behavior reliably.

---

## driver.get()

```java
driver.get("https://example.com");
```

### Characteristics
- Loads the given URL
- Waits until page load is complete
- Most commonly used navigation method

### When to Use
- Initial page launch
- Direct navigation to a page

---

## driver.navigate().to()

```java
driver.navigate().to("https://example.com/login");
```

### Characteristics
- Similar to `get()`
- Part of the Navigation interface
- Useful in chained navigation flows

---

## Back Navigation

```java
driver.navigate().back();
```

Used when:
- Validating browser back button behavior
- Testing multi-page workflows

---

## Forward Navigation

```java
driver.navigate().forward();
```

Used after a back navigation to move forward.

---

## Refresh Page

```java
driver.navigate().refresh();
```

Common use cases:
- Reload dynamic content
- Validate refresh behavior
- Handle stale UI states

---

## get() vs navigate().to()

| get() | navigate().to() |
|---|---|
| Simple and direct | More flexible |
| Most commonly used | Useful in navigation chains |
| Blocks until load | Similar behavior |

👉 Functionally equivalent in most cases.

---

## Real Project Usage Tips

- Use `get()` for initial launch
- Use `navigate()` for workflow testing
- Always re-locate elements after navigation
- Combine with explicit waits

---

## Common Mistakes ❌

- Assuming elements persist after navigation
- Skipping waits after page load
- Overusing refresh unnecessarily

---

## Best Practices ✅

- Always wait after navigation
- Re-initialize page objects if needed
- Use navigation commands intentionally

---

## Key Takeaways

- Selenium supports full browser navigation
- `get()` and `navigate().to()` are core methods
- Back, forward, and refresh simulate real users
- Proper usage prevents flaky tests

---

## What’s Next?

👉 **Locators – Overview**
