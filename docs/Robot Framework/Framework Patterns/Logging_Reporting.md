---
sidebar_position: 4
title: Logging & Reporting
description: Logging, reporting and debugging practices in Robot Framework
tags:
  - robotframework
  - logging
  - reporting
---

# 📋 Logging & Reporting

> Logs and reports help understand what happened during automation execution.

---

## 🎯 Why This Matters

Automation failures without logs are difficult to debug.

Good logging improves:

- Failure analysis
- Team visibility
- CI debugging
- Trend tracking
- Root cause analysis

:::info

Good reporting reduces debugging effort.

:::

---

## 🧠 Quick Memory Rule

:::tip

Execute

↓

Capture

↓

Analyze

↓

Improve

:::

---

## 📘 Robot Framework Reports

Robot automatically generates:

- `log.html`
- `report.html`
- `output.xml`

Purpose:

| File | Usage |
|---|---|
| log.html | Detailed execution |
| report.html | Summary |
| output.xml | Raw execution data |

---

## 🏗 Report Flow

```text
Robot Execution
      ↓
Generate Results
      ↓
log.html
report.html
output.xml
```

---

## 💻 Logging Example

```robot
Log
...   Login successful

Log To Console
...   API execution started
```

---

## 💻 Custom Log Levels

Robot supports:

```robot
Log
...   User Created
...   level=INFO
```

Common levels:

- INFO
- WARN
- DEBUG
- ERROR

---

## 🔥 Real Project Example

:::note

Pipeline execution:

Robot

↓

Sauce Labs

↓

Reports

↓

Artifacts

↓

Debug Failures

Logs reduced debugging time significantly.

:::

---

## ⚖️ Logging Comparison

| Type | Purpose |
|---|---|
| Log | Framework logs |
| Console | Immediate visibility |
| Reports | Summary |
| Artifacts | CI debugging |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Logging passwords
- Excessive debug logs
- Missing failure details
- Ignoring artifacts

:::

---

## 🎤 Interview Questions

<details>
<summary>Difference between log.html and report.html?</summary>

log.html contains detailed execution while report.html contains summaries.

</details>

---

## ⚡ Cheat Sheet

```robot
Log

Log To Console

log.html

report.html
```

---

## 🔗 Related Notes

- GitLab CI
- Sauce Labs
- Execution Strategies
