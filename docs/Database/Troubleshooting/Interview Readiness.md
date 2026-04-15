---
sidebar_position: 16
title: Interview Questions
---

## Database Interview‑Ready Explanations (Automation Tester Focus)

This page is a **quick‑revision + confidence booster** for automation testers.
All questions are **real interview questions** asked for SDET / Automation roles.

Answers are **short, correct, and practical** — no theory overload.

---

## Core Concept Questions

### Q1️⃣ Why do applications use so many tables instead of one big table?
**Answer:**  
To avoid duplicate data, maintain consistency, and support scalability.  
This is achieved through **normalization**.

---

### Q2️⃣ Why are JOINs required?
**Answer:**  
Because normalized databases split related data across tables.  
JOINs combine data logically without duplication.

---

### Q3️⃣ What is a Primary Key?
**Answer:**  
A unique identifier for each row in a table.  
Automation testers use it for **accurate DB validation**.

---

### Q4️⃣ What is a Foreign Key?
**Answer:**  
A column that links one table to another.  
It enforces relationships between data.

---

## SQL & Validation Questions

### Q5️⃣ Why is SELECT the most used SQL command for testers?
**Answer:**  
Because testers validate data, not modify it.  
SELECT is safe and non‑destructive.

---

### Q6️⃣ Difference between INNER JOIN and LEFT JOIN?
**Answer:**  
- INNER JOIN → only matching records  
- LEFT JOIN → includes missing data (NULLs)  

LEFT JOIN is preferred for **negative validations**.

---

### Q7️⃣ How do you handle NULL in SQL?
**Answer:**  
Using `IS NULL` or `IS NOT NULL`.  
Never use `= NULL`.

---

### Q8️⃣ Why should testers avoid SELECT *?
**Answer:**  
It fetches unnecessary data, slows queries, and makes assertions unclear.

---

## Transactions & Timing

### Q9️⃣ Why does DB validation fail even when UI/API succeeds?
**Answer:**  
Because the transaction may not be committed yet or processing is asynchronous.

---

### Q🔟 What is COMMIT and ROLLBACK?
**Answer:**  
- COMMIT → makes data permanent  
- ROLLBACK → undoes uncommitted changes  

Uncommitted data may not be visible.

---

## Performance & Stability

### Q1️⃣1️⃣ Why do DB queries timeout in CI?
**Answer:**  
Common reasons:
- Full table scans
- Missing WHERE clause
- Lock contention
- Parallel test interference

---

### Q1️⃣2️⃣ What causes flaky DB‑related tests?
**Answer:**  
- Transaction delays  
- Locks in parallel execution  
- Shared test data  
- Hardcoded waits  

---

## Awareness Questions

### Q1️⃣3️⃣ What is a View?
**Answer:**  
A stored SELECT query that behaves like a table.  
Testers query views but don’t modify them.

---

### Q1️⃣4️⃣ What are Stored Procedures?
**Answer:**  
SQL logic stored inside the database.  
Testers validate their effects indirectly via DB queries.

---

### Q1️⃣5️⃣ What are Constraints?
**Answer:**  
Rules like UNIQUE, NOT NULL, CHECK that enforce data integrity.

---

### Q1️⃣6️⃣ What is a Database Schema?
**Answer:**  
A logical namespace that groups database objects.  
Used to avoid name conflicts and manage permissions.

---

## Scenario‑Based Questions

### Q1️⃣7️⃣ How do you validate DB data in automation?
**Answer:**  
1. Trigger action via UI/API  
2. Wait for transaction completion  
3. Query DB using SELECT  
4. Validate exact expected result  

---

### Q1️⃣8️⃣ How do you debug a DB‑related test failure?
**Answer:**  
- Verify query correctness  
- Check timing & commit  
- Validate data uniqueness  
- Look for locks or permission issues  

---

## Golden Rules (Interview Gold)

- Use SELECT, not DML  
- Validate using primary keys  
- LEFT JOIN for negative cases  
- Avoid hard sleeps  
- Isolate test data  
- DB awareness = senior skill  

---

## Key Takeaways 🎯

- Interviews focus on **reasoning**, not syntax
- DB questions test debugging mindset
- Automation testers validate behavior, not DB internals
- Calm explanations = strong impression