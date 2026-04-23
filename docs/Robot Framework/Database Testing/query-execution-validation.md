---
sidebar_position: 3
title: Query Execution & Validation
description: Learn how to execute SQL queries and validate database results in Robot Framework using DatabaseLibrary with production-ready patterns, reusable keywords, and reliable data checks.
---

# Robot Framework: Query Execution & Validation

> Database connectivity is step one.  
> Reliable query execution and meaningful validation is where real value begins.

---

## 🎯 Why This Matters

Many backend defects are not connection problems. They are:

- wrong data inserted  
- missing updates  
- duplicate records  
- invalid statuses  
- incorrect calculations  
- stale data returned  
- broken joins / filters

A test that only connects to the database proves little.

> Strong database automation validates business truth, not just access.

---

# 🤖 What Is Query Execution & Validation?

It means:

```text
1. Execute SQL safely
2. Retrieve expected data
3. Validate business correctness
4. Detect inconsistencies early
5. Support repeatable automation
```

---

# 🧱 Production Validation Model

```text
Layer 1 → Read Queries (SELECT)
Layer 2 → Write Queries (INSERT/UPDATE/DELETE)
Layer 3 → Result Validation
Layer 4 → Business Rule Checks
Layer 5 → Reusable Query Keywords
Layer 6 → Cleanup & Stability
```

---

# ⚙️ Robot Framework Library

```robotframework
*** Settings ***
Library    DatabaseLibrary
```

---

# 1️⃣ Basic SELECT Query

```robotframework
${rows}=    Query
...    SELECT username,status
...    FROM users
...    WHERE id=101
```

Validate:

```robotframework
Length Should Be    ${rows}    1
Should Be Equal     ${rows[0][0]}    john
Should Be Equal     ${rows[0][1]}    ACTIVE
```

---

# 2️⃣ Targeted Queries Over SELECT *

❌ Avoid:

```sql
SELECT *
```

✅ Prefer:

```sql
SELECT status FROM users WHERE id=101
```

Benefits:

- faster  
- clearer  
- less brittle after schema changes

---

# 3️⃣ Insert / Update Validation

## Execute Update

```robotframework
Execute Sql String
...    UPDATE users
...    SET status='LOCKED'
...    WHERE id=101
```

## Verify Result

```robotframework
${rows}=    Query
...    SELECT status FROM users WHERE id=101

Should Be Equal    ${rows[0][0]}    LOCKED
```

---

# 4️⃣ Count Validation

Useful for duplicates and expected volume.

```robotframework
${rows}=    Query
...    SELECT COUNT(*)
...    FROM users
...    WHERE email='john@test.com'

Should Be Equal As Integers    ${rows[0][0]}    1
```

---

# 5️⃣ UI / API + DB Validation

Highest practical value.

## After API Create User

```robotframework
${response}=    POST On Session    api    /users    json=${payload}
${id}=          Set Variable       ${response.json()}[id]

${rows}=    Query
...    SELECT username
...    FROM users
...    WHERE id=${id}

Should Be Equal    ${rows[0][0]}    john
```

---

## After UI Submission

```robotframework
Click Button    Submit

${rows}=    Query
...    SELECT status
...    FROM applications
...    WHERE ref='${APP_ID}'

Should Be Equal    ${rows[0][0]}    APPROVED
```

---

# 🏢 Real Project Example

UI displayed:

```text
Application Submitted Successfully
```

But backend row status stayed:

```text
PENDING
```

UI-only test passed.  
DB validation correctly failed.

---

# 6️⃣ Business Rule Validation

Validate logic, not only data presence.

```robotframework
${rows}=    Query
...    SELECT credit_limit
...    FROM accounts
...    WHERE customer_id=101

Should Be True    ${rows[0][0]} > 0
```

Other examples:

- balance never negative  
- - `created_date <= updated_date`  
- only one active card per user  
- approved applications have account numbers

---

# 7️⃣ Reusable Query Keywords

```robotframework
*** Keywords ***
Get Customer Status
    [Arguments]    ${id}

    ${rows}=    Query
    ...    SELECT status
    ...    FROM customers
    ...    WHERE id=${id}

    [Return]    ${rows[0][0]}
```

Use:

```robotframework
${status}=    Get Customer Status    101
```

---

# 📁 Recommended Structure

```text
resources/db/
├── users.robot
├── accounts.robot
├── orders.robot
├── applications.robot
└── common.robot
```

Each file contains table/domain-specific queries.

---

# 🔐 Parameter Safety

Avoid unsafe string building where possible.

Prefer controlled variables:

```robotframework
${id}=    Set Variable    101
```

Then inject trusted test values carefully.

(Exact parameter support depends on DB adapter setup.)

---

# 🚀 CI/CD Usage

Excellent for:

- post-deploy smoke validation  
- nightly reconciliation checks  
- backend persistence tests  
- batch job verification

---

# ⚠️ Parallel Execution Notes

Avoid all tests touching same rows:

```text
user_id=101
```

Use:

- unique IDs  
- created records per test  
- cleanup after run

---

# ❌ Common Mistakes

### Only Connection Testing

No business value.

### SELECT *

Unclear and fragile.

### No Validation After UPDATE

Mutation unverified.

### Shared Static Records

Parallel conflicts.

### Massive SQL in Test Cases

Hard to maintain.

### No Cleanup

Dirty environments.

---

# ✅ Best Practices

- Query only needed columns  
- Validate exact expected outcomes  
- Reuse keywords for common queries  
- Combine UI/API + DB checks strategically  
- Keep data isolated  
- Clean created records  
- Focus on high-risk business tables

---

# 🔧 Practical Examples

## Verify Reservation Exists

```robotframework
${rows}=    Query
...    SELECT reservation_no
...    FROM applications
...    WHERE customer_id=${ID}

Length Should Be    ${rows}    1
```

## Verify Audit Log

```robotframework
${rows}=    Query
...    SELECT action
...    FROM audit_log
...    WHERE ref_id='${ID}'
```

## Verify Count

```robotframework
Should Be Equal As Integers    ${rows[0][0]}    1
```

---

# 📈 Maturity Model

## Beginner

Simple SELECT checks.

## Intermediate

Update + validation + count checks.

## Advanced

Reusable query layer + API/UI integration + cleanup.

## Expert

Cross-system reconciliation + data governance validation.

---

# 💡 My Practical Opinion

When teams say:

> “Automation passed but production had data issues.”

Usually they lacked backend query validations for critical flows.

---

# 🏁 Final Verdict

Query execution and validation turn database access into meaningful quality assurance.

Strong implementation gives:

- deeper defect detection  
- trusted backend outcomes  
- fewer false passes  
- faster root-cause analysis  
- stronger release confidence

---

# 📚 What To Learn Next

1. Result Comparison Techniques  
2. Backend Data Verification  
3. Transaction Management  
4. Stored Procedure Testing  
5. Hybrid UI + API + DB Strategy

---

## Summary

> Accessing the database is easy.  
> Validating the right data correctly is the real skill.
