---
sidebar_position: 1
title: Database Testing
description: Learn how to perform reliable database validation in Robot Framework using DatabaseLibrary with query checks, data integrity validation, transactions, and production-ready practices.
---

# Robot Framework: Database Testing

> UI shows what happened.  
> Database often shows what truly happened.

---

## 🎯 Why This Matters

Many critical systems depend on database correctness.

Examples:

- account creation  
- payment records  
- loan decisions  
- order processing  
- audit trails  
- notification logs

Sometimes UI says success while backend data is wrong.

> Many escaped defects are data defects, not screen defects.

---

# 🤖 What Is Database Testing?

Database testing means validating stored data, business rules, and persistence after system actions.

Typical checks:

- row created  
- row updated  
- status changed  
- duplicate prevented  
- values calculated correctly  
- audit records written

---

# 🧱 Production Database Validation Model

```text
Layer 1 → Connectivity
Layer 2 → Query Validation
Layer 3 → Data Integrity Checks
Layer 4 → Business Rule Validation
Layer 5 → Cleanup / Isolation
Layer 6 → CI/CD Reliability
```

---

# ⚙️ Common Library

```robotframework
*** Settings ***
Library    DatabaseLibrary
```

---

# 1️⃣ Database Connection Setup

Use variables, not hardcoded values.

```robotframework
Connect To Database
...    oracledb
...    ${DB_NAME}
...    ${DB_USER}
...    ${DB_PASSWORD}
...    ${DB_HOST}
...    ${DB_PORT}
```

Then close cleanly:

```robotframework
Disconnect From Database
```

---

# 2️⃣ Basic Query Validation

## Verify Customer Exists

```robotframework
${rows}=    Query    SELECT * FROM customers WHERE id=101
Length Should Be    ${rows}    1
```

---

## Verify Specific Value

```robotframework
${rows}=    Query    SELECT status FROM customers WHERE id=101
Should Be Equal    ${rows[0][0]}    ACTIVE
```

---

# 3️⃣ API / UI + DB Validation

Most valuable real-world use case.

## Example: After API Create User

```robotframework
${response}=    POST On Session    api    /users    json=${payload}
${id}=          Set Variable       ${response.json()}[id]

${rows}=    Query    SELECT username FROM users WHERE id=${id}
Should Be Equal    ${rows[0][0]}    john
```

---

## Example: After UI Submission

```robotframework
Click Button    Submit

${rows}=    Query    SELECT status FROM applications WHERE ref='${APP_ID}'
Should Be Equal    ${rows[0][0]}    APPROVED
```

---

# 🏢 Real Project Example

UI displayed:

```text
Application Submitted Successfully
```

But database record remained:

```text
PENDING
```

UI-only test passed.  
DB validation correctly failed.

---

# 4️⃣ Business Rule Validation

Check logic, not just presence.

## Example

```robotframework
${rows}=    Query
...    SELECT credit_limit
...    FROM accounts
...    WHERE customer_id=101

Should Be True    ${rows[0][0]} > 0
```

Other examples:

- timestamps updated  
- fees calculated correctly  
- decision codes valid  
- no duplicate records

---

# 5️⃣ Count / Duplicate Checks

## Ensure One Record Only

```robotframework
${rows}=    Query
...    SELECT COUNT(*)
...    FROM users
...    WHERE email='john@test.com'

Should Be Equal As Integers    ${rows[0][0]}    1
```

Very useful after retries.

---

# 6️⃣ Update Validation

```robotframework
Execute Sql String
...    UPDATE users SET status='LOCKED' WHERE id=101

${rows}=    Query    SELECT status FROM users WHERE id=101
Should Be Equal    ${rows[0][0]}    LOCKED
```

Useful in lower environments.

---

# 7️⃣ Transaction Handling

Useful for controlled test data setup.

```robotframework
Execute Sql String    INSERT INTO users (...)
Rollback
```

Or cleanup later with DELETE.

(Depends on DB/library support.)

---

# 🔁 Reusable Keywords

```robotframework
*** Keywords ***
Get Customer Status
    [Arguments]    ${id}

    ${rows}=    Query
    ...    SELECT status FROM customers WHERE id=${id}

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
├── common.robot
├── users.robot
├── orders.robot
├── accounts.robot
└── audit.robot
```

Separate by domain tables.

---

# 🔐 Security Best Practices

Never hardcode credentials.

Use:

```robotframework
${DB_PASSWORD}=    %{DB_PASSWORD}
```

Or CI secret stores.

---

# 🚀 CI/CD Usage

DB checks are excellent for:

- post-deploy smoke validation  
- critical data persistence checks  
- batch job verification  
- nightly reconciliation tests

---

# ⚠️ Parallel Execution Notes

Avoid shared rows.

Bad:

```text
customer_id = 101 for all tests
```

Better:

```text
Generate unique customer IDs
```

Use isolated data.

---

# ❌ Common Mistakes

### Select *

Use targeted columns.

### Hardcoded Credentials

Security risk.

### Shared Static Data

Parallel conflicts.

### No Cleanup

Leaves dirty environments.

### UI Only Validation

Misses backend defects.

### Massive Complex Queries in Tests

Move to reusable keywords.

---

# ✅ Best Practices

- Validate important backend outcomes  
- Use reusable query keywords  
- Use dynamic test data  
- Keep credentials externalized  
- Combine UI/API + DB checks wisely  
- Clean created data  
- Focus on high-value tables/processes

---

# 🔧 Practical Examples

## Verify Reservation Created

```robotframework
${rows}=    Query
...    SELECT reservation_no
...    FROM applications
...    WHERE customer_id=${ID}

Length Should Be    ${rows}    1
```

## Verify Audit Entry

```robotframework
${rows}=    Query
...    SELECT action
...    FROM audit_log
...    WHERE ref_id='${ID}'
```

## Verify Flag Value

```robotframework
Should Be Equal    ${rows[0][0]}    Y
```

---

# 📈 Maturity Model

## Beginner

Simple SELECT checks.

## Intermediate

UI/API + DB validation.

## Advanced

Reusable DB framework + cleanup + CI integration.

## Expert

Cross-system reconciliation + data quality strategy + enterprise governance.

---

# 💡 My Practical Opinion

When teams say:

> “UI looks fine, but production had data issues.”

I usually recommend stronger DB validations for critical flows.

Because persistence truth matters.

---

# 🏁 Final Verdict

Database testing is one of the highest-value validation layers for enterprise systems.

Strong implementation gives:

- deeper defect detection  
- trusted backend outcomes  
- fewer false passes  
- better production confidence  
- stronger automation maturity

Weak implementation leaves blind spots.

---

# 📚 What To Learn Next

1. Oracle / MySQL / PostgreSQL Connectivity  
2. Query Optimization for Tests  
3. Result Comparison Techniques  
4. Backend Data Verification  
5. Hybrid UI + API + DB Automation

---

## Summary

> Screens can mislead.  
> Data usually tells the truth.
