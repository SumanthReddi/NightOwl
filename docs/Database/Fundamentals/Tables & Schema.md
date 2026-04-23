---
sidebar_position: 2
title: Tables & Schema
---

# Tables & Schema

> Understand how data is stored and how database objects are organized.

For automation testers, most backend validations depend on checking **tables, rows, columns, and schemas**.

## 🎯 Why This Matters

Knowing tables and schemas helps you:

- Validate backend data correctly
- Write accurate SQL queries
- Avoid querying wrong tables
- Debug failures faster
- Understand how real systems store data

---

# Tables

## 📌 What is a Table?

A **table** stores related data in rows and columns.

> 💡 Think of a table like an Excel sheet built for real applications.

## 🔍 Common Examples

| Table Name | Purpose |
|---|---|
| `users` | Stores user information |
| `orders` | Stores order details |
| `payments` | Stores payment records |

## 🔍 Table Structure

```text
USERS
------------------------------------------------
| user_id | username | email   | status  |
------------------------------------------------
| 101     | john     | j@x.com | ACTIVE  |
| 102     | mary     | m@x.com | BLOCKED |
------------------------------------------------
```

## 📌 What is a Column?

A **column** represents one attribute of the data.

Examples:

- `user_id` → unique identifier
- `username` → login name
- `email` → contact value
- `status` → ACTIVE / BLOCKED

Common data types:

- Number
- Text
- Date
- Boolean

## 📌 What is a Row?

A **row** represents one complete record.

Example:

```text
101 | john | j@x.com | ACTIVE
```

> 💡 One row often means one user, one order, or one transaction.

## 🎯 Why Tables Matter in Testing

Backend validations usually involve:

- Finding the correct row
- Checking expected column values
- Confirming records were created or updated

Examples:

- Verify user status = ACTIVE
- Confirm order record exists
- Validate payment amount

---

# Keys Overview

## 📌 Primary Key (PK)

A **Primary Key** uniquely identifies each row.

Example:

```text
user_id
```

Rules:

- Must be unique
- Cannot be NULL

### Tester Benefit

Used to fetch exact records safely.

## 📌 Foreign Key (FK)

A **Foreign Key** links one table to another.

Example:

```text
orders.user_id → users.user_id
```

### Tester Benefit

Useful for validating relationships across tables.

> 💡 Full PK/FK concepts are covered in the next chapter: **Keys & Constraints**

---

# Schema

## 📌 What is a Schema?

A **schema** is a logical grouping of database objects like:

- Tables
- Views
- Procedures

> 💡 Think of schema as a folder inside a database.

## 🔍 Example

```sql
auth.users
finance.users
```

Both are named `users`, but belong to different schemas.

## 🎯 Why Schemas Are Used

- Organize large databases
- Separate business domains
- Avoid name conflicts
- Control permissions

## 📌 Fully Qualified Table Name

Use:

```sql
schema_name.table_name
```

Example:

```sql
SELECT *
FROM auth.users
WHERE user_id = 101;
```

### Why It Matters

- Prevents wrong table access
- Avoids false failures
- Ensures correct environment data

## ⚠️ Default Schema Risk

```sql
SELECT * FROM users;
```

This may use a default schema.

Possible issues:

- Wrong data returned
- Missing records
- Flaky validations

> 💡 Best practice: always use `schema.table`

## 🔍 Schema Across Environments

| Environment | Example |
|---|---|
| DEV | `dev_auth.users` |
| QA | `qa_auth.users` |
| PROD | `prod_auth.users` |

## ⚠️ Common Mistakes

- Ignoring schema prefix
- Hardcoding schema names
- Querying wrong environment
- Assuming table names are globally unique

## ✅ Best Practices

- Use fully qualified table names
- Never assume default schema
- Parameterize schema by environment
- Verify schema access early
- Log schema name in failures

---

## 🔑 Key Takeaways

- Table stores related data
- Column = attribute
- Row = record
- PK uniquely identifies rows
- FK creates relationships
- Schema organizes database objects
- Prefer `schema.table`
