---
sidebar_position: 5
title: Transaction Management
description: Learn practical transaction management in Robot Framework using DatabaseLibrary with commit, rollback, isolation, cleanup strategies, and production-ready database testing patterns.
---

# Robot Framework: Transaction Management

> Many database tests fail not because SQL is wrong,  
> but because transaction handling is weak.

---

## 🎯 Why This Matters

Database operations often involve transactions.

Examples:

- account creation  
- money transfer  
- order placement  
- status updates  
- batch processing  
- multi-table inserts

Without proper transaction control, tests can create:

- partial data commits  
- dirty environments  
- duplicate records  
- inconsistent states  
- flaky reruns  
- hard-to-debug failures

> Good transaction handling improves both data integrity and test stability.

---

# 🤖 What Is a Transaction?

A transaction is a group of operations treated as one logical unit.

```text
All succeed  → COMMIT
Any fail     → ROLLBACK
```

Classic principles:

```text
Atomicity
Consistency
Isolation
Durability
```

(ACID model)

---

# 🧱 Testing Transaction Model

```text
Step 1 → Begin operation
Step 2 → Execute data changes
Step 3 → Validate result
Step 4 → Commit or rollback
Step 5 → Cleanup state
```

---

# ⚙️ Robot Framework Setup

```robotframework
*** Settings ***
Library    DatabaseLibrary
```

---

# 1️⃣ Commit Example

Used when changes should persist.

```robotframework
Execute Sql String
...    INSERT INTO users(id,name)
...    VALUES(101,'John')
```

Then commit depending on driver/setup.

```robotframework
Commit
```

(Keyword support can vary by library/adapter.)

---

# 2️⃣ Rollback Example

Used when test data should not remain.

```robotframework
Execute Sql String
...    UPDATE accounts
...    SET status='LOCKED'
...    WHERE id=5001
```

Then revert:

```robotframework
Rollback
```

Very useful in lower environments.

---

# 🏢 Real Project Example

A test created loan records but failed later.

Without rollback:

```text
Half-created records remained
Next rerun failed with duplicates
```

After transaction cleanup:

```text
Failed runs left no residue
```

Much more stable suite.

---

# 3️⃣ Multi-Step Validation

Example transfer flow:

```text
Debit account A
Credit account B
Write audit row
```

All three should succeed together.

If one fails:

```text
Rollback entire transaction
```

---

# 4️⃣ Test Data Isolation Strategy

Use transactions to keep environments clean.

Pattern:

```text
Create temporary data
Validate logic
Rollback
```

This avoids manual DELETE cleanup in many cases.

---

# 5️⃣ Reusable Keywords

```robotframework
*** Keywords ***
Create Test User And Rollback
    Execute Sql String
    ...    INSERT INTO users(id,name)
    ...    VALUES(999,'TempUser')

    ${rows}=    Query
    ...    SELECT name FROM users WHERE id=999

    Should Be Equal    ${rows[0][0]}    TempUser

    Rollback
```

---

# 6️⃣ Commit Only When Needed

Use commit for:

- setup data shared across tests  
- validated business persistence flows  
- migration verification

Use rollback for:

- temporary test data  
- exploratory checks  
- destructive validations

---

# 📁 Recommended Structure

```text
resources/db/
├── transactions.robot
├── setup-data.robot
├── cleanup.robot
└── validations.robot
```

---

# 🔄 Savepoint Concept

Useful for partial rollback support in some DB systems.

```text
Start Transaction
Create Savepoint
Run risky step
Rollback to Savepoint if needed
Continue
```

Advanced use case depending on DB support.

---

# 🚀 CI/CD Usage

Transaction-aware tests help in pipelines:

- clean reruns  
- reduced polluted environments  
- stable nightly runs  
- safer destructive tests

---

# ⚠️ Parallel Execution Notes

Be careful with:

- row locks  
- deadlocks  
- shared records  
- long open transactions

Use:

- short transactions  
- unique records  
- fast cleanup

---

# 🔍 Common Failure Scenarios

## Forgotten Commit

Data not visible later.

## Forgotten Rollback

Dirty environment remains.

## Long Transaction

Locks other tests.

## Shared Static Records

Parallel collisions.

## Multi-Step Partial Failure

Inconsistent business state.

---

# ❌ Common Mistakes

### Using Manual Deletes for Everything

Rollback may be cleaner.

### Huge End-to-End Transaction Scope

Hard to debug and locks more rows.

### No Validation Before Commit

Bad data gets persisted.

### Ignoring Isolation Issues

Parallel runs fail unpredictably.

### Running Destructive SQL in Shared Env

Risky without safeguards.

---

# ✅ Best Practices

- Keep transactions short  
- Validate before commit  
- Use rollback for temporary data  
- Use unique test records  
- Close connections cleanly  
- Avoid locking shared rows  
- Understand DB-specific behavior

---

# 🔧 Practical Examples

## Insert + Rollback

```robotframework
Execute Sql String    INSERT INTO temp_table(id) VALUES(1)
Rollback
```

## Update + Commit

```robotframework
Execute Sql String    UPDATE users SET active='Y' WHERE id=101
Commit
```

## Verify After Commit

```robotframework
${rows}=    Query    SELECT active FROM users WHERE id=101
```

---

# 📈 Maturity Model

## Beginner

Runs SQL without transaction awareness.

## Intermediate

Uses commit / rollback intentionally.

## Advanced

Reusable transaction keywords + isolated data strategy.

## Expert

Parallel-safe enterprise transaction governance.

---

# 💡 My Practical Opinion

When teams say:

> “Database tests are flaky and reruns behave differently.”

I often inspect transaction handling first.

Many issues are leftover data or locking problems.

---

# 🏁 Final Verdict

Transaction management is essential for reliable database automation.

Strong implementation gives:

- cleaner environments  
- fewer duplicate/conflict failures  
- better rerun stability  
- safer destructive testing  
- trusted backend validation

Weak implementation creates chaos quietly.

---

# 📚 What To Learn Next

1. Stored Procedure Testing  
2. Result Comparison Techniques  
3. Data Verification Techniques  
4. Parallel DB Test Strategy  
5. Hybrid UI + API + DB Automation

---

## Summary

> Good SQL tests check data.  
> Great SQL tests also control transactions.
