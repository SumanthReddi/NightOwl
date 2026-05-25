---
sidebar_position: 1
title: RequestsLibrary
description: API automation using Robot Framework RequestsLibrary
tags:
  - robotframework
  - api
  - requestslibrary
---

# 🔌 RequestsLibrary

> RequestsLibrary is the most commonly used Robot Framework library for API automation and service validation.

---

## 🎯 Why This Matters

Modern applications rely heavily on APIs.

UI automation alone cannot validate:

- Backend processing
- API contracts
- Response data
- Integration flows
- Service behavior

:::info

API automation is usually faster and more stable than UI automation.

:::

---

## 🧠 Quick Memory Rule

:::tip

Request

↓

Response

↓

Validation

:::

---

## 📘 What is RequestsLibrary?

RequestsLibrary is built on Python Requests and provides Robot Framework keywords for API interaction.

Common operations:

- GET
- POST
- PUT
- PATCH
- DELETE

---

## 📦 Installation

Install:

```bash
pip install robotframework-requests
```

Import:

```robot
*** Settings ***

Library    RequestsLibrary
```

---

## 🏗 API Flow

```text
Test
   ↓
Send Request
   ↓
Receive Response
   ↓
Validate
   ↓
Continue Flow
```

---

## 💻 GET Example

```robot
Create Session
...    api
...    https://reqres.in

${response}=
...    GET On Session
...    api
...    /users/2

Should Be Equal As Integers
...    ${response.status_code}
...    200
```

---

## 💻 POST Example

```robot
${body}=
Create Dictionary
...    name=John

${response}=
POST On Session
...    api
...    /users
...    json=${body}
```

---

## 🔥 Real Project Example

:::note

Enterprise pattern:

Create Account

↓

Fetch Reservation Number

↓

Validate Database

↓

Continue Application Flow

API and UI frequently work together.

:::

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded URLs
- Hardcoded tokens
- Ignoring status validation
- Large duplicated payloads

:::

---

## 🎤 Interview Questions

<details>
<summary>Why API automation before UI?</summary>

API tests execute faster and isolate backend functionality.

</details>

---

## ⚡ Cheat Sheet

```robot
Create Session

GET On Session

POST On Session

PUT On Session

DELETE On Session
```

---

## 🔗 Related Notes

- Authentication
- JSON Handling
- Chained APIs
