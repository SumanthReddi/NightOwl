---
sidebar_position: 6
title: Aggregations & Dates
---

# Aggregations & Date Handling

> Learn how to **summarize data** and safely **validate date/time values** in SQL.

For automation testers, these topics are commonly used for record counts, totals, duplicates, recent transactions, and time-based validations.

## 🎯 Why This Matters

These concepts help you:

- Verify record counts
- Validate totals and balances
- Detect duplicate records
- Check latest transactions
- Avoid flaky date/time validations

---

# SQL Aggregations

## 📌 What are Aggregate Functions?

Aggregate functions:

- Work on multiple rows
- Return one summarized result

## 🧠 Common Functions

| Function | Purpose |
|---|---|
| `COUNT()` | Count rows |
| `SUM()` | Add values |
| `MAX()` | Highest/latest value |
| `MIN()` | Lowest/oldest value |
| `AVG()` | Average value |

---

## 1️⃣ COUNT (Most Important)

Used to count rows.

### Count All Rows

```sql
SELECT COUNT(*) FROM users;
```

### Count Non-NULL Values

```sql
SELECT COUNT(email) FROM users;
```

> 💡 `COUNT(column)` ignores NULL values  
> 💡 `COUNT(*)` counts all rows

### Tester Use Cases

- Verify record creation
- Ensure one row exists
- Detect duplicates

```sql
SELECT COUNT(*)
FROM orders
WHERE order_id = 5001;
```

Expected:

- `1` → Correct
- `0` → Missing record
- `>1` → Duplicate issue

---

## 2️⃣ SUM

Used to total numeric values.

```sql
SELECT SUM(amount)
FROM payments
WHERE order_id = 5001;
```

### Tester Use Cases

- Validate payment totals
- Verify invoices
- Check refunds

---

## 3️⃣ MAX / MIN

Used to find highest or lowest values.

### Latest Record

```sql
SELECT MAX(created_date) FROM orders;
```

### Oldest Record

```sql
SELECT MIN(created_date) FROM orders;
```

### Tester Use Cases

- Latest transaction
- First record validation

---

## 4️⃣ GROUP BY

Groups rows based on a column.

```sql
SELECT status, COUNT(*)
FROM users
GROUP BY status;
```

### Tester Use Cases

- Count users by status
- Validate distributions
- Detect anomalies

---

## 🔍 HAVING

Used to filter grouped results.

```sql
SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 1;
```

### Tester Use Case

Find duplicate orders.

---

## ⚠️ Common Mistakes

- Missing GROUP BY
- Using WHERE instead of HAVING
- Misunderstanding COUNT(column)
- Expecting one row from grouped queries

## ✅ Best Practices

- Use COUNT for validations
- Prefer COUNT(*) unless NULL matters
- Use GROUP BY only when needed
- Validate exact expected numbers
- Log queries on failure

---

# Date & Timestamp Handling

## 📌 Why Dates Are Tricky

Dates often cause flaky tests because:

- Timezones differ
- UI format ≠ DB format
- Delays happen before DB commit
- Exact timestamp matching fails

---

## 📌 Date vs Timestamp

| Type | Meaning |
|---|---|
| DATE | Date only |
| TIMESTAMP | Date + time |

Examples:

- DATE → `2026-01-05`
- TIMESTAMP → `2026-01-05 14:32:10`

---

## 🎯 Tester Rule

> Never compare dates as plain strings.

---

## ✅ Basic Date Comparison

```sql
SELECT *
FROM orders
WHERE created_date = DATE '2026-01-05';
```

---

## 📊 Date Range (Most Used)

```sql
SELECT *
FROM orders
WHERE created_date BETWEEN
DATE '2026-01-01' AND DATE '2026-01-31';
```

### Tester Use Cases

- Daily validations
- Monthly reports
- Batch jobs

---

## ⏱️ Timestamp Comparison

### ❌ Avoid Exact Match

```sql
WHERE created_ts = TIMESTAMP '2026-01-05 14:32:10'
```

### ✅ Use Time Window

```sql
WHERE created_ts >= CURRENT_TIMESTAMP - INTERVAL '5' MINUTE
```

---

## 🕒 Current Date Functions

```sql
CURRENT_DATE
CURRENT_TIMESTAMP
```

### Tester Use Cases

- Validate created today
- Check recent activity

---

## 🧠 Useful Functions

- `TRUNC(date)` → remove time
- `EXTRACT(YEAR FROM date)`
- `NOW()` / `SYSDATE`

```sql
SELECT *
FROM orders
WHERE TRUNC(created_date) = CURRENT_DATE;
```

---

## 🌍 Timezone Issues

Different layers may use different timezones:

- Database server timezone
- Application timezone
- UI local timezone

## ✅ Best Practices

- Use time ranges, not exact time
- Validate relative time
- Confirm timezone strategy with team

---

## ⚠️ Common Mistakes

- Comparing dates as strings
- Expecting exact timestamps
- Ignoring timezone differences
- Hardcoding today’s date
- Not waiting for DB commit

---

## 🧪 Real Automation Scenarios

- Order created in last 5 minutes
- Payment processed today
- Status updated after action
- Overnight batch completed

---

## 🔑 Key Takeaways

- Aggregations summarize data quickly
- COUNT is most useful for testers
- GROUP BY helps detect issues
- Dates need careful handling
- Time bugs often create flaky tests
