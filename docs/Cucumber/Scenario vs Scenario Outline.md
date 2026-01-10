---
sidebar_position: 7
---

# Scenario vs Scenario Outline

Understanding the difference between **Scenario** and **Scenario Outline** is critical for writing clean, maintainable BDD tests.
Misusing Scenario Outline is one of the **most common Cucumber mistakes**.

---

## Scenario

A **Scenario** represents:
- One concrete behavior
- One specific set of data
- One test case

Example:
```
Scenario: Successful login with valid credentials
  Given user has a valid account
  When user logs in with username "user1" and password "pass1"
  Then user should see the dashboard
```

Use **Scenario** when:
- Behavior is unique
- Data does not vary much
- Readability is more important than reuse

---

## Scenario Outline

A **Scenario Outline** is used to:
- Execute the same behavior
- With multiple data sets

It uses:
- Placeholders `< >`
- `Examples` table

Example:
```
Scenario Outline: Login with multiple users
  Given user has a valid account
  When user logs in with username "<username>" and password "<password>"
  Then user should see the dashboard

Examples:
  | username | password |
  | user1    | pass1    |
  | user2    | pass2    |
```

Each row in `Examples` = **one execution**.

---

## Key Differences

| Aspect | Scenario | Scenario Outline |
|---|---|---|
| Data | Single | Multiple |
| Examples table | ❌ | ✅ |
| Readability | Higher | Slightly lower |
| Use case | Unique behavior | Data-driven behavior |

---

## When to Use Scenario Outline ✅

Use Scenario Outline when:
- Same behavior with different data
- Boundary testing
- Multiple input combinations
- Data-driven scenarios

---

## When NOT to Use Scenario Outline ❌

Avoid Scenario Outline when:
- Behavior changes between cases
- Only one data set exists
- Scenario becomes hard to read

Rule:
> Do not force Scenario Outline just to reduce feature file lines.

---

## Common Mistakes ❌

- Putting different behaviors in one Scenario Outline
- Large Examples tables (hard to read)
- Mixing positive and negative cases together
- Using Scenario Outline for UI flow variations

---

## Scenario Outline vs Data Tables

- **Scenario Outline** → Varies test data
- **Data Tables** → Pass structured data

Choose based on:
- Simplicity
- Readability
- Maintenance

---

## Interview-Ready Questions

**Q: When should Scenario Outline be used?**  
A: When the same behavior needs to be tested with multiple data sets.

**Q: Is Scenario Outline mandatory for data-driven testing?**  
A: No, it should be used only when it improves readability.

---

## Key Takeaways

- Scenario = single behavior, single data set
- Scenario Outline = same behavior, multiple data sets
- Examples table drives execution
- Readability matters more than line reduction
- Misuse leads to poor BDD design

---

## What’s Next?

👉 **Data Tables & Examples**
