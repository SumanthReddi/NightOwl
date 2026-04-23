---
sidebar_position: 2
title: Select & Null
---

# SELECT & NULL Handling

> Core SQL skills every automation tester should know.

---

## 🎯 Why This Matters

- **90% of DB validations use `SELECT`**
- Many flaky tests happen because of:
  - Wrong filtering
  - Missing conditions
  - Incorrect NULL handling

> 💡 If you master this topic, backend validation becomes much easier.

---

# 🔍 SELECT Queries

## 📌 What is SELECT?

`SELECT` is used to **read data from a table**.

```sql
SELECT column_name
FROM table_name;
```

### Example

```sql
SELECT username
FROM users;
```

---

## ⭐ Select All Columns

```sql
SELECT *
FROM users;
```

### When to Use

✅ Quick exploration  
✅ Checking table structure

### Avoid In Automation Assertions

❌ Fetches unnecessary columns  
❌ Slower on large tables  
❌ Less readable

---

## ✅ Select Specific Columns (Best Practice)

```sql
SELECT user_id, username, status
FROM users;
```

### Why Better?

- Faster query execution
- Cleaner output
- Easier assertions
- Better readability

---

## 🎯 WHERE Clause (Most Important)

Used to filter only required rows.

```sql
SELECT *
FROM users
WHERE user_id = 101;
```

### Tester Usage

- Fetch exact user
- Validate single order
- Verify payment transaction
- Check specific status

> 💡 Without `WHERE`, you may fetch unnecessary rows.

---

## 🔗 AND / OR Conditions

### AND → All Conditions Must Match

```sql
SELECT *
FROM users
WHERE status = 'ACTIVE'
AND role = 'ADMIN';
```

### OR → Any Condition Can Match

```sql
SELECT *
FROM users
WHERE status = 'BLOCKED'
OR status = 'INACTIVE';
```

### Quick Memory Trick

- `AND` = Narrow results  
- `OR` = Wider results

---

## 📌 IN Operator

Cleaner way to check multiple values.

```sql
SELECT *
FROM users
WHERE status IN ('ACTIVE', 'PENDING');
```

Instead of:

```sql
status = 'ACTIVE' OR status = 'PENDING'
```

---

## 🔍 LIKE Operator

Used for pattern matching.

```sql
SELECT *
FROM users
WHERE email LIKE '%@gmail.com';
```

### Patterns

| Pattern | Meaning |
|--------|---------|
| `%text` | Ends with text |
| `text%` | Starts with text |
| `%text%` | Contains text |

⚠️ Can be slower on big tables.

---

## 🔽 ORDER BY

Used to sort results.

```sql
SELECT *
FROM users
ORDER BY created_date DESC;
```

### Common Usage

- Latest user
- Most recent order
- Newest transaction

### Sorting Keywords

- `ASC` → Ascending (default)
- `DESC` → Descending

---

## 📉 LIMIT / ROWNUM

Used to reduce returned rows.

### MySQL / PostgreSQL

```sql
SELECT *
FROM users
LIMIT 1;
```

### Oracle

```sql
SELECT *
FROM users
WHERE ROWNUM = 1;
```

### Tester Usage

- Get latest row
- Validate one record quickly
- Reduce large result sets

---

## 🧪 Common Automation Validations

Use `SELECT` to verify:

- Record exists
- Correct status stored
- Amount matches expected value
- Timestamp updated
- Only one row created

---

# ⚠️ NULL Handling

## 📌 What is NULL?

`NULL` means:

- No value
- Unknown value
- Not applicable

> 🚨 Important:
>
> - NULL ≠ empty string `''`
> - NULL ≠ zero `0`
> - NULL ≠ false

---

## ❌ Wrong Way to Check NULL

```sql
SELECT *
FROM users
WHERE email = NULL;
```

👉 Returns no rows.

Because NULL cannot be compared using `=`.

---

## ✅ Correct Way: IS NULL

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

### Use Cases

- Optional field not filled
- Missing backend data
- Expected blank values

---

## ✅ IS NOT NULL

```sql
SELECT *
FROM users
WHERE email IS NOT NULL;
```

### Use Cases

- Mandatory data exists
- Email saved successfully
- Value persisted in DB

---

## 🔗 NULL with Conditions

```sql
SELECT *
FROM orders
WHERE delivered_date IS NULL
AND status = 'SHIPPED';
```

### Meaning

- Order shipped
- Yet to be delivered

---

## 📊 NULL in COUNT

```sql
SELECT COUNT(delivered_date)
FROM orders;
```

### Important Difference

- `COUNT(column)` → ignores NULL
- `COUNT(*)` → counts all rows

> 💡 Use carefully in validations.

---

## ⚖️ NULL vs Empty vs Space

| Value | Meaning |
|------|---------|
| NULL | No value |
| '' | Empty string |
| ' ' | Space character |

---

## 🧠 COALESCE (Awareness)

Used to replace NULL.

```sql
SELECT COALESCE(email, 'NOT_PROVIDED')
FROM users;
```

### Meaning

If email is NULL, return `NOT_PROVIDED`.

---

## ❌ Common Mistakes

- Using `= NULL`
- Missing WHERE clause
- Assuming single row returned
- Ignoring ORDER BY
- Confusing NULL with empty string

---

## ✅ Best Practices

- Use WHERE with primary key when possible
- Fetch only required columns
- Validate exact row count
- Handle NULL explicitly
- Log queries during failures
- Keep SQL readable

---

## 🎯 Key Takeaways

- `SELECT` is core for DB validation
- `WHERE` gives accurate results
- `ORDER BY` gives consistent results
- NULL must use `IS NULL`
- Clean SQL = reliable automation
