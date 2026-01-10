---
sidebar_position: 22
---

# Cucumber with Selenium (UI Automation Patterns)

When using Cucumber for UI automation, **how you structure Selenium code matters more than the tools themselves**.
This section explains **clean, scalable patterns** for combining Cucumber with Selenium in real projects.

---

## Core Principle

> **Feature files describe behavior.  
> Step definitions orchestrate actions.  
> Page Objects perform UI interactions.**

Never mix these responsibilities.

---

## Recommended Layered Architecture

```
Feature Files (Gherkin)
        ↓
Step Definitions (Glue)
        ↓
Page Objects (UI Actions)
        ↓
WebDriver / Selenium APIs
```

This separation ensures:
- Readability
- Reusability
- Maintainability

---

## Role of Feature Files

Feature files should:
- Describe user behavior
- Avoid UI details
- Stay business-readable

❌ Avoid:
- Button names
- XPath/CSS
- Page names

---

## Role of Step Definitions

Step definitions should:
- Translate behavior into actions
- Call Page Object methods
- Contain minimal logic

❌ Avoid:
- Direct Selenium calls
- Long workflows
- Assertions-heavy logic

---

## Role of Page Objects

Page Objects should:
- Contain Selenium locators
- Encapsulate UI actions
- Hide implementation details

Benefits:
- Locator changes affect one place
- Steps remain clean
- Easier maintenance

---

## Assertions Placement

Best practice:
- Assertions in step definitions or helper/assertion layers
- Not inside feature files
- Not buried deep inside page objects

Rule:
> Page Objects act, Steps verify.

---

## Driver Management (Conceptual)

Driver lifecycle should be:
- Controlled via Hooks
- One driver per scenario (for parallel safety)
- Cleaned up after execution

Avoid:
- Static WebDriver
- Sharing drivers across scenarios

---

## Synchronization Awareness

UI automation requires:
- Explicit waits
- Stable element interaction patterns

Avoid:
- Hard sleeps
- Timing assumptions

---

## Common Anti-Patterns ❌

- Selenium code inside step definitions
- Huge step methods
- Duplicate locators across steps
- UI logic leaking into Gherkin

These lead to:
- High maintenance
- Flaky tests
- Poor readability

---

## Real-World Folder Structure (Example)

```
src/test/java
 ├── steps
 ├── pages
 ├── hooks
 ├── runners
 ├── utils
```

Clean separation = scalable framework.

---

## Interview-Ready Questions

**Q: Where should Selenium code live in Cucumber?**  
A: Inside Page Objects, not step definitions.

**Q: Why avoid Selenium calls in step definitions?**  
A: To improve reuse and maintainability.

---

## Key Takeaways

- Separate behavior from implementation
- Use Page Object pattern
- Keep step definitions thin
- Manage driver via hooks
- Avoid UI details in Gherkin

---

## What’s Next?

👉 **Cucumber with API Automation (Rest Assured Patterns)**
