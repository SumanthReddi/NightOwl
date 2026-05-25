---
sidebar_position: 4
title: Data Verification Patterns
description: Enterprise database verification patterns in Robot Framework
tags:
  - robotframework
  - database
  - validation
---

# 🔍 Data Verification Patterns

> Database validation in enterprise systems follows repeatable patterns rather than isolated SQL checks.

---

## 🎯 Why This Matters

Simple query execution is usually not enough.

Real projects often verify:

- End-to-end workflows
- Audit records
- Transaction history
- FICO flags
- Reservation details
- Cross-system consistency

:::info

Backend validation should confirm business behavior, not just data existence.

:::

---

## 🧠 Quick Memory Rule

:::tip

Action

↓

Query

↓

Validate

↓

Continue Flow

:::

---

## 📘 Common Verification Patterns

Common enterprise patterns:

- UI → Database
- API → Database
- API → UI → Database
- Multi-system verification
- Audit verification

---

## 🏗 Verification Flow

```text
Application Action
      ↓
API/UI Processing
      ↓
Database Update
      ↓
Query Database
      ↓
Validate Business Data
```

---

## 💻 UI → Database Pattern

```text
Submit Application
      ↓
Reservation Generated
      ↓
Run Query
      ↓
Validate Record
```

Useful for backend confirmation.

---

## 💻 API → Database Pattern

```text
Create Account API
      ↓
Receive Account Number
      ↓
Database Query
      ↓
Validate Values
```

---

## 💻 Audit Verification Pattern

Audit validation confirms events happened correctly.

Example:

```sql
SELECT *
FROM audit_log
WHERE reservation_number='12345'
```

---

## 🔥 Real Project Example

:::note

Credit workflow:

Submit Application

↓

Extract Reservation Number

↓

Fetch Audit Trail

↓

Validate FICO Flags

↓

Continue Flow

Database verification protected against false-positive UI results.

:::

---

## ⚖️ Pattern Comparison

| Pattern | Usage |
|---|---|
| UI → DB | Backend validation |
| API → DB | Service validation |
| Audit | Event tracking |
| Multi-system | End-to-end flow |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Validating existence only
- Ignoring audit checks
- Hardcoded values
- Duplicate SQL logic

:::

---

## 🎤 Interview Questions

<details>
<summary>Why combine UI/API with DB validation?</summary>

Responses alone do not guarantee business correctness.

</details>

---

## ⚡ Cheat Sheet

```text
Action

↓

Query

↓

Validate

↓

Continue
```

---

## 🔗 Related Notes

- SQL Validation
- Oracle Integration
- Real Project Patterns
