---
sidebar_position: 1
title: DatabaseLibrary
description: Database automation and validation using Robot Framework DatabaseLibrary
tags:
  - robotframework
  - database
  - oracle
---

# 🗄 DatabaseLibrary

> DatabaseLibrary enables Robot Framework to connect, query and validate database systems.

---

## 🎯 Why This Matters

UI and API validations alone may not confirm whether backend processing worked correctly.

Database validation helps verify:

- Stored data
- Transactions
- Backend updates
- Business workflows
- System integrity

:::info

Database validation confirms what actually happened in the system.

:::

---

## 🧠 Quick Memory Rule

:::tip

Connect

↓

Execute Query

↓

Fetch Data

↓

Validate

:::

---

## 📘 What is DatabaseLibrary?

DatabaseLibrary provides keywords to connect and execute queries against databases.

Supported examples:

- Oracle
- MySQL
- PostgreSQL
- SQL Server

---

## 📦 Installation

Install:

```bash
pip install robotframework-databaselibrary
```

Import:

```robot
*** Settings ***

Library    DatabaseLibrary
```

---

## 🏗 Database Validation Flow

```text
Application Action
      ↓
Database Update
      ↓
Execute Query
      ↓
Fetch Result
      ↓
Validate
```

---

## 💻 Database Connection

Example:

```robot
Connect To Database
...    oracledb
...    username
...    password
...    host
...    database
```

---

## 💻 Execute Query

```robot
${result}=
Query
...    SELECT * FROM USERS
```

---

## 💻 Validate Results

```robot
Should Not Be Empty
...   ${result}
```

---

## 🔥 Real Project Example

:::note

Application flow:

Submit application

↓

Reservation number generated

↓

Run CAPS query

↓

Validate audit data

Database checks confirmed backend updates.

:::

---

## ⚖️ Database Validation Areas

| Validation | Example |
|---|---|
| User Data | Account creation |
| Transactions | Payments |
| Flags | Backend logic |
| Audit Trail | Tracking events |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded SQL
- Large duplicated queries
- Ignoring null validation
- Direct production updates

:::

---

## 🎤 Interview Questions

<details>
<summary>Why perform database validation?</summary>

To verify backend behavior beyond UI and API responses.

</details>

---

## ⚡ Cheat Sheet

```robot
Connect To Database

Query

Should Not Be Empty

Disconnect From Database
```

---

## 🔗 Related Notes

- SQL Validation
- Oracle Integration
- Data Verification Patterns
