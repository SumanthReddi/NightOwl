---
sidebar_position: 26
---

# Common Cucumber Framework Anti-Patterns

Anti-patterns are practices that **seem to work initially but cause long-term pain**.
This section highlights the most common Cucumber mistakes seen in real projects and how to avoid them.

---

## Anti-Pattern: Writing UI Steps in Gherkin ❌

Problem:
- Feature files contain UI actions (clicks, locators)
- Business readability is lost

Fix:
- Keep Gherkin behavior-focused
- Move UI details to Page Objects

---

## Anti-Pattern: Fat Step Definitions ❌

Problem:
- Step definitions contain long workflows
- Hard to reuse and debug

Fix:
- One step = one action
- Delegate logic to helper/service layers

---

## Anti-Pattern: Static & Shared State ❌

Problem:
- Data leaks across scenarios
- Parallel execution breaks

Fix:
- Use scenario-scoped context
- Avoid static variables

---

## Anti-Pattern: Overusing Background ❌

Problem:
- Background hides behavior
- Scenarios become unclear

Fix:
- Use Background only for true preconditions
- Keep it short

---

## Anti-Pattern: Excessive Scenario Outlines ❌

Problem:
- Huge Examples tables
- Poor readability

Fix:
- Use Scenario Outline only when data variation adds value
- Split scenarios if behavior differs

---

## Anti-Pattern: Hardcoding Environment & Test Data ❌

Problem:
- Tests break across environments
- CI failures increase

Fix:
- Externalize configuration
- Generate or isolate test data

---

## Anti-Pattern: Using Retries to Hide Failures ❌

Problem:
- Real defects are masked
- Trust in automation drops

Fix:
- Fix root causes
- Use retries only for transient issues

---

## Anti-Pattern: One Giant Runner ❌

Problem:
- No execution control
- Slow pipelines

Fix:
- Multiple runners (smoke, regression, api, ui)
- Tag-based execution

---

## Anti-Pattern: Ignoring Reports ❌

Problem:
- Failures hard to debug
- No visibility

Fix:
- Generate JSON/HTML reports
- Publish reports in CI

---

## Anti-Pattern: Mixing Responsibilities ❌

Problem:
- Steps do too much
- Pages validate
- Hooks contain business logic

Fix:
- Enforce separation of concerns

---

## Interview-Ready Questions

**Q: What is a common Cucumber anti-pattern?**  
A: Writing Selenium code in step definitions.

**Q: Why are static variables dangerous?**  
A: They break scenario isolation and parallel execution.

---

## Key Takeaways

- Anti-patterns reduce maintainability
- Behavior must stay business-focused
- Separation of concerns is critical
- Fix design issues early
- Clean frameworks scale better
