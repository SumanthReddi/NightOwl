---
sidebar_position: 3
title: Keyword Driven Framework
description: Designing reusable keyword-based automation architecture in Robot Framework
tags:
  - robotframework
  - framework
  - keyworddriven
---

# 🔑 Keyword Driven Framework

> Keyword-driven architecture is one of the core design patterns of Robot Framework.

---

## 🎯 Why This Matters

Directly placing Selenium or API actions inside test cases creates duplication and maintenance problems.

Keyword-driven design improves:

- Reusability
- Readability
- Maintainability
- Team collaboration

:::info

Tests should describe business behavior.

Keywords should handle implementation.

:::

---

## 🧠 Quick Memory Rule

:::tip

Business Test

↓

Business Keyword

↓

Reusable Utility

↓

Library Keyword

:::

---

## 📘 What is Keyword Driven Framework?

Keyword-driven design separates:

- Business flow
- Technical implementation
- Reusable actions

Tests become readable while implementation remains centralized.

---

## 🏗 Architecture Flow

```text
Test Case
     ↓
Business Keyword
     ↓
Utility Keyword
     ↓
Library Keyword
     ↓
Application
```

---

## 💻 Bad Example

Direct implementation inside test:

```robot
*** Test Cases ***

Verify Login

    Input Text
    ...    id=username
    ...    Admin

    Input Password
    ...    id=password
    ...    pass123

    Click Button
    ...    id=login
```

Problems:

- Duplicate logic
- Hard maintenance
- Low reuse

---

## ✅ Better Example

Create reusable keyword:

```robot
*** Keywords ***

Login To Application

    Input Text
    ...    id=username
    ...    ${username}

    Input Password
    ...    id=password
    ...    ${password}

    Click Button
    ...    id=login
```

Test becomes:

```robot
Verify Login

    Login To Application
```

---

## 🔥 Real Project Example

:::note

Credit application automation:

Test

↓

Submit Preapproved Application

↓

Fill Customer Data

↓

Selenium Keywords

Changes remain isolated.

:::

---

## ⚖️ Comparison

| Direct Tests | Keyword Driven |
|---|---|
| Repeated steps | Reusable |
| Difficult updates | Easier maintenance |
| Technical details visible | Business readable |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Massive keywords
- Hundreds of duplicate keywords
- Technical keywords inside tests
- Mixed responsibilities

:::

---

## 🎤 Interview Questions

<details>
<summary>Why use keyword-driven frameworks?</summary>

To improve readability, reuse and maintenance.

</details>

<details>
<summary>Difference between User and Library keywords?</summary>

User keywords are framework-defined.

Library keywords come from imported libraries.

</details>

---

## ⚡ Cheat Sheet

```text
Test
   ↓
Business Keyword
   ↓
Reusable Utility
   ↓
Library
```

---

## 🔗 Related Notes

- Framework Design
- Reusable Components
- Syntax & Keywords
