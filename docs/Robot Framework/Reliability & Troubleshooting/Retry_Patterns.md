---
sidebar_position: 3
title: Retry Patterns
description: Retry strategies for stabilizing Robot Framework execution
tags:
  - robotframework
  - retry
  - reliability
---

# 🔁 Retry Patterns

> Retry mechanisms help recover from temporary failures without masking real defects.

---

## 🎯 Why This Matters

Enterprise applications sometimes fail temporarily because of:

- Slow page rendering
- Network delays
- Grid instability
- Dynamic loading
- External systems

Retries can improve stability when used carefully.

:::warning

Retries should handle temporary failures, not hide product defects.

:::

---

## 🧠 Quick Memory Rule

:::tip

Fail

↓

Retry

↓

Recover

↓

Continue

:::

---

## 📘 Retry Strategy Concepts

Retries are useful for:

- UI synchronization
- Temporary API failures
- Grid instability
- Cloud execution delays
- Dynamic systems

Avoid retries for deterministic failures.

---

## 🏗 Retry Flow

```text
Action
   ↓
Fail
   ↓
Retry
   ↓
Pass?
↓       ↓
Yes     No
↓       ↓
Continue Investigate
```

---

## 💻 Wait Until Keyword Succeeds

Robot provides built-in retry capability.

```robot
Wait Until Keyword Succeeds
...   2 min
...   10 sec
...   Click Element
...   id=submit
```

---

## 💻 Reusable Retry Pattern

Create reusable keywords:

```robot
Retry Dashboard Load

     Wait Until Keyword Succeeds
     ...   2 min
     ...   5 sec
     ...   Page Should Contain
     ...   Dashboard
```

---

## 🔥 Real Project Example

:::note

CI:

Pass locally

↓

Random Sauce failures

↓

Transient loading issue

↓

Reusable retry keyword

Framework stability improved significantly.

:::

---

## ⚖️ Good vs Bad Retry

| Good | Bad |
|---|---|
| Temporary failures | Functional defects |
| Dynamic loading | Broken logic |
| Cloud instability | Product bugs |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Retrying everything
- Infinite retry loops
- Large retry windows
- Ignoring root causes

:::

---

## 🎤 Interview Questions

<details>
<summary>Why not retry every failure?</summary>

Retries may hide real defects and reduce trust.

</details>

---

## ⚡ Cheat Sheet

```robot
Wait Until Keyword Succeeds
```

---

## 🔗 Related Notes

- Flaky Test Handling
- Root Cause Analysis
- Waits
