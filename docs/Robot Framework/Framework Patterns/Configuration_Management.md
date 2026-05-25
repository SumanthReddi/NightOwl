---
sidebar_position: 2
title: Configuration Management
description: Managing environments and configuration data in Robot Framework
tags:
  - robotframework
  - configuration
  - framework
---

# ⚙️ Configuration Management

> Configuration management separates environment-specific values from automation logic.

---

## 🎯 Why This Matters

Hardcoded values become difficult to maintain.

Applications often have multiple environments:

- DEV
- QA
- UAT
- PROD

Each environment may use:

- Different URLs
- Credentials
- Databases
- APIs
- Feature flags

:::info

Configuration should change without changing test logic.

:::

---

## 🧠 Quick Memory Rule

:::tip

Logic Stays

Configuration Changes

:::

---

## 📘 What is Configuration Management?

Configuration management stores values separately from test implementation.

Common configuration items:

- URLs
- Browser settings
- Environment names
- Credentials
- Timeouts
- API endpoints

---

## 🏗 Configuration Flow

```text
Execution Starts
      ↓
Read Environment
      ↓
Load Config
      ↓
Set Variables
      ↓
Execute Tests
```

---

## 💻 Variable File Example

```python
URL="https://qa-app.com"

BROWSER="chrome"

TIMEOUT=30
```

Import:

```robot
Variables    config.py
```

---

## 💻 Environment Selection

```robot
robot
...   -v ENV:QA
...   tests/
```

Access:

```robot
Log
...   ${ENV}
```

---

## 🔥 Real Project Example

:::note

Pipeline:

Environment Selection

↓

Load Config

↓

Update Variables

↓

Execute Robot

Single framework supported multiple environments.

:::

---

## ⚖️ Config Approaches

| Method | Usage |
|---|---|
| Variable files | Shared config |
| CLI variables | Runtime values |
| Environment variables | Secure data |
| JSON/YAML | Structured config |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded URLs
- Environment-specific keywords
- Duplicate config files
- Credentials inside test cases

:::

---

## 🎤 Interview Questions

<details>
<summary>Why separate config and test logic?</summary>

Environment changes should not require code changes.

</details>

---

## ⚡ Cheat Sheet

```robot
Variables    config.py

-v ENV:QA
```

---

## 🔗 Related Notes

- Enterprise Structure
- Secrets & Environment Handling
- Framework Design
