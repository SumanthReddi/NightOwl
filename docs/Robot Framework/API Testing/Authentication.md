---
sidebar_position: 2
title: Authentication
description: Authentication strategies for API automation in Robot Framework
tags:
  - robotframework
  - api
  - authentication
---

# 🔐 Authentication

> Authentication verifies identity before APIs allow access to resources.

---

## 🎯 Why This Matters

Most real-world APIs are protected.

Without authentication, requests may fail with:

- 401 Unauthorized
- 403 Forbidden
- Invalid token errors
- Session failures

:::info

Authentication validates *who you are* before authorization decides *what you can access*.

:::

---

## 🧠 Quick Memory Rule

:::tip

Identity

↓

Token

↓

Access

:::

---

## 📘 Common Authentication Types

API projects commonly use:

- Basic Authentication
- Bearer Token
- API Key
- OAuth
- Session-based Authentication

---

## 🏗 Authentication Flow

```text
Login Request
      ↓
Receive Token
      ↓
Store Token
      ↓
Send Protected Request
      ↓
Validate Response
```

---

## 💻 Basic Authentication

Username and password sent together.

```robot
${response}=

GET
...    https://example.com
...    auth=${AUTH}
```

---

## 💻 Bearer Token

Most modern APIs use tokens.

```robot
${headers}=
Create Dictionary
...   Authorization=Bearer ${TOKEN}

GET On Session
...   api
...   /users
...   headers=${headers}
```

---

## 💻 API Key

```robot
${headers}=
Create Dictionary
...   x-api-key=${API_KEY}
```

---

## 🔥 Real Project Example

:::note

Enterprise flow:

Authenticate

↓

Receive token

↓

Store globally

↓

Reuse across API calls

Avoid generating tokens repeatedly.

:::

---

## ⚖️ Authentication Comparison

| Type | Usage |
|---|---|
| Basic | Simple systems |
| Token | Modern APIs |
| API Key | Service integrations |
| OAuth | Enterprise systems |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded tokens
- Credentials in test files
- Generating tokens repeatedly
- Ignoring expiration

:::

---

## 🎤 Interview Questions

<details>
<summary>Authentication vs Authorization?</summary>

Authentication verifies identity.

Authorization controls permissions.

</details>

---

## ⚡ Cheat Sheet

```robot
Authorization=Bearer ${TOKEN}

x-api-key=${API_KEY}
```

---

## 🔗 Related Notes

- RequestsLibrary
- Chained APIs
- Response Validation
