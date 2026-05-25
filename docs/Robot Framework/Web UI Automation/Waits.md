---
sidebar_position: 4
title: Waits
description: Synchronization strategies and wait mechanisms in Robot Framework
tags:
  - robotframework
  - waits
  - selenium
  - synchronization
---

# ⏳ Waits

> Synchronization problems are one of the biggest causes of flaky UI automation.

---

## 🎯 Why This Matters

Applications rarely load everything instantly.

Failures happen because of:

- AJAX requests
- Dynamic rendering
- Slow environments
- Grid delays
- API response timing

:::info

Most UI failures happen because tests are faster than applications.

:::

---

## 🧠 Quick Memory Rule

:::tip

No Sleep

Prefer Wait

Prefer Reusable Wait Keywords

:::

---

## 📘 What are Waits?

Waits help Robot Framework pause intelligently until a condition becomes true.

Without waits:

```text
Page Opens
      ↓
Element Still Loading
      ↓
Click Attempt
      ↓
Failure
```

With waits:

```text
Page Opens
      ↓
Wait
      ↓
Element Ready
      ↓
Action
```

---

## 📚 Types of Waits

Robot Framework commonly uses:

- Sleep
- Implicit Wait
- Explicit Wait
- Custom Wait Keywords
- Wait Until Keyword Succeeds

---

## 💻 Sleep

Simple pause:

```robot
Sleep    5s
```

Pros:

- Easy

Cons:

- Slower execution
- Flaky tests
- Blind waiting

---

## 💻 Explicit Wait

Preferred approach:

```robot
Wait Until Element Is Visible
...    id=login
...    timeout=20s
```

Waits until the condition becomes true.

---

## 💻 Wait Until Keyword Succeeds

Useful for retry behavior.

```robot
Wait Until Keyword Succeeds
...    2 min
...    10 sec
...    Click Element
...    id=submit
```

---

## 🔥 Real Project Example

:::note

Sauce Labs execution:

Locally:

Pass

CI:

Fail

Root cause:

Page rendering delay

Fix:

Reusable dashboard wait keyword

:::

---

## ⚖️ Comparison

| Method | Stability | Recommended |
|---|---:|---:|
| Sleep | Low | ❌ |
| Explicit Wait | High | ✅ |
| Reusable Wait Keywords | High | ⭐ |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Sleep everywhere
- Hardcoded wait values
- Waiting for invisible elements
- Duplicating wait logic

:::

---

## 🎤 Interview Questions

<details>
<summary>Sleep vs Wait?</summary>

Sleep pauses blindly.

Wait validates a condition.

</details>

<details>
<summary>Why build reusable waits?</summary>

To improve stability and centralize synchronization logic.

</details>

---

## ⚡ Cheat Sheet

```robot
Sleep

Wait Until Element Is Visible

Wait Until Page Contains

Wait Until Keyword Succeeds
```

---

## 🔗 Related Notes

- SeleniumLibrary
- Locators & XPath
- Advanced UI Patterns
