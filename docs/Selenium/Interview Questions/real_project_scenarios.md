---
sidebar_position: 2
---

# Real Project Scenarios

## Why This Document Matters
These scenarios reflect **actual problems faced in enterprise Selenium UI automation**. Interviewers expect you to explain **how you think**, not just what API you use.

All scenarios are Selenium **4+**, UI-only, and framework-agnostic.

---

## Scenario 1: Test Fails Only After Deployment

**Symptoms**:
- Tests passed in previous release
- Failing after UI deployment

**Root Causes**:
- Locator changes
- New loaders/animations
- DOM restructuring

**Correct Approach**:
- Re-validate locators
- Identify new dynamic behavior
- Add condition-based waits

**Interview Expectation**:
- You don’t blame Selenium
- You check UI changes first

---

## Scenario 2: Tests Are Slow but Stable

**Symptoms**:
- No failures
- Execution time very high

**Root Causes**:
- Excessive waits
- Global implicit wait
- Over-synchronization

**Correct Approach**:
- Remove implicit wait
- Use precise explicit waits
- Optimize page transitions

---

## Scenario 3: Tests Are Fast but Flaky

**Symptoms**:
- Random failures
- Mostly timing-related exceptions

**Root Causes**:
- Missing waits
- Wrong wait conditions
- Dynamic UI not handled

**Correct Approach**:
- Identify correct UI state
- Add explicit waits at page level

---

## Scenario 4: Same Test Needs to Run on Multiple Browsers

**Symptoms**:
- Browser-specific failures

**Root Causes**:
- Browser behavior differences
- CSS/JS timing differences

**Correct Approach**:
- Avoid browser-specific logic
- Use Selenium 4 W3C-compliant APIs
- Validate locators across browsers

---

## Scenario 5: Tests Fail Only in Parallel Execution

**Symptoms**:
- Pass individually
- Fail when run in parallel

**Root Causes**:
- Shared test data
- Shared sessions
- Static variables

**Correct Approach**:
- Make tests independent
- Isolate test data
- Avoid shared state

---

## Scenario 6: Authentication Changes Break All Tests

**Symptoms**:
- Login-related failures everywhere

**Root Causes**:
- Login logic duplicated
- Poor abstraction

**Correct Approach**:
- Centralize login logic
- Fix once, reuse everywhere

---

## Scenario 7: UI Test Fails but Application Works Manually

**Symptoms**:
- Test fails consistently
- Manual flow succeeds

**Root Causes**:
- Timing issues
- Hidden overlays
- Different execution speed

**Correct Approach**:
- Observe UI in slow mode
- Capture screenshots/logs
- Fix synchronization

---

## What NOT to Say in Interviews ❌

- “Automation is unstable by nature”
- “We just retry the test”
- “Works locally, so it’s fine”

---

## What Interviewers Look For ✅

- Root-cause analysis
- Structured debugging
- Selenium 4 awareness
- UI-first thinking

---

## Interview One-Liners 🎯

- “Most UI failures are timing-related.”
- “Parallel execution exposes shared-state issues.”
- “Good automation detects UI change early.”

---

## Summary

- Real projects expose design weaknesses
- Selenium failures are usually predictable
- Correct thinking prevents flaky automation
- Interviews test problem-solving ability

Selenium 4 compliant • Enterprise-ready • Interview focused

