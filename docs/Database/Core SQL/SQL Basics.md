---
sidebar_position: 1
title: SQL Basics
---
# SQL Command Types

> **Understanding what you can (and cannot) run as a tester**

---

## 📌 Why This Matters

In real projects:

* Testers usually have **limited DB access**
* Some SQL commands are **restricted**
* Wrong command → can break data or fail tests

> 💡 **Goal:** Know command types → avoid mistakes

---

## 🧠 SQL Command Categories

SQL is divided into **four main types**:

| Category | Full Form                    | Purpose          | Tester Usage |
| -------- | ---------------------------- | ---------------- | ------------ |
| **DDL**  | Data Definition Language     | Define structure | Awareness    |
| **DML**  | Data Manipulation Language   | Work with data   | ⭐ Core       |
| **DCL**  | Data Control Language        | Access control   | Awareness    |
| **TCL**  | Transaction Control Language | Transactions     | Conceptual   |

---

## 1️⃣ DDL – Structure

Defines or modifies database structure.

### Commands

* `CREATE`
* `ALTER`
* `DROP`
* `TRUNCATE`

### Example

```sql
CREATE TABLE users (...);
ALTER TABLE users ADD email VARCHAR(50);
DROP TABLE users;
```

### Tester Perspective

* ❌ Never run in automation
* ❌ Avoid in PROD
* ✅ Understand when reading scripts

---

## 2️⃣ DML – Data ⭐

Works with actual data inside tables.

### Commands

* `SELECT` ⭐⭐⭐
* `INSERT`
* `UPDATE`
* `DELETE`

### Example

```sql
SELECT * FROM users;
```

### Tester Perspective

* ✅ SELECT → daily usage
* ⚠️ INSERT/UPDATE → test setup only
* ❌ DELETE → rarely allowed

> 💡 **Important:**
> Most validation = SELECT (covered separately)

---

## 3️⃣ DCL – Access Control

Manages permissions.

### Commands

* `GRANT`
* `REVOKE`

### Example

```sql
GRANT SELECT ON users TO test_user;
```

### Tester Use

* Debug permission errors
* Understand access issues

---

## 4️⃣ TCL – Transactions

Controls transactions.

### Commands

* `COMMIT`
* `ROLLBACK`
* `SAVEPOINT`

### Example

```sql
ROLLBACK;
COMMIT;
```

### Tester Use

* Debug:

  * Missing data
  * Uncommitted changes
  * Flaky tests

---

## ⚖️ Quick Comparison

| Category | Structure | Data | Access | Transactions |
| -------- | --------- | ---- | ------ | ------------ |
| DDL      | ✅         | ❌    | ❌      | ❌            |
| DML      | ❌         | ✅    | ❌      | ❌            |
| DCL      | ❌         | ❌    | ✅      | ❌            |
| TCL      | ❌         | ❌    | ❌      | ✅            |

---

## ❌ Common Mistakes

* Running UPDATE/DELETE without WHERE
* Confusing DDL with DML
* Assuming COMMIT happens automatically
* Ignoring transaction behavior

---

## ✅ Best Practices

* Use **read-only DB access**
* Always identify command type before running
* Prefer SELECT for validation
* Limit data changes to test environments
* Understand transaction flow

---

## 🎯 Key Takeaways

* SQL commands are grouped for safety & control
* DML (especially SELECT) is core for testers
* DDL & DCL are awareness-level
* TCL helps explain many test failures
