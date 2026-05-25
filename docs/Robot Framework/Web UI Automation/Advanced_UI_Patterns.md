---
sidebar_position: 6
title: Advanced UI Patterns
description: Enterprise UI automation patterns and scalable design techniques
tags:
  - robotframework
  - ui
  - patterns
  - selenium
---

# 🧩 Advanced UI Patterns

> Real-world UI automation becomes challenging because enterprise applications are dynamic and unpredictable.

---

## 🎯 Why This Matters

Basic automation works for simple pages.

Enterprise applications introduce:

- Dynamic elements
- Loading delays
- Multi-step flows
- Hidden controls
- Complex navigation
- Browser inconsistencies

:::info

Stable automation depends more on design patterns than Selenium commands.

:::

---

## 🧠 Quick Memory Rule

:::tip

Wait

Reuse

Isolate

Recover

:::

---

## 📘 Common Enterprise UI Challenges

Large projects often face:

- Dynamic IDs
- AJAX loading
- Shadow DOM
- Multi-window workflows
- Hidden elements
- Retry requirements

---

## 🏗 Enterprise UI Flow

```text
Test
   ↓
Business Keyword
   ↓
Wait Strategy
   ↓
Reusable Component
   ↓
Application Action
```

---

## 💻 Dynamic Locator Pattern

Avoid:

```text
id=user_123456
```

Better:

```text
//input[contains(@id,'user')]
```

---

## 💻 Retry Pattern

Transient UI failures happen frequently.

Reusable approach:

```robot
Wait Until Keyword Succeeds
...    2 min
...    5 sec
...    Click Element
...    id=submit
```

---

## 💻 Custom Wait Pattern

Create reusable synchronization keywords.

```robot
Wait For Dashboard

    Wait Until Element Is Visible
    ...    id=dashboard
```

---

## 💻 Business Layer Pattern

Avoid direct Selenium usage:

Bad:

```robot
Click Element
...    id=submit
```

Better:

```robot
Submit Credit Application
```

---

## 🔥 Real Project Example

:::note

Application flow:

Open Browser

↓

Login

↓

Fulfillment

↓

Internal system

↓

Database validation

Reusable patterns kept framework changes isolated.

:::

---

## ⚖️ Pattern Comparison

| Problem | Pattern |
|---|---|
| Dynamic page | Wait strategy |
| Dynamic IDs | Flexible locator |
| Temporary failure | Retry |
| Duplicate logic | Reusable keywords |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Sleep everywhere
- XPath with indexes
- Selenium keywords directly in tests
- Giant reusable keywords
- Business logic duplication

:::

---

## 🎤 Interview Questions

<details>
<summary>What causes flaky UI automation?</summary>

Weak synchronization, unstable locators and poor framework design.

</details>

<details>
<summary>Why isolate Selenium actions?</summary>

Changes remain centralized and maintenance improves.

</details>

---

## ⚡ Senior QA Notes

:::tip

Most UI failures are framework design failures disguised as test failures.

:::

---

## ⚡ Cheat Sheet

```text
Wait

Retry

Reusable Keywords

Business Layer

Recovery Pattern
```

---

## 🔗 Related Notes

- Waits
- Locators & XPath
- Framework Design
