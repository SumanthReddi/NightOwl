---
sidebar_position: 17
---

# Hooks (Before, After, Order, Best Practices)

Hooks in Cucumber allow you to execute code **before and after scenarios or steps**.
They are critical for **setup, teardown, cleanup, and failure handling** in real automation frameworks.

---

## What are Hooks?

Hooks are special methods that:
- Run automatically
- Are not linked to Gherkin steps
- Control test lifecycle events

Hooks help manage:
- Browser setup & teardown
- Test data initialization
- Screenshot capture
- Cleanup activities

---

## Types of Hooks

### Before Hook
- Runs **before each scenario**
- Used for setup tasks

Typical use cases:
- Launch browser
- Initialize test data
- Set up API context

---

### After Hook
- Runs **after each scenario**
- Used for cleanup tasks

Typical use cases:
- Close browser
- Capture screenshots on failure
- Reset test state

---

## Hook Execution Order

Default execution:
```
Before Hook
   ↓
Scenario Steps
   ↓
After Hook
```

Hooks run **for every scenario**, regardless of tags (unless restricted).

---

## Hook Order (Multiple Hooks)

When multiple hooks exist:
- Order controls execution sequence
- Lower order value runs first for Before hooks
- Higher order value runs first for After hooks

Conceptual rule:
- Setup → lower order
- Cleanup → higher order

---

## Tagged Hooks

Hooks can be restricted using tags.

Example concept:
- Only run hook for `@ui` scenarios
- Only run hook for `@api` scenarios

This avoids unnecessary setup.

---

## Hooks vs Background

| Aspect | Hooks | Background |
|---|---|---|
| Purpose | Technical setup | Business preconditions |
| Visibility | Hidden from feature | Visible in feature |
| Audience | Automation | Business + QA |
| Use case | Browser, DB, API | User state |

Rule:
> Technical setup belongs in Hooks, not Background.

---

## Screenshot on Failure (Concept)

Common pattern:
- Detect scenario failure
- Capture screenshot
- Attach to report

This logic belongs in **After hooks**, not step definitions.

---

## Step-Level Hooks (Awareness)

Cucumber supports:
- BeforeStep
- AfterStep

Use sparingly:
- Debugging
- Logging

Avoid:
- Heavy logic
- Performance-heavy operations

---

## Common Hook Mistakes ❌

- Putting business logic in hooks
- Too many hooks
- Complex logic inside hooks
- Using hooks to hide test behavior

---

## Best Practices

- Keep hooks small and focused
- Separate UI and API hooks
- Use tagged hooks
- Avoid overusing step-level hooks
- Maintain scenario isolation

---

## Interview-Ready Questions

**Q: What are hooks in Cucumber?**  
A: Methods that run before or after scenarios for setup and cleanup.

**Q: Difference between Hooks and Background?**  
A: Hooks handle technical setup; Background handles business context.

---

## Key Takeaways

- Hooks manage lifecycle events
- Before for setup, After for cleanup
- Order matters when multiple hooks exist
- Prefer hooks for technical setup
- Overusing hooks leads to complexity
