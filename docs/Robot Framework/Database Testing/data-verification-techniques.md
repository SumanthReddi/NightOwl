---
sidebar_position: 4
title: Data Verification Techniques
description: Learn practical data verification techniques in Robot Framework using DatabaseLibrary with comparisons, consistency checks, reconciliation, and production-ready backend validation patterns.
---

# Robot Framework: Data Verification Techniques

> Data existing in a database is not enough.  
> It must also be correct, complete, and trustworthy.

---

## 🎯 Why This Matters

Many teams validate only:

```text
Record exists = PASS
```

That misses common defects such as:

- wrong values saved  
- duplicate records  
- inconsistent totals  
- missing child records  
- stale status values  
- incorrect timestamps  
- cross-system mismatches

> Strong automation does not only confirm presence.  
> It verifies correctness.

---

# 🤖 What Is Data Verification?

Data verification means checking backend data after UI, API, or batch processes to ensure expected outcomes happened.

Typical goals:

```text
1. Correct values stored
2. Correct relationships maintained
3. No duplicates created
4. Business rules followed
5. Data synchronized across systems
```

---

# 🧱 Production Verification Model

```text
Layer 1 → Field Value Validation
Layer 2 → Count / Duplicate Checks
Layer 3 → Relationship Validation
Layer 4 → Business Rule Verification
Layer 5 → Cross-System Reconciliation
Layer 6 → Historical / Audit Validation
```

---

# ⚙️ Robot Framework Setup

```robotframework
*** Settings ***
Library    DatabaseLibrary
```

---

# 1️⃣ Field Value Validation

Verify exact values stored.

```robotframework
${rows}=    Query
...    SELECT status,email
...    FROM customers
...    WHERE id=101

Should Be Equal    ${rows[0][0]}    ACTIVE
Should Be Equal    ${rows[0][1]}    john@test.com
```

---

# 2️⃣ Count / Duplicate Checks

Useful after retries or create flows.

```robotframework
${rows}=    Query
...    SELECT COUNT(*)
...    FROM customers
...    WHERE email='john@test.com'

Should Be Equal As Integers    ${rows[0][0]}    1
```

---

# 3️⃣ Relationship Validation

Verify parent-child consistency.

Example:

```text
Order header total must match order items
```

```robotframework
${header}=    Query
...    SELECT total
...    FROM orders
...    WHERE id=5001

${items}=    Query
...    SELECT SUM(quantity * price)
...    FROM order_items
...    WHERE order_id=5001

Should Be Equal As Numbers    ${header[0][0]}    ${items[0][0]}
```

---

# 🏢 Real Project Example

UI showed:

```text
Order placed successfully
```

But database had:

```text
Order header created
No order_items rows inserted
```

UI-only automation passed.  
Data verification correctly failed.

---

# 4️⃣ Business Rule Verification

Validate logic, not only rows.

```robotframework
${rows}=    Query
...    SELECT credit_limit
...    FROM accounts
...    WHERE customer_id=101

Should Be True    ${rows[0][0]} > 0
```

Other examples:

- approved loan must have account number  
- inactive user cannot have active subscription  
- refund amount cannot exceed payment amount

---

# 5️⃣ Timestamp Validation

Useful for batch and audit flows.

```robotframework
${rows}=    Query
...    SELECT created_at,updated_at
...    FROM users
...    WHERE id=101
```

Validate:

```robotframework
Should Not Be Empty    ${rows[0][0]}
Should Not Be Empty    ${rows[0][1]}
```

Conceptually:

```text
updated_at should be >= created_at
```

---

# 6️⃣ Cross-System Reconciliation

Example:

```text
API response amount = DB amount
Report amount = DB amount
```

```robotframework
Should Be Equal As Numbers    ${api_total}    ${db_total}
Should Be Equal As Numbers    ${report_total}    ${db_total}
```

Very high-value in enterprise systems.

---

# 7️⃣ Audit / History Validation

Verify tracking rows exist.

```robotframework
${rows}=    Query
...    SELECT action
...    FROM audit_log
...    WHERE ref_id='5001'
```

Check expected event:

```robotframework
Length Should Be    ${rows}    1
```

---

# 🔁 Reusable Verification Keywords

```robotframework
*** Keywords ***
Verify Customer Active
    [Arguments]    ${id}

    ${rows}=    Query
    ...    SELECT status FROM customers WHERE id=${id}

    Should Be Equal    ${rows[0][0]}    ACTIVE
```

Use:

```robotframework
Verify Customer Active    101
```

---

# 📁 Recommended Structure

```text
resources/db/
├── customers.robot
├── orders.robot
├── accounts.robot
├── audit.robot
└── reconciliation.robot
```

---

# 🚀 CI/CD Usage

Excellent for:

- post-deploy smoke checks  
- nightly reconciliation  
- payment data verification  
- onboarding persistence checks  
- batch processing validation

---

# ⚠️ Parallel Execution Notes

Avoid shared rows:

```text
customer_id = 101 for every test
```

Use:

- generated IDs  
- isolated data  
- cleanup strategy

---

# ❌ Common Mistakes

### Only Checking Record Exists

Need correctness too.

### SELECT *

Noisy and unclear.

### No Duplicate Validation

Creates hidden data issues.

### No Relationship Checks

Misses broken child data.

### Shared Static Data

Parallel conflicts.

### No Cleanup

Dirty environments.

---

# ✅ Best Practices

- Validate important business fields  
- Use count checks for duplicates  
- Verify totals and relationships  
- Reconcile across systems where valuable  
- Use reusable DB keywords  
- Keep test data isolated  
- Focus on critical flows first

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

## Verify Flag Value

```robotframework
Should Be Equal    ${rows[0][0]}    Y
```

## Verify No Duplicate Cards

```robotframework
SELECT COUNT(*) FROM cards WHERE customer_id=101 AND active='Y'
```

---

# 📈 Maturity Model

## Beginner

Checks row exists.

## Intermediate

Validates fields + counts.

## Advanced

Relationships + reconciliation + reusable framework.

## Expert

Enterprise data quality governance through automation.

---

# 💡 My Practical Opinion

When teams say:

> “Automation passed, but production data was wrong.”

Usually they lacked meaningful backend verification techniques.

---

# 🏁 Final Verdict

Data verification techniques transform database checks into trusted quality controls.

Strong implementation gives:

- deeper defect detection  
- trusted backend outcomes  
- fewer false passes  
- faster RCA  
- stronger release confidence

---

# 📚 What To Learn Next

1. Result Comparison Techniques  
2. Backend Data Verification  
3. Transaction Management  
4. Batch Job Validation  
5. Hybrid UI + API + DB Testing

---

## Summary

> Data presence is basic.  
> Data correctness is what matters.
