---
sidebar_position: 3
title: Keys & Constraints
---
# Keys & Constraints

> **How Data is Identified, Related, and Protected**

---

## 🔑 What are Keys?

Keys define:

* **How each row is uniquely identified**
* **How tables are connected**

> 💡 **Memory trick:**
> **Keys = Identity + Relationships**

---

## 🆔 Primary Key (PK)

A **Primary Key** uniquely identifies each row in a table.

---

### 📊 Example

```text
USERS
--------------------------------
| user_id (PK) | username | ... |
--------------------------------
| 101          | john     |     |
| 102          | mary     |     |
```

---

### 📌 Rules

* Must be **unique**
* Cannot be **NULL**
* One PK per table (can be composite)

---

### 🧪 Tester Importance

* Fetch exact records
* Avoid duplicate validations
* Ensure correct assertions

---

### ❌ Bad vs ✅ Good

**❌ Bad**

```sql
SELECT * FROM users LIMIT 1;
```

**✅ Good**

```sql
SELECT * FROM users WHERE user_id = 101;
```

---

## 🔗 Foreign Key (FK)

A **Foreign Key** links one table to another.

---

### 📊 Example

```text
ORDERS
------------------------------------
| order_id (PK) | user_id (FK) | ...|
------------------------------------
| 5001          | 101          |     |
```

* `orders.user_id` → refers to `users.user_id`

---

### 🎯 Why it Matters

* Creates relationships
* Ensures valid references
* Enables joins

---

### 🧪 Automation Scenario

User places an order:

* Order is created
* Must reference valid user

### Validation:

* Order exists
* User exists
* Relationship is correct

---

## ⚖️ PK vs FK

| Aspect       | Primary Key    | Foreign Key |
| ------------ | -------------- | ----------- |
| Purpose      | Identify row   | Link tables |
| Uniqueness   | Must be unique | Can repeat  |
| NULL allowed | ❌ No           | ✅ Yes       |
| Usage        | Always         | Very often  |

---

## 🧩 Composite Key (Awareness)

Uses multiple columns as a key.

```text
(order_id, product_id)
```

> ⚠️ Rare in testing, but may appear in joins

---

# 🛡️ Database Constraints

---

## 📌 What is a Constraint?

A **constraint** is a rule that restricts what data can be stored.

> 💡 **Memory trick:**
> **Constraints = Safety guards for data**

---

## 🎯 Why Constraints Matter

When violated:

* DB throws error
* UI/API may hide real reason
* Tests may fail unexpectedly

👉 Understanding constraints = better debugging

---

## 🚫 NOT NULL Constraint

### Purpose

Prevents NULL values

```sql
email VARCHAR NOT NULL
```

### 🧪 Scenario

* User submits without email
* DB rejects insert

### Tester Insight

* Validate mandatory fields
* Expect failure for missing values

---

## 🔁 UNIQUE Constraint

### Purpose

Prevents duplicate values

```sql
email VARCHAR UNIQUE
```

### 🧪 Scenario

* Duplicate email used
* DB rejects insert

### Tester Insight

* Helps catch duplicate data bugs
* Use `COUNT(*)` for validation

---

## ✅ CHECK Constraint

### Purpose

Restricts allowed values

```sql
status CHECK (status IN ('ACTIVE','INACTIVE','BLOCKED'))
```

### 🧪 Scenario

* Invalid status sent
* DB rejects update

### Tester Insight

* Explains “invalid value” errors
* Validates business rules

---

## ⚠️ Constraint Violations (What You See)

Common errors:

* Unique constraint violated
* Cannot insert NULL
* Check constraint failed

> 💡 UI may hide this → DB logs reveal truth

---

## ⚖️ Application vs Database Validation

| Aspect               | Application  | Database |
| -------------------- | ------------ | -------- |
| User-friendly errors | ✅            | ❌        |
| Final validation     | ❌            | ✅        |
| Can be bypassed      | ⚠️ Sometimes | ❌ Never  |

> 🔥 **Golden Rule:**
> DB constraints are the **final authority**

---

## ❌ Common Mistakes

* Ignoring primary keys
* Using non-unique columns
* Misinterpreting constraint errors
* Reusing duplicate test data
* Not cleaning test data

---

## ✅ Best Practices

* Always identify primary key
* Use PK in queries
* Understand FK relationships before joins
* Use unique test data
* Validate constraint failures intentionally
* Include DB errors in bug reports

---

## 🧠 Interview Quick Answers

**What is a Primary Key?**
→ Unique identifier for each row

**What is a Foreign Key?**
→ Links two tables

**What is a constraint?**
→ Rule that restricts data

**Why are constraints important?**
→ Ensure data integrity

---

## 🎯 Key Takeaways

* PK = unique identity
* FK = relationship
* Constraints = data protection
* Keys + constraints = reliable validation
* Essential for joins, debugging, and interviews
