---
sidebar_position: 5
title: Chained APIs
description: Passing data between API calls in Robot Framework
tags:
  - robotframework
  - api
  - chainedapi
---

# 🔗 Chained APIs

> Chained APIs connect multiple requests where data from one API becomes input for another.

---

## 🎯 Why This Matters

Real-world systems rarely execute isolated API calls.

Common enterprise flows:

- Login → token → user details
- Create customer → account creation
- Create account → fetch reservation → validation
- Order creation → payment → confirmation

:::info

Most business workflows are API chains.

:::

---

## 🧠 Quick Memory Rule

:::tip

Request

↓

Extract

↓

Store

↓

Reuse

:::

---

## 📘 What are Chained APIs?

Chained APIs use values from previous responses in future requests.

Common shared values:

- IDs
- Tokens
- Reservation numbers
- Account IDs
- Session values

---

## 🏗 Chained Execution Flow

```text
API-1
   ↓
Response
   ↓
Extract ID
   ↓
Store Variable
   ↓
API-2
```

---

## 💻 Example

API-1:

```robot
${response}=
POST On Session
...   api
...   /users

${json}=
Set Variable
...   ${response.json()}

${id}=
Set Variable
...   ${json}[id]
```

API-2:

```robot
GET On Session
...   api
...   /users/${id}
```

---

## 📦 Variable Reuse Pattern

Data can be stored:

- Suite variables
- Global variables
- Resource files
- External files

Example:

```robot
Set Suite Variable
...   ${ACCOUNT}
```

---

## 🔥 Real Project Example

:::note

Credit workflow:

Create Application

↓

Extract Reservation Number

↓

Database Validation

↓

FICO Verification

↓

Continue Fulfillment

API chaining drives end-to-end flow.

:::

---

## ⚖️ Comparison

| Single API | Chained APIs |
|---|---|
| Independent | Connected |
| Limited flow | Business workflow |
| Small scope | Enterprise scenarios |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded IDs
- Missing null validation
- Repeating API calls
- Ignoring failed responses

:::

---

## 🎤 Interview Questions

<details>
<summary>Why use Chained APIs?</summary>

Business workflows frequently depend on previous API output.

</details>

---

## ⚡ Cheat Sheet

```robot
${response.json()}

Set Suite Variable

${json}[id]
```

---

## 🔗 Related Notes

- RequestsLibrary
- JSON Handling
- Response Validation
