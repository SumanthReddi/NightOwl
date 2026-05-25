---
sidebar_position: 2
title: Browser Library
description: Playwright-based modern browser automation using Robot Framework Browser Library
tags:
  - robotframework
  - browserlibrary
  - playwright
---

# 🚀 Browser Library

> Browser Library is a modern Robot Framework library built on Playwright for fast and reliable browser automation.

---

## 🎯 Why This Matters

SeleniumLibrary is widely used, but modern applications increasingly rely on dynamic rendering, SPAs, and async behavior.

Browser Library helps with:

- Faster execution
- Better waiting mechanisms
- Modern browser support
- Auto-waiting
- Improved stability

:::info

Browser Library uses Playwright under the hood instead of Selenium WebDriver.

:::

---

## 🧠 Quick Memory Rule

:::tip

Selenium → WebDriver

Browser Library → Playwright

:::

---

## 📘 What is Browser Library?

Browser Library is a Robot Framework library based on Playwright.

Unlike Selenium, Browser Library automatically waits for many actions.

Examples:

- Click
- Fill Text
- Get Text
- New Page
- Wait For Elements State

---

## 📦 Installation

Install:

```bash
pip install robotframework-browser

rfbrowser init
```

Import:

```robot
*** Settings ***

Library    Browser
```

---

## 🏗 Architecture Flow

```text
Test Case
     ↓
Robot Keywords
     ↓
Browser Library
     ↓
Playwright
     ↓
Browser
     ↓
Application
```

---

## 💻 Example Test

```robot
*** Test Cases ***

Verify Login

     New Browser    chromium

     New Page    https://example.com

     Fill Text
     ...    id=username
     ...    admin

     Click
     ...    text=Login

     Get Text
     ...    h1
```

---

## ⚖️ Selenium vs Browser Library

| SeleniumLibrary | Browser Library |
|---|---|
| Uses WebDriver | Uses Playwright |
| More manual waits | Auto waiting |
| Older ecosystem | Modern architecture |
| More setup | Cleaner execution |

---

## 🔥 Real Project Example

:::note

Applications with dynamic loading frequently become more stable with Browser Library because of built-in waiting behavior.

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Assuming keywords are identical to Selenium
- Adding unnecessary sleeps
- Migrating without updating locators

:::

---

## 🎤 Interview Questions

<details>
<summary>Why Browser Library over Selenium?</summary>

Auto-waiting, modern architecture and Playwright support.

</details>

---

## ⚡ Cheat Sheet

```robot
Library    Browser

New Browser

New Page

Click

Fill Text

Get Text
```

---

## 🔗 Related Notes

- SeleniumLibrary
- Waits
- Advanced UI Patterns
