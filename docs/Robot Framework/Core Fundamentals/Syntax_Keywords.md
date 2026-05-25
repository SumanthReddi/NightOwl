---
sidebar_position: 2
title: Syntax & Keywords
description: Robot Framework syntax and keyword fundamentals
tags:
  - robotframework
  - keywords
  - syntax
---

# 📝 Syntax & Keywords

> Understanding syntax and keywords is the foundation of every Robot Framework project.

---

## 🎯 Why This Matters

Robot Framework is built around keywords. Test cases become easy to read and maintain because business logic is written using reusable actions.

Without understanding syntax and keyword structure, large frameworks quickly become difficult to maintain.

:::info

Everything in Robot Framework eventually becomes:

Test Cases → Keywords → Libraries → Execution

:::

---

## 🧠 Quick Memory Rule

:::tip

Memory Formula

Robot File = Sections + Keywords + Data + Execution

:::

---

## 📘 Robot File Structure

Robot Framework files are organized into sections. Each section has a dedicated purpose.

```robot
*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${URL}      https://example.com

*** Test Cases ***
Verify Login
    Login To Application

*** Keywords ***
Login To Application
    Open Browser    ${URL}    chrome
```

### Section Purpose

| Section | Purpose |
|---|---|
| Settings | Import libraries/resources |
| Variables | Store reusable values |
| Test Cases | Test execution steps |
| Keywords | Reusable actions |

---

## 🏗 Execution Order Visual

Robot Framework processes files in sequence.

```text
Read Settings
      ↓
Load Libraries
      ↓
Load Variables
      ↓
Read Test Cases
      ↓
Execute Keywords
      ↓
Generate Results
```

---

## 📚 Types of Keywords

Keywords come from multiple sources.

### BuiltIn Keywords

Provided by Robot Framework itself.

Examples:

```robot
Log

Sleep

Should Be Equal
```

---

### Library Keywords

Libraries provide domain-specific functionality.

Example:

```robot
Click Element

Input Text

Open Browser
```

---

### User Keywords

User-defined reusable actions.

```robot
*** Keywords ***

Login To Application

    Input Text
    ...     id=username
    ...     admin

    Click Button
    ...     id=login
```

---

### Custom Python Keywords

Python libraries can expose custom keywords.

```python
def get_user():
     return "Admin"
```

```robot
${user}=
...     Get User
```

---

## ⚖️ Keyword Comparison

| Type | Source | Example |
|---|---|---|
| BuiltIn | Robot | Sleep |
| Library | SeleniumLibrary | Click Element |
| User | Framework | Login |
| Custom | Python | Get User |

---

## 🔥 Real Project Example

:::note

Enterprise frameworks rarely place Selenium keywords directly inside tests.

Common pattern:

Test → Business Keyword → Utility Keyword → Library Keyword

This improves maintenance and reuse.

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Writing huge test cases
- Duplicating keywords
- Hardcoded values
- Calling Selenium keywords everywhere
- Mixing business logic and technical logic

:::

---

## 🎤 Interview Questions

<details>
<summary>What are the different keyword types?</summary>

BuiltIn, Library, User and Custom keywords.

</details>

<details>
<summary>Why create User Keywords?</summary>

To improve reuse, readability and maintenance.

</details>

---

## ⚡ Cheat Sheet

```robot
*** Settings ***

*** Variables ***

*** Test Cases ***

*** Keywords ***

Log

Sleep

Run Keyword If
```

---

## 🔗 Related Notes

- Variables Resource Files & Libraries
- Framework Design
- BuiltIn Utilities
