---
sidebar_position: 4
title: Control Flow & Error Handling
description: Learn how to use Robot Framework control flow, conditions, loops, retries, and error handling patterns to build stable and intelligent automation suites.
---

# Robot Framework: Control Flow & Error Handling

> Strong automation is not only about executing steps. It is about making smart decisions, handling uncertainty, and recovering gracefully when things go wrong.

---

## 🎯 Why This Matters

Many teams blame flaky tests on tools or environments.

But in real projects, failures often come from weak control flow:

- Hardcoded execution paths  
- Poor conditional logic  
- No retry handling  
- Missing exception management  
- Infinite waits or bad loops  
- Tests failing on temporary issues

> Often the application is not unstable. The test logic is.

Good control flow makes tests adaptable and reliable.

---

## 🤖 What Is Control Flow?

Control flow defines how a test decides what to do next.

Examples:

- If login fails, retry once  
- If feature flag enabled, run new flow  
- If payment pending, wait and recheck  
- Loop through all users  
- Stop execution after critical failure  
- Run cleanup even when test fails

Robot Framework supports these patterns natively.

---

## 🧱 Core Control Flow Features

| Feature | Use Case |
|---|---|
| IF / ELSE | Conditional decisions |
| FOR | Iterate through collections |
| WHILE | Repeat until condition changes |
| TRY / EXCEPT / FINALLY | Handle errors safely |
| BREAK / CONTINUE | Control loops |
| Wait Until Keyword Succeeds | Retry unstable operations |
| Run Keyword If | Legacy/simple conditions |

---

## 🔀 Conditional Execution

Use conditions when behavior depends on runtime state.

```robotframework
IF    '${ENV}' == 'prod'
    Full Validation
ELSE
    Basic Validation
END
```

Useful for:

- environment-specific logic  
- feature flags  
- user roles  
- optional flows

---

## 🧠 Better Than Nested Logic

Avoid long nested chains.

### Weak Pattern

```robotframework
Run Keyword If    '${status}' == 'PENDING'    Process Pending
Run Keyword If    '${status}' == 'SHIPPED'    Process Shipped
Run Keyword If    '${status}' == 'CANCELLED'    Process Cancelled
```

### Better Pattern

```robotframework
IF    '${status}' == 'PENDING'
    Process Pending
ELSE IF    '${status}' == 'SHIPPED'
    Process Shipped
ELSE
    Handle Unknown Status
END
```

Cleaner and easier to maintain.

---

## 🔁 FOR Loops

Used for collections and repetitive validations.

```robotframework
FOR    ${user}    IN    @{USERS}
    Validate User    ${user}
END
```

Useful for:

- data-driven checks  
- multiple records  
- repetitive assertions

---

## 🔄 WHILE Loops

Use when number of attempts is unknown.

```robotframework
${count}=    Set Variable    0

WHILE    ${count} < 5
    ${status}=    Get Order Status
    Exit For Loop If    '${status}' == 'CONFIRMED'
    ${count}=    Evaluate    ${count} + 1
END
```

Useful for:

- polling status  
- waiting business processes  
- queue checks

---

## ⚠️ Prefer Retry Utilities Over Manual Loops

Instead of writing retry loops manually:

```robotframework
Wait Until Keyword Succeeds    30s    3s    Verify Payment Status
```

This is cleaner and more reliable.

---

## 🚨 Error Handling with TRY / EXCEPT

Very valuable for resilient automation.

```robotframework
TRY
    Process Payment
EXCEPT
    Log    Payment failed
END
```

---

## Practical Example

```robotframework
TRY
    ${order_id}=    Create Order
    Process Payment    ${order_id}
    Confirm Order      ${order_id}
EXCEPT
    Log    Order flow failed    ERROR
FINALLY
    Cleanup Temporary Data
END
```

This ensures cleanup still happens.

---

## 🧹 FINALLY for Cleanup

Use `FINALLY` for actions that must always run:

- close browser  
- remove temp data  
- logout user  
- disconnect DB

```robotframework
FINALLY
    Close Browser
END
```

---

## 💻 UI Stability Example

Bad pattern:

```robotframework
Click Button    Submit
Sleep    5s
Page Should Contain    Success
```

Better pattern:

```robotframework
Click Button    Submit
Wait Until Page Contains    Success    timeout=15s
```

Best pattern:

```robotframework
Wait Until Keyword Succeeds    20s    2s    Verify Success Message
```

---

## 💾 API Handling Example

```robotframework
TRY
    ${response}=    Send Request
    Should Be Equal As Integers    ${response.status_code}    200
EXCEPT
    Log    API failed temporarily
END
```

---

## 🏢 Real Project Example

A pipeline had frequent failures because backend status updates were delayed.

Old logic:

```robotframework
Create Order
Sleep    5s
Verify Confirmed
```

Improved logic:

```robotframework
Create Order
Wait Until Keyword Succeeds    30s    3s    Verify Confirmed
```

Result:

- fewer false failures  
- more stable nightly runs  
- less debugging noise

---

## 📁 Recommended Patterns

## Feature Flag Handling

```robotframework
IF    '${NEW_CHECKOUT}' == 'true'
    Use New Checkout Flow
ELSE
    Use Legacy Flow
END
```

## Safe Cleanup

```robotframework
TRY
    Execute Test Flow
FINALLY
    Cleanup Resources
END
```

## Environment Logic

```robotframework
IF    '${ENV}' == 'qa'
    Use QA Data
ELSE
    Use Shared Data
END
```

---

## ❌ Common Mistakes

### Overusing Sleep

Creates timing failures.

### No Error Handling

One failure breaks everything.

### Deep Nested IF Blocks

Hard to maintain.

### Infinite WHILE Loops

Need max attempts/timeouts.

### Repeating Retry Logic Everywhere

Use reusable keywords.

### Ignoring Cleanup

Leaves dirty state.

---

## ✅ Best Practices

- Prefer explicit waits over sleep  
- Use TRY/EXCEPT for unstable integrations  
- Use FINALLY for cleanup  
- Keep conditions readable  
- Use retry utilities before custom loops  
- Add timeouts to loops  
- Centralize repeated logic

---

## 🔧 Practical Examples

### Retry UI Check

```robotframework
Wait Until Keyword Succeeds    15s    2s    Element Should Be Visible    id=login
```

### Conditional Run

```robotframework
IF    ${is_admin}
    Open Admin Dashboard
END
```

### Loop Through Data

```robotframework
FOR    ${id}    IN    @{IDS}
    Verify User Exists    ${id}
END
```

---

## 💡 My Practical Opinion

When teams say:

> “Tests fail randomly.”

Often the real issue is:

- checking too early  
- no retry strategy  
- rigid branching logic  
- missing cleanup  
- poor exception handling

Better control flow can improve suite trust more than adding new tools.

---

## 🏁 Final Verdict

Control flow and error handling are advanced automation skills.

Strong usage gives:

- stable execution  
- intelligent decisions  
- fewer flaky failures  
- easier maintenance  
- better CI/CD confidence

Weak logic creates brittle automation.

---

## 📚 What To Learn Next

1. Resource Files & Modular Design  
2. Data-Driven Testing  
3. Parallel Execution with Pabot  
4. Test Stability Engineering  
5. Production Framework Patterns

---

## Summary

> Reliable automation is not rigid automation.  
> It is automation that can adapt, retry, recover, and fail intelligently.
