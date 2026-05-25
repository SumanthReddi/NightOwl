---
sidebar_position: 3
title: JSON Handling
description: Working with JSON payloads and responses in Robot Framework API automation
tags:
  - robotframework
  - api
  - json
---

# 📄 JSON Handling

> JSON is the most commonly used format for API request and response communication.

---

## 🎯 Why This Matters

API automation rarely validates plain text.

Most modern systems exchange:

- Request payloads
- Response objects
- Nested structures
- Dynamic values
- Arrays

:::info

Strong API automation depends heavily on JSON handling skills.

:::

---

## 🧠 Quick Memory Rule

:::tip

Request JSON

↓

Response JSON

↓

Extract

↓

Validate

:::

---

## 📘 What is JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format.

Example:

```json
{
   "name":"John",
   "role":"QA",
   "active":true
}
```

---

## 🏗 JSON Structure

JSON commonly contains:

```text
Object
   ↓
Keys
   ↓
Values
   ↓
Arrays
```

---

## 💻 Access Response JSON

Example:

```robot
${response}=
GET On Session
...   api
...   /users/2

${json}=
Set Variable
...   ${response.json()}
```

Access value:

```robot
Log
...   ${json}[data][first_name]
```

---

## 💻 Working with Arrays

Response:

```json
{
   "users":[
      {"name":"John"},
      {"name":"Mike"}
   ]
}
```

Access:

```robot
${json}[users][0][name]
```

---

## 💻 Create JSON Payload

```robot
${body}=
Create Dictionary
...   name=John
...   role=QA
```

---

## 🔥 Real Project Example

:::note

API account creation:

Create payload

↓

Send request

↓

Extract account ID

↓

Pass to next request

JSON extraction drives chained execution.

:::

---

## ⚖️ Common JSON Structures

| Type | Example |
|---|---|
| Object | `{}` |
| Array | `[]` |
| Nested Object | Object inside object |
| Array of Objects | List of JSON records |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded indexes
- Assuming key existence
- Ignoring nested structures
- Large duplicated payloads

:::

---

## 🎤 Interview Questions

<details>
<summary>Difference between object and array?</summary>

Objects contain key-value pairs.

Arrays store ordered items.

</details>

---

## ⚡ Cheat Sheet

```robot
${response.json()}

${json}[data]

Create Dictionary
```

---

## 🔗 Related Notes

- RequestsLibrary
- Response Validation
- Chained APIs
