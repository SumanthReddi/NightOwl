---
sidebar_position: 4
title: Views & Procedures
---
# Views & Stored Procedures

> **Database Abstractions Testers Interact With (Not Build)**

---

## 🎯 Why This Matters

In real projects:

* You won’t always query raw tables
* You’ll often see:

  * Views
  * Stored procedures

> 💡 Understanding them helps you **validate correctly and debug faster**

---

## 👁️ Database Views

---

### 📌 What is a View?

A **view** is a stored SELECT query that behaves like a table.

> 💡 **Memory trick:**
> **View = Virtual table (no data stored)**

---

### 📊 Example

```sql
CREATE VIEW active_users AS
SELECT user_id, username, status
FROM users
WHERE status = 'ACTIVE';
```

---

## 🔄 How View Works

```text
Automation Test
      ↓
SELECT on VIEW
      ↓
Stored Query
      ↓
Base Tables
```

* No data stored in view
* Data fetched from underlying tables

---

## 🎯 Why Teams Use Views

* Simplify complex joins
* Hide sensitive data
* Enforce consistent filters
* Provide stable query interface

---

## ⚖️ View vs Table

| Aspect      | Table | View     |
| ----------- | ----- | -------- |
| Stores data | ✅     | ❌        |
| Based on    | —     | SELECT   |
| Queryable   | ✅     | ✅        |
| Read-only   | ❌     | Mostly ✅ |

---

## 🧪 Tester Perspective

* Treat views like tables
* Use SELECT only
* Assume read-only

```sql
SELECT * FROM vw_active_users WHERE user_id = 101;
```

---

## ⚠️ Important Rules

* Don’t assume view stores data
* Don’t use DML on views
* Don’t assume performance is better

---

## 🐛 Debugging with Views

If validation fails:

* Check underlying tables
* Review filters inside view
* Check transaction timing

---

## ⚙️ Stored Procedures & Functions

---

### 📌 What is a Stored Procedure?

A **stored procedure** is a set of SQL statements executed inside the database.

> 💡 **Memory trick:**
> **Procedure = Backend logic inside DB**

---

### Example

```sql
CALL create_order(user_id, amount);
```

---

### 📌 What is a Function?

A **function**:

* Returns a value
* Used inside queries

```sql
SELECT calculate_tax(amount) FROM orders;
```

---

### 🎯 Why Teams Use Procedures

* Centralize business logic
* Improve performance
* Reduce network calls
* Enforce security

---

### 🔄 Where It Fits

```text
Automation Test
     ↓
UI / API
     ↓
Application
     ↓
Stored Procedure
     ↓
Database Tables
```

---

### 🧪 Tester Perspective (Critical)

* ❌ Do NOT write procedures
* ❌ Do NOT test procedure logic directly
* ✅ Validate results in DB

---

### Example Flow

UI Action → Create Order

Validation:

* Order row created
* Correct user_id
* Correct amount

---

## ❌ Should You Call Procedures Directly?

**Usually NO**

#### Why:

* Breaks real flow
* Bypasses UI/API
* Causes fragile tests

---

## ⚠️ Real Challenges

* Delayed commits
* Multiple table updates
* Silent rollbacks

---

## 🐛 Debugging Strategy

* Validate final DB state
* Add retry/wait logic
* Check multiple tables
* Share DB evidence

---

## ❌ Common Mistakes

* Calling procedures directly
* Expecting instant DB updates
* Ignoring transactions
* Blaming UI for backend failures

---

## 🧠 Interview Quick Answers

**What is a view?**
→ Virtual table based on SELECT

**What is a stored procedure?**
→ SQL logic stored and executed in DB

**Do testers write them?**
→ No, they validate outcomes

---

## 🎯 Key Takeaways

* Views = virtual tables
* Procedures = backend DB logic
* Testers validate results, not logic
* Always use SELECT for verification
* Awareness is enough — no DBA depth needed
