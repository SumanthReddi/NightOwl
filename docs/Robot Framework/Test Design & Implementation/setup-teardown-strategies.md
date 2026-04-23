---
sidebar_position: 3
title: Setup & Teardown Strategies
description: Learn how to use Suite Setup, Test Setup, Suite Teardown, and Test Teardown effectively in Robot Framework for reliable, isolated, and maintainable automation.
---

# Robot Framework: Setup & Teardown Strategies

> Good setup and teardown design prevents many flaky tests, resource leaks, and test interference issues.

---

## 🎯 Why This Matters

Many teams focus only on test steps.

But in real projects, failures often happen because of poor preparation or cleanup:

- Browser not closed properly  
- Test data reused accidentally  
- Session remains active from previous test  
- Database state not reset  
- Setup fails silently  
- Cleanup masks real failures

> Strong automation is not only about execution. It is also about controlled start and clean finish.

---

## 🤖 What Are Setup and Teardown?

Robot Framework provides hooks to run keywords automatically before or after execution.

| Hook | Runs When |
|---|---|
| Suite Setup | Before suite starts |
| Suite Teardown | After suite ends |
| Test Setup | Before each test |
| Test Teardown | After each test |
| Keyword Teardown | After specific keyword |

These are useful for common preparation and cleanup tasks.

---

## 🧱 Basic Example

```robotframework
*** Settings ***
Suite Setup       Open Application
Suite Teardown    Close Browser
Test Setup        Go To Login Page
Test Teardown     Capture Failure If Needed
```

This keeps tests cleaner and avoids repeated steps.

---

## 🚀 When to Use Each Scope

## Suite Setup

Use for expensive one-time actions:

- Open shared application session  
- Create DB connection  
- Load reference data  
- Start mock services

```robotframework
Suite Setup    Connect To Database
```

---

## Suite Teardown

Use for suite-level cleanup:

- Close DB connection  
- Stop mock servers  
- Archive logs  
- Cleanup shared data

```robotframework
Suite Teardown    Disconnect From Database
```

---

## Test Setup

Use for per-test preparation:

- Login user  
- Open browser  
- Navigate to page  
- Create fresh test data

```robotframework
Test Setup    Login As Valid User
```

---

## Test Teardown

Use for per-test cleanup:

- Logout user  
- Delete created records  
- Close browser tab  
- Capture screenshot on failure

```robotframework
Test Teardown    Cleanup Test Data
```

---

## 🏗️ Recommended Scope Strategy

Use the right level for the right cost.

```text
Suite Scope → Shared expensive resources
Test Scope  → Isolated per-test resources
Keyword Scope → Local cleanup
```

Avoid doing everything in `Test Setup`.

---

## 🧠 Practical Example

```robotframework
*** Settings ***
Suite Setup       Initialize Database
Suite Teardown    Close Database

Test Setup        Open Browser To App
Test Teardown     Safe Browser Cleanup
```

Benefits:

- DB opened once  
- Browser fresh per test  
- Better speed + better isolation

---

## 🔐 Test Isolation Strategy

Good tests should pass in any order.

Bad pattern:

```robotframework
Test 1 creates user
Test 2 expects same user
```

Good pattern:

```robotframework
Each test creates its own data
Each test cleans its own data
```

Use setup/teardown to enforce independence.

---

## 💻 Browser Automation Example

```robotframework
*** Settings ***
Test Setup       Open Browser    ${URL}    chrome
Test Teardown    Close Browser
```

Better for UI reliability than sharing one browser across many unstable tests.

---

## 💾 Database Example

```robotframework
*** Settings ***
Suite Setup       Connect To Database
Suite Teardown    Disconnect From Database
```

Use suite scope when connection cost is high.

---

## 🔄 Failure Handling Pattern

Capture evidence only when test fails.

```robotframework
*** Settings ***
Test Teardown    Run Keyword If Test Failed    Capture Page Screenshot
```

Very useful in CI/CD reports.

---

## ⚠️ Safe Cleanup Principle

Teardown should try to clean resources, but avoid hiding the real failure.

Example:

```robotframework
Test Teardown    Run Keywords
...    Capture Page Screenshot
...    AND    Close Browser
```

Even if test fails, cleanup still runs.

---

## 🏢 Real Project Example

A suite had many random failures.

Root cause:

- previous user session remained active  
- browser tabs stayed open  
- cookies reused across tests

After moving to:

```robotframework
Test Setup       Fresh Login
Test Teardown    Logout And Close Browser
```

Failures dropped significantly.

---

## 📁 Example Structure

```robotframework
*** Settings ***
Resource    ../resources/common.robot

Suite Setup       Initialize Environment
Suite Teardown    Cleanup Environment

Test Setup        Prepare Test Context
Test Teardown     Cleanup Test Context
```

This is clean and scalable.

---

## ❌ Common Mistakes

### Everything in Test Setup

Slow execution.

### No Cleanup

Leaves dirty state.

### Shared Test Data

Creates order dependency.

### Heavy Suite Setup with UI Steps

Fragile and slow.

### Ignoring Failures in Setup

Causes misleading downstream errors.

### Teardown Overwrites Real Failure

Need safe cleanup.

---

## ✅ Best Practices

- Keep suite setup for expensive shared resources  
- Keep test setup for isolated preparation  
- Keep teardown reliable and simple  
- Capture evidence on failure  
- Clean created data after tests  
- Ensure tests run independently  
- Review setup cost regularly

---

## 🔧 Practical Examples

### Screenshot on Failure

```robotframework
Test Teardown    Run Keyword If Test Failed    Capture Page Screenshot
```

### Delete Temp Data

```robotframework
Test Teardown    Delete Test Customer
```

### Run Multiple Cleanup Steps

```robotframework
Test Teardown    Run Keywords
...    Logout User
...    AND
...    Close Browser
```

---

## ⚙️ Parallel Execution Note

When using Pabot or parallel runs:

Avoid shared mutable resources.

Bad:

```text
All tests use same user account
```

Better:

```text
Each test creates unique user/data
```

Setup strategy becomes even more important in parallel execution.

---

## 💡 My Practical Opinion

When teams say:

> “Robot Framework tests are flaky.”

Often the framework is not the issue.

The real issue is:

- poor setup  
- weak cleanup  
- shared state  
- leftover sessions  
- reused data

Strong lifecycle management fixes many stability problems.

---

## 🏁 Final Verdict

Setup and teardown are core engineering tools.

Strong usage gives:

- cleaner tests  
- reliable execution  
- less flaky behavior  
- easier debugging  
- scalable parallel runs

Poor usage creates hidden instability.

---

## 📚 What To Learn Next

1. Control Flow & Error Handling  
2. Resource Files & Modular Design  
3. Parallel Execution with Pabot  
4. Test Stability Engineering  
5. CI/CD Pipeline Design

---

## Summary

> Many flaky tests are not test-step problems.  
> They are lifecycle management problems.

Good setup starts clean. Good teardown ends clean.
