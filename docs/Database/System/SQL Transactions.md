---
sidebar_position: 1
title: SQL Transactions
---

## Transactions (COMMIT / ROLLBACK) – Automation Tester Perspective

Transactions explain **why data sometimes appears missing, delayed, or inconsistent** during automation.
Many flaky DB-related test failures are actually **transaction issues**, not application bugs.

This guide explains transactions at a **tester-necessary level**.

---

## What is a Transaction?

A **transaction** is a logical unit of work that groups one or more DB operations.

Example:
- Insert order
- Insert payment
- Update order status

All of these together form **one transaction**.

---

## ACID Properties (Awareness)

Transactions follow **ACID** principles:

- **Atomicity** – All or nothing
- **Consistency** – Data remains valid
- **Isolation** – Transactions don’t interfere
- **Durability** – Committed data is permanent

Tester takeaway:
> Until COMMIT happens, data may not be visible.

---

## COMMIT – Make Changes Permanent

```sql
COMMIT;
```

What COMMIT does:
- Saves changes permanently
- Makes data visible to other sessions
- Ends the transaction

Automation implication:
- UI/API may succeed
- DB data appears only after COMMIT

---

## ROLLBACK – Undo Changes

```sql
ROLLBACK;
```

What ROLLBACK does:
- Reverts uncommitted changes
- Used on failure or cancellation

Automation implication:
- Action looks successful
- Data is not stored
- Tests fail unexpectedly

---

## Auto-Commit vs Manual Commit

- Some systems auto-commit after each statement
- Others commit at end of transaction

Tester rule:
- Never assume auto-commit
- Validate after transaction completes

---

## Transaction Isolation (Conceptual)

Isolation levels control **how transactions see each other’s data**.

Basic idea:
- One test’s data may not be visible to another immediately
- Parallel execution increases conflicts

You don’t set isolation levels, but must **understand effects**.

---

## Common Automation Scenarios Involving Transactions

- UI shows success, DB row missing
- API returns 200, DB not updated yet
- Parallel tests conflict on same data
- Cleanup scripts not effective

Most of these are **transaction timing issues**.

---

## Best Practices for Automation Testers ✅

- Validate DB after transaction completes
- Add retry/wait for DB consistency
- Use unique test data
- Avoid parallel tests on shared data
- Coordinate with backend team on commit points

---

## Common Tester Mistakes ❌

- Validating DB immediately after UI action
- Ignoring commit boundaries
- Blaming UI for transaction delay
- Mixing DB writes with parallel tests

---

## How Transactions Cause Flaky Tests

```
Test Step → API Call → DB Write
                  ↓
             COMMIT (delayed)
                  ↓
           DB Validation (fails)
```

Solution:
- Wait intelligently
- Validate with time window
- Avoid hard sleeps

---

## Key Takeaways 🎯

- Transactions group DB changes
- COMMIT makes data visible
- ROLLBACK removes uncommitted data
- Transaction delays cause flaky tests
- Understanding transactions improves stability
