---
sidebar_position: 3
---

# Framework & CI/CD Questions

## Purpose of This Document
These questions focus on **how Selenium UI automation fits into real frameworks and CI/CD pipelines**. Interviewers use these to judge **maturity, scalability thinking, and production readiness**.

Scope is **UI automation only** (Selenium 4+). No API/DB deep dive.

---

## Framework Design Questions

## 🎤 Interview Questions

<details>
<summary>What makes a Selenium framework scalable?</summary>

- Clear separation of page and test responsibility
- Stable locator strategy
- Centralized waits
- Reusable page actions

</details>

<details>
<summary>Where should waits be implemented?</summary>

Inside page classes, not in test classes.

</details>

<details>
<summary>Should Page Objects return WebElements?</summary>

No. Page Objects should expose **behavior**, not elements.

</details>

<details>
<summary>How do you reduce duplicate code in Selenium frameworks?</summary>

By centralizing common UI actions inside page classes and utility layers.

</details>

<details>
<summary>Explain your framework.</summary>

![alt img](../../Images/Framework%20Explanation.jpg)

</details>

<details>
<summary>Why do Selenium tests fail more in CI than locally?</summary>

Because CI environments are slower, headless, and often run tests in parallel.

</details>

<details>
<summary>How do you make Selenium tests CI-friendly?</summary>

- Use headless mode
- Avoid Thread.sleep
- Use explicit waits
- Keep tests independent

</details>

<details>
<summary>What browser configuration changes are needed for CI?</summary>

- Headless execution
- Fixed window size
- Disable unnecessary browser UI

</details>

<details>
<summary>What issues appear during parallel execution?</summary>

- Shared test data conflicts
- Session leakage
- Race conditions

</details>

<details>
<summary>How do you design tests for parallel execution?</summary>

- Make tests stateless
- Isolate test data
- Avoid static/shared variables

</details>

<details>
<summary>How do you handle flaky tests in CI?</summary>

Identify the root cause, fix synchronization or locator issues, and never rely on retries.

</details>

<details>
<summary>Is retry logic a good solution?</summary>

No. Retries hide real issues and reduce trust in automation.

</details>

<details>
<summary>What artifacts help debug CI failures?</summary>

Screenshots, logs, videos (if available), and timestamps.

</details>

<details>
<summary>How do you know if a failure is test-related or app-related?</summary>

Analyze failure consistency, logs, screenshots, and verify the issue through manual reproduction.

</details>

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
