---
sidebar_position: 9
---

# Test Scenarios

Test scenarios describe **what to test** at a high level.
They act as a bridge between **requirements** and **detailed test cases**.

Strong testers focus on scenarios first — weak testers jump directly to test cases.

---

## What is a Test Scenario?

A **test scenario** is a high-level description of a functionality or behavior to be tested.

In simple terms:
> A test scenario answers **“WHAT needs to be tested?”**

Example:
- Verify user login functionality
- Verify order placement flow
- Verify payment failure handling

---

## Test Scenario vs Test Case (CRITICAL)

| Aspect | Test Scenario | Test Case |
|---|---|---|
| Level | High-level | Detailed |
| Focus | What to test | How to test |
| Count | Few | Many |
| Derived from | Requirements | Scenarios |

Rule:
> One scenario can have **multiple test cases**.

---

## Why Test Scenarios are Important

- Ensure **complete coverage**
- Prevent missing major flows
- Help in test planning
- Foundation for automation frameworks

Automation insight:
> Automation frameworks are scenario-driven, not test-case-driven.

---

## How to Derive Test Scenarios from Requirements

Requirement:
> User should be able to place an order

Derived scenarios:
- Place order with valid items
- Place order with out-of-stock item
- Place order with invalid payment
- Cancel order before confirmation
- Retry payment failure

---

## Test Scenarios in Real Projects

Typical workflow:
```
Requirement
   ↓
Test Scenarios
   ↓
Test Cases
   ↓
Execution
```

Scenarios are often reviewed by:
- QA lead
- Product owner
- Business analyst

---

## Positive and Negative Scenarios

### Positive Scenarios
- Expected user behavior
- Happy path

### Negative Scenarios
- Invalid inputs
- Error conditions
- Boundary cases

Good testers always include **negative scenarios**.

---

## End-to-End Scenarios

End-to-end scenarios cover:
- Multiple modules
- Complete business flow

Example:
```
Login → Search → Add to Cart → Payment → Order Confirmation
```

These scenarios are:
- High priority
- Best candidates for automation

---

## Common Mistakes ❌

- Treating scenarios as test cases
- Writing too many scenarios
- Missing negative scenarios
- Ignoring end-to-end flows

---

## Interview-Ready Questions

**Q: What is a test scenario?**  
A: A high-level description of what functionality to test.

**Q: Why are scenarios important before test cases?**  
A: They ensure coverage and guide detailed testing.

---

## Key Takeaways

- Scenarios define WHAT to test
- Test cases define HOW to test
- Scenarios ensure coverage
- Strong scenarios lead to stable automation
- Scenario thinking is a senior tester skill
