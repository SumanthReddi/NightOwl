---
sidebar_position: 3
title: Locators & XPath
description: Finding elements effectively in Robot Framework UI automation
tags:
  - robotframework
  - xpath
  - locators
  - selenium
---

# 🎯 Locators & XPath

> Stable automation depends heavily on locator strategy. Weak locators create flaky tests.

---

## 🎯 Why This Matters

Automation tools interact with elements through locators.

Poor locator selection causes:

- Flaky failures
- Slow debugging
- High maintenance
- Frequent test updates

:::info

Most UI failures are locator problems, not Selenium problems.

:::

---

## 🧠 Quick Memory Rule

:::tip

ID > Name > CSS > XPath

Prefer stable attributes over complex XPath.

:::

---

## 📘 What are Locators?

Locators identify elements on a page.

Common locator types:

- id
- name
- class
- css
- xpath
- link text

Example:

```robot
Click Element
...    id=submit
```

---

## 🏗 Locator Strategy Pyramid

Use simpler and stable locators first.

```text
           ID
            ↓
         Name
            ↓
          CSS
            ↓
         XPath
```

---

## 📚 XPath Types

### Absolute XPath

```text
/html/body/div[2]/input
```

Problems:

- Fragile
- Breaks frequently

---

### Relative XPath

```text
//input[@id='username']
```

Preferred because structure changes less often.

---

## 💻 Common XPath Patterns

Attribute:

```text
//input[@id='user']
```

Contains:

```text
//button[contains(text(),'Submit')]
```

Starts-With:

```text
//input[starts-with(@id,'user')]
```

Multiple conditions:

```text
//input[@type='text' and @name='username']
```

Parent:

```text
//span[text()='Name']/parent::div
```

---

## 🔥 Real Project Example

:::note

Bad:

```text
/html/body/div/div/div/div/input
```

Better:

```text
//input[@data-test='username']
```

Prefer application-supported stable attributes.

:::

---

## ⚖️ Comparison

| Locator | Stability |
|---|---|
| ID | High |
| Name | High |
| CSS | Medium |
| XPath | Medium |
| Absolute XPath | Low |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Absolute XPath
- Index-based locators
- Very long XPath
- Dynamic IDs

:::

---

## 🎤 Interview Questions

<details>
<summary>Why avoid absolute XPath?</summary>

Small UI changes break the locator.

</details>

<details>
<summary>CSS or XPath?</summary>

Prefer CSS when possible because it is generally cleaner and faster.

</details>

---

## ⚡ Cheat Sheet

```text
id=submit

name=username

css=.login-btn

xpath=//input[@id='user']
```

---

## 🔗 Related Notes

- SeleniumLibrary
- Waits
- Advanced UI Patterns
