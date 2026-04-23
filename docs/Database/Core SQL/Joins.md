---
sidebar_position: 3
title: Joins
---

# Joins

> **Combining Data from Multiple Tables**

---

## SQL Joins

Real applications do **not store everything in one table**.
Different data is split across related tables such as users, orders, payments, and accounts.

A **JOIN** helps combine that related data into one result.

> 💡 **Simple memory trick:**
> **JOIN = Connect tables using a common column**

---

## 📌 Why Joins Are Needed

Example:

* `users` table stores customer data
* `orders` table stores order data

To validate:

> “Which user placed which order?”

You must join both tables.

---

## 📊 Sample Tables

```text id="m1x2k8"
USERS
-------------------------
user_id | username
-------------------------
101     | john
102     | mary
103     | david
```

```text id="u2f9qd"
ORDERS
-------------------------
order_id | user_id
-------------------------
5001     | 101
5002     | 101
5003     | 102
7001     | 999
```

---

## 📌 What is a JOIN?

A **JOIN** combines rows from two or more tables using a related column.

Usually:

* Primary Key from one table
* Foreign Key from another table

Example:

```text id="5cn4xm"
users.user_id = orders.user_id
```

---

## 1️⃣ INNER JOIN ⭐

Returns **only matching rows** from both tables.

> If data exists in one table but not the other, it is excluded.

---

### Syntax

```sql id="j6ep6j"
SELECT columns
FROM table1
INNER JOIN table2
ON table1.id = table2.id;
```

---

### Example

```sql id="j3y6wh"
SELECT u.username, o.order_id
FROM users u
INNER JOIN orders o
ON u.user_id = o.user_id;
```

---

### Result

```text id="a7oe1t"
john   5001
john   5002
mary   5003
```

---

### Tester Use Cases

* Validate successful order creation
* Confirm payment linked to order
* Ensure profile linked to user

---

## 2️⃣ LEFT JOIN ⭐

Returns:

* All rows from **left table**
* Matching rows from right table
* `NULL` if no match exists

> Useful when checking missing or optional data.

---

### Example

```sql id="0nvx6k"
SELECT u.username, o.order_id
FROM users u
LEFT JOIN orders o
ON u.user_id = o.user_id;
```

---

### Result

```text id="i08zpo"
john   5001
john   5002
mary   5003
david  NULL
```

---

### Meaning

* `david` exists in users table
* No matching order found

---

### Tester Use Cases

* User created but order missing
* Payment not generated
* Optional record not present

---

## 3️⃣ RIGHT JOIN

Returns:

* All rows from **right table**
* Matching rows from left table
* `NULL` if no match on left side

> Opposite of LEFT JOIN.

---

### Example

```sql id="tw6d64"
SELECT u.username, o.order_id
FROM users u
RIGHT JOIN orders o
ON u.user_id = o.user_id;
```

---

### Result Concept

```text id="fwz9wn"
john   5001
john   5002
mary   5003
NULL   7001
```

---

### Meaning

* Order `7001` exists
* No matching user record found

---

### Tester Use Cases

* Detect orphan orders
* Validate records must have parent data
* Reconciliation checks

---

### Tester Note

RIGHT JOIN is less common.
Most teams rewrite it as LEFT JOIN by swapping table order.

---

## 4️⃣ FULL JOIN

Returns:

* All rows from left table
* All rows from right table
* Matching rows combined
* Non-matching rows filled with `NULL`

> Combination of LEFT JOIN + RIGHT JOIN.

---

### Example

```sql id="4m7q2r"
SELECT u.username, o.order_id
FROM users u
FULL JOIN orders o
ON u.user_id = o.user_id;
```

---

### Result Concept

```text id="4h2r5w"
john   5001
john   5002
mary   5003
david  NULL
NULL   7001
```

---

### Meaning

* `david` has no order
* Order `7001` has no user

---

### Tester Use Cases

* Data reconciliation
* Compare two systems
* Find unmatched records on both sides

---

## ⚖️ Join Comparison

| Join Type  | Returns                   |
| ---------- | ------------------------- |
| INNER JOIN | Matching rows only        |
| LEFT JOIN  | All left + matching right |
| RIGHT JOIN | All right + matching left |
| FULL JOIN  | All rows from both        |

---

## 🧠 Which Join Should Testers Use?

| Scenario                 | Best Join  |
| ------------------------ | ---------- |
| Positive flow validation | INNER JOIN |
| Missing data check       | LEFT JOIN  |
| Right-side priority data | RIGHT JOIN |
| Full mismatch analysis   | FULL JOIN  |

---

## ❌ Common Mistakes

* Using INNER JOIN when data may be missing
* Forgetting `ON` condition
* Joining wrong columns
* Ignoring NULL rows
* Assuming one join row = one user

---

## ✅ Best Practices

* Use INNER JOIN for positive validations
* Use LEFT JOIN for negative scenarios
* Prefer LEFT JOIN over RIGHT JOIN for readability
* Join using PK ↔ FK columns
* Keep joins simple and clear

---

## 🎯 Key Takeaways

* JOIN combines related tables
* INNER JOIN = matching rows only
* LEFT JOIN = includes missing left-side relationships
* RIGHT JOIN = includes missing right-side relationships
* FULL JOIN = shows everything
* Joins are essential for backend validation
