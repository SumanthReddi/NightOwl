---
sidebar_position: 2
title: Flaky Test Handling
description: Understanding and reducing flaky tests in Robot Framework
tags:
  - robotframework
  - flaky
  - reliability
---

# 🌪 Flaky Test Handling

> A flaky test passes and fails inconsistently without application changes.

---

## 🎯 Why This Matters

Flaky tests reduce trust in automation.

Common impact:

- False failures
- Wasted debugging time
- CI instability
- Delayed releases
- Team frustration

:::info

Unstable tests eventually become ignored tests.

:::

---

## 🧠 Quick Memory Rule

:::tip

Detect

↓

Analyze

↓

Stabilize

↓

Monitor

:::

---

## 📘 Common Causes

Most flaky tests happen because of:

- Synchronization issues
- Dynamic locators
- Shared test data
- Environment instability
- Timing dependencies
- Parallel execution conflicts

---

## 🏗 Investigation Flow

```text
Test Failure
      ↓
Re-run
      ↓
Pass?
 ↓          ↓
Yes        No
 ↓          ↓
Flaky      Real Defect
```

---

## 💻 Example Problem

Bad:

```robot
Sleep    5s

Click Element
...   id=submit
```

Better:

```robot
Wait Until Element Is Visible
...   id=submit

Click Element
...   id=submit
```

---

## 💻 Stability Pattern

Create reusable synchronization:

```robot
Wait For Dashboard

     Wait Until Element Is Visible
     ...   id=dashboard
```

---

## 🔥 Real Project Example

:::note

Sauce Labs:

Local → Pass

CI → Random Failures

Root cause:

Page rendering delay

Fix:

Reusable wait keyword + retry strategy

:::

---

## ⚖️ Flaky vs Real Failure

| Flaky | Real Failure |
|---|---|
| Random | Reproducible |
| Environment dependent | Functional issue |
| Timing related | Application bug |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Adding random sleeps
- Ignoring recurring failures
- Shared test data collisions
- Assuming all failures are app defects

:::

---

## 🎤 Interview Questions

<details>
<summary>What causes flaky automation?</summary>

Synchronization, unstable locators, shared resources and environment timing issues.

</details>

---

## ⚡ Cheat Sheet

```robot
Wait Until Element Is Visible

Wait Until Keyword Succeeds
```

---

## 🔗 Related Notes

- Waits
- Retry Patterns
- Root Cause Analysis
