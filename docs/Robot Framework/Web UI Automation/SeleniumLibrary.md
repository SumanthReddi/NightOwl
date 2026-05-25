---
sidebar_position: 1
title: SeleniumLibrary
description: Complete introduction to SeleniumLibrary in Robot Framework
tags:
  - robotframework
  - selenium
  - webautomation
---

# 🌐 SeleniumLibrary

> SeleniumLibrary is the most widely used Robot Framework library for browser-based UI automation.

---

## 🎯 Why This Matters

Robot Framework itself does not automate browsers.

Browser interactions become possible through SeleniumLibrary.

It helps automate:

- Web applications
- User interactions
- Form validations
- Navigation
- Browser behavior

:::info

Robot Framework provides the structure.

SeleniumLibrary provides browser actions.

:::

---

## 🧠 Quick Memory Rule

:::tip

Robot + SeleniumLibrary = Web UI Automation

:::

---

## 📘 What is SeleniumLibrary?

SeleniumLibrary is an external Robot Framework library built on Selenium WebDriver.

It provides reusable browser keywords instead of writing Selenium code directly.

Examples:

- Open Browser
- Click Element
- Input Text
- Wait Until Element Is Visible

---

## 📦 Installation

Install library:

```bash
pip install robotframework-seleniumlibrary
```

Import library:

```robot
*** Settings ***

Library    SeleniumLibrary
```

---

## 🏗 Selenium Architecture

Understanding execution flow:

```text
Test Case
      ↓
Robot Keywords
      ↓
SeleniumLibrary
      ↓
WebDriver
      ↓
Browser
      ↓
Application
```

---

## 💻 Common Keywords

Frequently used SeleniumLibrary keywords:

```robot
Open Browser

Click Element

Input Text

Input Password

Get Text

Page Should Contain

Close Browser
```

---

## 💻 Example Test

```robot
*** Test Cases ***

Verify Login

    Open Browser
    ...   https://example.com
    ...   chrome

    Input Text
    ...   id=username
    ...   admin

    Click Button
    ...   id=login

    Page Should Contain
    ...   Dashboard
```

---

## 🔥 Real Project Example

:::note

Enterprise flow:

Test

↓

Business Keyword

↓

Reusable Utility

↓

SeleniumLibrary

↓

Browser

Application changes remain isolated.

:::

---

## ⚖️ Selenium vs SeleniumLibrary

| Selenium Java | SeleniumLibrary |
|---|---|
| Code based | Keyword based |
| Requires programming | Readable syntax |
| More implementation | Faster automation creation |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded waits
- XPath everywhere
- Selenium keywords directly in tests
- Duplicate browser setup

:::

---

## 🎤 Interview Questions

<details>
<summary>What is SeleniumLibrary?</summary>

A Robot Framework library that exposes Selenium browser functionality through keywords.

</details>

---

## ⚡ Cheat Sheet

```robot
Library    SeleniumLibrary

Open Browser

Click Element

Input Text

Close Browser
```

---

## 🔗 Related Notes

- Waits
- Locators & XPath
- Browser Library
