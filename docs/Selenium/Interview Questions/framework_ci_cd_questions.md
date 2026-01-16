---
sidebar_position: 3
---

# Framework & CI/CD Questions

## Purpose of This Document
These questions focus on **how Selenium UI automation fits into real frameworks and CI/CD pipelines**. Interviewers use these to judge **maturity, scalability thinking, and production readiness**.

Scope is **UI automation only** (Selenium 4+). No API/DB deep dive.

---

## Framework Design Questions

### Q1. What makes a Selenium framework scalable?
**Answer:**
- Clear separation of page and test responsibility
- Stable locator strategy
- Centralized waits
- Reusable page actions

---

### Q2. Where should waits be implemented?
**Answer:**
Inside page classes, not in test classes.

---

### Q3. Should Page Objects return WebElements?
**Answer:**
No. Page Objects should expose **behavior**, not elements.

---

### Q4. How do you reduce duplicate code in Selenium frameworks?
**Answer:**
By centralizing common UI actions inside page classes and utility layers.

---

## CI/CD Related Questions

### Q5. Why do Selenium tests fail more in CI than locally?
**Answer:**
Because CI environments are slower, headless, and often run tests in parallel.

---

### Q6. How do you make Selenium tests CI-friendly?
**Answer:**
- Use headless mode
- Avoid Thread.sleep
- Use explicit waits
- Keep tests independent

---

### Q7. What browser configuration changes are needed for CI?
**Answer:**
- Headless execution
- Fixed window size
- Disable unnecessary browser UI

---

## Parallel Execution Questions

### Q8. What issues appear during parallel execution?
**Answer:**
- Shared test data conflicts
- Session leakage
- Race conditions

---

### Q9. How do you design tests for parallel execution?
**Answer:**
- Make tests stateless
- Isolate test data
- Avoid static/shared variables

---

## Stability & Maintenance

### Q10. How do you handle flaky tests in CI?
**Answer:**
Identify root cause, fix synchronization or locators — never rely on retries.

---

### Q11. Is retry logic a good solution?
**Answer:**
No. Retries hide real issues and reduce trust in automation.

---

## Reporting & Debugging

### Q12. What artifacts help debug CI failures?
**Answer:**
Screenshots, logs, videos (if available), and timestamps.

---

### Q13. How do you know if a failure is test-related or app-related?
**Answer:**
By analyzing consistency, logs, screenshots, and manual reproduction.

---

## Common Interview Red Flags ❌

- Heavy use of Thread.sleep
- Blaming Selenium for flakiness
- No understanding of CI behavior
- Tight coupling of tests and UI

---

## Strong Interview Signals ✅

- Clear framework boundaries
- CI-first thinking
- Root-cause based debugging
- Selenium 4 awareness

---

## Interview One-Liners 🎯

- “CI exposes timing issues faster.”
- “Stable tests come from good design, not retries.”
- “Parallel execution demands isolation.”

---

## Summary

- Framework design impacts CI stability
- Selenium must be CI-aware
- Parallel execution exposes weaknesses
- Mature answers focus on design, not hacks

Selenium 4 compliant • CI/CD ready • Interview safe