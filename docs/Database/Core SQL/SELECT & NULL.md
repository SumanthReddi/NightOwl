---
sidebar_position: 5
title: SELECT & NULL
---
# SELECT & NULL Handling

> **Core SQL Skills for Automation Testers**

---

## 🎯 Why This Matters

* **90% of DB validation = SELECT queries**
* Most flaky tests come from **wrong filtering or NULL handling**

> 💡 **If you master this file → you can validate backend confidently**

---

# 🔍 SELECT Queries

---

## 📌 What is SELECT?

Used to **fetch data from a table**.

```sql
SELECT column_name FROM table_name;
```

### Example

```sql
SELECT username FROM users;
```

---

## ⭐ Selecting All Columns

```sql
SELECT * FROM users;
```

### ⚠️ Note

* Useful for exploration
* ❌ Avoid in automation assertions

---

## ✅ Selecting Specific Columns (Best Practice)

```sql
SELECT user_id, username, status FROM users;
```

### Why better?

* Faster
* Cleaner
* Clear intent

---

## 🎯 WHERE Clause (Most Important)

Filters rows.

```sql
SELECT * FROM users WHERE user_id = 101;
```

### Tester Use

* Fetch exact record
* Validate specific data

---

## 🔗 AND / OR Conditions

```sql
SELECT * FROM users
WHERE status = 'ACTIVE' AND role = 'ADMIN';
```

```sql
SELECT * FROM users
WHERE status = 'BLOCKED' OR status = 'INACTIVE';
```

### Tips

* AND → strict filtering
* OR → may return multiple rows

---

## 📌 IN (Cleaner Alternative)

```sql
SELECT * FROM users
WHERE status IN ('ACTIVE', 'PENDING');
```

---

## 🔍 LIKE (Pattern Matching)

```sql
SELECT * FROM users
WHERE email LIKE '%@gmail.com';
```

### Patterns

* `%text` → ends with
* `text%` → starts with
* `%text%` → contains

⚠️ Slower on large tables

---

## 🔽 ORDER BY (Sorting)

```sql
SELECT * FROM users
ORDER BY created_date DESC;
```

### Use Cases

* Latest record
* Recent transaction validation

---

## 📉 LIMIT / ROWNUM

### MySQL / PostgreSQL

```sql
SELECT * FROM users LIMIT 1;
```

### Oracle

```sql
SELECT * FROM users WHERE ROWNUM = 1;
```

---

## 🧪 Common Automation Validations

* Record exists
* Status is correct
* Amount matches
* Timestamp is valid
* Only one record exists

---

# ⚠️ NULL Handling

---

## 📌 What is NULL?

`NULL` means:

* No value
* Unknown
* Not applicable

> 🚨 **Important:**
> NULL ≠ empty string (`''`)
> NULL ≠ 0

---

## ❌ Wrong Way

```sql
SELECT * FROM users WHERE email = NULL;
```

👉 Returns **no rows**

---

## ✅ Correct Way: IS NULL

```sql
SELECT * FROM users WHERE email IS NULL;
```

### Use Cases

* Missing optional data
* Backend failures
* Unfilled fields

---

## ✅ IS NOT NULL

```sql
SELECT * FROM users WHERE email IS NOT NULL;
```

### Use Cases

* Ensure data exists
* Validate mandatory fields

---

## 🔗 NULL in Conditions

```sql
SELECT * FROM orders
WHERE delivered_date IS NULL
AND status = 'SHIPPED';
```

### Meaning

* Order shipped
* Not yet delivered

---

## 📊 NULL in Aggregations

```sql
SELECT COUNT(delivered_date) FROM orders;
```

* `COUNT(column)` → ignores NULL
* `COUNT(*)` → counts all rows

> 💡 Choose based on validation need

---

## ⚖️ NULL vs Empty

| Value | Meaning  |
| ----- | -------- |
| NULL  | No value |
| ''    | Empty    |
| ' '   | Space    |

---

## 🧠 COALESCE (Awareness)

```sql
SELECT COALESCE(email, 'NOT_PROVIDED') FROM users;
```

* Replaces NULL with default
* Rare in automation

---

## ❌ Common Mistakes

* Using `=` instead of `IS NULL`
* Missing WHERE clause
* Expecting single row but getting many
* Ignoring ORDER BY
* Confusing NULL with empty string

---

## ✅ Best Practices

* Always use WHERE with primary key
* Fetch only required columns
* Validate exact row count
* Handle NULL explicitly
* Log queries during failures

---

## 🎯 Key Takeaways

* SELECT is core to DB validation
* WHERE ensures accuracy
* ORDER BY ensures consistency
* NULL must be handled explicitly
* Clean queries = reliable automation
