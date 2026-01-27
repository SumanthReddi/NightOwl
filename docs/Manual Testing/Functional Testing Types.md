---
sidebar_position: 7
---

# Functional Testing Types

Functional testing types focus on **what to test and when to test** during the project lifecycle.
In real projects, testers use these types **daily**, not as definitions but as **decisions**.

---

## Why Functional Testing Types Matter

Choosing the wrong testing type leads to:
- Wasted effort
- Missed defects
- Delayed releases

Correct usage ensures:
- Faster feedback
- Better coverage
- Stable releases

---

## 1️⃣ Smoke Testing

### What is Smoke Testing?

Smoke testing verifies **critical functionalities** to ensure the application is **stable enough for further testing**.

Example:
- Application launches
- Login works
- Main dashboard loads

Key idea:
> If smoke fails, **testing stops**.

---

### When is Smoke Testing Performed?
- After a new build
- After deployment
- Before starting regression

---

### Characteristics
- Shallow testing
- Covers core flows only
- Quick execution

---

## 2️⃣ Sanity Testing

### What is Sanity Testing?

Sanity testing verifies **specific functionality or bug fixes** after a small change.

Example:
- Verify a fixed bug
- Verify a small enhancement

Key idea:
> Sanity checks whether the change **makes sense**, not the whole system.

---

### Smoke vs Sanity (Common Interview Topic)

| Aspect | Smoke | Sanity |
|---|---|---|
| Scope | Broad | Narrow |
| Trigger | New build | Small change |
| Depth | Shallow | Deep (limited scope) |

---

## 3️⃣ Regression Testing

### What is Regression Testing?

Regression testing ensures that **existing functionality still works** after changes.

Causes of regression:
- New features
- Bug fixes
- Code refactoring

---

### Characteristics
- Repetitive
- Time-consuming manually
- Best candidate for automation

Tester rule:
> If it breaks often, automate it.

---

## 4️⃣ Re-testing

### What is Re-testing?

Re-testing verifies that a **specific defect has been fixed correctly**.

Key difference:
- Re-testing focuses on **one bug**
- Regression checks surrounding areas

---

### Re-testing vs Regression

| Aspect | Re-testing | Regression |
|---|---|---|
| Focus | Fixed defect | Existing features |
| Automation | Rare | Common |
| Scope | Narrow | Broad |

---

## 5️⃣ Exploratory Testing

### What is Exploratory Testing?

Exploratory testing is **simultaneous learning, test design, and execution**.

Used when:
- Requirements are unclear
- Time is limited
- Finding edge cases

Strong exploratory testing reveals:
- Usability issues
- Unexpected behaviors
- Hidden defects

---

## Functional Testing Types in Real Projects

Typical flow:
```
New Build → Smoke
Bug Fix → Sanity
Feature Change → Re-test + Regression
Release → Full Regression
```

---

## Common Mistakes ❌

- Running regression before smoke
- Confusing smoke with sanity
- Skipping re-testing
- Treating exploratory testing as random clicking

---

## Interview-Ready Questions

**Q: Which testing is done first?**  
A: Smoke testing.

**Q: Which testing is best for automation?**  
A: Regression testing.

---

## Key Takeaways

- Smoke decides whether testing continues
- Sanity validates recent changes
- Regression protects existing features
- Re-testing validates fixes
- Exploratory testing finds hidden issues
