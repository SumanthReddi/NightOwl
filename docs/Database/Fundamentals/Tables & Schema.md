---
sidebar_position: 2
title: Tables & Schema
---

# Tables & Schema

> **How Data is Stored in a Database (Tester Perspective)**

---

## 📦 What is a Table?

A **table** is a structured container that stores related data in a grid format.

> 💡 **Memory trick:**
> **Table = Excel sheet (but powerful + scalable)**

---

### 🧠 Examples

* `users` → stores user data
* `orders` → stores order details
* `payments` → stores transactions

---

## 📊 Table Structure (Visual)

```text
USERS
------------------------------------------------
| user_id | username | email   | status  | created |
------------------------------------------------
| 101     | john     | j@x.com | ACTIVE  | 01-Jan  |
| 102     | mary     | m@x.com | BLOCKED | 03-Jan  |
------------------------------------------------
```

---

## 🧱 What is a Column?

A **column** represents one attribute of data.

### Examples:

* `user_id` → unique identifier
* `username` → login name
* `status` → ACTIVE / BLOCKED
* `created` → date

### Rules:

* Each column has a **data type**

  * Number
  * Text
  * Date
* All values in a column follow same type

---

## 📄 What is a Row?

A **row** represents one complete record.

### Example:

```text
user_id = 101
username = john
email = j@x.com
status = ACTIVE
```

> 💡 **Tester view:**
> One row = one user / one order / one transaction

---

## 🧪 Why Tables Matter for Automation

When validating backend data, you:

* Find a specific **row**
* Validate specific **columns**

### Examples:

* Check user status = `ACTIVE`
* Verify order is created
* Validate payment amount

---

## 🔑 Primary Key (Basic)

A **primary key (PK)** uniquely identifies each row.

### Example:

```text
user_id
```

### Rules:

* Must be **unique**
* Cannot be **NULL**

### Tester Importance:

* Fetch exact record
* Avoid duplicate data confusion

---

## 🔗 Foreign Key (Concept)

A **foreign key (FK)** links one table to another.

### Example:

```text
orders.user_id → users.user_id
```

### Why it matters:

* Creates relationships
* Enables cross-table validation

---

## 🧪 Real Automation Scenario

### UI Action:

User places an order

### DB Impact:

* New row in `orders`
* Linked to `users` via `user_id`

### Validation:

* Order exists
* Correct user_id
* Correct status

---

# 🗂️ Database Schema

---

## 📌 What is a Schema?

A **schema** is a logical grouping of database objects.

> 💡 **Memory trick:**
> **Schema = Folder inside database**

---

## 🧠 Example

```sql
auth.users
finance.users
```

Same table name, different schemas.

---

## 🎯 Why Schemas Exist

* Organize large databases
* Separate domains (auth, finance, reporting)
* Avoid name conflicts
* Control access

---

## 🔍 Fully Qualified Table Name (IMPORTANT)

```sql
schema_name.table_name
```

### Example:

```sql
SELECT * FROM auth.users WHERE user_id = 101;
```

### Why testers must care:

* Avoid wrong table
* Avoid false failures
* Ensure correct data

---

## ⚠️ Default Schema Problem

```sql
SELECT * FROM users;
```

This uses **default schema**, which can cause:

* Wrong data
* Missing records
* Flaky tests

> 🚨 **Rule:** Always use `schema.table`

---

## 🔐 Schema & Permissions (Awareness)

* Access is controlled at schema level
* Some schemas may be restricted

### Tester Impact:

* Query may fail due to permission
* Same query may work in one schema, fail in another

---

## 🌍 Schemas Across Environments

| Environment | Example         |
| ----------- | --------------- |
| DEV         | dev_auth.users  |
| QA          | qa_auth.users   |
| PROD        | prod_auth.users |

---

## ✅ Best Practices for Testers

* Always use **schema.table**
* Never assume default schema
* Parameterize schema names
* Verify schema access early
* Log schema in failures

---

## ❌ Common Mistakes

* Ignoring schema prefix
* Hardcoding schema names
* Querying wrong environment schema
* Assuming table is globally unique

---

## 🧠 Interview Quick Answers

**What is a table?**
→ Structured data storage (rows & columns)

**What is a primary key?**
→ Unique identifier for each row

**What is a schema?**
→ Logical grouping of database objects

**Why use schema.table?**
→ To avoid querying wrong data

---

## 🎯 Key Takeaways

* Table = data container
* Column = attribute
* Row = record
* PK = unique identifier
* FK = relationship
* Schema = grouping layer
* Always use fully qualified table names
