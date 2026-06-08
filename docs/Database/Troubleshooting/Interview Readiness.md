---
sidebar_position: 2
title: Interview Questions
---

## Database Interview‑Ready Explanations (Automation Tester Focus)

This page is a **quick‑revision + confidence booster** for automation testers.
All questions are **real interview questions** asked for SDET / Automation roles.

Answers are **short, correct, and practical** — no theory overload.


<details>
<summary>Why do applications use many tables instead of one large table?</summary>

Applications use multiple tables to avoid duplicate data, maintain consistency, and improve scalability through normalization.

</details>

<details>
<summary>Why are JOINs required in databases?</summary>

JOINs combine related data stored across multiple normalized tables without creating duplication.

</details>

<details>
<summary>What is a Primary Key?</summary>

A primary key is a unique identifier for each row in a table and is commonly used for accurate database validation.

</details>

<details>
<summary>Why are Primary Keys important for automation testers?</summary>

Primary keys help testers retrieve and validate the exact record created or modified during testing.

</details>

<details>
<summary>What is a Foreign Key?</summary>

A foreign key is a column that references a primary key in another table and establishes relationships between tables.

</details>

<details>
<summary>Why is SELECT the most commonly used SQL command for testers?</summary>

Testers mainly validate data rather than modify it, making SELECT a safe and non-destructive operation.

</details>

<details>
<summary>What is the difference between INNER JOIN and LEFT JOIN?</summary>

INNER JOIN returns only matching records from both tables.

LEFT JOIN returns all records from the left table, including unmatched records as NULL values.

</details>

<details>
<summary>When is LEFT JOIN preferred over INNER JOIN?</summary>

LEFT JOIN is preferred for negative testing and identifying missing or unmatched data.

</details>

<details>
<summary>How do you check for NULL values in SQL?</summary>

Use IS NULL or IS NOT NULL. Never use = NULL because it does not work correctly in SQL.

</details>

<details>
<summary>Why should testers avoid using SELECT *?</summary>

SELECT * retrieves unnecessary columns, reduces query performance, and makes validations less clear.

</details>

<details>
<summary>Why can database validation fail even when the UI or API succeeds?</summary>

The transaction may not be committed yet, or the application may process data asynchronously.

</details>

<details>
<summary>What is COMMIT?</summary>

COMMIT permanently saves database changes and makes them visible to other transactions.

</details>

<details>
<summary>What is ROLLBACK?</summary>

ROLLBACK reverses uncommitted database changes and restores the previous state.

</details>

<details>
<summary>Why might database queries timeout in CI environments?</summary>

Common causes include full table scans, missing WHERE clauses, lock contention, and parallel test execution.

</details>

<details>
<summary>What causes flaky database-related tests?</summary>

Flaky tests are often caused by transaction delays, database locks, shared test data, and hardcoded waits.

</details>

<details>
<summary>What is a Database View?</summary>

A view is a stored SELECT query that behaves like a virtual table.

</details>

<details>
<summary>Can testers modify data through a View?</summary>

Typically, testers use views for querying and validation rather than modifying data.

</details>

<details>
<summary>What are Stored Procedures?</summary>

Stored procedures are reusable SQL programs stored inside the database that execute predefined business logic.

</details>

<details>
<summary>How do testers validate Stored Procedures?</summary>

Testers validate the data changes or outputs produced by the stored procedure using database queries.

</details>

<details>
<summary>What are Database Constraints?</summary>

Constraints are rules such as PRIMARY KEY, UNIQUE, NOT NULL, and CHECK that enforce data integrity.

</details>

<details>
<summary>Why are Constraints important?</summary>

Constraints prevent invalid data from being inserted and help maintain data consistency.

</details>

<details>
<summary>What is a Database Schema?</summary>

A schema is a logical namespace used to organize database objects such as tables, views, and procedures.

</details>

<details>
<summary>Why are Schemas used?</summary>

Schemas help avoid naming conflicts and simplify permission management.

</details>

<details>
<summary>How do you validate database data in automation testing?</summary>

Trigger the action through the UI or API, wait for processing to complete, execute a SELECT query, and validate the expected result.

</details>

<details>
<summary>How do you debug a database-related test failure?</summary>

Verify query accuracy, check transaction timing and commits, validate test data uniqueness, and investigate locks or permission issues.

</details>

<details>
<summary>Why should automation testers use Primary Keys during validation?</summary>

Primary keys ensure validations target the correct record and avoid ambiguity when multiple records exist.

</details>

<details>
<summary>Why should testers avoid hardcoded sleeps during database validation?</summary>

Hardcoded waits can make tests slow and unreliable because transaction completion times may vary.

</details>

<details>
<summary>Why is test data isolation important in database testing?</summary>

Isolated test data prevents conflicts between parallel executions and improves test reliability.

</details>

<details>
<summary>What do interviewers look for in database testing questions?</summary>

Interviewers evaluate debugging skills, reasoning ability, database awareness, and practical validation approaches rather than memorized SQL syntax.

</details>

## Key Takeaways 🎯

- Interviews focus on **reasoning**, not syntax
- DB questions test debugging mindset
- Automation testers validate behavior, not DB internals
- Calm explanations = strong impression