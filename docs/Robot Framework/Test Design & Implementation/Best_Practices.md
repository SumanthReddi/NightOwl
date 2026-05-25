---
sidebar_position: 5
title: Best Practices
description: Production-ready Robot Framework design and coding best practices
tags:
  - robotframework
  - bestpractices
  - framework
---

# ⭐ Best Practices

> Framework quality depends more on standards and consistency than on the number of test cases.

---

## 🎯 Why This Matters

Many automation suites work initially but become unstable and difficult to maintain over time.

Best practices help create:

- Stable frameworks
- Faster debugging
- Better reuse
- Easier onboarding
- Lower maintenance effort

:::info

Framework success is a design problem, not a scripting problem.

:::

---

## 🧠 Quick Memory Rule

:::tip

Readable

Reusable

Maintainable

Scalable

:::

---

## 📘 Framework Principles

A production framework should prioritize:

- Simplicity
- Reuse
- Separation of concerns
- Modularity
- Stability

Avoid unnecessary complexity.

---

## 🏗 Recommended Architecture

```text
Tests
   ↓
Business Keywords
   ↓
Utility Keywords
   ↓
Libraries
   ↓
Application
```

---

## 📚 Naming Standards

Good naming improves readability.

Bad:

```robot
Login1

Keyword2

Submit123
```

Better:

```robot
Login To Application

Submit Credit Application

Validate User Dashboard
```

---

## 📦 Folder Guidelines

Large projects should separate responsibilities.

```text
project/

tests/
resources/
keywords/
utilities/
config/
reports/
```

---

## 🔥 Real Project Example

:::note

Good enterprise practice:

Tests never directly call Selenium actions.

Test

↓

Business keyword

↓

Utility keyword

↓

Library

This isolates application changes.

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded waits
- Hardcoded test data
- Selenium keywords directly in tests
- Duplicate keywords
- Large test suites with mixed responsibilities
- Generic keyword names

:::

---

## 🎤 Interview Questions

<details>
<summary>What are important framework design principles?</summary>

Reuse, maintainability, modularity and simplicity.

</details>

<details>
<summary>Why avoid Selenium keywords in tests?</summary>

Business tests should remain readable and implementation-independent.

</details>

---

## ⚡ Senior QA Notes

:::tip

Strong frameworks survive application changes because implementation details remain isolated.

Automation success usually depends on:

- Architecture
- Standards
- Stability
- Reuse

:::

---

## ⚡ Cheat Sheet

```text
Readable

Reusable

Maintainable

Scalable
```

---

## 🔗 Related Notes

- Framework Design
- Reusable Components
- Reliability & Maintenance
