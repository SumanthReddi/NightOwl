---
sidebar_position: 6
title: BuiltIn Utilities
description: Frequently used Robot Framework built-in libraries and utility keywords
tags:
  - robotframework
  - builtin
  - utilities
---

# 🧰 BuiltIn Utilities

> Robot Framework ships with built-in libraries that provide commonly used functionality without additional installation.

---

## 🎯 Why This Matters

Many engineers immediately install external libraries and forget that Robot Framework already includes powerful utilities.

Built-in libraries reduce:

- Duplicate code
- Custom implementation effort
- Framework complexity

:::info

Use built-in capabilities first, then extend only when needed.

:::

---

## 🧠 Quick Memory Rule

:::tip

BuiltIn = Core Actions

Collections = Lists & Dictionaries

String = Text Handling

DateTime = Time Operations

OperatingSystem = File/System actions

:::

---

## 📚 Common BuiltIn Libraries

| Library | Usage |
|---|---|
| BuiltIn | Core keywords |
| Collections | List and dictionary operations |
| String | Text manipulation |
| DateTime | Date handling |
| OperatingSystem | File and OS actions |
| Process | Execute external processes |

---

## 📘 BuiltIn Keywords

Used in almost every framework.

```robot
Log    Hello

Sleep    2s

Should Be Equal

Run Keyword If

Set Global Variable
```

---

## 📦 Collections Library

Collections work with lists and dictionaries.

```robot
@{users}

Append To List
...    ${users}
...    Admin

Log List
...    ${users}
```

---

## 🔤 String Library

Useful for text manipulation and validations.

```robot
Should Contain

Convert To Upper Case

Replace String
```

---

## 📅 DateTime Library

Helps generate dates and timestamps.

```robot
Get Current Date

Add Time To Date
```

---

## 💻 OperatingSystem Library

Used for files and OS interaction.

```robot
File Should Exist

Create File

Remove File
```

---

## 🏗 Utility Flow

```text
Test Case
     ↓
User Keyword
     ↓
BuiltIn Library
     ↓
System Action
```

---

## 🔥 Real Project Example

:::note

Excel-driven automation frequently combines:

Collections + String + OperatingSystem

to manage test data and files.

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Rewriting existing utility keywords
- Using Sleep excessively
- Creating custom logic unnecessarily

:::

---

## 🎤 Interview Questions

<details>
<summary>Why use BuiltIn libraries first?</summary>

They are stable, reusable and reduce framework complexity.

</details>

---

## ⚡ Cheat Sheet

```robot
Log

Should Be Equal

Append To List

Replace String

Get Current Date

File Should Exist
```

---

## 🔗 Related Notes

- Variables Resource Files & Libraries
- Control Flow
- Framework Design
