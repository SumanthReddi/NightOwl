---
sidebar_position: 3
title: SQL Validation
description: SQL validation techniques for Robot Framework automation
tags:
  - robotframework
  - sql
  - database
---

# 🧾 SQL Validation

> SQL validation ensures that backend data matches application behavior and business expectations.

---

## 🎯 Why This Matters

Applications may display correct information in UI while backend records remain incorrect.

SQL validation helps verify:

- Database inserts
- Updates
- Transactions
- Flags
- Business processing

:::info

UI success does not always mean database success.

:::

---

## 🧠 Quick Memory Rule

:::tip

Query

↓

Fetch

↓

Compare

↓

Validate

:::

---

## 📘 Types of SQL Validation

Database testing frequently validates:

- Record existence
- Counts
- Field values
- Status updates
- Transactions
- Audit records

---

## 🏗 Validation Flow

```text
Perform Action
      ↓
Run SQL Query
      ↓
Fetch Result
      ↓
Compare Expected Data
      ↓
Validate
```

---

## 💻 Record Validation

Check if records exist:

```robot
${result}=
Query
...   SELECT *
...   FROM users
...   WHERE id=100
```

Validate:

```robot
Should Not Be Empty
...   ${result}
```

---

## 💻 Count Validation

Useful for duplicates.

```robot
${result}=
Query
...   SELECT COUNT(*)
...   FROM users
```

---

## 💻 Field Validation

```robot
Should Be Equal
...   ${result}[0][0]
...   Approved
```

---

## 🔥 Real Project Example

:::note

Application submission

↓

Reservation number generated

↓

Run query

↓

Validate FICO value

↓

Validate audit trail

Database validation confirmed complete business flow.

:::

---

## ⚖️ Validation Types

| Validation | Example |
|---|---|
| Count | Duplicate records |
| Record | Exists |
| Status | Approved |
| Audit | Events |

---

## 🚫 Common Mistakes

:::danger

Avoid:

- Hardcoded SQL values
- Large repeated queries
- Ignoring empty results
- Querying production incorrectly

:::

---

## 🎤 Interview Questions

<details>
<summary>Why validate counts?</summary>

To detect duplicate or missing records.

</details>

---

## ⚡ Cheat Sheet

```robot
Query

Should Not Be Empty

Should Be Equal
```

---

## 🔗 Related Notes

- Oracle Integration
- DatabaseLibrary
- Data Verification Patterns
