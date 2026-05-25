---
sidebar_position: 4
title: Response Validation
description: Validating API responses effectively in Robot Framework
tags:
  - robotframework
  - api
  - validation
---

# ✅ Response Validation

> Sending API requests is only half the work. Validation determines whether the application behaves correctly.

---

## 🎯 Why This Matters

A successful API call does not guarantee correct behavior.

Validation helps verify:

- Status codes
- Response body
- Business rules
- Schema structure
- Headers
- Database impact

:::info

Request success ≠ Business success

:::

---

## 🧠 Quick Memory Rule

:::tip

Request

↓

Response

↓

Validate

↓

Trust

:::

---

## 📘 Types of Validation

API automation commonly validates:

- Status codes
- Headers
- Response body
- JSON values
- Schemas
- Database updates

---

## 🏗 Validation Flow

```text
Send Request
      ↓
Receive Response
      ↓
Extract Data
      ↓
Validate
      ↓
Continue Flow
```

---

## 💻 Status Validation

```robot
Should Be Equal As Integers
...   ${response.status_code}
...   200
```

---

## 💻 Response Body Validation

```robot
Should Contain
...   ${response.text}
...   success
```

---

## 💻 JSON Validation

```robot
Should Be Equal
...   ${json}[data][first_name]
...   Janet
```

---

## 💻 Header Validation

```robot
Dictionary Should Contain Key
...   ${response.headers}
...   Content-Type
```

---

## 🔥 Real Project Example

:::note

Create account

↓

Receive account number

↓

Validate response

↓

Validate database

Response validation alone was insufficient.

Database validation ensured correctness.

:::

---

## ⚖️ Validation Comparison

| Validation | Purpose |
|---|---|
| Status | Verify request result |
| Body | Verify content |
| JSON | Verify fields |
| Headers | Verify metadata |
| Database | Verify backend impact |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Validating status code only
- Ignoring response body
- Hardcoded values
- Skipping negative validation

:::

---

## 🎤 Interview Questions

<details>
<summary>Why is status code validation not enough?</summary>

The API may return success while business data is incorrect.

</details>

---

## ⚡ Cheat Sheet

```robot
Should Be Equal

Should Contain

Dictionary Should Contain Key

Should Be Equal As Integers
```

---

## 🔗 Related Notes

- JSON Handling
- Chained APIs
- Database Validation
