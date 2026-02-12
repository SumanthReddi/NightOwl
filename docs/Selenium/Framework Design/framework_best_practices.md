---
sidebar_position: 4
---

# Framework Best Practices

## Why Best Practices Matter (Real Project View)
Selenium frameworks fail in production not because of Selenium itself, but because of **poor design decisions**. Best practices ensure:
- Stability across releases
- Faster debugging
- Scalable test growth
- CI/CD reliability

---

## 1. Keep Tests Thin, Pages Smart

**Rule:** Tests describe *what* to validate, pages handle *how* to interact.

✔ Tests: scenario + assertions  
✔ Pages: locators + actions + waits

❌ Tests should not contain `findElement`, waits, or UI mechanics.

---

## 2. Centralize Wait Strategy

- Use **explicit waits only**
- Keep wait utilities in one place
- Avoid mixing implicit and explicit waits

```java
wait.until(ExpectedConditions.elementToBeClickable(locator));
```

This prevents unpredictable delays and flaky behavior.

---

## 3. Prefer Behavior Methods Over Element Getters

❌ Bad
```java
public WebElement getLoginButton() { return loginBtn; }
```

✅ Good
```java
public void login(String user, String pass) { /* actions */ }
```

Pages should expose **business behavior**, not raw elements.

---

## 4. Use Stable Locators

Preferred order:
1. `id`
2. `name`
3. Stable CSS
4. XPath (as last resort)

❌ Avoid index-based XPath and dynamic attributes.

---

## 5. Handle Dynamic UI Explicitly

- Wait for loaders to disappear
- Wait for text/state changes
- Handle stale elements gracefully

Dynamic UI requires **condition-based waits**, not sleeps.

---

## 6. One Responsibility Per Class

- One page = one page class
- Large pages can be split into components
- Avoid "god classes"

This improves readability and ownership.

---

## 7. Avoid Thread.sleep Completely

- Zero tolerance in production code
- Replace with explicit or fluent waits
- Enforce via code reviews

---

## 8. Make Failures Actionable

When a test fails, logs should tell:
- What was expected
- What actually happened
- Which step failed

Avoid silent failures and generic assertions.

---

## 9. Design for CI/CD from Day One

- No hard-coded waits
- No environment-specific assumptions
- Tests must run headless
- Clean setup and teardown

Local-only tests do not scale.

---

## 10. Keep Framework Simple

❌ Over-engineering causes more issues than it solves.

Avoid:
- Unnecessary abstraction layers
- Complex inheritance trees
- Premature optimization

Simple, readable code wins long-term.

---

## Common Framework Smells ❌

1. Tests breaking on minor UI change
2. Frequent use of sleeps
3. Huge page classes
4. Duplicate locators across pages
5. Hard-to-debug CI failures

---

## Interview Notes 🎯

**Q: What makes a Selenium framework scalable?**  
A: Clear separation of concerns, stable waits, and reusable pages.

**Q: Biggest mistake in Selenium frameworks?**  
A: Mixing test logic with UI interaction logic.

**Q: How do you reduce flaky tests?**  
A: Proper waits, stable locators, and clean design.

---

## Real-Project Tip 💡

If adding a new test feels hard, your framework design likely needs refactoring.

---

## Summary

- Separation of concerns is critical
- Explicit waits are mandatory
- Simplicity beats cleverness
- Best practices prevent flaky automation