---
sidebar_position: 12
---

# Parameterization & Data Mapping in Step Definitions

Parameterization allows Cucumber steps to accept **dynamic data** instead of hardcoded values.
Correct data mapping is essential for **reusable, readable, and maintainable step definitions**.

---

## Why Parameterization Matters

Without parameterization:
- Steps become duplicated
- Scenarios become rigid
- Maintenance cost increases

With parameterization:
- One step supports many scenarios
- Scenarios stay readable
- Framework scales easily

Rule:
> Prefer parameterized steps over hardcoded steps.

---

## Single Parameter Mapping

Use parameters when a step value changes.

Gherkin:
```
When user logs in with "user1"
```

Step Definition (Cucumber Expression):
```
@When("user logs in with {string}")
public void login(String username) {
}
```

---

## Multiple Parameters Mapping

Gherkin:
```
When user logs in with "user1" and "pass1"
```

Step Definition:
```
@When("user logs in with {string} and {string}")
public void login(String username, String password) {
}
```

Maintain **natural language order** for readability.

---

## Numeric & Boolean Parameters

Supported placeholders:
- `{int}`
- `{float}`
- `{boolean}`

Gherkin:
```
Then retry count should be 3
```

Step Definition:
```
@Then("retry count should be {int}")
public void retryCount(int count) {
}
```

---

## Data Tables Mapping (Conceptual)

Data Tables pass **structured data** to a step.

Gherkin:
```
Given user provides the following details
  | field    | value   |
  | username | user1   |
  | password | pass123 |
```

Mapping approaches:
- As list of maps
- As map
- As custom object (advanced)

Choose based on **simplicity and clarity**.

---

## Scenario Outline vs Parameterized Steps

- **Scenario Outline** → controls multiple executions
- **Parameterized steps** → pass values into steps

Use both together when:
- Behavior stays same
- Data varies

Avoid overcomplication.

---

## Type Conversion Awareness

Cucumber automatically converts:
- `{int}` → int
- `{float}` → double
- `{string}` → String

Avoid:
- Manual parsing unless required
- Overloaded step methods

---

## Common Mistakes ❌

- Hardcoding values in steps
- Too many parameters in one step
- Complex step signatures
- Using Data Tables for simple values

---

## Best Practices

- Keep steps readable
- Limit parameters per step
- Prefer clarity over compactness
- Align parameter order with sentence flow

---

## Interview-Ready Questions

**Q: Why use parameterized steps?**  
A: To avoid duplication and improve reuse.

**Q: Difference between Scenario Outline and parameterized steps?**  
A: Outline controls execution count; parameters pass values.

---

## Key Takeaways

- Parameterization improves reuse
- Cucumber Expressions simplify mapping
- Data Tables handle structured input
- Keep steps simple and readable
- Avoid over-engineering

---

## What’s Next?

👉 **Glue Code & Package Structure**
