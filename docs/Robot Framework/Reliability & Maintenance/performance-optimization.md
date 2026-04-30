---
sidebar_position: 2
title: Performance Optimization
description: Practical performance optimization techniques for Robot Framework covering execution speed, parallelization, resource usage, and CI efficiency.
---

# Robot Framework: Performance Optimization

> Slow tests are rarely caused by Robot Framework itself.  
> They are usually caused by how tests are designed and executed.

---

## 🎯 Why This Matters

Common performance problems:

- running full test suite every time  
- slow pipelines  
- poor parallel execution  
- resource contention (browser, DB)  
- uneven test distribution  

> Faster feedback loops = better engineering decisions.

---

# 🧱 Optimization Model

```text
Layer 1 → Execution Strategy
Layer 2 → Resource Optimization
Layer 3 → Parallel Execution
Layer 4 → Continuous Optimization
```

---

# 1️⃣ Execution Strategy (Biggest Impact)

## ❌ Bad

```bash
robot tests/
```

Runs everything every time.

---

## ✅ Better

```bash
robot --include smoke tests/
```

---

## Test Selection Strategy

- smoke → quick validation  
- regression → full validation  
- feature-based execution  

---

## Example

```bash
robot --include smoke tests/
robot --include regression tests/
```

---

# 2️⃣ Test Ordering (Often Ignored)

## Problem

Long tests at the end → pipeline delay.

---

## Solution

Run slow tests first.

```bash
pabot --ordering order.txt tests/
```

---

## order.txt example

```text
tests/slow/test1.robot
tests/slow/test2.robot
tests/fast/test3.robot
```

---

# 🏢 Practical Insight

Balancing execution improves parallel efficiency significantly.

---

# 3️⃣ Resource Optimization

## Problem

Opening browser for every test:

```robotframework
Open Browser    ${URL}    chrome
Close Browser
```

---

## Better: Reuse Browser

```robotframework
Reuse Browser
    [Arguments]    ${url}

    Run Keyword If    '${BROWSER_OPEN}' == 'False'
    ...    Open Browser    ${url}    chrome
    ...    ELSE    Go To    ${url}

    Set Suite Variable    ${BROWSER_OPEN}    True
```

---

## Database Optimization

- reuse connections  
- avoid reconnecting per test  
- limit connection count  

---

# 4️⃣ Parallel Execution

## Basic

```bash
pabot --processes 4 tests/
```

---

## Important Rules

- use dynamic data  
- avoid shared records  
- control DB limits  

---

## Problem Example

```text
All tests using same user → failures
```

---

## Fix

```robotframework
${id}=    Generate Random String    6
${user}=  Catenate    user_${id}
```

---

# 5️⃣ CI Optimization

## ❌ Slow Pipeline

```yaml
script:
  - robot tests/
```

---

## ✅ Optimized

```yaml
script:
  - robot --include smoke tests/
  - pabot --processes 4 tests/regression/
```

---

# 6️⃣ Logging Optimization

## Problem

Too much logging slows execution.

---

## Fix

```bash
robot --loglevel INFO tests/
```

---

# 7️⃣ Identify Bottlenecks

Look for:

- slow tests  
- repeated setup  
- heavy API calls  
- large DB queries  

---

## Simple Approach

```bash
robot --loglevel DEBUG tests/
```

Analyze execution time.

---

# ⚠️ Common Issues

## Running Everything Always

Waste of time.

---

## Poor Parallel Distribution

Some threads idle.

---

## Resource Exhaustion

Too many browsers/DB connections.

---

## Heavy Test Setup

Repeated login/setup.

---

# ❌ Common Mistakes

- ignoring execution strategy  
- overusing parallel without control  
- static test data  
- opening browser per test  
- excessive logging  

---

# ✅ Best Practices

- run only required tests  
- reuse resources  
- use parallel wisely  
- distribute tests properly  
- monitor slow tests  

---

# 📈 Maturity Model

## Beginner
Runs all tests sequentially.

## Intermediate
Uses tags + basic parallel.

## Advanced
Optimized distribution + resource reuse.

## Expert
Fully optimized pipelines with minimal execution time.

---

# 💡 Practical Insight

When tests are slow:

Check:

1. execution scope  
2. parallel setup  
3. resource usage  
4. test design  

---

# 🏁 Final Verdict

Performance optimization is about:

- reducing unnecessary work  
- improving execution efficiency  
- scaling safely  

---

# 📚 What To Learn Next

1. Parallel Execution Deep Dive  
2. CI/CD Optimization  
3. Test Data Strategy  
4. Resource Management  
5. Performance Testing  

---

## Summary

> Faster tests are not about shortcuts.  
> They are about better design.
