---
sidebar_position: 20
---

# Cucumber with TestNG Integration

Cucumber by itself focuses on **BDD and scenario execution**, but it relies on a test framework like **TestNG** for advanced execution control.
This section explains **why and how Cucumber is integrated with TestNG in real automation projects**.

---

## Why Integrate Cucumber with TestNG?

TestNG provides features that Cucumber alone does not handle well:
- Parallel execution
- Test lifecycle control
- Suite-level execution
- Better CI/CD compatibility
- Rich reporting integrations

Rule:
> Cucumber defines *what to test*; TestNG controls *how tests run*.

---

## Role of TestNG in Cucumber Framework

In a Cucumber + TestNG setup:
- Cucumber handles feature files & steps
- TestNG handles execution control
- Runner class bridges both

Execution hierarchy:
```
TestNG
  ↓
Cucumber Runner
  ↓
Feature Files
  ↓
Step Definitions
```

---

## Runner Class with TestNG (Conceptual)

The runner:
- Extends TestNG base runner
- Uses Cucumber options
- Is executed by TestNG

Runner responsibilities:
- Select features
- Apply tags
- Load glue
- Trigger execution

---

## Assertions in Cucumber + TestNG

Important rule:
> Assertions should live in **step definitions or helper layers**, not in feature files.

TestNG assertions:
- Provide validation
- Mark scenarios pass/fail
- Integrate with reports

Avoid:
- Mixing assertion logic into hooks unnecessarily

---

## Parallel Execution Awareness

TestNG enables:
- Parallel execution of scenarios
- Faster test runs

Cucumber considerations:
- Scenario isolation is mandatory
- Shared state must be scenario-scoped
- Static variables break parallel runs

Parallel execution should be:
- Tested carefully
- Enabled gradually

---

## Tag-Based Execution with TestNG

TestNG + Cucumber supports:
- Tag-based execution
- Different runners for smoke, regression
- CI pipeline optimization

Runner-based tagging > hardcoded logic.

---

## Cucumber vs TestNG Responsibilities

| Aspect | Cucumber | TestNG |
|---|---|---|
| BDD syntax | ✅ | ❌ |
| Feature files | ✅ | ❌ |
| Scenario execution | ✅ | ❌ |
| Parallel control | ❌ | ✅ |
| Suite management | ❌ | ✅ |
| Assertions | ❌ | ✅ |

---

## Common Integration Mistakes ❌

- Treating Cucumber as replacement for TestNG
- Misplacing assertions
- Ignoring parallel safety
- Overcomplicating runner logic

---

## CI/CD Perspective

In CI:
- TestNG executes runners
- Tags control scope
- Reports are generated via plugins
- Failures control pipeline status

---

## Interview-Ready Questions

**Q: Why use TestNG with Cucumber?**  
A: For execution control, parallelism, and CI support.

**Q: Can Cucumber run without TestNG?**  
A: Yes, but with limited execution control.

---

## Key Takeaways

- Cucumber and TestNG complement each other
- TestNG controls execution, Cucumber defines behavior
- Runner class is the bridge
- Parallel execution requires careful design
- Integration is standard in industry frameworks