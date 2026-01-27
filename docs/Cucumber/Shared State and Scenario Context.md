---
sidebar_position: 14
---

# Shared State & Scenario Context

In real Cucumber frameworks, steps often need to **share data**.
If this is done incorrectly, it leads to **flaky tests, parallel execution failures, and hard-to-debug issues**.

This section explains **how shared state should be handled safely** in Cucumber.

---

## What is Shared State?

Shared state means:
- Data created in one step
- Used in another step
- Within the same scenario

Examples:
- Logged-in user details
- API response stored for validation
- Generated IDs or tokens

---

## Why Shared State Is Tricky

Problems arise when:
- Static variables are used
- Data leaks across scenarios
- Parallel execution is enabled

Rule:
> **Shared data must be scenario-scoped, not global.**

---

## The Danger of Static Variables ❌

Using static variables:
- Shares data across all scenarios
- Breaks isolation
- Causes unpredictable failures in parallel runs

Static variables = **global state** (avoid).

---

## Scenario Context (Preferred Approach)

Scenario context is:
- An object created per scenario
- Used to store and retrieve data
- Destroyed after scenario execution

Conceptually:
```
Scenario Start
   ↓
Create Context
   ↓
Steps Use Context
   ↓
Scenario End
   ↓
Context Destroyed
```

---

## What Goes Into Scenario Context?

Common items:
- Request payloads
- API responses
- UI state (logged-in user)
- Temporary test data

Avoid storing:
- Configuration
- Constants
- Shared utilities

---

## Sharing Context Across Step Classes

In larger projects:
- Steps are split across multiple classes
- Context must be accessible everywhere

Approaches:
- Dependency injection
- Context object passed/shared via constructor
- Framework-supported context (preferred)

---

## Scenario Isolation (CRITICAL)

Each scenario must:
- Start clean
- Not depend on previous scenarios
- Clean up after execution

Isolation ensures:
- Reliable execution
- Parallel safety
- Predictable failures

---

## Common Shared State Mistakes ❌

- Using static variables
- Reusing context across scenarios
- Storing too much data in context
- Not resetting context

---

## Debugging Shared State Issues

Symptoms:
- Tests pass individually, fail in suite
- Failures only in parallel execution
- Random test behavior

Fix:
- Review state usage
- Remove static/shared globals
- Enforce scenario isolation

---

## Interview-Ready Questions

**Q: How do steps share data in Cucumber?**  
A: Using scenario-scoped context objects.

**Q: Why are static variables bad in Cucumber?**  
A: They break scenario isolation.

---

## Key Takeaways

- Shared state must be scenario-scoped
- Avoid static/global variables
- Context objects improve stability
- Isolation is mandatory
- Proper design prevents flakiness