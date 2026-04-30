---
sidebar_position: 1
title: Troubleshooting Common Issues
description: Practical troubleshooting patterns for Robot Framework covering failure context, classification, root cause analysis, and debugging workflows.
---

# Robot Framework: Troubleshooting Common Issues

> Test failures are rarely mysterious.  
> They are usually poorly diagnosed.

---

## 🎯 Why This Matters

Most teams struggle with:

- unclear failure logs  
- slow debugging  
- repeated issues  
- misidentified root causes  
- poor visibility in CI  

> Fixing tests is easy.  
> Finding the real cause is where time is lost.

---

# 🧱 Troubleshooting Model

```text
Layer 1 → Capture Context
Layer 2 → Classify Failure
Layer 3 → Identify Root Cause
Layer 4 → Fix & Prevent
```

---

# 1️⃣ Capture Failure Context (Most Important)

## ❌ Default Behavior

```robotframework
Click Button    Submit
```

Failure gives minimal info.

---

## ✅ Improved Pattern

```robotframework
Run Keyword And Continue On Failure    Capture Failure Context
Click Button    Submit
```

---

## Context Capture Example

```robotframework
Capture Failure Context
    Log    Environment: ${ENVIRONMENT}
    Log    Browser: ${BROWSER}
    Capture Page Screenshot
```

---

## Why This Matters

Without context:

- debugging becomes guesswork  
- failures are hard to reproduce  

---

# 2️⃣ Failure Classification

## Goal

Understand what type of failure occurred.

---

## Example

```robotframework
Classify Failure
    [Arguments]    ${error}

    Run Keyword If    'timeout' in '${error}'    [Return]    ENVIRONMENT
    Run Keyword If    'not found' in '${error}'    [Return]    DATA
    Run Keyword If    '500' in '${error}'         [Return]    APPLICATION

    [Return]    TEST
```

---

## Categories

- ENVIRONMENT → infra / timeout  
- DATA → missing or invalid data  
- APPLICATION → actual defect  
- TEST → script issue  

---

# 3️⃣ Root Cause Identification

## ❌ Wrong Approach

Fix symptom:

```text
Test failed → add sleep
```

---

## ✅ Correct Approach

```text
Test failed → identify why it failed
```

---

## Example

```robotframework
Analyze Root Cause
    [Arguments]    ${classification}

    Run Keyword If    '${classification}' == 'ENVIRONMENT'
    ...    Log    Check service availability

    Run Keyword If    '${classification}' == 'DATA'
    ...    Log    Verify test data

    Run Keyword If    '${classification}' == 'APPLICATION'
    ...    Log    Possible defect
```

---

# 4️⃣ Debugging Patterns

## Retry (for instability)

```robotframework
Wait Until Keyword Succeeds
...    3 times
...    2s
...    Click Button    Submit
```

---

## Logging

```robotframework
Log    API Response: ${response}
```

---

## Database Check

```robotframework
${rows}=    Query    SELECT * FROM users WHERE id=${id}
```

---

# 🏢 Practical Insight

If a test fails:

- don’t immediately fix test  
- first understand failure type  

---

# ⚠️ Common Issues

## Element Not Found

- timing issue  
- wrong locator  

---

## Timeout

- slow environment  
- missing waits  

---

## Data Not Found

- wrong test data  
- cleanup issues  

---

## API Failure

- incorrect payload  
- auth issues  

---

# ❌ Common Mistakes

- adding sleep instead of fixing issue  
- ignoring logs  
- no classification  
- debugging only UI  
- not checking backend  

---

# ✅ Best Practices

- capture context always  
- classify failures  
- analyze root cause  
- fix actual issue (not symptom)  
- log useful information  

---

# 📈 Maturity Model

## Beginner
Reads logs manually.

## Intermediate
Adds logging + retries.

## Advanced
Uses classification + root cause analysis.

## Expert
Builds structured troubleshooting system.

---

# 💡 Practical Insight

When debugging is slow:

Check:

1. missing logs  
2. missing context  
3. wrong assumptions  
4. no classification  

---

# 🏁 Final Verdict

Good troubleshooting gives:

- faster debugging  
- fewer repeated failures  
- better confidence  

Bad troubleshooting wastes time.

---

# 📚 What To Learn Next

1. Test Reporting  
2. CI/CD Integration  
3. Parallel Execution  
4. Test Data Strategy  
5. Framework Design  

---

## Summary

> Failures are useful.  
> Only if you understand them.
