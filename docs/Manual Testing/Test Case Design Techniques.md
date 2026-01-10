---
sidebar_position: 10
---

# Test Case Design Techniques

Test case design techniques help testers create **effective, efficient, and high-quality test cases**.
These techniques reduce redundancy, improve coverage, and uncover edge cases that are otherwise missed.

Strong test case design is the **foundation of reliable automation**.

---

## What is a Test Case?

A **test case** is a set of conditions and steps used to verify that a system behaves as expected.

A test case answers:
> **HOW should the scenario be tested?**

---

## Test Case vs Test Scenario (Quick Recap)

- Scenario → WHAT to test  
- Test Case → HOW to test  

Example:
- Scenario: Verify login functionality
- Test Case: Login with valid username and password

---

## Test Case Template (Standard)

A good test case usually contains:
- Test Case ID
- Test Scenario
- Preconditions
- Test Steps
- Test Data
- Expected Result
- Actual Result
- Status (Pass/Fail)

---

## Characteristics of a Good Test Case

✔ Clear and unambiguous  
✔ Independent  
✔ Reusable  
✔ Traceable to requirement  
✔ Covers positive and negative paths  

---

## 1️⃣ Equivalence Partitioning (EP)

### What is EP?

Equivalence Partitioning divides input data into **valid and invalid groups**.

Idea:
> Test one value from each group instead of all values.

Example:
- Age allowed: 18–60
- Valid: 25
- Invalid: 10, 70

---

### Why EP Matters
- Reduces number of test cases
- Improves coverage
- Saves time

---

## 2️⃣ Boundary Value Analysis (BVA)

### What is BVA?

Boundary Value Analysis focuses on **edge values**.

Rule:
> Bugs often occur at boundaries.

Example:
- Range: 1–100
- Test: 0, 1, 2, 99, 100, 101

---

## EP vs BVA

| Aspect | EP | BVA |
|---|---|---|
| Focus | Data groups | Boundary values |
| Goal | Reduce test cases | Catch edge bugs |

---

## 3️⃣ Decision Table Testing

### What is Decision Table Testing?

Used when multiple conditions lead to different outcomes.

Example:
- Login allowed only if:
  - Valid username
  - Valid password
  - Account active

Decision table maps:
- Conditions
- Actions

Best used for **business rules**.

---

## 4️⃣ State Transition Testing

### What is State Transition Testing?

Used when system behavior depends on **previous state**.

Example states:
- New
- Active
- Locked
- Disabled

Transitions:
- Failed login → Locked
- Admin unlock → Active

---

## When to Use Which Technique

| Situation | Technique |
|---|---|
| Input ranges | EP + BVA |
| Business rules | Decision Table |
| State-dependent behavior | State Transition |

---

## Common Test Design Mistakes ❌

- Writing redundant test cases
- Missing boundary conditions
- Ignoring negative scenarios
- Over-testing low-risk areas

---

## Interview-Ready Questions

**Q: Why are test design techniques important?**  
A: They ensure coverage with fewer test cases.

**Q: Which technique is best for boundary issues?**  
A: Boundary Value Analysis.

---

## Key Takeaways

- Test design techniques improve quality
- EP and BVA reduce redundancy
- Decision tables handle complex logic
- State transitions test behavior over time
- Strong test cases lead to stable automation

---

## What’s Next?

👉 **Test Data and Test Environment**
