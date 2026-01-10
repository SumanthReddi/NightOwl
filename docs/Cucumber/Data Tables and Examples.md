---
sidebar_position: 8
---

# Data Tables & Examples

Cucumber provides **Data Tables** and **Examples** to handle data-driven scenarios.
Choosing the right one is essential for **readability, maintainability, and correct BDD design**.

---

## Data Tables

Data Tables are used to pass **structured data** to a step.

Example:
```
Given user provides the following details
  | field    | value        |
  | username | user1        |
  | password | pass123      |
  | role     | standard     |
```

### When to Use Data Tables ✅
- Passing multiple related values at once
- Representing objects or forms
- Keeping scenarios readable

### When NOT to Use Data Tables ❌
- Simple single-value inputs
- Large datasets (hard to read)

---

## Examples (Scenario Outline)

Examples are used with **Scenario Outline** to run the **same behavior** with **multiple data sets**.

Example:
```
Scenario Outline: Login with different users
  When user logs in with "<username>" and "<password>"
  Then login should be "<result>"

Examples:
  | username | password | result |
  | user1    | pass1    | success|
  | user2    | pass2    | failure|
```

Each row = one execution.

---

## Data Tables vs Examples

| Aspect | Data Tables | Examples |
|---|---|---|
| Purpose | Structured data | Multiple datasets |
| Execution | Single run | Multiple runs |
| Readability | High for forms | High for variations |
| Typical use | Request bodies, forms | Boundary cases |

---

## Common Mistakes ❌

- Using Data Tables to simulate multiple test cases
- Using Scenario Outline for complex structured data
- Overloading Examples tables with many rows
- Mixing behaviors in one outline

---

## Best Practices

- Use Data Tables for **objects**
- Use Examples for **variations**
- Keep tables small and readable
- Prefer clarity over compactness

---

## Interview-Ready Questions

**Q: Difference between Data Tables and Examples?**  
A: Data Tables pass structured data; Examples drive multiple executions.

**Q: Can both be used together?**  
A: Yes, but only when it improves readability.

---

## Key Takeaways

- Data Tables = structured input
- Examples = data-driven execution
- Choose based on intent, not convenience
- Readability is the priority in BDD

---

## What’s Next?

👉 **Feature File Design from User Stories**
