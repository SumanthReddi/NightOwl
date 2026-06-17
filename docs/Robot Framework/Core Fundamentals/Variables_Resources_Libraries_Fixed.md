---
sidebar_position: 4
title: Variables Resource Files & Libraries
description: Understanding reusable data and framework components in Robot Framework
tags:
  - robotframework
  - variables
  - libraries
  - resources
---

# 📦 Variables, Resource Files & Libraries

> Reusability is one of the biggest strengths of Robot Framework.

---

## 🎯 Why This Matters

As frameworks grow, hardcoding values and duplicating code creates maintenance issues.

Robot Framework separates:

- Data
- Keywords
- Libraries
- Configuration

:::info

Large automation projects survive because of reuse.

Not because of large test suites.

:::

---

## 🧠 Quick Memory Rule

:::tip

Variables → Store Data

Resources → Store Keywords

Libraries → Provide Functionality

:::

---

## 📘 Variables

Variables allow reusable values instead of hardcoded data.

```robot
*** Variables ***

${URL}         https://example.com
${BROWSER}     chrome
${TIMEOUT}     30
```

Use:

```robot
Open Browser
...    ${URL}
...    ${BROWSER}
```

---

## 📚 Variable Types

Robot Framework supports multiple variable types.

| Type | Example |
|---|---|
| Scalar | `${name}` |
| List | `@{users}` |
| Dictionary | `&{user}` |
| Environment | `%{PATH}` |

Example:

```robot
@{users}
...    Admin
...    Tester

&{employee}
...    name=Sumanth
...    role=QA
```

---

## 📁 Resource Files

Resource files move reusable keywords outside test files.

```robot
*** Settings ***

Resource     ../resources/common.resource
```

Inside resource:

```robot
*** Keywords ***

Login To Application

    Input Text
    ...   id=username
    ...   admin

    Click Button
    ...   id=login
```

---

## 🏗 Visual Framework Flow

```text
Test Case
    ↓
Resource File
    ↓
User Keyword
    ↓
Library Keyword
    ↓
Application
```

---

## 📚 Libraries

Libraries provide actual functionality.

| Library | Usage |
|---|---|
| SeleniumLibrary | UI automation |
| RequestsLibrary | API testing |
| DatabaseLibrary | Database validation |
| Collections | Lists and dictionaries |
| Process | System execution |

---

## 🔥 Real Project Example

:::note

tests → resources → utilities → custom libraries

Tests call business keywords instead of Selenium keywords directly.

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded URLs
- Duplicate login keywords
- Storing locators inside tests
- Huge resource files

:::

