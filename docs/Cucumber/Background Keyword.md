---
sidebar_position: 6
---

# Background Keyword

The **Background** keyword in Gherkin is used to define **common preconditions** that apply to **all scenarios within a feature file**.

Used correctly, it improves readability. Used incorrectly, it makes scenarios confusing and hard to maintain.

---

## What is Background?

`Background` allows you to:
- Define steps that run **before each scenario**
- Avoid repeating common setup steps
- Keep scenarios short and focused

Example:
```
Background:
  Given user has a valid account
  And user is on the login page
```

---

## When Background Executes

Execution order:
```
Background
   ↓
Scenario 1
Background
   ↓
Scenario 2
Background
   ↓
Scenario 3
```

Background runs **before every scenario** in the same feature file.

---

## When to Use Background ✅

Use Background for:
- Common preconditions
- Shared setup steps
- State that applies to all scenarios

Good examples:
- User is logged in
- User is on a specific page
- Required data exists

---

## When NOT to Use Background ❌

Do NOT use Background for:
- Test data variations
- Scenario-specific actions
- Assertions
- Long workflows

If steps differ between scenarios, they **do not belong in Background**.

---

## Background vs Given in Scenario

### ❌ Bad Usage
```
Background:
  Given user logs in
  When user makes payment
```

This hides behavior and makes scenarios unclear.

### ✅ Correct Usage
```
Background:
  Given user is logged in
```

Behavior should stay inside scenarios.

---

## One Background per Feature Rule

- Only **one Background** is allowed per feature file
- Keep it short (2–4 steps)
- If Background grows large, feature file design is wrong

---

## Common Background Mistakes ❌

- Putting business behavior in Background
- Making Background longer than scenarios
- Using Background to hide complexity
- Assuming Background is optional

---

## Interview-Ready Questions

**Q: What is the purpose of Background in Cucumber?**  
A: To define common preconditions for all scenarios.

**Q: Can Background contain assertions?**  
A: No, it should only set up preconditions.

---

## Key Takeaways

- Background is for shared setup only
- Runs before every scenario
- Keep it short and simple
- Do not hide behavior in Background
- Misuse leads to poor readability
