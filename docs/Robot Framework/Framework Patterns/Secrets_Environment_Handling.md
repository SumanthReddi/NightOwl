---
sidebar_position: 5
title: Secrets & Environment Handling
description: Managing secrets and environment-specific values securely in Robot Framework
tags:
  - robotframework
  - security
  - environments
---

# 🔐 Secrets & Environment Handling

> Credentials and environment data should be managed securely and independently from test logic.

---

## 🎯 Why This Matters

Enterprise frameworks typically support multiple environments and sensitive information.

Common sensitive values:

- User credentials
- API tokens
- Database passwords
- Cloud keys
- Environment URLs

:::info

Hardcoded secrets become security and maintenance risks.

:::

---

## 🧠 Quick Memory Rule

:::tip

Store Securely

↓

Load Dynamically

↓

Execute Safely

:::

---

## 📘 Environment Handling Overview

Frameworks often execute against:

- DEV
- QA
- UAT
- PROD

Different environments may use:

- URLs
- Credentials
- Databases
- Feature flags

Automation logic should remain unchanged.

---

## 🏗 Environment Flow

```text
Execution Starts
      ↓
Read Environment
      ↓
Load Secrets
      ↓
Load Config
      ↓
Execute Tests
```

---

## 💻 Environment Variable Example

Set value:

```bash
export API_TOKEN=abc123
```

Access:

```robot
Log
...   %{API_TOKEN}
```

---

## 💻 Runtime Variables

Pass during execution:

```bash
robot
-v ENV:QA
-v BROWSER:chrome
tests/
```

---

## 💻 Secret Storage Options

Common enterprise approaches:

- Environment variables
- CI secret variables
- Vault systems
- Config files
- Cloud secret managers

---

## 🔥 Real Project Example

:::note

GitLab Pipeline

↓

Load secure variables

↓

Select environment

↓

Execute Robot

↓

Connect Sauce Labs

Credentials remained outside source code.

:::

---

## ⚖️ Secret Comparison

| Method | Usage |
|---|---|
| Environment Variable | Runtime |
| GitLab Secret | CI |
| Vault | Enterprise |
| Config File | Non-sensitive values |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Passwords in code
- Secrets in Git
- Environment-specific test logic
- Hardcoded URLs

:::

---

## 🎤 Interview Questions

<details>
<summary>Why avoid hardcoded secrets?</summary>

Security risks and maintenance problems.

</details>

---

## ⚡ Cheat Sheet

```robot
%{TOKEN}

-v ENV:QA
```

---

## 🔗 Related Notes

- Configuration Management
- GitLab CI
- Sauce Labs
