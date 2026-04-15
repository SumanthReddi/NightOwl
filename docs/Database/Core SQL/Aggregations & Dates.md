---
sidebar_position: 7
title: Aggregations & Dates
---
# Aggregations & Date Handling

> **Summarizing Data and Handling Time in SQL**

---

## 🎯 Why This Matters

* Aggregations → validate **counts, totals, duplicates**
* Dates → biggest source of **flaky tests**

> 💡 These are used heavily in **real-world backend validations**

---

# 📊 SQL Aggregations

---

## 📌 What are Aggregate Functions?

Aggregate functions:

* Work on **multiple rows**
* Return **single result**

---

## 🧠 Common Functions

* `COUNT` ⭐⭐⭐
* `SUM`
* `MAX`
* `MIN`
* `AVG`

---

## 1️⃣ COUNT (Most Important)

Used to count rows.

---

### Count All Rows

```sql
SELECT COUNT(*) FROM users;
```

---

### Count Non-NULL Values

```sql
SELECT COUNT(email) FROM users;
```

> ⚠️ `COUNT(column)` ignores NULL
> ✅ `COUNT(*)` counts all rows

---

### 🧪 Automation Use Cases

* Verify record creation
* Ensure only one record exists
* Detect duplicates

```sql
SELECT COUNT(*) 
FROM orders 
WHERE order_id = 5001;
```

### Expected:

* `1` → Pass
* `0` or `>1` → Fail

---

## 2️⃣ SUM (Total Validation)

```sql
SELECT SUM(amount) 
FROM payments 
WHERE order_id = 5001;
```

### Use Cases

* Validate payment totals
* Verify invoices
* Check refunds

---

## 3️⃣ MAX / MIN

### Latest Record

```sql
SELECT MAX(created_date) FROM orders;
```

### Oldest Record

```sql
SELECT MIN(created_date) FROM orders;
```

### Use Cases

* Latest transaction
* First record validation

---

## 4️⃣ GROUP BY ⭐

Groups rows by column.

```sql
SELECT status, COUNT(*) 
FROM users 
GROUP BY status;
```

---

### 🧪 Use Cases

* Count users by status
* Validate distribution
* Detect anomalies

---

## 🔍 HAVING (With GROUP BY)

Filters aggregated results.

```sql
SELECT user_id, COUNT(*) 
FROM orders 
GROUP BY user_id
HAVING COUNT(*) > 1;
```

### Use Case

* Detect duplicate records

---

## ❌ Common Mistakes

* Missing GROUP BY
* Using WHERE instead of HAVING
* Misusing COUNT(column)
* Expecting single row

---

## ✅ Best Practices

* Use COUNT for validation
* Prefer COUNT(*)
* Use GROUP BY only when needed
* Validate exact numbers
* Log queries on failure

---

# 📅 Date & Timestamp Handling

---

## ⚠️ Why Dates Are Tricky

* Timezones differ
* UI format ≠ DB format
* Delays in DB commit
* Exact match often fails

---

## 📌 Date vs Timestamp

| Type      | Meaning     |
| --------- | ----------- |
| DATE      | Date only   |
| TIMESTAMP | Date + time |

### Example

* DATE → `2026-01-05`
* TIMESTAMP → `2026-01-05 14:32:10`

---

## 🧠 Tester Rule

> ❗ Never compare dates as strings

---

## ✅ Basic Date Comparison

```sql
SELECT * FROM orders
WHERE created_date = DATE '2026-01-05';
```

---

## 📊 Date Range (Most Used)

```sql
SELECT * FROM orders
WHERE created_date BETWEEN 
      DATE '2026-01-01' AND DATE '2026-01-31';
```

### Use Cases

* Daily validation
* Monthly reports
* Batch jobs

---

## ⏱️ Timestamp Comparison

❌ Avoid exact match

```sql
WHERE created_ts = TIMESTAMP '2026-01-05 14:32:10'
```

---

### ✅ Use Time Window

```sql
WHERE created_ts >= CURRENT_TIMESTAMP - INTERVAL '5' MINUTE
```

---

## 🕒 Current Date & Time

```sql
CURRENT_DATE
CURRENT_TIMESTAMP
```

### Use Cases

* Validate “created today”
* Recent activity

---

## 🧠 Useful Functions (Awareness)

* `TRUNC(date)` → remove time
* `EXTRACT(YEAR FROM date)`
* `NOW()` / `SYSDATE`

```sql
SELECT * FROM orders
WHERE TRUNC(created_date) = CURRENT_DATE;
```

---

## 🌍 Timezone Issues (Important)

* DB may use server timezone
* App may use UTC
* UI may use local time

---

### ✅ Best Practice

* Use **time ranges**, not exact time
* Validate relative time

---

## ❌ Common Mistakes

* Comparing date as string
* Expecting exact timestamp
* Ignoring timezone
* Hardcoding date
* Not waiting for DB commit

---

## ✅ Best Practices

* Use date ranges
* Allow tolerance
* Use DB date functions
* Log DB time during failures
* Align timezone strategy

---

## 🧪 Real Automation Scenarios

* Order created in last 5 minutes
* Payment processed today
* Status updated after action
* Batch job executed overnight

---

## 🎯 Key Takeaways

* Aggregations summarize data
* COUNT is most important
* GROUP BY helps detect issues
* Dates require careful handling
* Time-based bugs cause flaky tests
