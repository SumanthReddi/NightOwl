---
sidebar_position: 5
title: Windows Frames Alerts
description: Handling windows, tabs, frames and alerts in Robot Framework
tags:
  - robotframework
  - selenium
  - windows
  - frames
---

# 🪟 Windows, Frames & Alerts

> Modern applications frequently open new windows, embed content inside frames and trigger alerts.

---

## 🎯 Why This Matters

UI automation becomes unstable when execution happens in the wrong browser context.

Common issues:

- Element not found
- Wrong tab active
- Frame context mismatch
- Alert blocking execution

:::info

Tests may fail even when locators are correct because focus is wrong.

:::

---

## 🧠 Quick Memory Rule

:::tip

Window → Switch

Frame → Switch

Alert → Handle

:::

---

## 📘 Windows and Tabs

Applications frequently open:

- New tabs
- Child windows
- External pages

Robot Framework requires switching before interacting.

Example:

```robot
Switch Window    NEW
```

---

## 🏗 Window Flow

```text
Main Window
      ↓
Click Link
      ↓
New Window Opens
      ↓
Switch Window
      ↓
Continue Execution
```

---

## 📘 Frames

Frames isolate content inside another document.

Automation tools cannot access frame elements directly.

Must switch:

```robot
Select Frame
...    id=paymentFrame
```

Return:

```robot
Unselect Frame
```

---

## 🏗 Frame Flow

```text
Page
    ↓
Frame
    ↓
Switch
    ↓
Element
```

---

## 📘 Alerts

Alerts interrupt execution and require explicit handling.

Common actions:

```robot
Handle Alert

Alert Should Be Present

Input Text Into Alert
```

---

## 🔥 Real Project Example

:::note

Credit application flow:

Application submission

↓

New browser window

↓

Internal system opens

↓

Switch Window

↓

Continue validation

Missing switch caused failures.

:::

---

## ⚖️ Comparison

| Context | Action |
|---|---|
| Window | Switch Window |
| Frame | Select Frame |
| Alert | Handle Alert |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Forgetting window switch
- Interacting before selecting frame
- Leaving frame context active
- Ignoring alerts

:::

---

## 🎤 Interview Questions

<details>
<summary>Why does element not found happen inside frames?</summary>

Because driver context never switched.

</details>

<details>
<summary>Difference between tabs and frames?</summary>

Tabs are browser contexts.

Frames are embedded page contexts.

</details>

---

## ⚡ Cheat Sheet

```robot
Switch Window

Select Frame

Unselect Frame

Handle Alert
```

---

## 🔗 Related Notes

- SeleniumLibrary
- Waits
- Advanced UI Patterns
