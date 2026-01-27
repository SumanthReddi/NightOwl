---
sidebar_position: 10
---

# Step Definition Basics

Step definitions are where **Gherkin steps are mapped to executable automation code**.
They act as the **bridge between business-readable scenarios and technical implementation**.

Understanding step definitions correctly is crucial for building **clean and maintainable Cucumber frameworks**.

---

## What is a Step Definition?

A step definition:
- Links a Gherkin step to code
- Is written in Java (or other supported languages)
- Executes automation logic (UI / API / DB)

Example mapping:
```
Given user is logged in
```
→ Java method that performs login.

---

## How Step Definitions Work

Execution flow:
```
Gherkin Step
   ↓
Matching Step Definition
   ↓
Automation Code Executes
```

Cucumber matches steps using:
- Cucumber Expressions
- OR Regular Expressions

---

## Given / When / Then in Code

Conceptual roles:
- **Given** → Setup / precondition
- **When** → Action
- **Then** → Verification

In code:
- All are technically methods
- Semantic meaning improves readability

---

## Example Step Definition (Conceptual)

```
@Given("user is logged in")
public void user_is_logged_in() {
    // automation logic
}
```

Important:
> Step definitions should NOT contain assertions-heavy logic.

---

## Reusability of Step Definitions

Good step definitions:
- Are generic
- Can be reused across scenarios
- Avoid hardcoded values

Bad step definitions:
- Too specific
- Tightly coupled to one scenario
- Difficult to reuse

---

## One Step = One Action Rule

Each step definition should:
- Perform one logical action
- Not chain multiple behaviors

❌ Bad:
- Login + validation + navigation in one step

✅ Good:
- Login step
- Validation step
- Navigation step

---

## Avoid Duplication of Steps

- Similar wording should map to the same step
- Consistent vocabulary is critical

This prevents:
- Glue conflicts
- Maintenance overhead

---

## Where Step Definitions Should Live

Best practice:
- Separate package for step definitions
- Group by feature or domain
- Do not mix with test runners

---

## Common Beginner Mistakes ❌

- Putting logic directly in feature files
- Writing very long step methods
- Duplicating similar steps
- Hardcoding test data

---

## Interview-Ready Questions

**Q: What is a step definition?**  
A: Code that maps a Gherkin step to executable logic.

**Q: Can step definitions contain assertions?**  
A: Yes, but they should remain minimal and focused.

---

## Key Takeaways

- Step definitions connect Gherkin to code
- Keep steps reusable and generic
- One action per step
- Avoid duplication
- Clean steps lead to maintainable frameworks
